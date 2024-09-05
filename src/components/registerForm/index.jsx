import { FcGoogle } from "react-icons/fc";
import Input from "../ui/input";
import { useRegisterFormController } from "./registerForm.controller";

const RegisterForm = () => {
    const { registerUser, handleUserInput, registerFormData } = useRegisterFormController()
    return (
        <>
            <h2 className="text-3xl font-semibold text-center">Register</h2>
            <p className="mt-2 text-center text-gray-600">Create a new account by filling in the form below.</p>
            <form onSubmit={registerUser} className="mt-6">
                <Input
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    onChange={handleUserInput}
                />
                <Input
                    label="Email"
                    type="email"
                    value={registerFormData?.email}
                    onChange={handleUserInput}
                    placeholder="you@example.com"
                />
                <Input
                    label="Password"
                    type="password"
                    value={registerFormData?.password}
                    onChange={handleUserInput}
                    placeholder="********"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-pink-700 focus:outline-none"
                >
                    {`Register`}
                </button>
                <div className="self-center flex gap-4 items-center mt-4 cursor-pointer" >
                    <FcGoogle className="cursor-pointer text-xl" />
                    <span className="underline text-blue-600 text-xs">Already a user? Login</span>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
