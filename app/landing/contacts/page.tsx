"use client"
import { useState } from "react";

const ContactsPage = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Qui puoi integrare la tua logica di invio email (API, email service, ecc.)
        setSent(true);
    };

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-12 px-4">
            <div className="max-w-lg w-full text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contattaci</h1>
                <p className="text-lg text-gray-600 mb-8">Hai domande, suggerimenti o richieste particolari? Compila il modulo qui sotto e ti risponderemo il prima possibile!</p>
                {sent ? (
                    <div className="bg-green-100 text-green-700 rounded-xl p-6 font-semibold">Messaggio inviato con successo! Ti risponderemo presto.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Il tuo nome"
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="La tua email"
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Il tuo messaggio"
                            rows={5}
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 text-lg font-bold bg-blue-500 text-white rounded-xl transition hover:brightness-110"
                        >
                            Invia
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactsPage;