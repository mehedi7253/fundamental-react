import React, {Component} from "react"
import { useParams } from "react-router-dom"

const User = () => {
    const params = useParams();
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {params.username}</p>
        </div>
    )
}

export default User;