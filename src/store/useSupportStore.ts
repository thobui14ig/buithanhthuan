import { create } from 'zustand';

export interface SupportItem {
  id: number;
  name: string;
  content: string;
  amount: number;
}

interface SupportState {
  data: SupportItem[];
  loading: boolean;

  fetchSupports: () => Promise<void>;
  addSupport: (payload: {
    name: string;
    content: string;
    amount: number;
  }) => Promise<void>;
}

export const useSupportStore = create<SupportState>((set) => ({
  data: [],
  loading: false,

  fetchSupports: async () => {
    set({ loading: true });
    try {
      const res = await fetch('https://thotool.com/api/user-support');
      const data = await res.json();
      set({ data });
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },

  addSupport: async (payload) => {
    await fetch('https://thotool.com/api/insert-user-support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Sau khi insert → load lại list
    await useSupportStore.getState().fetchSupports();
  },
}));
