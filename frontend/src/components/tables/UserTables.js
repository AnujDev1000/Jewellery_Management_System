import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"
import UserEditForm from '../forms/UserEditForm'

const UsersTable = ({users, setLoading}) => {
    const [updateUser, setUpdateUser] = useState({})
    const [type, setType] = useState("")
    const keys = Object.keys(users[0]).filter(key => key != "_id" && key != "__v" && key != "password" && key != "otp"  && key != "isAdmin" && key != "isActive")    

    const handleUser = (t, user) => {
        setType(t)
        setUpdateUser(user)
    }

    return (
        <>
            <UserEditForm updateUser={updateUser} setUpdateUser={setUpdateUser} setLoading={setLoading} type={type} setType={setType} />
            <table className="table table-sm table-borderless m-0">
                <thead>
                    <tr className="">
                        <th scope="col">#</th>
                        {keys.map((key,i) => <th key={i} scope="col">{key}</th>)}
                        <th scope="col">Type</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i) => {
                        return (
                            <tr key={i} className="">
                                <td scope="row" className="fw-bold">{i}</td>
                                {/* {keys.map(key => <td>{}</td>)} */}
                                <td className="text-truncate">{user.firstName}</td>
                                <td className="text-truncate">{user.lastName}</td>
                                <td className="text-truncate">{user.email}</td>
                                <td className="text-truncate">{user.createdAt.split("T")[0]}</td>
                                <td className="text-truncate">{user.updatedAt.split("T")[0]}</td>
                                <td className="text-truncate">
                                    {user.isAdmin ?
                                    <span className="badge bg-primary cursor-pointer"  data-bs-toggle="modal" data-bs-target="#editModal" onClick={e => handleUser("access", user)}>Admin</span>
                                    :
                                    <span className="badge bg-info cursor-pointer"  data-bs-toggle="modal" data-bs-target="#editModal" onClick={e => handleUser("access", user)}>Employee</span>}
                                </td>
                                <td className="text-truncate">
                                    {user.isActive ?
                                    <span className="badge bg-danger cursor-pointer" data-bs-toggle="modal" data-bs-target="#editModal" onClick={e => handleUser("state", user)} >Active</span>
                                    :
                                    <span className="badge bg-danger cursor-pointer" data-bs-toggle="modal" data-bs-target="#editModal" onClick={e => handleUser("state", user)} >Deactive</span>}
                                </td>
                                <td className="text-truncate">
                                    <button className="btn btn-link btn-sm p-0 me-2" >
                                        <FaEdit className="fs-5"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}     
                                          
                </tbody>
            </table>
        </>
    )
}

export default UsersTable
