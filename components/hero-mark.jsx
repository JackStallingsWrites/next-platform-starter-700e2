'use client';

import { useState } from 'react';

export default function HeroMark() {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <>
                <span className="mh-eyebrow">Fine Art Portraiture</span>
                <div className="mh-hero-rule" aria-hidden="true" />
                <h1 className="mh-h1">The Silver Seraphim</h1>
            </>
        );
    }

    return (
        <img
            src="/logo-mark.png"
            alt="The Silver Seraphim"
            className="mh-hero-mark"
            onError={() => setFailed(true)}
        />
    );
}
