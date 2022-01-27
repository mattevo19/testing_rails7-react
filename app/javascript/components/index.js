import { render } from "react-dom";
import r from "components/htm_create";
import Hello from "./hello";

const name = "matt"
render(
  r`<${Hello} name=${name} />`,
  document.getElementById("root")
)
