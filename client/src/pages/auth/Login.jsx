import { useState } from 'react';
import StudentSignup from './container/StudentSignup';

function Login() {

    const [container, setContainer] = useState('SIGNUP');
    
    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-center ">
            {/* <header className="bg-violet-400 text-white font-bold text-12px text-2xl text-center py-3 fixed top-0 w-full">Notice Board Management System</header> */}
            {
                container === 'SIGNUP' ?
                <StudentSignup /> :
                <h3>workd</h3>
            }
        </ div>
    );
}

export default Login;