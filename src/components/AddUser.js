import React from 'react';
import { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User Added Successfully');
                event.target.reset();
            }
        })

    }
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
        //console.log(newUser);
    }

    return (
        <div>
            <h1>please add a new user</h1>
            <div>
                <form className='form' onSubmit={handleAddUser}>
                    <div>
                        <div>
                            <input onChange={handleInputBlur} type="text" name="name" id="" placeholder='name' required />
                        </div>
                        <br />
                        <div>
                            <input onChange={handleInputBlur} type="email" name="email" id="" placeholder='email' required />
                        </div>
                    </div>
                    <div>
                        <input onChange={handleInputBlur} type="text" name="address" id="" placeholder='address' />
                    </div>
                    <div><input onChange={handleInputBlur} type="text" name="country" id="" placeholder='country' />
                    </div>
                    <div> <button type="submit">Add User</button></div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;