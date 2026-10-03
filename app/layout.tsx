import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { SiteSchema } from '@/components/Schemas';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL('https://aubonpainmenu.us'), title: { default: 'Au Bon Pain Menu Guide | Nutrition, Locations & Ordering Tips', template: '%s | AuBonPainMenu.us' }, description: 'An independent guide to the Au Bon Pain menu, nutrition questions, ordering ideas, hours, and finding a café.', alternates: { canonical: './' }, openGraph: { type:'website', siteName:'AuBonPainMenu.us', title:'Au Bon Pain Menu Guide', description:'Menu, nutrition, locations, and ordering notes for real café visits.' }, twitter: { card:'summary_large_image' }, other: { 'google-adsense-account':'ca-pub-0000000000000000' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Header/><SiteSchema/>{children}<Footer/><CookieBanner/></body></html>; }
