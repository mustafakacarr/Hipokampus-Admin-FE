import React from "react";

const UserRemoveModal = () => {
    return (
        <>
            <div className="modal fade" id="userRemoveModal" tabIndex="-1" aria-labelledby="userRemoveModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Are you sure you want to remove the user?</h5>
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button"
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
                                data-bs-dismiss="modal"
                            >Cancel</button>
                            <button type="button"
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 fw-bold"
                            >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRemoveModal
