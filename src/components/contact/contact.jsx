import React, { useState } from 'react';


import './contact.css';

function Contact() {
  // Estados para armazenar os valores dos inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função que será chamada quando o formulário for enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    // Lógica para manipular o envio, como validação ou integração com API
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    // Limpar campos após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="Contact">
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
    </section>
  );
}

export default Contact;
