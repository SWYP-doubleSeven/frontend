import { atom } from "jotai";

export const countMain = atom(0);
export const mainChoice = atom({
  item: "",
  price: 0,
});
