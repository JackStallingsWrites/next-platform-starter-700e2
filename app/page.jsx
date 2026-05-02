import MirrorNav from 'components/mirror-nav';
import PrivateRoomGate from 'components/private-room-gate';
import BookingForm from 'components/booking-form';

export const metadata = {
    title: 'Mirror House Photography',
    description: 'What the camera sees. What the mirror keeps.'
};

export default function Page() {
    return (
        <>
            <MirrorNav />

            <main>
                {/* ── Hero ─────────────────────────────────── */}
                <section className="mh-hero">
                    <div className="mh-hero-copy">
                        <span className="mh-eyebrow">Portraits · Prom · Boudoir</span>
                        <h1 className="mh-h1">What the camera sees. What the mirror keeps.</h1>
                        <p>
                            Public galleries for celebration. Private rooms for the work that asks for
                            softness, trust, and discretion.
                        </p>
                        <a href="#front" className="mh-btn">
                            Enter the front room
                        </a>
                    </div>

                    <div className="mh-mirror-card" aria-hidden="true">
                        <div className="mh-mirror-glass">
                            <span>Look closer</span>
                        </div>
                    </div>
                </section>

                {/* ── Front of the Mirror ───────────────────── */}
                <section id="front" className="mh-section mh-section-light">
                    <span className="mh-section-num">01</span>
                    <h2 className="mh-h2">Front of the Mirror</h2>
                    <p className="mh-section-intro">
                        Prom, senior portraits, graduation, couples, families, and public celebration
                        work.
                    </p>

                    <div className="mh-gallery-grid">
                        <article className="mh-tile mh-tile-prom">Prom Night</article>
                        <article className="mh-tile mh-tile-senior">Senior Portraits</article>
                        <article className="mh-tile mh-tile-family">Family Sessions</article>
                    </div>
                </section>

                {/* ── Behind the Mirror ─────────────────────── */}
                <section id="mirror" className="mh-section mh-section-dark">
                    <span className="mh-section-num">02</span>
                    <h2 className="mh-h2">Behind the Mirror</h2>
                    <p className="mh-section-intro" style={{ color: 'rgba(244,239,231,0.75)' }}>
                        Private galleries for boudoir, editorial intimacy, couples, maternity, and
                        personal reclamation sessions.
                    </p>

                    <PrivateRoomGate />
                </section>

                {/* ── Book ──────────────────────────────────── */}
                <section id="book" className="mh-section mh-section-booking">
                    <span className="mh-section-num">03</span>
                    <h2 className="mh-h2">Book a Session</h2>
                    <p className="mh-section-intro">
                        Whether it&apos;s a milestone moment or a deeply personal one — every session
                        starts with a conversation.
                    </p>

                    <BookingForm />
                </section>
            </main>
        </>
    );
}
