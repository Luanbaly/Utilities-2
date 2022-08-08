import React, { useState } from 'react'

function url() {
    let [text_input, setTextInput] = useState('');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;
        let result = '';
        if ('Buffer') {
            result = await Buffer.from(value).toString("base64");
        }
        setOutput(result);
        setTextInput(value);
    }

  return (
    <form className="space-y-4 py-5 pl-4">
        <h2 className="text-xl font-bold">
        Base64 encoder and decoder
        </h2>
        <h1>In this page you can encoder or decoder in Base64 a string and viceversa.</h1>
          <div className="mb-15 mt-20">
            <h1 className="text-xl font-bold pb-1">Decoded:</h1>
            <textarea
            id="text-input"
            type="text"
            name="about"
            value={text_input} 
            onChange={handleTextInput}
            rows={10}
            className="text-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            />
            </div> 
        <div className="mb-15">
        <label className="text-gray-900 pl-2 font-bold" >
        Encoded:
        </label>
            </div> 
        <div className="mb-15">
        <textarea
            id="text-input"
            type="text"
            name="about"
            value={output} 
            rows={10}
            className="text-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            />
    </div>
    <div className="text-indigo-500">
    To Base64 encode any string you enter in the <strong>decoded</strong> field, or to decode any Base64 encoded string you enter in the <strong>encoded</strong> field.
        </div>
</form>
  )
}

export default url
