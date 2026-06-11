export default function MirrorFooter() {
    return (
        <footer className="mh-footer">
            <div className="mh-footer-inner">
                <div className="mh-footer-brand">
                    <span className="mh-logo">Mirror House</span>
                    <p>Photography for celebration and for softness.</p>
                </div>

                <div className="mh-footer-cols">
                    <div>
                        <p className="mh-footer-heading">Work</p>
                        <a href="#front">Prom &amp; Senior</a>
                        <a href="#front">Family &amp; Couples</a>
                        <a href="#mirror">Boudoir &amp; Private</a>
                    </div>
                    <div>
                        <p className="mh-footer-heading">Connect</p>
                        <a href="#book">Book a session</a>
                        <a href="mailto:hello@mirrorhouse.photo">hello@mirrorhouse.photo</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="mh-footer-base">
                <span>© {new Date().getFullYear()} Mirror House Photography</span>
                <span>All galleries are private by default.</span>
            </div>
        </footer>
    );
}
