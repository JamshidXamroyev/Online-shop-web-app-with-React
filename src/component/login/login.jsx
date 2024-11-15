import React, { useState } from 'react'
import { logo } from '../../assets/data/data'
import { login } from '../../slice/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const initialState = {
        name: "",
        password: "",
        image: ""
    }
    const dispatch = useDispatch()
    const [values, setValues] = useState(initialState)

    const onChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-w-[25vw] mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-18 w-[12vw]"
          />
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={e => onChange(e)}
                  autoComplete="email"
                  className="block w-full font-bold focus:shadow-lg focus:shadow-indigo-500 outline-none pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
                <label className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={values.password}
                  onChange={e => onChange(e)}
                  autoComplete="current-password"
                  className="block w-full focus:shadow-lg focus:shadow-indigo-500 outline-none pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />


                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Image URL
                </label>
                <input
                  id="text"
                  name="image"
                  type="text"
                  required
                  value={values.image}
                  onChange={e => onChange(e)}
                  autoComplete="current-password"
                  className="block focus:shadow-lg focus:shadow-indigo-500 outline-none pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />

              <div className="text-sm my-3">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={e => dispatch(login(values))}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm/6 text-gray-500">
            Not a member?
            <a href="#" className="font-semibold text-indigo-600 ml-3 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login