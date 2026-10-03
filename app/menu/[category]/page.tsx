import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import menu,{getCategory,itemsForCategory} from '@/lib/menu';
import Breadcrumbs from '@/components/Breadcrumbs';
import ItemCard from '@/components/ItemCard';
import AdSlot from '@/components/AdSlot';
import { BreadcrumbSchema,FaqSchema } from '@/components/Schemas';
export function generateStaticParams(){return menu.categories.map(c=>({category:c.slug}));}
export function generateMetadata({params}:{params:{category:string}}):Metadata{const c=getCategory(params.category);return c?{title:`${c.name} Menu Guide`,description:c.intro}:{title:'Menu category'};}
export default function CategoryPage({params}:{params:{category:string}}){const c=getCategory(params.category);if(!c)notFound();const items=itemsForCategory(c.slug);const questions=c.faqs.map(question=>({question,answer:`Availability and ingredients can vary by café. Check with the team or the official Au Bon Pain menu before ordering.`}));return <main className="container"><Breadcrumbs items={[{name:'Menu',href:'/menu'},{name:c.name}]}/><BreadcrumbSchema items={['Home','Menu',c.name]}/><FaqSchema questions={questions}/><p className="eyebrow">Menu category</p><h1>{c.name}</h1><p className="lead">{c.intro}</p><p className="kicker">Last updated: {menu.lastVerified}. Menus and availability vary by café.</p><AdSlot/><div className="grid">{items.length?items.map(item=><ItemCard key={item.slug} item={item}/>):<div className="info-band"><p>We have not published individual entries for this category yet. Check the official menu for the current selection.</p></div>}</div><AdSlot/><section className="faq-list narrow"><h2>Questions about {c.name}</h2>{questions.map(q=><details key={q.question}><summary>{q.question}</summary><p>{q.answer}</p></details>)}</section><AdSlot/></main>;}
