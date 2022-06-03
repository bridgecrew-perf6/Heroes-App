import {Routes, Route, BrowserRouter} from "react-router-dom";

import { DashBoardRoutes } from './DashBoardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } 
                />

                <Route path="/*" element={
                        <PrivateRoute>
                            <DashBoardRoutes/>
                        </PrivateRoute>
                    }
                />
                {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
