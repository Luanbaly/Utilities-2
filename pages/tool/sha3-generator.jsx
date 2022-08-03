import { keccak224, keccak256, keccak384, keccak512 } from 'js-sha3';
import React, { useState } from 'react';

function Sha3() {
    const [algorithms] = useState(['keccak224', 'keccak256', 'keccak384', 'keccak512']);

    let [text_input, setTextInput] = useState('');
    let [algorithm, setAlgorithm] = useState('keccak224');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;

        let result = '';

        if (algorithm == 'keccak224') {
            result = await keccak224(value);
        } else if (algorithm == 'keccak256') {
            result = await keccak256(value);
        } else if (algorithm == 'keccak384') {
            result = await keccak384(value);
        } else if (algorithm == 'keccak512') {
            result = await keccak512(value);
        }

        setOutput(result);

        setTextInput(value);
    }

    const handleAlgorithmChange = async (e) => {

        let value = e.target.value;

        let result = '';

        if (text_input) {

            if (value == 'keccak224') {
                result = await keccak224(text_input);
            } else if (value == 'keccak256') {
                result = await keccak256(text_input);
            }
            else if (value == 'keccak384') {
                result = await keccak384(text_input);
            }
            else if (value == 'keccak512') {
                result = await keccak512(text_input);
            }
        }

        setAlgorithm(value);

        setOutput(result);
    }

  return (
    <form className='space-y-4 py-3 pl-4' >
        <h4 className="text-xl font-bold pb-2">SHA3 Hash Generator</h4>
        <form>
            <div className="mt-1 pr-4">
            <textarea
            id="text-input"
            type="text"
            name="about"
            value={text_input} 
            onChange={handleTextInput}
            rows={3}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            placeholder="Enter content to hash"
            />
            </div>
            </form>
                <div className="pt-2 pb-2">
                    {
                    algorithms.map(algo => {
                        return (
                        <div className="pt-1 pb-1" key={algo}>
                            <input className="form-check-input" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
                            <label className="text-gray-900 pl-2 font-bold" htmlFor={algo}>
                                {algo}
                            </label>
                        </div>
                        )
                     }
                    )}
                </div>
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Hash
                </button>
                <div className="pb-4">
                <div className="flex" >
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
                Result:
                    </span>
                <h4 className="flex-1 border rounded-none rounded-r-md border-gray-300 pt-1 pb-1 pl-2">{output}</h4>
                </div>
                </div>
        </form>
  )
}

export default Sha3