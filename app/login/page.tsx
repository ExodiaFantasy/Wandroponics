import { FaUser } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 relative">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 sm:px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl relative">
          <div className="w-full sm:w-3/5 p-5">
            <Link href="/">
              <div className="text-left font-extrabold flex items-center mb-6">
                <img src="/icon.png" alt="wandroponics." className="h-8 mr-2" />
                <span className="text-green-800">wand</span>roponics.
              </div>
            </Link>

            {/* sign in */}
            <div className="py-9">
              <h2 className="text-xl font-bold text-green-900 mb-3">
                Sign in to an existing account
              </h2>
              <div className="border-2 w-20 border-green-900 inline-block mb-3"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-full sm:w-64 p-3 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full sm:w-64 p-3 flex items-center mb-3">
                <MdLockOpen className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>
              <div className="flex justify-between w-full sm:w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1"
                  />{" "}
                  Remember Me{" "}
                </label>
                <a href="/404" className="text-xs underline">
                  Forgot Password?
                </a>
              </div>
              <a
                href="dashboard"
                className="border-2 border-green-900 text-green-900 rounded-full px-12 py-2 inline-block font-semibold hover:text-white hover:bg-green-900"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* sign up */}
          <div className="w-full sm:w-2/5 bg-green-900 text-white rounded-tr-2xl rounded-br-2xl py-6 sm:py-36 px-4 sm:px-12">
            <h2 className="text-4xl font-bold mb-2">Welcome!</h2>
            <div className="border-2 w-8 border-white inline-block mb-2"></div>
            <p className="mb-5 text-sm">
              Fill up some personal information quickly and start indoor planting with us!
            </p>
            <a href="/signup" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-800">
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
