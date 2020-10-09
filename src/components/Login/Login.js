import React, { useContext, useState } from 'react';
import logo from '../../../src/images/logo.png';
import './Login.css';
import google from '../../../src/images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        event: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const loginWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser);
                authToken();
            }).catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const authToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                sessionStorage.setItem('authToken', idToken)
                history.replace(from)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div className=" loginBox">
                <img id='loginLogo' src={logo} alt="" />
                <div className="login">
                    <div className="loginWith">
                        <h4 className="text-center">Login here</h4>
                        <div onClick={loginWithGoogle} className="google d-flex">
                            <img id='googleLogo' src={google} alt="" />
                            <p className="continue">Continue with Google</p>
                        </div>
                    </div>
                    <p className="text-center">Don't have an account? <a href="">Create account</a></p>
                </div>
            </div>
        </>
    );
};

export default Login;