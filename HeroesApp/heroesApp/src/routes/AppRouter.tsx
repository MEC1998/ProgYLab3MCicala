import { Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/Login/Login"
import { useAppSelector } from "../hooks/redux";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {

    const isLogged=useAppSelector(state=>state.auth.isLogged)
    console.log(isLogged)
    return (
        <>
            <Routes>
            {   
                isLogged ? <Route path="/*" element={<ProtectedRoutes>
                </ProtectedRoutes>}></Route>
                : <Route path="/" element= {<Login/>}/>
            }
        </Routes>
        </>
    );
};
