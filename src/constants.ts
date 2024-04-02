export const DEFAULT_ICON_SIZE = 30;

export type UtilityType = {
  className?: string;
  children?: React.ReactNode;
  parentClassName?: string;
};

export type NavLinksType = {
  title: string;
  link: string;
  icon?: string;
};

export const NAV_LINKS = [
  { title: "Shop", link: "/shop" },
  { title: "About Us", link: "/about" },
  { title: "Blog", link: "/blog" },
  { title: "Contact Us", link: "/contact" },
] as NavLinksType[];

export const NAV_ACTION_LINKS = [
  { title: "Cart", link: "/cart", icon: "cart.svg" },
  { title: "Account", link: "/auth/login", icon: "user.svg" },
] as NavLinksType[];

export type WhyUsCardType = {
  src: string;
  title: string;
  desc: string;
  className?: string;
};

export const WHY_US_CARDS = [
  {
    src: "/icons/why us section/food.svg",
    title: "Quality Ingredients",
    desc: "We believe that great taste starts with great ingredients. That's why we source only the freshest, highest-quality ingredients, locally whenever possible, ensuring every bite is bursting with flavor.",
  },
  {
    src: "/icons/why us section/heart.svg",
    title: "Handcrafted with Care",
    desc: "Each pastry that leaves our kitchen is meticulously handcrafted by our skilled family bakers. From rolling out dough to icing the final touches, we pour our hearts into every creation.",
  },
  {
    src: "/icons/why us section/happy.svg",
    title: "Customer Satisfaction",
    desc: "Your satisfaction is our priority. Whether you're celebrating a special occasion or simply treating yourself, we're dedicated to providing a delightful experience from the first bite to the last crumb.",
  },
] as WhyUsCardType[];
