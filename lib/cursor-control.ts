import { create } from 'zustand';

export type CursorVarient = 'default' | 'link' | 'text';
export type CursorType = {
  varient: CursorVarient;
  setVarient: (varient: CursorVarient) => void;
  setDefault: () => void;
  setLink: () => void;
  setText: () => void;
};

export const CursorController = create<CursorType>((set, get) => {
  return {
    varient: 'default',
    setVarient: (varient) => set(() => ({ varient })),
    setDefault: () => set(() => ({ varient: 'default' })),
    setLink: () => set(() => ({ varient: 'link' })),
    setText: () => set(() => ({ varient: 'text' })),
  };
});
