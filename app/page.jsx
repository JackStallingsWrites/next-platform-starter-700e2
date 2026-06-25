import BookingForm from 'components/booking-form';

export const metadata = {
    title: 'Silver Seraphim — Capturing Art Intentionally',
    description:
        'Silver Seraphim Photography. Cinematic, sensual, emotionally honest portraiture made with consent, discretion, and care.'
};

export default function Page() {
    return (
        <>
            <a className="skip" href="#main">Skip to content</a>

            <header className="wrap">
                <div className="mast">
                    <a className="name" href="/">Silver <b>Seraphim</b></a>
                    <nav aria-label="Primary">
                        <a href="#work">The Work</a>
                        <a href="#promise">The Promise</a>
                        <a href="#book">Begin</a>
                        <a href="/closer">Closer</a>
                    </nav>
                </div>
            </header>

            <main id="main">
                <section className="wrap hero">
                    <p className="eyebrow">Silver Seraphim · Photography</p>
                    <h1 className="display">The moment you stop performing, and simply <em>become.</em></h1>
                    <p className="lede">
                        Cinematic, sensual, emotionally honest portraiture, made in a room where your comfort is
                        the first thing built, and your image is the last thing rushed.
                    </p>
                    <p className="tagline">Capturing art intentionally · Revealing the beauty within</p>
                </section>

                <section className="creed" aria-label="Statement">
                    <div className="wrap">
                        <blockquote className="display">The goal is not perfection. It is presence.</blockquote>
                        <p className="by">Silver Seraphim</p>
                    </div>
                </section>

                <section className="wrap section" id="work" aria-labelledby="work-h">
                    <div className="section-head">
                        <span className="eyebrow">The Work</span>
                        <h2 id="work-h">Photography is how I tell the truth about a person.</h2>
                        <p className="note">
                            Expressive, cinematic, sensual, or emotionally honest, whatever the image needs to be in
                            order to be real.
                        </p>
                    </div>
                    <div className="read">
                        <p>
                            Some of the most beautiful photographs happen in the spaces between the poses, the
                            unguarded second after you forget the camera is there. My role is to guide, to direct,
                            and to build an environment relaxed enough that those seconds arrive on their own. Not
                            every frame is delivered; choosing the strongest images is part of the art. What you
                            receive is the session distilled to its truest few.
                        </p>
                    </div>
                </section>

                <section className="wrap section" id="promise" aria-labelledby="promise-h">
                    <div className="section-head">
                        <span className="eyebrow">The Promise</span>
                        <h2 id="promise-h">What you can expect from me.</h2>
                    </div>
                    <div className="promises">
                        <article className="promise">
                            <span className="mark">Consent</span>
                            <h3>No pressure, ever</h3>
                            <p>
                                No pressure to pose, dress, undress, or create beyond what feels authentic to you.
                                The concept bends to your comfort, never the reverse.
                            </p>
                        </article>
                        <article className="promise">
                            <span className="mark">Discretion</span>
                            <h3>Privacy that outlasts the shoot</h3>
                            <p>
                                Consent and discretion extend beyond the session itself, into how every image is
                                shared, discussed, and displayed. Nothing is posted without your approval.
                            </p>
                        </article>
                        <article className="promise">
                            <span className="mark">Direction</span>
                            <h3>Guidance when wanted</h3>
                            <p>
                                Clear direction when you want it, freedom when you need it, and space for creativity
                                to unfold naturally. You are never left guessing.
                            </p>
                        </article>
                        <article className="promise">
                            <span className="mark">Company</span>
                            <h3>You are never alone</h3>
                            <p>
                                You are always welcome to bring a trusted friend, partner, or hype person. Anyone I
                                might bring is discussed with you beforehand, always.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="boundaries" aria-labelledby="bound-h">
                    <div className="wrap">
                        <span className="eyebrow">Worth saying plainly</span>
                        <h2 id="bound-h" className="display">Sensual is not an open door.</h2>
                        <ul>
                            <li>Sensual imagery still lives inside the boundaries of professionalism, consent, and artistic intent.</li>
                            <li>Being invited to collaborate means I see something <em>artistically compelling worth capturing</em>, nothing more is ever expected.</li>
                            <li>Creative collaboration does not imply personal, romantic, or sexual access.</li>
                            <li>I only work with people who approach creative work with professionalism, mutual respect, and clear boundaries.</li>
                        </ul>
                    </div>
                </section>

                <section className="toward" aria-labelledby="toward-h">
                    <div className="wrap">
                        <p className="eyebrow">Before you decide</p>
                        <h2 id="toward-h">There is a fuller account of what a session actually is.</h2>
                        <p>
                            What it feels like to be in the room. How the time is shaped. What happens to your
                            images afterward, and how your consent travels with them. It asks for nothing but your
                            attention, and the choice to look closer.
                        </p>
                        <a className="toward-link" href="/closer">Step closer</a>
                    </div>
                </section>

                <section className="book" id="book" aria-labelledby="book-h">
                    <div className="wrap">
                        <div className="book-head">
                            <span className="eyebrow">Begin</span>
                            <h2 id="book-h">Tell me what you want to make.</h2>
                            <p className="note">
                                Not your availability, not your budget, not yet. Start with the image in your head,
                                or the feeling you cannot quite name. Everything else follows from there.
                            </p>
                        </div>
                        <BookingForm />
                    </div>
                </section>
            </main>

            <footer className="foot" id="contact">
                <div className="wrap">
                    <div className="foot-grid">
                        <div>
                            <h4>Silver Seraphim</h4>
                            <p className="credo">Art deserves trust. So do the people creating it.</p>
                        </div>
                        <div>
                            <h4>Find me</h4>
                            <ul className="socials">
                                <li>
                                    <a
                                        href="https://instagram.com/thesilverseraphim"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram · @thesilverseraphim
                                    </a>
                                </li>
                                <li><a href="#book">Begin a conversation</a></li>
                            </ul>
                            <p className="fine">
                                Respectful collaboration inquiries are always welcome.<br />
                                Consent, discretion, and care at every stage.
                            </p>
                            <p className="studio">A room shaped by Studio by Jack</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
