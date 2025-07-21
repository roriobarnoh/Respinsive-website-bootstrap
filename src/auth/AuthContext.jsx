import React, { createContext, useContext, useState, useEffect, Children } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token') || '')

    useEffect(() =>{
        if(token){
            axios.defaults.headers.common['Authorization'] =  `Bearer ${token}`;
        }else{
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    const login = async (email, password) =>{
        const res = await axios.post('http://localhost:5000/login', {email, password})
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user)
    }
    const register = async (formData) =>{
        const res = await axios.post('http://localhost:5000/register', formData)
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
        setUser(res.data.user)
    }
    const logout =() =>{
        setUser(null);
        setToken('')
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)