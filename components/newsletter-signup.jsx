'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString()
            });
        } catch (_) {}
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <p className="mh-signal-success">
                You&apos;re in the light now. Watch for a dispatch.
            </p>
        );
    }

    return (
        <form
            className="mh-signal-form"
            onSubmit={handleSubmit}
            name="silver-seraphim-signal"
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="silver-seraphim-signal" />
            <input type="hidden" name="bot-field" />
            <input
                className="mh-signal-input"
                type="email"
                name="email"
                placeholder="Your email address"
                required
            />
            <button className="mh-signal-btn" type="submit">
                Signal
            </button>
        </form>
    );
}
