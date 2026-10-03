'use client';
import { useState } from 'react';
export default function CookieBanner() { const [visible, setVisible] = useState(true); if (!visible) return null; return <aside className="cookie-banner" role="dialog" aria-label="Cookie consent"><p>We use cookies for site analytics and advertising. See our <a href="/privacy">Privacy Policy</a>.</p><button onClick={() => setVisible(false)}>Accept</button><button className="quiet" onClick={() => setVisible(false)}>Dismiss</button></aside>; }
