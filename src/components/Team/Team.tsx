import React from 'react';
import styles from './Team.module.css';

export interface TeamMember {
	name: string;
	role: string;
	note?: string;
}

const members: TeamMember[] = [
	{ name: 'Alex Zimmer', role: 'PM, Programador y escritor' },
	{ name: 'Lily', role: 'Traductora' },
	{ name: 'Pama', role: 'Consultora literaria' },
	{ name: 'Yahjix', role: 'Artista principal' },
	{ name: 'EveChan', role: 'Actriz de doblaje: CB y Juno' },
	{ name: 'Father', role: 'Marketing y PostProducer' }
];

export interface TeamProps {
	className?: string;
	title?: string;
	members?: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ className = '', title = 'Equipo', members: membersProp }) => {
    const effectiveMembers = (membersProp ?? members).slice().sort((a, b) => a.name.localeCompare(b.name));
	return (
		<section className={`${styles.teamSection} ${className}`}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.grid}>
				{effectiveMembers.map((m) => (
					<div key={m.name} className={styles.card}>
						<h3 className={styles.name}>{m.name}</h3>
						<p className={styles.role}>{m.role}</p>
					</div>
				))}
			</div>
			{effectiveMembers.some((m) => m.note) && (
				<footer className={styles.notesFooter}>
					{effectiveMembers.filter((m) => m.note).map((m) => (
						<div key={`${m.name}-note`} className={styles.noteItem}>
							<strong className={styles.noteName}>{m.name}:</strong> <span className={styles.noteText}>{m.note}</span>
						</div>
					))}
				</footer>
			)}
		</section>
	);
};

export default Team;


