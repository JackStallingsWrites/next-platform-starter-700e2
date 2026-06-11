'use client';

import { useState } from 'react';

export default function PrivateRoomGate() {
    const [unlocked, setUnlocked] = useState(false);

    return (
        <>
            {!unlocked && (
                <div className="mh-gate">
                    <div className="mh-gate-rule" />
                    <h3>This room is held with care.</h3>
                    <p>Confirm you are 18+ to step inside.</p>
                    <button className="mh-btn mh-btn-ghost" onClick={() => setUnlocked(true)}>
                        I am 18+ — enter
                    </button>
                </div>
            )}

            {unlocked && (
                <div className="mh-private-room">
                    <div className="mh-private-panel">
                        <h3>Boudoir</h3>
                        <p>
                            You&apos;ve always looked like this. You just needed someone
                            to show you.
                        </p>
                    </div>
                    <div className="mh-private-panel">
                        <h3>Couples</h3>
                        <p>
                            What you look like when no one else is watching.
                            Documented with intention.
                        </p>
                    </div>
                    <div className="mh-private-panel">
                        <h3>Client Portal</h3>
                        <p>
                            Your gallery lives behind a private link. Your eyes, and
                            whoever you choose to share it with.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
