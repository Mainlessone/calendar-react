import React from 'react';

import { User } from './user';
import { IMonth } from "./models/month.interface";


interface IMonthProps {
    month: IMonth;
}

export const Month: React.FC<IMonthProps> = ({ month }) => {

    const changeOfColorHandler = (month: IMonth) => {
        return {
            background: month.users.length < 3 ? 'rgb(146, 143, 143)' :
                month.users.length < 7 ? 'rgb(118, 118, 221)' :
                    month.users.length < 11 ? 'rgb(62, 146, 62)' :
                        'rgb(233, 91, 91)'
        }
    };

    return (
        <div className="block" style={changeOfColorHandler(month)}>
            <span className="month">
                <h3>{month.name}</h3>
            </span>
            <User users={month.users} />
        </div>
    )
}