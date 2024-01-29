import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()



  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:5555/auth/login', {username,password})
      const token = response.data.token
      setUsername('')
      setPassword('')
      navigate('/admin')
      alert('Login Successful')
      window.location.reload()
      localStorage.setItem('token', token)
    }catch (error){
      console.log(error);
    }
  }

  return (
    <section className='h-screen'>
      <div className='h-full'>
        {/* Moon Asset will be added here */}
        <div className='flex h-full justify-between bg-moon bg-center p-10'>
          <div className='pt-5 h-[90%] bg-half-transparent border-2 border-gray-700 rounded-3xl'>
            <div className='flex flex-col items-center justify-center mx-5 p-10'>
              <div className='flex mb-10'>
                There will be a logo here
              </div>
              <form className='bg-half-transparent border-2 border-dashed rounded-xl px-8 pt-6 pb-5 mb-4' onSubmit={handleLogin} >
                <div className='flex justify-center mb-4 py-5'>
                  <label htmlFor='username' className='md:text-14 lg:text-16 p-4'>Username</label>
                  <input type="text" className='items-center w-full rounded-md px-5 bg-half-transparent text-gray-200' id='username' placeholder='Username' value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='flex justify-center mb-4 py-5'>
                  <label htmlFor='username' className='md:text-14 lg:text-16 p-4'>Password</label>
                  <input type="password" className=' items-center w-full px-5 rounded-md text-gray-200 bg-half-transparent' id='password' placeholder='*********'
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='mb-4 py-5'>
                    <button className='bg-half-transparent border-2 hover:bg-gray-200 hover:text-slate-900 text-white font-bold py-2 px-6 rounded-xl' type='submit'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='p-5'>
              <div className='hover:text-blue-400 cursor-pointer'>
                <button>
                  This Page is only for an admin.But you can visit my home page.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login