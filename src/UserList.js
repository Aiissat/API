import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './UserList.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div className='list'>
            
            <ListGroup>
                {listOfUsers.map(user => (
                    <ListGroupItem key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default UserList;
