import PageIntro from './PageIntro';
import AdSlot from './AdSlot';
export default function ContentPage({eyebrow,title,intro,children,ads=true}:{eyebrow:string;title:string;intro:React.ReactNode;children:React.ReactNode;ads?:boolean}){return <main className="container"><PageIntro eyebrow={eyebrow} title={title}>{intro}</PageIntro>{children}{ads&&<AdSlot/>}</main>;
