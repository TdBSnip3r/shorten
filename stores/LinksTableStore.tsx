import { create } from "zustand";

interface LinksTableStore {
  page: number;
  limit: number;
  totalPage: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setTotalPage: (totalPage: number) => void;
}

export const useLinksTableStore = create<LinksTableStore>((set) => ({
  page: 1,
  limit: 5,
  totalPage: -1,
  setPage: (page) => set({ page }),
  setLimit: (limit) => {
    set({ page: 1 })
    set({ limit })
  },
  setTotalPage: (totalPage) => set({ totalPage }),
})); 