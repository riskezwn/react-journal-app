import React from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { msgError, loading } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: "riskezwn@gmail.com",
        password: "123456",
    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    };

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    return (
        <div>
            <h2 className="auth__title">Login</h2>
            <form
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__fast"
            >
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}
                <input
                    type="email"
                    placeholder="john@doe.com"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks:</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </div>
    );
};
