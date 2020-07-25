import React from 'react';
import { IUser } from './models/user.interface';

interface IUserProps {
    users: IUser[];
}

export const User: React.FC<IUserProps> = ({ users }) => {
    return (
        <div className="users" >
            <ul>
                {users.map((user: IUser) => (
                    <li>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </div>
    )
}