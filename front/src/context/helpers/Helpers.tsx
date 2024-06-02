export interface AuthContextProps {
  token: string | null; 
  setToken: (token: string | null) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}