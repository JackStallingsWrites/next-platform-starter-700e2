'use client';

import { useState, useEffect } from 'react';

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
                The Silver Seraphim
            </a>

            {/* desktop links */}
            <nav className="mh-nav-links">
                <a href="#about">About</a>
                <a href="#front">Front</a>
                <a href="#mirror">Behind the Mirror</a>
                <a href="#book">Book</a>
            </nav>

            {/* mobile hamburger */}
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

            {/* mobile drawer */}
            <nav className={`mh-drawer${open ? ' mh-drawer--open' : ''}`} aria-hidden={!open}>
                <a href="#about" onClick={close}>About</a>
                <a href="#front" onClick={close}>Front</a>
                <a href="#mirror" onClick={close}>Behind the Mirror</a>
                <a href="#book" onClick={close}>Book</a>
            </nav>
        </header>
    );
}
