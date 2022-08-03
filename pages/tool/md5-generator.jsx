import React, { useRef, useState } from 'react'

function md5() {
    const md5 = useRef();
    const [result, setResult] = useState("");

    
    const handleSubmit = (e) => { 
        e.preventDefault();
      };

  return (
    <form className="space-y-4 py-5 pl-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">
            MD5 Hash Generator
        </h2>
          <div className="mb-15 mt-20">
            <textarea
            id="text-input"
            type="text"
            name="about"
            rows={10}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            placeholder="Enter content to hash"
            />
            </div> 
        <div className="mb-15">
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hash</button>
            </div> 
        <div className="mb-15">
            <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 sm:text-sm">
            Result: 
        </span> 
        <h4 
        className="flex-1 border rounded-none rounded-r-md border-gray-300 shadow pt-1 pb-1 pl-2" >{result}
        </h4>
        </div>
    </div>
</form>
  )
}

export default md5
