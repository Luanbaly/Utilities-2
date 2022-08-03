import { sha256 } from 'crypto-hash';
import React, { useState } from 'react'

function Sha256() {
    const [algorithms] = useState(['sha256']);

    let [text_input, setTextInput] = useState('');
    let [algorithm, setAlgorithm] = useState('sha256');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;

        let result = '';

        if (algorithm == 'sha256') {
            result = await sha256(value);
        }
        setOutput(result);
        setTextInput(value);
    }

    const handleAlgorithmChange = async (e) => {

        let value = e.target.value;

        let result = '';

        if (text_input) {

            if (value == 'sha256') {
                result = await sha256(text_input);
            }
        }
        setAlgorithm(value);
        setOutput(result);
    }
  return (
    <form className="space-y-4 py-5 pl-4">
        <h2 className="text-xl font-bold">
        Sha256 Hash Generator
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
        {
                    algorithms.map(algo => {
                        return (
                        <div className="flex" key={algo}>
                            <input className="w-5 h-5" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
                            <label className="text-gray-900 pl-2 font-bold" htmlFor={algo}>
                                 Auto Update
                            </label>
                        </div>
                        )
                     }
                    )}
            </div> 
        <div className="mb-15">
            <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 sm:text-sm">
            Result: 
        </span> 
        <h4 
        className="flex-1 border rounded-none rounded-r-md border-gray-300 shadow pt-1 pb-1 pl-2" >{output}
        </h4>
        </div>
    </div>
</form>
  )
}

export default Sha256
