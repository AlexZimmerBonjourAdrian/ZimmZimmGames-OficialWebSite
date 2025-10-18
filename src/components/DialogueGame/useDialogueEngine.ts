import { useCallback, useMemo, useRef, useState, useEffect } from 'react';

export type LocalizedText = string | { en?: string; es?: string };

export interface DialogueChoice {
  id: string;
  text: LocalizedText;
  /** id del siguiente nodo al que apunta esta opción */
  next?: string;
}

export interface DialogueNode {
  id: string;
  speaker?: string;
  text: LocalizedText;
  choices?: DialogueChoice[];
}

export interface DialogueGraph {
  /** id del nodo inicial */
  start: string;
  /** listado de nodos por id */
  nodes: Record<string, DialogueNode>;
  /** texto de respuesta por defecto si el destino no existe */
  unknownRouteText?: LocalizedText;
}

export interface EngineStateSnapshot {
  currentNode: DialogueNode;
  /** ids de las opciones seleccionadas por nodo (para marcar en gris lo ya preguntado) */
  askedChoicesByNode: Record<string, Set<string>>;
  /** historial de navegación de nodos (para retroceder) */
  nodeHistory: string[];
}

export interface ResolvedNode {
  id: string;
  speaker?: string;
  text: string;
  choices?: Array<{ id: string; text: string; next?: string }>;
}

export interface UseDialogueEngineReturn {
  currentNode: ResolvedNode;
  askedChoicesByNode: Record<string, Set<string>>;
  nodeHistory: string[];
  selectChoice: (choiceId: string) => void;
  goBack: () => void;
  reset: () => void;
  getIsChoiceDisabled: (choiceId: string) => boolean;
}

function getLocalizedText(input: LocalizedText | undefined, locale: 'en' | 'es'): string {
  if (typeof input === 'string') return input;
  if (!input) return '';
  // prioridad: en -> es si locale es en; es -> en si locale es es; siempre fallback a la otra si falta
  const primary = input[locale];
  const secondary = locale === 'en' ? input.es : input.en;
  return primary ?? secondary ?? '';
}

export function useDialogueEngine(
  graph: DialogueGraph,
  locale: 'en' | 'es' = 'en'
): UseDialogueEngineReturn {
  // Validar que el graph tiene la estructura correcta
  if (!graph || !graph.start || !graph.nodes) {
    console.error('useDialogueEngine: Invalid graph structure', graph);
    // Retornar un estado por defecto seguro
    return {
      currentNode: {
        id: 'error',
        speaker: 'System',
        text: 'Error: Invalid dialogue data',
        choices: []
      },
      askedChoicesByNode: {},
      nodeHistory: [],
      selectChoice: () => {},
      goBack: () => {},
      reset: () => {},
      getIsChoiceDisabled: () => false
    };
  }

  const unknownRouteText = getLocalizedText(
    graph.unknownRouteText ?? { en: "I can't tell you that.", es: 'Eso no te lo puedo decir.' },
    locale
  );

  const getNodeSafe = useCallback(
    (nodeId: string): DialogueNode => {
      const node = graph.nodes[nodeId];
      if (node) return node;
      // Fallback a un nodo temporal de respuesta desconocida
      return {
        id: '__unknown__',
        speaker: undefined,
        text: unknownRouteText,
        choices: [
          {
            id: 'back',
            text: 'Volver',
            next: '__back__',
          },
        ],
      };
    },
    [graph.nodes, unknownRouteText]
  );

  // Validar que el nodo inicial existe
  const initialNodeId = graph.nodes[graph.start] ? graph.start : Object.keys(graph.nodes)[0] || 'error';
  
  const [currentNodeId, setCurrentNodeId] = useState<string>(initialNodeId);
  const [askedChoicesByNode, setAskedChoicesByNode] = useState<Record<string, Set<string>>>(
    {}
  );
  const nodeHistoryRef = useRef<string[]>([]);

  // Resetear el estado si el graph cambia
  useEffect(() => {
    const newInitialNodeId = graph.nodes[graph.start] ? graph.start : Object.keys(graph.nodes)[0] || 'error';
    setCurrentNodeId(newInitialNodeId);
    setAskedChoicesByNode({});
    nodeHistoryRef.current = [];
  }, [graph.start, graph.nodes]);

  const currentNode = useMemo<ResolvedNode>(() => {
    const raw = getNodeSafe(currentNodeId);
    return {
      id: raw.id,
      speaker: raw.speaker,
      text: getLocalizedText(raw.text, locale),
      choices: (raw.choices ?? []).map((c) => ({ id: c.id, text: getLocalizedText(c.text, locale), next: c.next })),
    };
  }, [currentNodeId, getNodeSafe, locale]);

  const selectChoice = useCallback(
    (choiceId: string) => {
      const node = getNodeSafe(currentNodeId);
      const choice = (node.choices ?? []).find((c) => c.id === choiceId);

      // registrar esta opción como preguntada para el nodo actual
      setAskedChoicesByNode((prev) => {
        const existing = prev[currentNodeId] ? new Set(prev[currentNodeId]) : new Set<string>();
        existing.add(choiceId);
        return { ...prev, [currentNodeId]: existing };
      });

      const targetId = choice?.next;
      if (targetId === '__back__') {
        // manejo explícito de volver
        const prevId = nodeHistoryRef.current.pop();
        setCurrentNodeId(prevId ?? graph.start);
        return;
      }

      // empujamos el nodo actual al historial antes de navegar
      nodeHistoryRef.current.push(currentNodeId);

      if (!targetId) {
        setCurrentNodeId('__unknown__');
        return;
      }

      const exists = !!graph.nodes[targetId];
      if (!exists) {
        setCurrentNodeId('__unknown__');
        return;
      }

      setCurrentNodeId(targetId);
    },
    [currentNodeId, getNodeSafe, graph.nodes, graph.start]
  );

  const goBack = useCallback(() => {
    const prevId = nodeHistoryRef.current.pop();
    setCurrentNodeId(prevId ?? graph.start);
  }, [graph.start]);

  const reset = useCallback(() => {
    nodeHistoryRef.current = [];
    setAskedChoicesByNode({});
    setCurrentNodeId(graph.start);
  }, [graph.start]);

  const getIsChoiceDisabled = useCallback(
    (choiceId: string): boolean => {
      const setForNode = askedChoicesByNode[currentNodeId];
      return setForNode ? setForNode.has(choiceId) : false;
    },
    [askedChoicesByNode, currentNodeId]
  );

  return {
    currentNode,
    askedChoicesByNode,
    nodeHistory: nodeHistoryRef.current,
    selectChoice,
    goBack,
    reset,
    getIsChoiceDisabled,
  };
}

export default useDialogueEngine;


