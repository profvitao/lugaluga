import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Login from "./pages/Login";
import PageBase from "./pages/PageBase";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import FaleConosco from "./pages/FaleConosco";
import SolicitacaoAluguel from "./pages/SolicitacaoAluguel";
import Acompanhamento from "./pages/Acompanhamento";
import Atendimento from "./pages/Atendimento";
function AppRoutes() {
  return (
    <BrowserRouter basename={"https://github.com/profvitao/lugaluga"}>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route path="/index" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/produtos" element={<Produtos />}></Route>
          <Route path="/faleconosco" element={<FaleConosco />}></Route>
          <Route path="/solicitacao" element={<SolicitacaoAluguel />}></Route>
          <Route path="/acompanhamento" element={<Acompanhamento />}></Route>
          <Route path="/atendimento" element={<Atendimento />}></Route>
          <Route path="*" element={<h1>Erro</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
