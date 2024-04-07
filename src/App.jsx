import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        console.log('sayfa yüklendi')
        getUsers();
    }, []);



    const getUsers = async () => {
        setLoading(true);
        axios.get(`${baseUrl}/users`)
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
                setLoading(false);
            }).catch((error) => {
            console.log(error);
            setLoading(false);
        })

    }

    return (
        <>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App