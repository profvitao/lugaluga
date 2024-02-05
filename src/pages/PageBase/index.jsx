import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
function PageBase() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default PageBase;
