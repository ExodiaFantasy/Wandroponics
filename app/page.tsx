import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col sm:bg-gray-200 min-h-screen bg-green-900">
      
      {/* NAVIGATION BAR */}
      <nav className="sm:bg-green-900 flex items-center justify-between max-container padding-container relative z-20 py-5"> 
        <Link href="/">
            <div className="text-xl text-white text-left font-extrabold flex items-center mx-8">
              <img src="/icon.png"
              alt="wandroponics."
              className="h-10"/>
              wandroponics.
            </div>
        </Link>
        
        <a
              href="/login"
              className="text-white mx-6 border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-green-800"
            >
              Log In
        </a>
      </nav> 
      {/* END OF NAVIGATION BAR */}

       <div className="flex overflow-hidden min-h-full">
        <img
          src="bg.jpg"
          alt="Your Image"
          className="max-w-full max-h-full"
        />

      </div>

        <div className="absolute ml-6 mt-40 font-bold text-7xl text-left p-10" style={{color: '#354a31'}}>
          <h1> Start your</h1>
          <h1> Hydroponic</h1>
          <h1> journey with us.</h1>

          <a
              href="/signup"
              className="text-xl text-green-900 border-2 border-green-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"
            >
              Sign Up
          </a>

        </div>


    </main>
  );
}