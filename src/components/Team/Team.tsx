import React from 'react';
import styles from './Team.module.css';
import content from './content.json';

export interface TeamMember {
	name: string;
	role: string;
	note?: string;
}

export interface TeamProps {
	className?: string;
	title?: string;
	members?: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ className = '', title, members: membersProp }) => {
    const effectiveMembers = (membersProp ?? content.members).slice().sort((a, b) => a.name.localeCompare(b.name));

	return (
		<section id="team" className={`${styles.teamSection} ${className}`}>
			<h2 className={styles.title}>{title ?? content.title}</h2>
			
			<div className={styles.membersGrid}>
				{effectiveMembers.map((m) => (
					<div key={m.name} className={styles.memberCard}>
						<h3 className={styles.name}>{m.name}</h3>
						<p className={styles.role}>{m.role}</p>
					</div>
				))}
			</div>

			{effectiveMembers.some((m) => m.note) && (
				<footer className={styles.notesFooter}>
					<h3 className={styles.notesTitle}>Team Notes</h3>
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