import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import TokenContext from "../contexts/tokenContext";
import Cadastro from ".components/Cadastro";
import Login from ".components/Login";
import Hoje from ".components/Hoje";
import Historico from ".components/Historico";
import Habitos from ".components/Habitos";


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
                    <Route path="/hisotrico" element={<Historico />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                </Routes>
            </TokenContext.Provider>    
            </BrowserRouter>

  );
}