import React from "react"

const SignIn = () => {
    return (
        <div className="d-flex align-items-center min-vh-100">
            <form className="sign-in-form w-100 m-auto" action="/control-panel">
                <h1 className="h3 mb-3 fw-bold">Hipokampus <br /> Control Panel</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" id="usernameInput" placeholder="Enter username" />
                    <label htmlFor="usernameInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Enter password" />
                    <label htmlFor="passwordInput">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary">&copy; Hipokampus 2024</p>
            </form>
        </div>
    );
};

export default SignIn;
