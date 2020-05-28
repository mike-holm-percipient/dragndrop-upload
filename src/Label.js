import M from "./Map";

M.Label = class Label {
  foo = () => {
    console.log("label foo");
  };
};

M.label = new M.Label();
