import { useState } from "react";

type TokenTuple = [string | null, (string) => void];
export const useToken = (): TokenTuple => {
  const [token, setTokenInternal] = useState((): string | null => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
