import { FcGoogle } from "react-icons/fc";
import Input from "../ui/input";
import { useRegisterFormController } from "./registerForm.controller";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/button/primaryButton";

const RegisterForm = () => {
    const { registerUser, handleUserInput, registerFormData } = useRegisterFormController()
    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md border border-solid">
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-center">{`Register`}</h2>
                <p className="mt-2 text-center text-gray-600 text-xs">{`Create a new account by filling in the form below.`}</p>
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
                    <PrimaryButton onClick={registerUser}>
                        <span className="text-xs">{`Register`}</span> 
                    </PrimaryButton>

                </form>
                <div className="self-center flex gap-4 items-center mt-4 cursor-pointer" >
                    <FcGoogle className="cursor-pointer text-xl" />
                    <div className="text-xs flex gap-1">
                        <span className="">{`Already a user?`}</span>
                        <Link to={'/login'}>
                            <span className="underline text-blue-600 ">{`Login`}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
