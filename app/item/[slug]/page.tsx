import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import menu,{getItem,getCategory} from '@/lib/menu';
import Breadcrumbs from '@/components/Breadcrumbs';
import ItemCard from '@/components/ItemCard';
import AdSlot from '@/components/AdSlot';
import { BreadcrumbSchema } from '@/components/Schemas';
export function generateStaticParams(){return menu.items.map(i=>({slug:i.slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const item=getItem(params.slug);return item?{title:`${item.name} Menu Guide`,description:item.description}:{title:'Menu item'};}
export default function ItemPage({params}:{params:{slug:string}}){const item=getItem(params.slug);if(!item)notFound();const category=getCategory(item.category)!;const similar=menu.items.filter(i=>i.category===item.category&&i.slug!==item.slug).slice(0,3);return <main className="container"><Breadcrumbs items={[{name:'Menu',href:'/menu'},{name:category.name,href:`/menu/${category.slug}`},{name:item.name}]}/><BreadcrumbSchema items={['Home','Menu',category.name,item.name]}/><p className="eyebrow">{category.name}</p><h1>{item.name}</h1><div className="badge-row">{item.badges.map(b=><span className="badge" key={b}>{b}</span>)}</div><p className="lead">{item.description}</p><p><strong>Ingredients:</strong> {item.ingredients}</p><p className="info-band"><strong>Nutrition and price:</strong> Nutrition varies by size. Check the <a className="text-link" href={menu.officialNutritionUrl} rel="nofollow noopener">official nutrition guide ↗</a>. Prices are not published here because they were not supplied in our menu data.</p><p className="kicker">Last updated: {item.lastVerified}. Menu details and availability vary by café.</p><AdSlot/><section><h2>Similar from {category.name}</h2><div className="grid">{similar.map(i=><ItemCard key={i.slug} item={i}/>)}</div></section><AdSlot/></main>;}
