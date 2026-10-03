<<<<<<< HEAD
import Link from 'next/link';
export default function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) { return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, index) => <span key={item.name}> / {item.href ? <Link href={item.href}>{item.name}</Link> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.name}</span>}</span>)}</nav>; }
=======
import Link from 'next/link';
export default function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) { return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, index) => <span key={item.name}> / {item.href ? <Link href={item.href}>{item.name}</Link> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.name}</span>}</span>)}</nav>; }
>>>>>>> 15b473b8448200c67420739b6263e97808d963ee
