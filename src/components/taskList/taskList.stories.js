import "./taskList.css";
import taskList from "./taskList.html";
import taskListChecked from "./taskListChecked.html";

export default {
  title: "Components/List",
  parameters: { layout: "fullscreen" },
};

export const regular = () => taskList;
export const checked = () => taskListChecked;
