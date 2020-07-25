import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';

import { Month } from './month/month';
import { IMonth } from './month/models/month.interface';
import { IUser } from './month/models/user.interface';



const App: React.FC = (props) => {

  const [months, setMonths] = useState<IMonth[]>([]);

  const url: string = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

  useEffect(() => {

    const fetchData = async () => {

      const users = (await axios.get(url)).data;
      const namesOfMonths = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];

      setMonths(
        namesOfMonths.map((month: string) => {
          return {
            name: month,
            users: users.filter((user: IUser) => {
              const usersDob = moment(user.dob).format('MMMM');
              return usersDob === month;
            })
          }
        })
      )

    }
    fetchData();
  }, []);



  return (
    <div className="container-fluid">
      <div className="calendar">
        {months.map((month: IMonth) => (
          <Month month={month} />
        )
        )}
      </div>


    </div>
  )
}

export default App;
