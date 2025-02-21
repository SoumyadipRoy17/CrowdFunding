import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Mock login
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
      role: 'user',
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name, email, password) => {
    // Mock register
    setUser({
      id: '1',
      name: name,
      email: email,
      role: 'user',
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};