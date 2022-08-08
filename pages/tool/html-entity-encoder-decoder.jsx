import React, { useState } from 'react'

function entity() {
    let [text_input, setTextInput] = useState('');
    let [output, setOutput] = useState('');
    var he = require('he');

    const handleTextInput = async (e) => {
        let value = e.target.value;
        let result = '';
        if ('he') {
            result = await he.encode(value);
        }
        setOutput(result);
        setTextInput(value);
    }

  return (
    <form className="space-y-4 py-5 pl-4">
        <h2 className="text-xl font-bold">
        HTML entity encoder/decoder
        </h2>
        <h1>Encode HTML text to HTML Entities</h1>
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
    To HTML encode any string you enter in the <strong>decoded</strong> field, or to decode any HTML encoded string you enter in the <strong>encoded</strong> field.
        </div>
</form>
  )
}

export default entity
