import { createElementFromTemplate } from "../../components/helpers";
import { resumeHeaderFR, resumeContentFR } from "./views/resumeUI_fr";
import { resumeHeaderEN, resumeContentEN } from "./views/resumeUI_en";

export function Resume() {
  const lang = localStorage.getItem("language");
  let resumeHeader, resumeContent;

  if (lang === "fr") {
    resumeHeader = resumeHeaderFR;
    resumeContent = resumeContentFR;
  } else {
    resumeHeader = resumeHeaderEN;
    resumeContent = resumeContentEN;
  }

  const resume = document.createElement("main");
  resume.setAttribute("class", "resume");

  if (lang == "fr") {
  }

  resume.appendChild(resumeHeader);
  resume.appendChild(resumeContent);

  return resume;
}
