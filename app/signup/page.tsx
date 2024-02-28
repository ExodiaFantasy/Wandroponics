import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 relative">
      <div className="rounded-2xl absolute top-0 right-0 w-1/2 h-full bg-cover bg-no-repeat hidden sm:block"
          style={{ backgroundImage: "url('/unsplash.jpg')", }}
      />
      <main className="flex items-center justify-start w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex items-center w-full max-w-md p-8">
          {/* Form Section */}
          <div className="w-full ">
            <Link href="/">
            <div className="text-left font-extrabold flex items-center mb-6">
              <img
                src="/icon.png"
                alt="wandroponics."
                className="h-8 mr-2"
              />
              <span className="text-green-700">wand</span>roponics.
            </div>
            </Link>

            {/* Sign up */}
            <div className="py-6">
              <h2 className="text-xl font-bold text-green-900 mb-3">
                {" "}
                Create an account
              </h2>
              <div className="border-2 w-20 border-green-900 inline-block mb-3"></div>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="bg-gray-100 w-full p-3 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>

              <div className="bg-gray-100 w-full p-3 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>

              <div className="bg-gray-100 w-full p-3 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>

              <div className="bg-gray-100 w-full p-3 flex items-center mb-3">
                <FaLock className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-xs flex-1"
                />
              </div>

              <div className="flex justify-between w-full sm:w-full mb-8">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="terms"
                    className="mr-1"
                  />
                  <p>I agree to the </p> 
                  <a href="/404" className="ml-1 text-green-700 underline"> terms & policy </a>
                </label>
              </div>

              <a
                href="/dashboard"
                className="mt-4 border-2 border-green-900 text-green-900 rounded-full px-12 py-2 inline-block font-semibold hover:text-white hover:bg-green-900"
              >
                Sign Up
              </a>

              <div className="flex items-center text-xs justify-center w-full sm:w-full mt-2 mb-5">
                <p> Already have an account? </p>
                <a href="/login" className="ml-1 text-green-700 underline"> Log In here. </a>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
