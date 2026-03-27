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
        throw new Error('Error sending the message');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError("Something went wrong. Please try again later or write directly to zimmzimmgames@gmail.com.");
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
            <h2 className={styles.contactTitle}>Contact Wonderland</h2>
            <p className={styles.contactSubtitle}>
              Join the team, send evidence, or receive promotions from the abyss.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
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
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="rabbit@hole.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <select id="subject" name="subject" className={styles.select} defaultValue="General Inquiry">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Join the Team">Join the Team</option>
                  <option value="Promotions">Receive Promotions</option>
                  <option value="Bug Report">Evidence (Bug Report)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message here..."
                  className={styles.textarea}
                />
              </div>

              {error && <p style={{ color: '#ff4444', textAlign: 'center', fontFamily: 'var(--font-courier)' }}>{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
            <h3 className={styles.contactTitle}>Message Received</h3>
            <p className={styles.contactSubtitle}>
              Your message has been sent into the rabbit hole. We will get back to you... if we find our way back.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className={styles.submitButton}
              style={{ marginTop: '2rem' }}
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
