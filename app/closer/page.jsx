export const metadata = {
    title: 'Closer',
    description:
        'The threshold. The public room shows the work; the room past this one shows the practice.',
    robots: {
        index: false,
        follow: false
    }
};

export default function CloserPage() {
    return (
        <div className="threshold">
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

            <main id="main" className="wrap">
                <div className="thresh-stage">
                    <div className="thresh-inner">
                        <p className="eyebrow">The threshold</p>
                        <h1>The work is on the wall.<br />The practice is through here.</h1>

                        <p className="say">
                            What you have seen is the result. Past this door is the process, what an evening in front
                            of my camera actually feels like, minute to minute. How the room is held. What becomes of
                            your images, and how your <em>consent travels with them</em> long after we have packed up.
                        </p>

                        <p className="say">
                            There is nothing explicit waiting here. Only honesty about the experience, so that if you
                            step into the room, you step in already knowing how it breathes.
                        </p>

                        <div className="cross" role="presentation">
                            <p className="cross-line">You will not be sold anything. There is nothing to unlock.</p>
                            <p className="cross-line">Comfort is built before the first frame, not hoped for after.</p>
                            <p className="cross-line">Cross only if you would like to see the whole of how I work.</p>
                        </div>

                        <div className="cross-actions">
                            <a className="enter" href="/deeper">Go Deeper</a>
                            <a className="stay" href="/">Stay with the work</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
