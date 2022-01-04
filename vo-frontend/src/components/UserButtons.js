// You can create some function components and use it like:



export const LogoutBtn = (props) => {
    return (<div className="authentication">
        <button >Logout </button>
    </div>)
}

export const LoginBtn = (props) => {
    return (
        <a href='http://localhost:8888'>
            <button>Login</button>
        </a>)
}

export const AuthBtn = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LogoutBtn />;
    }
    return <LoginBtn />;
}
// and then inside render method use it like:

// render() {
//     const { isLoggedIn } = this.state;
//     return <AuthBtn isLoggedIn={isLoggedIn} />;
// }

