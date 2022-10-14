import Home from "../Home";
import Blog from "../Blog";
import New from "../New";
import Services from "../Services";
import Contact from "../Contact";

export const router = [
  { path: "/", component: Home, name: "Home" },
  { path: "/services", component: Services, name: "Services" },
  { path: "/news", component: New, name: "News" },
  { path: "/blog", component: Blog, name: "Blog" },
  { path: "/contact", component: Contact, name: "Contact" },
];
