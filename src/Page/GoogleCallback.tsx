import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GoogleCallback() {
    const history = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>({});
    const [user, setUser] = useState(null);
    const location = useLocation();

    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    useEffect(() => {
        fetch(`http://localhost:80/api/login/google/callback${location.search}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, []);

    useEffect(() => {
        fetchUserData();
    }, [data]);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    function fetchUserData() {
        fetch(`http://localhost:80/api/user`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + data.access_token,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                setUser(user);
                user.id && window.localStorage.setItem('user-id', user.id);
                user.id && window.localStorage.setItem('user-token', data.access_token);
                user.name && window.localStorage.setItem('user-name', user.name);
                user.email && window.localStorage.setItem('user-email', user.email);
                user.id && history('/');
            });
    }

    if (loading) {
        return <DisplayLoading />;
    } else {
        if (user != null) {
            // return <DisplayData data={user} />;
        } else {
            return (
                <div>
                    {/*<DisplayData data={data} />*/}
                    <div style={{ marginTop: 10 }}>{/*<button onClick={fetchUserData}>Fetch User</button>*/}</div>
                </div>
            );
        }
    }
}

function DisplayLoading() {
    return <div>Loading....</div>;
}

// function DisplayData(data) {
//     return (
//         <div>
//             <samp>{JSON.stringify(data, null, 2)}</samp>
//         </div>
//     );
// }

export default GoogleCallback;
