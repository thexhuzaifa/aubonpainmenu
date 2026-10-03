import Link from 'next/link';

export default function Header() {
  return <header className="site-header"><div className="header-inner"><Link href="/" className="wordmark" aria-label="AuBonPainMenu.us home"><span>Au</span>BonPain<small>.us</small></Link><nav aria-label="Main navigation"><Link href="/menu">Menu</Link><Link href="/nutrition">Nutrition</Link><Link href="/locations">Locations</Link><Link href="/hours">Hours</Link><Link href="/ordering-tips">Ordering Tips</Link><Link href="/faq">FAQ</Link></nav></div></header>;
}
