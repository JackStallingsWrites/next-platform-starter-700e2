'use client';

import { useState } from 'react';

export default function BrandLogo() {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <span className="mh-logo-text">
                <span className="mh-logo-silver">Silver</span>
                <span className="mh-logo-seraphim">Seraphim</span>
            </span>
        );
    }

    return (
        <img
            src="/logo-wordmark.png"
            alt="The Silver Seraphim"
            className="mh-logo-img"
            onError={() => setFailed(true)}
        />
    );
}
