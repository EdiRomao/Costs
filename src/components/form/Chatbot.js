// src/components/Chatbot.js
import React, { useState } from 'react';
import styles from './Chatbot.module.css';
//import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'
function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Simulação de resposta do bot
            setTimeout(() => {
                setMessages((prev) => [...prev, { text: 'Olá, como posso ajudar?', sender: 'bot' }]);
            }, 1000);
        }
    };

    return (
        <div className={styles.chatbotContainer}>
            <div className={styles.chatbotIcon} onClick={toggleChatbot}>
                <span>💬</span>
            </div>

            {isOpen && (
                <div className={styles.chatbot}>
                    <div className={styles.chatbotHeader}>
                        <h3>Chatbot</h3>
                        <button onClick={toggleChatbot} type='button' className={styles.close_chat}></button>
                    </div>

                    <div className={styles.chatbotMessages}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={message.sender === 'user' ? styles.userMessage : styles.botMessage}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    <div className={styles.chatbotInput}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Digite sua mensagem"
                        />
                        <button onClick={handleSendMessage} type='button'>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Chatbot;