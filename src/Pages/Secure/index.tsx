import Layout from "../../Components/Layout";
import { PrivateRoute } from "../Auth/PrivateRoute";

const SecurePage = () => {
  return (
    <Layout>
      <PrivateRoute />
      <div>this is a secure page</div>
    </Layout>
  );
};

export default SecurePage;
