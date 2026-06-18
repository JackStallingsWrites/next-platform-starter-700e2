'use client';

import { useState, useEffect } from 'react';
import BrandLogo from 'components/brand-logo';

export default function MirrorNav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`mh-nav${scrolled ? ' mh-nav--scrolled' : ''}`}>
            <a href="#" className="mh-logo" onClick={close}>
                <BrandLogo />
            </a>

            <nav className="mh-nav-links">
                <a href="#front">The Work</a>
                <a href="#about">The Belief</a>
                <a href="#mirror">Behind the Mirror</a>
            </nav>

            <a href="#book" className="mh-nav-cta">Book a Session</a>

            <button
                className="mh-hamburger"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <span className={`mh-hamburger-bar${open ? ' open' : ''}`} />
                <span className={`mh-hamburger-bar${open ? ' open' : ''}`} />
                <span className={`mh-hamburger-bar${open ? ' open' : ''}`} />
            </button>

            <nav className={`mh-drawer${open ? ' mh-drawer--open' : ''}`} aria-hidden={!open}>
                <a href="#front" onClick={close}>The Work</a>
                <a href="#about" onClick={close}>The Belief</a>
                <a href="#mirror" onClick={close}>Behind the Mirror</a>
                <a href="#book" onClick={close}>Book a Session</a>
            </nav>
        </header>
    );
}
