<<<<<<< HEAD
import Link from 'next/link';
import type { MenuItem } from '@/lib/menu';
export default function ItemCard({ item }: { item: MenuItem }) { return <article className="item-card"><div className="item-visual" aria-hidden="true">{item.name.split(' ').slice(0, 2).join(' ')}</div><div className="item-card-body"><div className="badge-row">{item.badges.map((badge) => <span className="badge" key={badge}>{badge}</span>)}</div><h3><Link href={`/item/${item.slug}`}>{item.name}</Link></h3><p>{item.description}</p><Link className="text-link" href={`/item/${item.slug}`}>Read the guide →</Link></div></article>; }
=======
import Link from 'next/link';
import type { MenuItem } from '@/lib/menu';
export default function ItemCard({ item }: { item: MenuItem }) { return <article className="item-card"><div className="item-visual" aria-hidden="true">{item.name.split(' ').slice(0, 2).join(' ')}</div><div className="item-card-body"><div className="badge-row">{item.badges.map((badge) => <span className="badge" key={badge}>{badge}</span>)}</div><h3><Link href={`/item/${item.slug}`}>{item.name}</Link></h3><p>{item.description}</p><Link className="text-link" href={`/item/${item.slug}`}>Read the guide →</Link></div></article>; }
>>>>>>> 15b473b8448200c67420739b6263e97808d963ee
