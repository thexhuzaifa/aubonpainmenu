<<<<<<< HEAD
import PageIntro from './PageIntro';
import AdSlot from './AdSlot';
export default function ContentPage({eyebrow,title,intro,children,ads=true}:{eyebrow:string;title:string;intro:React.ReactNode;children:React.ReactNode;ads?:boolean}){return <main className="container"><PageIntro eyebrow={eyebrow} title={title}>{intro}</PageIntro>{children}{ads&&<AdSlot/>}</main>;
=======
import PageIntro from './PageIntro';
import AdSlot from './AdSlot';
export default function ContentPage({eyebrow,title,intro,children,ads=true}:{eyebrow:string;title:string;intro:React.ReactNode;children:React.ReactNode;ads?:boolean}){return <main className="container"><PageIntro eyebrow={eyebrow} title={title}>{intro}</PageIntro>{children}{ads&&<AdSlot/>}</main>;
>>>>>>> 15b473b8448200c67420739b6263e97808d963ee
