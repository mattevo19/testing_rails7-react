import { render } from "react-dom";
import r from "components/htm_create";

import TopAninme from "./top_anime";
import Hello from "./hello";
import TimeTeller from "./clock";

render(
  r`
  <div className="flex flex-col text-center">
    <${TimeTeller} /> <${Hello} /> <${TopAninme} />
  </div>`,
  document.getElementById("root")
)
