'use client';

import { useState } from 'react';

export default function PrivateRoomGate() {
    const [unlocked, setUnlocked] = useState(false);

    return (
        <>
            {!unlocked && (
                <div className="mh-gate">
                    <h3>This room is private.</h3>
                    <p>Confirm you are 18+ to preview the private experience.</p>
                    <button className="mh-btn mh-btn-ghost" onClick={() => setUnlocked(true)}>
                        I am 18+
                    </button>
                </div>
            )}

            {unlocked && (
                <div className="mh-private-room">
                    <div className="mh-private-panel">
                        <h3>Boudoir</h3>
                        <p>Soft light. Clean direction. Images held with care.</p>
                    </div>
                    <div className="mh-private-panel">
                        <h3>Couples</h3>
                        <p>Private, cinematic, emotionally honest sessions.</p>
                    </div>
                    <div className="mh-private-panel">
                        <h3>Client Portal</h3>
                        <p>
                            Password-protected galleries are handled securely via authenticated client
                            links sent after your session.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
