import LoginInput from '../../../components/LoginInput';
import { useState } from 'react';
import { studentSignUp } from '../authentication';

function StudentSignup() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSignUp() {
        const response = studentSignUp(userName, email, password, confirmPassword);
    }

    return (
        <div className='bg-red-400 h-fit py-3 px-6 w-[24%]'>
            <div className='flex justify-evenly mb-3'>
                <h3 className='py-2 px-4 underline text-xl font-bold cursor-pointer'>Student</h3>
                <h3 className='py-2 px-4 text-xl font-bold cursor-pointer'>Faculty</h3>
            </div>
            <LoginInput type={'text'} placeHolder={'Enter you name'} value={userName} onChange={(e) => setUserName(e.target.value)} name={'user-name'} />

            <LoginInput type={'text'} placeHolder={'Enter you email'} value={email} onChange={(e) => setEmail(e.target.value)} name={'email'} />

            <LoginInput type={'password'} placeHolder={'Enter your password'} value={password} onChange={(e) => setPassword(e.target.value)} name={'password'} />

            <LoginInput type={'password'} placeHolder={'Confirm password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name={'confirm-password'} />
            
            <button className='bg-blue-500 text-white font-bold px-[1rem] py-2 w-full hover:bg-blue-600 transition-colors' onClick={handleSignUp}>Sign up</button>

            <p className='mt-4'>Alredy have an account? <span className='text-blue-600 font-bold cursor-pointer'>Log in</span></p>
        </div>
    );
}

export default StudentSignup;