import React from "react"
import PhoneInput from "../phone-input-component/PhoneInput"

const UserAddModal = () => {
    return (
        <div className="modal fade" id="userAddModal" tabIndex="-1" aria-labelledby="userAddModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fw-bold" id="userAddModalLabel">Add New User</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row">
                            <div className="mb-3 col-12">
                                <label htmlFor="usernameInput" className="form-label">Username</label>
                                <input type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="nameInput" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="surnameInput" className="form-label">Surname</label>
                                <input type="text" className="form-control" id="surnameInput" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="emailInput" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                                <PhoneInput />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary fw-bold">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddModal;
