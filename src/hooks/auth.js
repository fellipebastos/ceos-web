import React, { useState, useCallback, createContext, useContext } from 'react';
import api from '../services/api';

const storageConfig = {
  token: '@Ceos:token',
  user: '@Ceos:user',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem(storageConfig.token);
    const user = localStorage.getItem(storageConfig.user);

    return token && user ? { token, user: JSON.parse(user) } : {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/login', { email, password });

    const { token, user } = response.data;

    localStorage.setItem(storageConfig.token, token);
    localStorage.setItem(storageConfig.user, JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(storageConfig.token);
    localStorage.removeItem(storageConfig.user);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
