import "./sidebarItem.css";
import sidebarItem from "./sidebarItem.html";
import sidebarItemActive from "./sidebarItemActive.html";

export default {
  title: "Components/Navigation",
  parameters: { layout: "centered" },
};

export const regular = () => sidebarItem;
export const active = () => sidebarItemActive;
