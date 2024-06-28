import { create } from "zustand";

type State = {
  domain: string;
};

type Action = {
  updateDomain: (newDomain: State["domain"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  domain: "",
  updateDomain: (newDomain) => set(() => ({ domain: newDomain })),
}));
