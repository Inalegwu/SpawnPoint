import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const globalState = create<GlobalState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((prev) => ({
          ...prev,
          theme: prev.theme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'global-state',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
