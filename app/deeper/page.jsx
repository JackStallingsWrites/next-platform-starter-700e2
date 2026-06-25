export const metadata = {
    title: 'Deeper',
    description:
        'What a Silver Seraphim session actually is, minute to minute, and everything that happens to your images afterward.',
    robots: {
        index: false,
        follow: false
    }
};

export default function DeeperPage() {
    return (
        <div className="deeper">
            <a className="skip" href="#main">Skip to content</a>

            <header className="wrap">
                <div className="mast">
                    <a className="name" href="/">Silver <b>Seraphim</b></a>
                    <nav aria-label="Primary">
                        <a href="/#work">The Work</a>
                        <a href="/#promise">The Promise</a>
                        <a href="/#book">Begin</a>
                        <a href="/closer" aria-current="page">Closer</a>
                    </nav>
                </div>
            </header>

            <main id="main">
                <section className="wrap deeper-hero">
                    <p className="eyebrow">You stepped closer</p>
                    <h1>Deeper</h1>
                    <p className="frame">
                        This is the practice, with nothing hidden. What a session feels like from the inside, how the
                        time is shaped, and what becomes of your images once the evening ends. The more you know
                        before you arrive, the more freely you can let go once you are here.
                    </p>
                </section>

                <section className="wrap section" aria-labelledby="expect-h">
                    <div className="section-head">
                        <span className="eyebrow">In the room</span>
                        <h2 id="expect-h">What to expect.</h2>
                        <p className="note">
                            The session is a collaboration. We adapt to energy, comfort, and inspiration as we go.
                        </p>
                    </div>
                    <div className="phases">
                        <article className="phase">
                            <span className="n">Before</span>
                            <h3>We set the tone</h3>
                            <p>
                                We meet, complete paperwork, and talk through the concept, your comfort with nudity,
                                and any areas you would like to focus on or avoid. Nothing begins until the
                                expectations are clear and shared.
                            </p>
                        </article>
                        <article className="phase">
                            <span className="n">During</span>
                            <h3>We build the images</h3>
                            <p>
                                Clear direction and guidance throughout, in a relaxed and safe atmosphere. Room to
                                move, express, and play, with the flexibility to follow whatever the evening starts to
                                offer.
                            </p>
                        </article>
                        <article className="phase">
                            <span className="n">Throughout</span>
                            <h3>You stay in control</h3>
                            <p>
                                You are welcome to bring a trusted person. You set the pace. The concept bends to
                                your comfort at every step, and that is the floor the whole session stands on.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="wrap section" aria-labelledby="run-h">
                    <div className="section-head">
                        <span className="eyebrow">How the time is shaped</span>
                        <h2 id="run-h">A typical evening.</h2>
                        <p className="note">
                            An example rhythm, while yours flexes to the concepts and the energy in the room.
                        </p>
                    </div>
                    <div className="timeline">
                        <article className="tl">
                            <span className="t">First · arrival</span>
                            <h3>Meet and settle</h3>
                            <p>We meet, finish paperwork, and establish tone and expectations together before a single frame.</p>
                        </article>
                        <article className="tl">
                            <span className="t">Opening sets</span>
                            <h3>Ease in</h3>
                            <p>We begin with the gentler concepts, finding the light, finding the ease, letting the camera disappear.</p>
                        </article>
                        <article className="tl">
                            <span className="t">The heart of it</span>
                            <h3>Into the concepts</h3>
                            <p>Once the room is warm, we move through the planned looks and locations, adapting freely as inspiration takes over.</p>
                        </article>
                        <article className="tl">
                            <span className="t">Before we close</span>
                            <h3>Your must-haves</h3>
                            <p>We make space for your final requests and the images you most want to leave with, before we begin to pack up.</p>
                        </article>
                    </div>
                </section>

                <section className="between" aria-label="On the work">
                    <div className="wrap">
                        <blockquote>Some of the most beautiful photographs happen in the spaces between the poses.</blockquote>
                        <p className="by">The moment you stop performing, and simply become</p>
                    </div>
                </section>

                <section className="wrap section" aria-labelledby="after-h">
                    <div className="section-head">
                        <span className="eyebrow">Afterward</span>
                        <h2 id="after-h">What happens to your images.</h2>
                        <p className="note">Curated by hand, edited by hand, and never shared without your word.</p>
                    </div>
                    <div className="phases">
                        <article className="phase">
                            <span className="n">Curation</span>
                            <h3>The session, distilled</h3>
                            <p>
                                I review and curate every frame, then deliver a gallery of the strongest images
                                through a private folder within a few days. Choosing the few is part of the art.
                            </p>
                        </article>
                        <article className="phase">
                            <span className="n">Editing</span>
                            <h3>By hand, in time</h3>
                            <p>
                                You choose 10 to 15 favorites for detailed artistic editing. Each is reviewed and
                                edited individually. Allow two to three weeks, added to your folder as they are
                                finished.
                            </p>
                        </article>
                        <article className="phase">
                            <span className="n">Approval</span>
                            <h3>Your consent travels</h3>
                            <p>
                                Before anything is shared by either of us, we review the final edits together and
                                confirm what is approved. Everyone in a photograph must consent to it being seen.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="wrap deeper-note">
                    <p>
                        This is the whole of how I work, said plainly, so that trust is not something you have to take
                        on faith. If it resonates, the only thing left is to tell me what you would like to make.
                    </p>
                    <a className="back" href="/#book">Begin a conversation</a>
                </section>
            </main>
        </div>
    );
}
