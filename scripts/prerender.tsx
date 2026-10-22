import { readFileSync, writeFileSync } from "node:fs";
import { renderToString } from "react-dom/server";
import Home from "../client/src/pages/Home";

const indexFile = "dist/public/index.html";
const html = readFileSync(indexFile, "utf8");
const body = renderToString(<Home />);
writeFileSync(indexFile, html.replace('<div id="root"></div>', `<div id="root">${body}</div>`));
console.log("Página de inicio prerenderizada en español.");
