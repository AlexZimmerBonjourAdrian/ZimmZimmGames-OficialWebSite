// Roadmap Manager - Easy JavaScript integration for RoadmapSection
// This file provides simple functions to manage roadmap phases from external scripts

class RoadmapManager {
    constructor() {
        this.phases = [];
        this.callbacks = [];
        this.isInitialized = false;
    }

    // Initialize the manager
    init() {
        if (this.isInitialized) return;

        // Wait for the component to be mounted
        const checkComponent = setInterval(() => {
            if (window.RoadmapSection) {
                this.isInitialized = true;
                clearInterval(checkComponent);
                console.log('RoadmapManager initialized successfully');
            }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
            if (!this.isInitialized) {
                console.warn('RoadmapSection component not found. Make sure it is mounted.');
                clearInterval(checkComponent);
            }
        }, 10000);
    }

    // Add a new phase
    addPhase(phaseData) {
        if (!this.isInitialized) {
            console.warn('RoadmapManager not initialized. Call init() first.');
            return false;
        }

        const newPhase = {
            phase: phaseData.phase || `Fase ${this.getPhases().length + 1}`,
            title: phaseData.title || 'Nueva Fase',
            description: phaseData.description || 'Descripción de la fase',
            status: phaseData.status || 'planned',
            date: phaseData.date || 'Q1 2025',
            features: phaseData.features || ['Característica 1', 'Característica 2'],
            progress: phaseData.progress || 0,
            color: phaseData.color || this.getRandomColor()
        };

        try {
            window.RoadmapSection.addPhase(newPhase);
            console.log('Phase added successfully:', newPhase);
            return true;
        } catch (error) {
            console.error('Error adding phase:', error);
            return false;
        }
    }

    // Update phase progress
    updateProgress(phaseId, newProgress) {
        if (!this.isInitialized) {
            console.warn('RoadmapManager not initialized. Call init() first.');
            return false;
        }

        try {
            window.RoadmapSection.updatePhaseProgress(phaseId, newProgress);
            console.log(`Phase ${phaseId} progress updated to ${newProgress}%`);
            return true;
        } catch (error) {
            console.error('Error updating progress:', error);
            return false;
        }
    }

    // Update phase status
    updateStatus(phaseId, newStatus) {
        if (!this.isInitialized) {
            console.warn('RoadmapManager not initialized. Call init() first.');
            return false;
        }

        const validStatuses = ['planned', 'in-progress', 'completed', 'delayed'];
        if (!validStatuses.includes(newStatus)) {
            console.error('Invalid status. Use: planned, in-progress, completed, or delayed');
            return false;
        }

        try {
            window.RoadmapSection.updatePhaseStatus(phaseId, newStatus);
            console.log(`Phase ${phaseId} status updated to ${newStatus}`);
            return true;
        } catch (error) {
            console.error('Error updating status:', error);
            return false;
        }
    }

    // Add feature to phase
    addFeature(phaseId, feature) {
        if (!this.isInitialized) {
            console.warn('RoadmapManager not initialized. Call init() first.');
            return false;
        }

        try {
            window.RoadmapSection.addFeatureToPhase(phaseId, feature);
            console.log(`Feature "${feature}" added to phase ${phaseId}`);
            return true;
        } catch (error) {
            console.error('Error adding feature:', error);
            return false;
        }
    }

    // Get all phases
    getPhases() {
        if (!this.isInitialized) {
            console.warn('RoadmapManager not initialized. Call init() first.');
            return [];
        }

        try {
            return window.RoadmapSection.getRoadmap();
        } catch (error) {
            console.error('Error getting phases:', error);
            return [];
        }
    }

    // Get phase by ID
    getPhase(phaseId) {
        const phases = this.getPhases();
        return phases.find(phase => phase.id === phaseId);
    }

    // Get phases by status
    getPhasesByStatus(status) {
        const phases = this.getPhases();
        return phases.filter(phase => phase.status === status);
    }

