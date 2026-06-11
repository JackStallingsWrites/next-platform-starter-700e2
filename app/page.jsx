import MirrorNav from 'components/mirror-nav';
import MirrorFooter from 'components/mirror-footer';
import PrivateRoomGate from 'components/private-room-gate';
import BookingForm from 'components/booking-form';
import ScrollFade from 'components/scroll-fade';

export const metadata = {
    title: 'The Silver Seraphim',
    description: 'What the camera sees. What the mirror keeps. — thesilverseraphim.com'
};

export default function Page() {
    return (
        <>
            <MirrorNav />

            <main>
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="mh-hero">
                    <div className="mh-hero-copy">
                        <span className="mh-eyebrow">Portraits · Prom · Boudoir</span>
                        <h1 className="mh-h1">
                            What the camera sees.
                            <br />
                            What the mirror keeps.
                        </h1>
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

                {/* ── About ────────────────────────────────────────── */}
                <section id="about" className="mh-section mh-section-about">
                    <div className="mh-about-grid">
                        <ScrollFade>
                            <span className="mh-section-num">00</span>
                            <h2 className="mh-h2">Two rooms.<br />One mirror.</h2>
                        </ScrollFade>

                        <ScrollFade delay={120}>
                            <div className="mh-about-body">
                                <p>
                                    Some images belong in the light — prom nights, graduation mornings,
                                    the first family photo after the move. Those live in the front room,
                                    open to anyone who visits.
                                </p>
                                <p>
                                    Others belong in softness. Boudoir sessions, intimate couples work,
                                    maternity portraits, personal reclamation shoots — those are held
                                    behind the mirror, accessible only to the people who made them.
                                </p>
                                <p>
                                    Every session starts with a conversation about which room the images
                                    should live in, and why.
                                </p>
                            </div>
                        </ScrollFade>
                    </div>
                </section>

                {/* ── Front of the Mirror ──────────────────────────── */}
                <section id="front" className="mh-section mh-section-light">
                    <ScrollFade>
                        <span className="mh-section-num">01</span>
                        <h2 className="mh-h2">Front of the Mirror</h2>
                        <p className="mh-section-intro">
                            Prom, senior portraits, graduation, couples, families, and public
                            celebration work.
                        </p>
                    </ScrollFade>

                    <div className="mh-gallery-grid">
                        <ScrollFade delay={0}>
                            <article className="mh-tile mh-tile-prom">Prom Night</article>
                        </ScrollFade>
                        <ScrollFade delay={80}>
                            <article className="mh-tile mh-tile-senior">Senior Portraits</article>
                        </ScrollFade>
                        <ScrollFade delay={160}>
                            <article className="mh-tile mh-tile-family">Family Sessions</article>
                        </ScrollFade>
                    </div>
                </section>

                {/* ── Behind the Mirror ────────────────────────────── */}
                <section id="mirror" className="mh-section mh-section-dark">
                    <ScrollFade>
                        <span className="mh-section-num">02</span>
                        <h2 className="mh-h2">Behind the Mirror</h2>
                        <p className="mh-section-intro" style={{ color: 'rgba(244,239,231,0.75)' }}>
                            Private galleries for boudoir, editorial intimacy, couples, maternity, and
                            personal reclamation sessions.
                        </p>
                    </ScrollFade>

                    <PrivateRoomGate />
                </section>

                {/* ── Book ─────────────────────────────────────────── */}
                <section id="book" className="mh-section mh-section-booking">
                    <ScrollFade>
                        <span className="mh-section-num">03</span>
                        <h2 className="mh-h2">Book a Session</h2>
                        <p className="mh-section-intro">
                            Whether it&apos;s a milestone moment or a deeply personal one — every
                            session starts with a conversation.
                        </p>
                    </ScrollFade>

                    <BookingForm />
                </section>
            </main>

            <MirrorFooter />
        </>
    );
}
