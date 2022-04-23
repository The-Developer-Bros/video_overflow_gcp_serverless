import React from 'react'

function Login() {
    return (
        <div>
            {/*  Firebase login */}
            <div>
                <h1>Login</h1>
                <p>
                    <a href="/auth/google">Login with Google</a>
                    This will redirect you to Google login page.
                </p>
            </div>
        </div>
    )
}

export default Login
