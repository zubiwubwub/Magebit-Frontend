import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../../styles/List.css';

function List() {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/emails').then((data) => {
      setEmailList(data.data);
      console.log(emailList);
    });
  }, []);

  const deleteEmail = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  };
  const sortByAddressHandler = () => {
    Axios.get(`http://localhost:3000/emails/byaddress`).then((data) =>
      setEmailList(data.data)
    );
  };
  const sortByTagHandler = (provider) => {
    Axios.get(`http://localhost:3000/emails/group/${provider}`).then((data) =>
      setEmailList(data.data)
    );
  };

  return (
    <div className='ListPage'>
      <table className='list-table'>
        <thead>
          <tr>
            <th>Address</th>
            <th>Provider</th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((val, key) => {
            return (
              <tr key={Math.random()}>
                <th className='address'>
                  <p>{val.address}</p>
                </th>
                <th className='id'>
                  <p>{val.provider}</p>
                </th>
                <th className='btn-delete'>
                  <button
                    className='button'
                    onClick={() => {
                      deleteEmail(val.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='btn-container'>
        <Link className='button' to='/'>
          Home
        </Link>
        <button className='button' onClick={sortByAddressHandler}>
          Sort by address
        </button>

        {emailList.map((val, key) => {
          return (
            <button key={val.id} className='button' onClick={sortByTagHandler}>
              {val.provider}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default List;
