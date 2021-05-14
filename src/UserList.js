import React  , {useState ,useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState(null); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
        .catch(err=>{setError(err); console.log(error)})
    }, [])

    return (
        <div className="liste">
        <ul>  {user && true ? user.map(item => (
            
            <div className="card text-center" key={item.id}>
            <div className="card-header" style={{backgroundColor:'gold'}}>
               <h4>{item.username}</h4> 
                </div>
        <div className="card-body">
          <p className="card-text">
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.phone}</li>
            
          </p>
        </div>
        </div>  
                        ))
        : <></> }</ul>
        </div>
       
    )
}

export default UserList 
