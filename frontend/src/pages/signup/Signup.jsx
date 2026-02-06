import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const {loading, signup} = useSignup();
    
    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        await signup(inputs);
        console.log(inputs);
    }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center'>
                Sign Up
                <span className='text-white'> BASE ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Full Name</span>
                    </label>
                    <input type="text"
                    placeholder=' Enter Full Name'
                    className='input input-bordered w-full h-10'
                    value={inputs.fullname}
                    onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type="text"
                    placeholder=' Enter Username'
                    className='input input-bordered w-full h-10'
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type="password"
                    placeholder=' Enter Password'
                    className='input input-bordered w-full h-10'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input type="password"
                    placeholder=' Confirm Password'
                    className='input input-bordered w-full h-10'
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckBoxChange}
                selectedGender={inputs.gender}/>

                <Link to='/login'
                className='text-sm hover:underline hover:text-yellow-400 mt-4 inline-block'>
                    Already have an account? Login
                </Link>

                <div>
                    <button
                        className='btn btn-block 
                        btn-sm mt-5 
                        bg-pink-300 hover:bg-blue-700 
                        text-white
                        ' disabled={loading}>
                        {loading ? <span className='loading
                         loading-spinner loading-sm'></span> : "Sign Up"}
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
};

export default SignUp;





// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
//         backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center'>
//                 Sign Up
//                 <span className='text-white'> BASE ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Full Name</span>
//                     </label>
//                     <input type="text"
//                     placeholder=' Enter Full Name'
//                     className='input input-bordered w-full h-10'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Username</span>
//                     </label>
//                     <input type="text"
//                     placeholder=' Enter Username'
//                     className='input input-bordered w-full h-10'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Password</span>
//                     </label>
//                     <input type="password"
//                     placeholder=' Enter Password'
//                     className='input input-bordered w-full h-10'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-white'>Confirm Password</span>
//                     </label>
//                     <input type="password"
//                     placeholder=' Confirm Password'
//                     className='input input-bordered w-full h-10'/>
//                 </div>

//                 <GenderCheckbox/>

//                 <a href='#'
//                 className='text-sm hover:underline hover:text-yellow-400 mt-4 inline-block'>
//                     Already have an account? Login
//                 </a>

//                 <div>
//                     <button
//                         className='btn btn-block btn-sm mt-5 bg-pink-300 hover:bg-blue-700 text-white'>
//                         Sign Up
//                     </button>
//                 </div>

//             </form>
//         </div>
//     </div>
//   )
// };

// export default SignUp;