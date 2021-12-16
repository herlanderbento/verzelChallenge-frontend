import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface IUser {
  name: string;
  email: string;
}

interface SignInCredentials {
  password: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContextData {
  user: IUser;
  token: string;
  signIn(data: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("DvCourseToken");
    const user = localStorage.getItem("DvCourserUser");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  async function signIn(data: SignInCredentials) {
    const response = await api.post("/sessions", data);

    const { token, user } = response.data;

    localStorage.setItem("DvCourseToken", token);
    localStorage.setItem("DvCourserUser", JSON.stringify(user));

    setData({
      token,
      user,
    });
  }

  function signOut() {
    localStorage.removeItem("DVCourseToken");
    localStorage.removeItem("DvCourserUser");

    setData({} as IAuthState);
  }
  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, token: data.token, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
