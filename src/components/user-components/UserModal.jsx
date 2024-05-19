import React from "react"
import PhoneInput from "../phone-input-component/PhoneInput"

const UserModal = () => {
    return (
        <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="userModalLabel">Add New User</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="usernameInput" class="form-label">Username</label>
                                <input type="text" class="form-control" id="usernameInput" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="nameInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="surnameInput" class="form-label">Surname</label>
                                <input type="text" class="form-control" id="surnameInput" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="emailInput" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="passwordInput" class="form-label">Password</label>
                                <input type="password" class="form-control" id="passwordInput" />
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" />
                            </div>
                            <div class="mb-3">
                                <label for="phoneInput" class="form-label">Phone Number</label>
                                <PhoneInput />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
