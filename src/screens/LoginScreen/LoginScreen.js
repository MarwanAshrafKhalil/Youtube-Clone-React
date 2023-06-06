import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import'./loginScreen.scss'


function LoginScreen(props) {

    const dispatch = useDispatch()
    const accessToken = useSelector(state=> state.auth.accessToken)
    const handleLogin = () =>{
        dispatch(login())
    }

    const navigate = useNavigate()

    useEffect(()=>{
        if(accessToken){
            navigate('/')
        }
    },[accessToken, navigate])

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Light_logo_of_YouTube_%282015-2017%29.svg/1024px-Light_logo_of_YouTube_%282015-2017%29.svg.png"
                 alt="" />
                 <button onClick = {handleLogin}> Login with google</button>
                <p>This Project is made using YOutube DATA API</p>
            </div>
        </div>
    );
}

export default LoginScreen;