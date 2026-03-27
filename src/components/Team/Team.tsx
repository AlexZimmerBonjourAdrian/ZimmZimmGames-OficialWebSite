import React from 'react';
import styles from './Team.module.css';

export interface TeamMember {
	name: string;
	role: string;
	note?: string;
}

const members: TeamMember[] = [
	{ name: 'Alex Zimmer', role: 'PM, Programmer and Writer' },
	{ name: 'Lily', role: 'Translator' },
	{ name: 'Pama', role: 'Literary Consultant' },
	{ name: 'Yahjix', role: 'Lead Artist' },
	{ name: 'EveChan', role: 'Voice Actress: CB and Juno' },
	{ name: 'Father', role: 'Marketing and PostProducer' }
];

export interface TeamProps {
	className?: string;
	title?: string;
	members?: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ className = '', title = 'Team', members: membersProp }) => {
    const effectiveMembers = (membersProp ?? members).slice().sort((a, b) => a.name.localeCompare(b.name));
	// Duplicamos los miembros para el efecto de scroll infinito
	const displayMembers = [...effectiveMembers, ...effectiveMembers];

	return (
		<section id="team" className={`${styles.teamSection} ${className}`}>
			<h2 className={styles.title}>{title}</h2>
			
			<div className={styles.carouselContainer}>
				<div className={styles.carouselTrack}>
					{displayMembers.map((m, index) => (
						<div key={`${m.name}-${index}`} className={styles.card}>
							<h3 className={styles.name}>{m.name}</h3>
							<p className={styles.role}>{m.role}</p>
						</div>
					))}
				</div>
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


