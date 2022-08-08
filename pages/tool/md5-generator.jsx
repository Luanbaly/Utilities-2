import React, { useState } from 'react'
import { MdContentCopy, MdCheck } from 'react-icons/md';
import useClipboard from "../../components/hooks/useClipboard";

function md5() {
    const md5 = require('md5');
    const [isCopied, copy] = useClipboard();
    let [text_input, setTextInput] = useState('');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;
        let result = '';
        if ('md5') {
            result = await md5(value);
        }
        setOutput(result);
        setTextInput(value);
    }

  return (
    <form className="space-y-4 py-5 pl-4">
        <h2 className="text-xl font-bold">
            MD5 Hash Generator
        </h2>
          <div className="mb-15 mt-20">
            <textarea
            id="text-input"
            type="text"
            name="about"
            value={text_input} 
            onChange={handleTextInput}
            rows={10}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            placeholder="Enter content to hash"
            />
            </div> 
        <div className="mb-15">
        <label className="text-gray-900 pl-2 font-bold" >
                Auto Update
        </label>
            </div> 
        <div className="mb-15">
            <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 sm:text-sm">
            Result: 
        </span> 
        <input
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 border border-gray-300 shadow pt-1 pb-1 pl-2"
            placeholder={output}
            value={output}
        />
        <button
            type="button"
            onClick={() => copy(output)}
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
        </button>
        </div>
    </div>
</form>
  )
}

export default md5
