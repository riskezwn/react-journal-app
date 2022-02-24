import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <div>
            <h2 className="auth__title">Register</h2>
            <form>
                <input
                    type="text"
                    placeholder="John"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="email"
                    placeholder="john@doe.com"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
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
