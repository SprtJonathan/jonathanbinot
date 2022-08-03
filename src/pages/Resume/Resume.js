import { Header } from "../../components/Header/Header";

export function Resume() {
  const resume = document.createElement("main");
  //resume.append(Header("page-2"));
  resume.innerHTML += "<h1>Mon CV</h1>";
  return resume;
}
