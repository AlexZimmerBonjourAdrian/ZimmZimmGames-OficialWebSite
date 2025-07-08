import styles from './GameExtrasSection.module.css';

const teamMembers = [
  {
    name: 'Alex "Rabbit" Carter',
    role: 'Creative Director & Writer',
    bio: 'Dreams up twisted worlds and stories that blur the line between reality and nightmare.',
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex'
  },
  {
    name: 'Morgan Lee',
    role: 'Lead Developer',
    bio: 'Turns psychological horror into interactive experiences with code and a touch of madness.',
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=morgan'
  },
  {
    name: 'Jamie Fox',
    role: 'Art & Sound Designer',
    bio: 'Shapes the unsettling visuals and haunting soundscapes that define our games.',
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jamie'
  }
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>About ZimmZimm Games</h2>
        <div className={styles.decorativeLine}></div>
      </div>
      <div className={styles.aboutContent}>
        <p className={styles.aboutDescription}>
          ZimmZimm Games is an independent studio dedicated to crafting unique psychological horror experiences. Our games explore the boundaries between reality and the surreal, inviting players to lose themselves in haunting, atmospheric worlds.
        </p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <img src={member.img} alt={member.name + ' portrait'} className={styles.teamImg} />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
        <div className={styles.styleBlock}>
          <h4 className={styles.styleTitle}>Our Style</h4>
          <p className={styles.styleText}>
            We blend psychological horror, surreal visuals, and immersive sound design to create games that linger in your mind long after you stop playing. Every project is a journey into the unknown, where fear and wonder walk hand in hand.
          </p>
        </div>
        <div className={styles.legendBlock}>
          <blockquote className={styles.legend}>
            "In the darkness, imagination is the only light."
          </blockquote>
        </div>
      </div>
    </section>
  );
} 