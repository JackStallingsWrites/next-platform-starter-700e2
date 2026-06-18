import MirrorNav from 'components/mirror-nav';
import MirrorFooter from 'components/mirror-footer';
import PrivateRoomGate from 'components/private-room-gate';
import BookingForm from 'components/booking-form';
import ScrollFade from 'components/scroll-fade';
import NewsletterSignup from 'components/newsletter-signup';

export const metadata = {
    title: 'The Silver Seraphim',
    description: 'What the camera sees. What the mirror keeps.'
};

export default function Page() {
    return (
        <>
            <MirrorNav />

            <main>

                {/* ── Hero ─────────────────────────────────────── */}
                <section className="mh-hero">
                    <span className="mh-eyebrow">Silver Seraphim — Boudoir Photography</span>
                    <div className="mh-hero-rule" aria-hidden="true" />
                    <h1 className="mh-h1">
                        You already know
                        <em className="mh-h1-em">why you&apos;re here.</em>
                    </h1>
                    <p className="mh-hero-subline">The mirror has been waiting.</p>
                    <a href="#front" className="mh-hero-enter">Enter</a>
                </section>

                {/* ── About ────────────────────────────────────── */}
                <section id="about" className="mh-section mh-section-about">
                    <div className="mh-about-grid">
                        <ScrollFade>
                            <span className="mh-section-num">00</span>
                            <h2 className="mh-h2"><span className="mh-h2-roman">Two rooms.</span><br />One mirror.</h2>
                        </ScrollFade>

                        <ScrollFade delay={130}>
                            <div className="mh-about-body">
                                <p>
                                    Some images are for sharing — prom nights, graduation mornings,
                                    the first family portrait after a move. They belong in the light.
                                </p>
                                <p>
                                    Others are yours alone. Not because they&apos;re shameful.
                                    Because they&apos;re sacred. Because for most of history, women
                                    didn&apos;t get to decide what happened to their own image —
                                    and some of us are done with that.
                                </p>
                                <p>
                                    Every session starts with a conversation: what do you want to
                                    walk out of this room owning?
                                </p>
                            </div>
                        </ScrollFade>
                    </div>
                </section>

                {/* ── Front of the Mirror ──────────────────────── */}
                <section id="front" className="mh-section mh-section-light">
                    <ScrollFade>
                        <span className="mh-section-num">01</span>
                        <h2 className="mh-h2">Front of the Mirror</h2>
                        <p className="mh-section-intro">
                            Prom, senior portraits, graduation, couples, families.
                            The images you want the world to see.
                        </p>
                    </ScrollFade>

                    <div className="mh-gallery-grid">
                        <ScrollFade delay={0}>
                            <article className="mh-tile mh-tile-prom">
                                <div className="mh-tile-body">
                                    <span className="mh-tile-label">Prom &amp; Senior</span>
                                    <p className="mh-tile-line">The night you&apos;ve been waiting for.</p>
                                </div>
                            </article>
                        </ScrollFade>
                        <ScrollFade delay={90}>
                            <article className="mh-tile mh-tile-senior">
                                <div className="mh-tile-body">
                                    <span className="mh-tile-label">Senior Portraits</span>
                                    <p className="mh-tile-line">Before everything changes.</p>
                                </div>
                            </article>
                        </ScrollFade>
                        <ScrollFade delay={180}>
                            <article className="mh-tile mh-tile-family">
                                <div className="mh-tile-body">
                                    <span className="mh-tile-label">Family &amp; Couples</span>
                                    <p className="mh-tile-line">The shape of us, right now.</p>
                                </div>
                            </article>
                        </ScrollFade>
                    </div>
                </section>

                {/* ── Behind the Mirror ────────────────────────── */}
                <section id="mirror" className="mh-section mh-section-dark">
                    <ScrollFade>
                        <span className="mh-section-num">02</span>
                        <h2 className="mh-h2">Behind the Mirror</h2>
                        <p className="mh-section-intro">
                            Boudoir, intimate couples, maternity, and personal reclamation sessions.
                            What happens in this room belongs to you — your gallery, your eyes, your call.
                        </p>
                    </ScrollFade>

                    <PrivateRoomGate />
                </section>

                {/* ── Book ─────────────────────────────────────── */}
                <section id="book" className="mh-section mh-section-booking">
                    <ScrollFade>
                        <span className="mh-section-num">03</span>
                        <h2 className="mh-h2">Book a Session</h2>
                        <p className="mh-section-intro">
                            Every session is a conversation first. Tell me what you&apos;re carrying
                            into the room — I&apos;ll meet you there.
                        </p>
                    </ScrollFade>
                    <BookingForm />
                </section>

                {/* ── Signal / Newsletter ──────────────────────── */}
                <section className="mh-section-signal">
                    <ScrollFade>
                        <div className="mh-signal-rule" aria-hidden="true" />
                        <h2 className="mh-signal-heading">Stay in the light.</h2>
                        <p className="mh-signal-body">
                            Occasional dispatches — new work, open sessions, the kind of
                            thing that doesn&apos;t go in a feed.
                        </p>
                        <NewsletterSignup />
                    </ScrollFade>
                </section>

            </main>

            <MirrorFooter />
        </>
    );
}
