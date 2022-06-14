import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ClientDisplay from "./pages/ClientDisplay";
import CreateClient from "./pages/CreateClient";
import EditClient from "./pages/EditClient";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clientes" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path=":id" element={<ClientDisplay />} />
                    <Route path="crear" element={<CreateClient />} />
                    <Route path="editar/:id" element={<EditClient />} />
                </Route>
                <Route path="*" element={<Navigate to="/clientes" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
