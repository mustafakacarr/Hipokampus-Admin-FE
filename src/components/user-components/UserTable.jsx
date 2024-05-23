import React from "react"
import userDummyData from "../../dummy-data/userDummyData.json"
import UserAddModal from "./UserAddModal"
import UserRemoveModal from "./UserRemoveModal"

const UserTable = () => {
    return (
        <>
            <UserAddModal />
            <UserRemoveModal />
            <button className="mb-2 btn btn-success fw-bold" data-bs-toggle="modal" data-bs-target="#userAddModal">
                + Add New User
            </button>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr style={{ whiteSpace: "nowrap" }}>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userDummyData.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td style={{ whiteSpace: "nowrap" }}>
                                        <button className="btn btn-outline-primary me-1 fw-bold">
                                            Edit
                                        </button>
                                        <button className="btn btn-outline-danger fw-bold"
                                            data-bs-toggle="modal" data-bs-target="#userRemoveModal">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserTable;
