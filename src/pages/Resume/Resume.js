import { Header } from "../../components/Header/Header";

export function Resume() {
  const resume = document.createElement("main");
  //resume.append(Header("page-2"));
  const loadfooter = () => {
    fetch("../src/pages/Resume/resume.html")
      .then((r) => {
        return r.text();
      })
      .then((s) => {
        const p = new DOMParser();

        const d = p.parseFromString(s, "text/html");
        console.log(d);
      });
  };
  console.log(loadfooter());
  // resume.innerHTML += "<h1>Mon CV</h1>";
  resume.innerHTML = loadfooter();

  return resume;
}
