import { useState } from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { LoginForm } from './LoginFom';
import { Dashbord } from './pagesFolder/Dashbord';
import { store } from './store&api/store';


export const LoginMainProv = () => {
    const adminUser = {
        userName: "admin",
        password: "admin"
    }
    const [details, setDetails] = useState({ userName: "", password: "" })
    const [user, setUser] = useState({ userName: "", password: "" })
    const login = () => {
        if (details.userName === adminUser.userName && details.password === adminUser.password) {
            setUser({
                userName: details.userName,
                password: details.password,
            })
        }
        else {
            alert("login failed");
        }
    }
    const navigate = useNavigate({
        if() {

        }
    })
    return (
        <Provider store={store}>
            <div>
                {(user.userName !== "") ? (
                    <Dashbord />
                ) : (
                    <Routes>
                        <Route path="login" element={<LoginForm login={login} details={details} setDetails={setDetails} />} />
                        <Route path="/" element={<Navigate to="login" />} />
                        <Route path="/dashbord" element={<Dashbord />} />
                    </Routes>
                )}

            </div>
        </Provider>

    )
}

