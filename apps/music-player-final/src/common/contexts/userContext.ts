import { createContext } from 'react';

export type User = {
  name: string;
  avatar: string;
  level: number;
}

export const userContext = createContext<User | null>(null);

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
