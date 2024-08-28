import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string>('');

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    if (newToken) {
      sessionStorage.setItem('@TaskList:token', newToken); 
    } else {
      sessionStorage.removeItem('@TaskList:token');
    }
  };

  const logout = () => {
    setTokenState('');
    sessionStorage.removeItem('@TaskList:token');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
