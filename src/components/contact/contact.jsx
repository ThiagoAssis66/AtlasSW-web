import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('Erro ao enviar a mensagem.');
    }
  };

  return (
    <section id="contato" className="Contact">
      <h2 id="title-contact">Entre em contato e solicite um orçamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Seu Nome:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Seu Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Escreva sua mensagem:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
      <div className='msg-status'>
      {status && <p>{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
