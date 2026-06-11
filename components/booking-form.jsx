'use client';

import { useState } from 'react';

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        });

        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="mh-form-success">
                Received. I&apos;ll be in touch within 48 hours — usually sooner.
            </div>
        );
    }

    return (
        <form
            className="mh-form"
            onSubmit={handleSubmit}
            name="mirror-house-inquiry"
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="mirror-house-inquiry" />
            <input type="hidden" name="bot-field" />

            <input className="mh-field" type="text" name="name" placeholder="Your name" required />
            <input
                className="mh-field"
                type="email"
                name="email"
                placeholder="Email address"
                required
            />
            <select className="mh-field" name="session-type" required defaultValue="">
                <option value="" disabled>
                    Session type
                </option>
                <option>Prom / Senior</option>
                <option>Family / Couples</option>
                <option>Boudoir / Private</option>
            </select>
            <textarea
                className="mh-field"
                name="message"
                placeholder="Tell me what you want the mirror to reveal"
            />
            <button className="mh-btn" type="submit">
                Send inquiry
            </button>
        </form>
    );
}
