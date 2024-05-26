import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img alt = "background logo"src = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-44 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type='text' placeholder='Email Address' className='p-2 m-2' />
        <input type='Password' placeholder='Password' className='p-2 m-2' />
        <button className='p-4 m-4'>Sign In</button>
      </form>
      
    </div>
  )
}

export default Login