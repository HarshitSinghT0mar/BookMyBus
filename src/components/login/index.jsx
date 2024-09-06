import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../ui/button/primaryButton";
import Input from "../ui/input";
import { Link } from "react-router-dom";
import { useLoginController } from "./login.controller";

const LoginForm = () => {
    const { handleUserInput, loginData, isLoading,loginUser } = useLoginController()

    return (
        
        <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md border border-solid">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-center">{`Login`}</h2>
                    <p className="text-center text-gray-600 text-xs mt-1">{`Enter your email and password to access your account.`}</p>
                </div>
                <form className="">
                    <Input
                        label="Email"
                        type="email"
                        value={loginData?.email}
                        name='email'
                        onChange={handleUserInput}
                        placeholder="you@example.com"
                    />
                    <Input
                        label="Password"
                        type="password"
                        name='password'
                        value={loginData?.password}
                        onChange={handleUserInput}
                        placeholder="********"
                    />
                    <PrimaryButton onClick={loginUser} isLoading={isLoading}>
                        {!isLoading ? <span className="text-xs">{`Login`}</span> : <span className="text-xs">{`Loading...`}</span>}
                    </PrimaryButton>
                </form>
                <div className="self-center flex gap-4 items-center mt-2">
                    <FcGoogle className="cursor-pointer text-xl" />
                    <Link to={'/signup'}>
                        <span className="underline text-blue-600 text-xs cursor-pointer">{`Signup here`}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
