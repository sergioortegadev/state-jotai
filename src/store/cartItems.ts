import { atom } from "jotai";
import { type Product } from "../types";

export const prodsAtom = atom<Product[]>([]);
export const cartItemsAtom = atom<Product[] | []>([]);
export const totalAtom = atom(0);
export const cartItemsNumberAtom = atom(0);
export const showCartAtom = atom(false);
