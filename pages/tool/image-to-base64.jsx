import React, { useState } from 'react';

function image() {
  const [viewImage, setViewImage] = useState("");
  

  const handleFileChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]))
    if (e.target.files.length <= 0) return;
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function () {
      var base64data = reader.result;
      setViewImage(base64data)
    }
  }

  return (
    <form className="space-y-3 py-5 pl-4 ">
    <h2 className="text-xl font-bold">Convert Image to Base64 online</h2>
    <h2 className="">Just select your JPG, PNG, GIF, or BMP picture</h2>
      <div className="custom-file">
        <input
          type="file"
          className={"custom-file-input block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
          accept="image/png, image/jpeg"
          onChange={handleFileChange} />
        <div className='pt-5'>
          <div>
            <h3 className='text-xl font-medium pb-2'>Result:</h3>
            <textarea rows="10" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" value={viewImage}>
            </textarea>
            <div className='pt-5'>
            <img src={viewImage} alt=""
            />
            </div>
            </div>
        </div>
      </div>
    </form>
  );
}

export default image;