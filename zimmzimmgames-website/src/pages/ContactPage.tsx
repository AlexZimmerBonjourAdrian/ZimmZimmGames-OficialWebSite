import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #ff0000;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
`;

const ContactForm = styled.form`
  background-color: #1a1a1a;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: #e0e0e0;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 3px;
    color: #e0e0e0;

    &:focus {
      outline: none;
      border-color: #ff0000;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff0000;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
  };

  return (
    <ContactContainer>
      <Title>Contacto</Title>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required />
        </FormGroup>
        <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage; 