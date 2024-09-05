
const LoginForm = ({ onToggle }) => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                Login
            </button>
            <p className="text-center">
                {`Don't have an account?`}
                <button onClick={onToggle} className="text-indigo-500 underline">
                    Register
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