    // Get completed phases
    getCompletedPhases() {
        return this.getPhasesByStatus('completed');
    }

    // Get in-progress phases
    getInProgressPhases() {
        return this.getPhasesByStatus('in-progress');
    }

    // Get planned phases
    getPlannedPhases() {
        return this.getPhasesByStatus('planned');
    }

    // Get delayed phases
    getDelayedPhases() {
        return this.getPhasesByStatus('delayed');
    }

    // Calculate overall progress
    getOverallProgress() {
        const phases = this.getPhases();
        if (phases.length === 0) return 0;

        const totalProgress = phases.reduce((sum, phase) => sum + phase.progress, 0);
        return Math.round(totalProgress / phases.length);
    }

    // Subscribe to roadmap changes
    onRoadmapChange(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }
    }

    // Notify subscribers
    notifySubscribers(action, data) {
        this.callbacks.forEach(callback => {
            try {
                callback(action, data);
            } catch (error) {
                console.error('Error in roadmap callback:', error);
            }
        });
    }

    // Generate random color for phases
    getRandomColor() {
        const colors = [
            '#4CAF50', '#2196F3', '#FF9800', '#9C27B0',
            '#F44336', '#00BCD4', '#FF5722', '#795548',
            '#607D8B', '#E91E63', '#3F51B5', '#009688'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Quick phase creation functions
    addDevelopmentPhase(title, description, features = []) {
        return this.addPhase({
            title,
            description,
            features: features.length > 0 ? features : [
                'Desarrollo de características principales',
                'Testing y debugging',
                'Optimización de rendimiento'
            ],
            status: 'in-progress',
            color: '#2196F3'
        });
    }

    addTestingPhase(title, description, features = []) {
        return this.addPhase({
            title,
            description,
            features: features.length > 0 ? features : [
                'Testing de funcionalidades',
                'Corrección de bugs',
                'Optimización de UX'
            ],
            status: 'planned',
            color: '#FF9800'
        });
    }

    addReleasePhase(title, description, features = []) {
        return this.addPhase({
            title,
            description,
            features: features.length > 0 ? features : [
                'Preparación para lanzamiento',
                'Marketing y promoción',
                'Soporte post-lanzamiento'
            ],
            status: 'planned',
            color: '#9C27B0'
        });
    }

    addBugFixPhase(title, description, features = []) {
        return this.addPhase({
            title,
            description,
            features: features.length > 0 ? features : [
                'Identificación de bugs',
                'Desarrollo de correcciones',
                'Testing de correcciones'
            ],
            status: 'in-progress',
            color: '#F44336'
        });
    }
}

// Create global instance
const roadmapManager = new RoadmapManager();

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            roadmapManager.init();
        });
    } else {
        roadmapManager.init();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = roadmapManager;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.RoadmapManager = roadmapManager;
}

// Quick functions for common scenarios
window.addDevelopmentPhase = (title, description, features) => {
    return roadmapManager.addDevelopmentPhase(title, description, features);
};

window.addTestingPhase = (title, description, features) => {
    return roadmapManager.addTestingPhase(title, description, features);
};

window.addReleasePhase = (title, description, features) => {
    return roadmapManager.addReleasePhase(title, description, features);
};

window.addBugFixPhase = (title, description, features) => {
    return roadmapManager.addBugFixPhase(title, description, features);
};

window.updatePhaseProgress = (phaseId, progress) => {
    return roadmapManager.updateProgress(phaseId, progress);
};

window.updatePhaseStatus = (phaseId, status) => {
    return roadmapManager.updateStatus(phaseId, status);
};

window.addPhaseFeature = (phaseId, feature) => {
    return roadmapManager.addFeature(phaseId, feature);
};

window.getRoadmapProgress = () => {
    return roadmapManager.getOverallProgress();
};

export default roadmapManager;