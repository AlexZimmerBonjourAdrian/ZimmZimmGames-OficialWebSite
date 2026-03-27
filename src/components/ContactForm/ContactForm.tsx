'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  className?: string;
  formAction?: string; // Formspree or Getform URL
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  className, 
  formAction = "https://formspree.io/f/mreoegeo" // Reemplaza 'zimmzimmgames' con tu ID de Formspree vinculado a zimmzimmgames@gmail.com
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.email || !data.message) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError("Algo salió mal. Por favor, inténtalo de nuevo más tarde o escribe directamente a zimmzimmgames@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${styles.contactContainer} ${className || ''}`}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.contactTitle}>Contacta con el País de las Maravillas</h2>
            <p className={styles.contactSubtitle}>
              Únete al equipo, envía evidencias o recibe promociones desde el abismo.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Detective..."
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="conejo@madriguera.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Asunto</label>
                <select id="subject" name="subject" className={styles.select} defaultValue="Consulta General">
                  <option value="Consulta General">Consulta General</option>
                  <option value="Unirse al Equipo">Unirse al Equipo</option>
                  <option value="Promociones">Recibir Promociones</option>
                  <option value="Reporte de Error">Evidencia (Reporte de Error)</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tu mensaje aquí..."
                  className={styles.textarea}
                />
              </div>

              {error && <p style={{ color: '#ff4444', textAlign: 'center', fontFamily: 'var(--font-courier)' }}>{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.successMessage}
          >
            <span className={styles.successIcon}>🐇</span>
            <h3 className={styles.contactTitle}>Mensaje Recibido</h3>
            <p className={styles.contactSubtitle}>
              Tu mensaje ha sido enviado a la madriguera del conejo. Te responderemos... si encontramos el camino de vuelta.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className={styles.submitButton}
              style={{ marginTop: '2rem' }}
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
