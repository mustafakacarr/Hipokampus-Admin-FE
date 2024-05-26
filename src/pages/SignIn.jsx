import React from "react"

const SignIn = () => {
    return (
        <div className="d-flex align-items-center min-vh-100">
            <form className="sign-in-form w-100 m-auto" action="/control-panel">
                <img className="mb-3" src="https://hipokampus.com.tr/images/ikonlar/hipokampus-kurumsal.webp"
                    alt="Hipokampus logo" width="75" height="70" />
                <h1 className="h3 mb-3 fw-bold">Hipokampüs<br />Kontrol Paneli</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" id="usernameInput" placeholder="Kullanıcı adınızı giriniz" />
                    <label htmlFor="usernameInput">Kullanıcı Adı</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Şifrenizi giriniz" />
                    <label htmlFor="passwordInput">Şifre</label>
                </div>
                <button className="btn btn-primary w-100 py-2 fw-bold" type="submit">Giriş yap</button>
                <p className="mt-5 mb-3 text-body-secondary">&copy; Hipokampus 2024</p>
            </form>
        </div>
    );
};

export default SignIn;
