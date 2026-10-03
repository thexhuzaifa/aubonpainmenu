import AdSlot from './AdSlot';
import AuthorBox from './AuthorBox';
export default function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <><div className="narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="lead">{children}</div><AuthorBox/></div><AdSlot/></>; }
