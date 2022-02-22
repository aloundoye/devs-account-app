import { lazy } from "react";

import Layout from "../../Components/Layout";
import { UserInformations } from "../../Components/HomePage/userInformations";
import { useUser } from "../Auth/useUser";

const Auth = lazy(() => import("../../Modules/Auth"));

const HomePage = () => {
  const [user] = useUser();
  return (
    <Layout>
      {user && <UserInformations user={user} />}
      {user.first_name === null && <Auth />}
    </Layout>
  );
};

export default HomePage;
