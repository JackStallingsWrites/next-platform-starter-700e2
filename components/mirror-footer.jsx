export default function MirrorFooter() {
    return (
        <footer className="mh-footer">
            <div className="mh-footer-inner">
                <div className="mh-footer-brand">
                    <a href="#" className="mh-logo">
                        <span className="mh-logo-silver">Silver</span>
                        <span className="mh-logo-seraphim">Seraphim</span>
                    </a>
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
                        <a href="mailto:silver@thesilverseraphim.com">silver@thesilverseraphim.com</a>
                        <a href="https://instagram.com/thesilverseraphim" target="_blank" rel="noopener noreferrer">@thesilverseraphim</a>
                    </div>
                </div>
            </div>

            <div className="mh-footer-base">
                <span>© {new Date().getFullYear()} The Silver Seraphim</span>
                <span>All galleries are private by default.</span>
            </div>
        </footer>
    );
}
