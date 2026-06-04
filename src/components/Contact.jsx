import { useState, useEffect } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ email: '', message: '' });
    const [status, setStatus] = useState('');

    useEffect(() => {
        const savedData = localStorage.getItem('contactDraft');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        setFormData(newData);
        localStorage.setItem('contactDraft', JSON.stringify(newData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email.includes('@') || formData.message.length < 5) {
            setStatus('Будь ласка, введіть коректний email та повідомлення.');
            return;
        }

        setStatus('Повідомлення успішно надіслано!');
        setFormData({ email: '', message: '' });
        localStorage.removeItem('contactDraft');
    };

    return (
        <section id="contact" className="container">
            <h2>Контакти</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginTop: '20px' }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше повідомлення"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Надіслати</button>
                {status && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{status}</p>}
            </form>
        </section>
    );
}