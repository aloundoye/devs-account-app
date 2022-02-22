import { useState } from "react";
interface Profile {
  first_name: string;
  last_name: string;
  img: string;
  trackerOnline: boolean;
  hourly_rate: number;
  timezone: string;
}

interface User {
  first_name: string | null;
  last_name: string | null;
}
type UserTuple = [User, (Profile) => void];
export const useUser = (): UserTuple => {
  const [user, setUserInternal] = useState((): User => {
    const user = {
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
    };
    return user;
  });

  const setUser = (newUser: Profile) => {
    localStorage.setItem("first_name", newUser.first_name);
    localStorage.setItem("last_name", newUser.last_name);
    setUserInternal(newUser);
  };

  return [user, setUser];
};
