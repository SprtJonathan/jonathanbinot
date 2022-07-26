import { Header } from "../../components/Header/Header";

export function Resume() {
  const resume = document.createElement("main");
  resume.append(Header("resume"));
  resume.innerHTML += "<h1>Mon CV</h1>";
  return resume;
}
