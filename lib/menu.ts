import menuData from '@/data/menu.json';
const menu = { ...menuData, items: [...menuData.items, ...menuData.additionalItems] };
export type MenuItem = typeof menu.items[number];
export type Category = typeof menu.categories[number];
export const getCategory = (slug: string) => menu.categories.find((category) => category.slug === slug);
export const getItem = (slug: string) => menu.items.find((item) => item.slug === slug);
export const itemsForCategory = (slug: string) => menu.items.filter((item) => item.category === slug);
export default menu;
