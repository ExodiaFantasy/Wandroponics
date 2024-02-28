import Navbar from "./Navbar/Navbar";

function page() {
  return (
    <div className="bg-green-900 flex flex-col min-h-screen"> 

    {/* NAVIGATION BAR */}
    <Navbar />

    {/* START - TITLE */}
    <div className="flex items-center justify-between mt-6 ml-20">
      <div className="text-4xl text-white font-extrabold">
         User Management
      </div>
  
      {/* Search input and button */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="font-normal border-2 bg-green-900 border-white text-white px-12 py-2 rounded-xl mr-9"
        />
        <button className="ml-7 mr-9 bg-white text-green-800 px-8 py-2 rounded-md">
        + User 
        </button>
      </div>

    </div>
    {/* END */}

    {/* START - TABLE */}
    <div className="flex items-center w-full">
      
      <table className="mt-12 mx-auto w-3/4 h-96">
        
        <thead className="h-16 bg-white text-green-900 font-bold text-xl">
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      </thead>

      <tbody className="bg-gray-300 text-green-900 text-center">
      {/* Sample data*/}
      <tr className="border px-4 py-16">
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td >
          <button className="text-green-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-2">Delete</button>
        </td>
      </tr>

      <tr className="border px-4 py-2">
        <td>Lyn Falcatan</td>
        <td>lyn@example.com</td>
        <td>Admin</td>
        <td >
          <button className="text-green-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-2">Delete</button>
        </td>
      </tr>

      <tr className="border px-4 py-2">
        <td>Sarah Smith</td>
        <td>sarah@example.com</td>
        <td>Admin</td>
        <td >
          <button className="text-green-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-2">Delete</button>
        </td>
      </tr>

      <tr className="border px-4 py-2">
        <td>Riego Montefalco</td>
        <td>riego@example.com</td>
        <td>Admin</td>
        <td >
          <button className="text-green-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-2">Delete</button>
        </td>
      </tr>

      <tr className="border px-4 py-2">
        <td>Niki Tesfaye</td>
        <td>niki@example.com</td>
        <td>Admin</td>
        <td >
          <button className="text-green-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline ml-2">Delete</button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
    {/* END */}


   </div>
    
  )
}

export default page