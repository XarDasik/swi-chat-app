import type { NextPage } from "next";
import React from "react"

const RegisterPage:NextPage=()=>{
const [userInfo,setUserInfo] = React.useState({username:"", password:""})
    return(
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                </div>
                <div className="md:w-8/12 lg:w-5/12">
                    <form>
                    <div className="mb-6">
                        <input
                         value={userInfo.username}
                         onChange={({ target }) =>
                           setUserInfo({ ...userInfo, username: target.value })
                         }
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Uživatelské jméno"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                         value={userInfo.password}
                         onChange={({ target }) =>
                           setUserInfo({ ...userInfo, password: target.value })
                         }
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Heslo"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Přihlásit se
                    </button>
                    </form>
                </div>
                </div>
                </div>
            </section>
    )
}
export default RegisterPage





