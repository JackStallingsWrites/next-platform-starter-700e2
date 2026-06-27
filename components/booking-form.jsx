'use client';

import { useState } from 'react';

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        setError(false);

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString()
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            setSubmitted(true);
            form.reset();
        } catch (_) {
            setError(true);
        }
    }

    if (submitted) {
        return (
            <div className="form-success">
                Received. I&apos;ll be in touch within 48 hours, usually sooner.
            </div>
        );
    }

    return (
        <form
            className="mh-form"
            onSubmit={handleSubmit}
            name="silver-seraphim-inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            aria-label="Begin a conversation"
        >
            <input type="hidden" name="form-name" value="silver-seraphim-inquiry" />
            <input type="hidden" name="bot-field" />

            <div className="field">
                <label htmlFor="vision">What are you hoping to create?</label>
                <textarea
                    id="vision"
                    name="vision"
                    placeholder="The concept, the mood, the version of yourself you have been wanting to see, however rough. There are no wrong answers here."
                    required
                />
                <p className="hint">This is the only question that really matters. The rest is logistics.</p>
            </div>
            <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="What should I call you?" required />
            </div>
            <div className="field">
                <label htmlFor="email">Where can I reach you?</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                />
            </div>
            {error && (
                <p className="form-error" role="alert">
                    Something interrupted the send. Please try again.
                </p>
            )}
            <button className="send" type="submit">
                Send it to Silver
            </button>
            <p className="privacy">
                Your message is held in confidence. Nothing you share, and no image we might make, is ever posted,
                discussed, or displayed without your explicit consent.
            </p>
        </form>
    );
}
