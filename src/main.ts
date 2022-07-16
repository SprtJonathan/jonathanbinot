import { Homepage } from "./pages/Homepage/homepage";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.append(Homepage());
