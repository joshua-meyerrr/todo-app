import "./taskList.css";
import taskList from "./taskList.html";
import taskListChecked from "./taskListChecked.html";
import taskListChecked2 from "./taskListChecked2.html";

export default {
  title: "Components/List",
  parameters: { layout: "fullscreen" },
};

export const regular = () => taskList;
export const checked = () => taskListChecked;
export const checked2 = () => taskListChecked2;
