import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

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
        
    };

    return (
        <div>
            <h2 className="auth__title">Register</h2>
            <form onSubmit={handleRegister}>
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
