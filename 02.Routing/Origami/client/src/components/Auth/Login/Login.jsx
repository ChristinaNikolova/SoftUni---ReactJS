import '../../shared/styles/RegisterLogin.css';

function Login() {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;