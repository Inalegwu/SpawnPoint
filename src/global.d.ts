declare global {
  export type GlobalState = {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
  };
}

export {};
