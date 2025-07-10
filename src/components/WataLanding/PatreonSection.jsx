import { motion } from 'framer-motion';
import styles from './PatreonSection.module.css';

const rewards = [
  {
    tier: "Little Hare",
    price: "$5",
    benefits: [
      "¡Juega antes que nadie! Acceso anticipado a WATA (Early access)",
      "Actualizaciones del desarrollo (Work-in-progress updates)",
      "Soundtrack exclusivo de personajes",
      "Tu nombre en los créditos del juego (WATA)",
      "Bienvenida digital personalizada para nuevos mecenas"
    ],
    popular: false
  },
  {
    tier: "Follow the Rabbit",
    price: "$10",
    benefits: [
      "Todo lo anterior",
      "WATA Lore Books (libros de lore mensuales, hasta 10 páginas)",
      "Sketch Art exclusivo (personajes o entornos no canon, 2 veces al mes)",
      "Soundtrack exclusivo de personajes",
      "Tu nombre en los créditos del juego (WATA)"
    ],
    popular: false
  },
  {
    tier: "Cult of the Rabbit",
    price: "$40",
    benefits: [
      "Todo lo anterior",
      "Comunidad STAFF de WATA",
      "Mensajes directos con el equipo (domingos)",
      "Poder de voto exclusivo para nuevo contenido",
      "Acceso al RoadMap de WATA",
      "Sticker físico exclusivo (elige personaje o Wonderland)",
      "Soundtrack exclusivo de personajes",
      "Tu nombre en los créditos del juego (WATA)"
    ],
    popular: true
  }
];

export default function PatreonSection() {
  return (
    <section className={styles.patreonSection}>
      <div className={styles.headerSection}>
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.sectionTitle}>¡Apoya W.A.T.A y sé parte de la historia!</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <motion.div 
        className={styles.messageContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.messageContent}>
          <h3 className={styles.messageTitle}>¡Tu apoyo hace la diferencia!</h3>
          <p className={styles.messageText}>
            ¿Quieres jugar W.A.T.A antes que nadie y dejar tu huella en el juego? Con solo <strong>$5</strong> al mes puedes acceder anticipadamente, recibir una bienvenida digital personalizada y ver tu nombre en los créditos. ¡Así de fácil es ser parte de la aventura!
          </p>
          <p className={styles.messageText}>
            Cada aporte, por pequeño que sea, nos ayuda a seguir creando, mejorando y soñando en grande. Si te gusta lo que ves, ¡hazte mecenas y acompáñanos en este viaje!
          </p>
          <p className={styles.messageText}>
            Si quieres aún más, explora los tiers superiores y desbloquea arte, lore, contacto directo y hasta un sticker físico exclusivo.
          </p>
          <p className={styles.messageText}>
            <em>PD: El nombre "Cult of the Rabbit" es un pequeño guiño a los juegos indie que nos inspiran (¡sí, te estamos mirando, Cult of the Lamb!). Aquí los conejos tienen su propio culto… y stickers exclusivos 🐰✨</em>
          </p>
        </div>
      </motion.div>

      <div className={styles.rewardsContainer}>
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.tier}
            className={`${styles.rewardCard} ${reward.popular ? styles.popularCard : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {reward.popular && (
              <div className={styles.popularBadge}>
                <span>MÁS POPULAR</span>
              </div>
            )}
            
            <div className={styles.rewardHeader}>
              <h3 className={styles.rewardTier}>{reward.tier}</h3>
              <div className={styles.rewardPrice}>
                <span className={styles.priceAmount}>{reward.price}</span>
                <span className={styles.pricePeriod}>/mes</span>
              </div>
            </div>

            <ul className={styles.benefitsList}>
              {reward.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✦</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <motion.button
              className={`${styles.supportButton} ${reward.popular ? styles.popularButton : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://patreon.com/zimmzimmgames', '_blank')}
            >
              Ir al Patreon
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.footerMessage}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>
          <strong>¡Gracias por tu apoyo!</strong> Si no puedes contribuir económicamente, compartir nuestro proyecto, seguirnos en redes sociales o contárselo a tus amigos también nos ayuda muchísimo. <span className={styles.heart}>❤️</span><br />
          Además, ¡siempre hay alguien a quien le interese luchar contra un conejo villanesco! ¿No crees?
        </p>
      </motion.div>
    </section>
  );
} 