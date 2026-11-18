import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { TOKEN_KEY } from '../api/client';
import { fetchMe, loginUser, registerUser } from '../api/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore the session on first load
  useEffect(() => {
    if (!localStorage.getItem(TOKEN_KEY)) {
      setLoading(false);
      return;
    }
    fetchMe()
      .then(setUser)
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setLoading(false));
  }, []);

  const startSession = ({ user, token }) => {
    localStorage.setItem(TOKEN_KEY, token);
    setUser(user);
  };

  const login = useCallback(async (data) => startSession(await loginUser(data)), []);
  const register = useCallback(async (data) => startSession(await registerUser(data)), []);
  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
