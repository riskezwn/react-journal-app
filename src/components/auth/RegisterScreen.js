import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
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
            console.log("Formulario correcto");
        }
    };

    const isFormValid = () => {
        if (name.trim().lenght === 0) {
            console.log("Name is required");
            return false;
        } else if (!validator.isEmail(email)) {
            console.log("Email is not valid");
            return false;
        } else if (password !== password2 || password.lenght < 5){
            console.log("Password should be at least 6 characters and match each other");
            return false;
        }
        return true;
    };

    return (
        <div>
            <h2 className="auth__title">Register</h2>
            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">Hola mundo</div>
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
