import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from './pages/auth/Login.jsx';
import { verifyToken } from "./pages/auth/authentication.js";


export default function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        async function verifyJWT() {
            const response = await verifyToken();
            setIsAuthenticated(response);
        }
        verifyJWT();
    }, []);

    if (isAuthenticated === null) {
        return;
    }

    return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <h1>hello world</h1> : <Navigate to="/auth" />} />

        <Route path="/auth" element={<Login />} />
      </Routes>
    </Router>
    );
}