
import { useEffect, useState } from 'react';
  
function Qr() {
  const [temp, setTemp] = useState("https://morioh.com");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  
  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);
  
  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }
  
  return (
    <div className="space-y-4 py-5 pl-4">
      <h1 className="text-xl font-bold">QR Code Generator</h1>
      <h2 className="">QR Code Generator for URL, Text, and more.</h2>
      <div className="">
          <div className='flex'>
          <textarea 
          type="text"
          rows={5}
          className='text-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 basis-3/5 block w-full sm:text-sm border border-gray-300 rounded-md' 
          onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text here" />
          <div className="pl-10 flex">
            <img src={qrCode} alt="" />
          </div>
          </div>
          <div className='pt-3'>
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
            onClick={handleClick}>
            Generate
          </button>
          </div>
          <div className='flex pt-4'>
          <h5 className='focus:ring-indigo-500 focus:border-indigo-500  border border-gray-300 shadow w-32 pl-2'>#{bgColor}</h5>
          <input className='relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-2 py-1 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500' type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          </div>
          <div className='pt-4'>
          <h5>Dimension:</h5>
          <input type="range" min="200" max="500"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
           </div>
           <div className='pt-4'>
           <h1 className='text-3xl font-bold'>What's QR Code?</h1>
           <p className='pt-2'>QR code is the trademark for a type of matrix barcode first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached.</p>
           <p className='pt-5'>via Wikipedia</p>
         </div>
      </div>
    </div>
  );
}
  
export default Qr;