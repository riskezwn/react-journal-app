import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError, loading } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "riskezwn",
        email: "riskezwn@gmail.com",
        password: "123456",
        password2: "123456",
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length < 1) {
            dispatch(setError("Name is required"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        } else if (password.length < 5) {
            dispatch(setError("Password must be 6 characters long"));
            return false;
        } else if (password !== password2) {
            dispatch(setError("Passwords must match"));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <div>
            <h2 className="auth__title">Register</h2>
            <form onSubmit={handleRegister}>
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}
                <input
                    type="text"
                    placeholder="John"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="john@doe.com"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={password2}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={loading}
                >
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>
            </form>
        </div>
    );
};
