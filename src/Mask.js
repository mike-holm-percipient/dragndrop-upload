import M from "./Map";

M.Mask = class Mask {
  foo = () => {
    console.log("mask foo");
  };
};

M.mask = new M.Mask();
