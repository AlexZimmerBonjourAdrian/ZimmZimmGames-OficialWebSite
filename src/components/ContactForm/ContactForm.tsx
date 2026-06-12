'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.css';
import content from './content.json';

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
      setError(content.errors.required);
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
        throw new Error('Error sending the message');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(content.errors.general);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contactContainer} ${className || ''}`}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.contactTitle}>{content.title}</h2>
            <p className={styles.contactSubtitle}>
              {content.subtitle}
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>{content.labels.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={content.placeholders.name}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>{content.labels.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={content.placeholders.email}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>{content.labels.subject}</label>
                <select id="subject" name="subject" className={styles.select} defaultValue={content.subjectOptions[0]}>
                  {content.subjectOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>{content.labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={content.placeholders.message}
                  className={styles.textarea}
                />
              </div>

              {error && <p style={{ color: '#ff4444', textAlign: 'center', fontFamily: 'var(--font-courier)' }}>{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? content.buttons.sending : content.buttons.submit}
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
            <h3 className={styles.contactTitle}>{content.success.title}</h3>
            <p className={styles.contactSubtitle}>
              {content.success.subtitle}
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className={styles.submitButton}
              style={{ marginTop: '2rem' }}
            >
              {content.buttons.newMessage}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;