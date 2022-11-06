
import show from "./show.events";
import create from "./create.events";
import edit from "./edit.events";
import list from "./list.events";

export default { 
  name: "events",
  label: "events",
  hide: false,
  create,
  edit,
  list,
  show,
}