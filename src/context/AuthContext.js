import {createContext, useState} from "react"
import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    
    //로그인 여부 확인
    const isAuthenticated = () => {
        var Customer = clayful.Customer;
        var options = {
            customer: localStorage.getItem("accessToken"),
        };

        Customer.isAuthenticated(options, function (err, result) {
            if (err) {
                console.log(err.code);
                setIsAuth(false);
            } 
            var data = result.data;
            if(data.authenticated) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });
    };

    //로그아웃
    const signOut = () => {
        setIsAuth(false);
        localStorage.removeItem("accessToken");
        navigate("/login");
    }

    const AuthcontextData = {
        isAuth,
        isAuthenticated,
        signOut,
    }
    return (
        <AuthContext.Provider value={AuthcontextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;