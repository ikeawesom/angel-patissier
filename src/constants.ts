export const DEFAULT_ICON_SIZE = 30;

export type NavLinksType = {
  title: string;
  link: string;
  icon?: string;
};

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Blog", link: "/blog" },
  { title: "Contact Us", link: "/contact" },
] as NavLinksType[];

export const NAV_ACTION_LINKS = [
  { title: "Cart", link: "/cart", icon: "cart.svg" },
  { title: "Account", link: "/auth", icon: "user.svg" },
] as NavLinksType[];
