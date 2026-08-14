import React from 'react';

function UserGreeting(props){
    const isLoggedIn = props.isLoggedIn;

    return(
        <div>

            <h1>
                {isLoggedIn ? 'Welcome back!' : 'Please sign up.'}
            
            </h1>
            {isLoggedIn && <button>Logout</button>
            }

            {isLoggedIn && <button>Register Now</button>}

        </div>

    );
}

export default UserGreeting;