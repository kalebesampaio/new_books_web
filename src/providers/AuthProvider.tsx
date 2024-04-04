import { ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import { bookAPI } from "../services/api";
interface ListProvaiderProps {
  children: ReactNode;
}

export interface DataLogin {
  email?: string;
  password?: string;
}

interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  birthday: string;
  admin: boolean;
}
export interface IUserRegister {
  email?: string;
  name?: string;
  password?: string;
  birthday?: string;
  admin?: boolean;
  confirmPassword?: string;
}

export interface IUserContext {
  user: IUser | null;
  signIn: (data: DataLogin) => void;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  registerUser: (data: IUserRegister) => void;
  logout: () => void;
  patchUser: (data: IUserRegister) => void;
}
export interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export const AuthContext = createContext({} as IUserContext);

export const AuthProvider = ({ children }: ListProvaiderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const tokenLocal = localStorage.getItem("@TOKEN");
  const [token, setToken] = useState<string>(tokenLocal ? tokenLocal : "");

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = window.location.pathname;
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");

    const getUser = async () => {
      try {
        setLoading(true);

        const { data } = await bookAPI.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token && userId) {
      getUser();
    }
  }, []);

  const registerUser = async (payload: IUserRegister) => {
    try {
      await bookAPI.post("/users", payload);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível cadastrar o usuário");
    }
  };

  const patchUser = async (payload: IUserRegister) => {
    const userId = localStorage.getItem("@USERID");
    try {
      await bookAPI.patch(`users/${userId}`, payload, authHeader);
      const { data } = await bookAPI.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário atualizado com sucesso!");
      setUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar o usuário");
    }
  };

  const signIn = async (data: DataLogin) => {
    try {
      const response = await bookAPI.post("login", data).catch((err) => {
        console.log(err);
      });
      const { token } = response!.data;
      setToken(token);
      bookAPI.defaults.headers.common.authorization = `Bearer ${token}`;

      const { sub }: IToken = jwtDecode(token);

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", sub);

      const { data: dataRes } = await bookAPI.get(`users/${sub}`);

      setUser(dataRes);

      const toNavigate = location.state?.pathname || "/";

      navigate(toNavigate);
      toast.success("Login realizado com sucesso!");
    } catch (error) {
      toast.error("Email ou senha inválida.");
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        loading,
        setUser,
        registerUser,
        logout,
        patchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
