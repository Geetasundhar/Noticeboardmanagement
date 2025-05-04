import LoginInput from "../../components/LoginInput";

function StudentLogin() {

    
    return(
        <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
            <div className="bg-blue-300 w-[380px] m-auto p-6 flex flex-col gap-0 rounded-md">
                <h1 className="text-center font text-xl font-bold mb-4">Student Login</h1>
                <LoginInput type='text' placeHolder="Enter your email" /> <br />
                <LoginInput type="text" placeHolder="Enter your password"/> <br />
                <button className="bg-[#ff7200] text-white w-1/2 m-auto p-2 rounded-full font-bold">Log in</button>

                <div className="flex items-center self-center mt-4">
                    <span>Don't have an account?</span>
                    <button className="ml-2 text-blue-600 hover:underline">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;