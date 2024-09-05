import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../ui/button/primaryButton";
import Input from "../ui/input";

const LoginForm = () => {

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold text-center">{`Login`}</h2>
            <p className="text-center text-gray-600">{`Enter your email and password to access your account.`}</p>
            <form className="">
                <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="********"
                />
                <PrimaryButton onClick={() => { }}>
                    <span className="text-sm">{`Login`}</span>
                </PrimaryButton>
            </form>
            <div className="self-center flex gap-4 items-center mt-4">
                <FcGoogle className="cursor-pointer text-xl" />
                <span className="underline text-blue-600 text-xs cursor-pointer">{`Signup here`}</span>
            </div>
        </div>
    );
};

export default LoginForm;
