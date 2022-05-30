import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import TokenContext from "../contexts/TokenContext";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Hoje from "./Hoje";
import Historico from "./Historico";
import Habitos from "./Habitos";


export default function App(){

    const [token, setToken] = useState("");
    const [usuarioLogado, setUsuaruiLogado] = useState("");
    const [porcentagemConcluidos, setPorcentagemConcluidos] = useState(0);

    

  return(
            <BrowserRouter>
            <TokenContext.Provider value = {{token, setToken, usuarioLogado, setUsuaruiLogado, porcentagemConcluidos, setPorcentagemConcluidos}}>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/historico" element={<Historico />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                </Routes>
            </TokenContext.Provider>    
            </BrowserRouter>

  );
}