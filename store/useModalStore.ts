import { create } from "zustand";

export type ModalType = "contact" | "discuss" | "audit" | "reels" | null;

interface ModalState {
  activeModal: ModalType;
  tariffName: string | null;
  openModal: (type: ModalType, tariff?: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeModal: null,
  tariffName: null,
  openModal: (type, tariff) =>
    set({ activeModal: type, tariffName: tariff || null }),
  closeModal: () => set({ activeModal: null, tariffName: null }),
}));
