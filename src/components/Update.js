import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Update = () => {
    const userStored = useLoaderData();
    const [user, setUser] = useState(userStored);


    const handleUpdateUser = (event) => {
        event.preventDefault();
        //console.log(user);
        fetch(`http://localhost:5000/users/${userStored._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0){
                    alert('user updated')
                    console.log(data);
                    //event.target.reset();
                }
                
            })
    }
    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
        //console.log(newUser);
    }
    return (
        <div>
            <h2>Please update :{userStored.name}</h2>

            <form className='form' onSubmit={handleUpdateUser}>
                <div>
                    <div>
                        <input onChange={handleInputChange} defaultValue={userStored.name} type="text" name="name" id="" placeholder='name' required />
                    </div>
                    <br />
                    <div>
                        <input onChange={handleInputChange} defaultValue={userStored.email} type="email" name="email" id="" placeholder='email' required />
                    </div>
                </div>
                <div>
                    <input onChange={handleInputChange} defaultValue={userStored.address} type="text" name="address" id="" placeholder='address' />
                </div>
                <div><input onChange={handleInputChange} defaultValue={userStored.country} type="text" name="country" id="" placeholder='country' />
                </div>
                <div> <button type="submit">update</button></div>
            </form>
        </div>
    );
};

export default Update;