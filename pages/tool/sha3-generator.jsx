import { keccak224, keccak256, keccak384, keccak512 } from 'js-sha3';
import React, { useState } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import useClipboard from "../../components/hooks/useClipboard";

function Sha3() {
    const [isCopied, copy] = useClipboard();
    let [text_input, setTextInput] = useState('');
    let [algorithm, setAlgorithm] = useState('224');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;
        let result = '';
        if (algorithm == '224') {
            result = await keccak224(value);
        } else if (algorithm == '256') {
            result = await keccak256(value);
        } else if (algorithm == '384') {
            result = await keccak384(value);
        } else if (algorithm == '512') {
            result = await keccak512(value);
        }
        setOutput(result);
        setTextInput(value);
    }

    const handleAlgorithmChange = async (e) => {
        let value = e.target.value;
        let result = '';
        if (text_input) {
            if (value == '224') {
                result = await keccak224(text_input);
            } else if (value == '256') {
                result = await keccak256(text_input);
            }
            else if (value == '384') {
                result = await keccak384(text_input);
            }
            else if (value == '512') {
                result = await keccak512(text_input);
            }
        }
        setAlgorithm(value);
        setOutput(result);
    }

  return (
    <form className='space-y-4 py-3 pl-4' >
        <h4 className="text-xl font-bold pb-2">SHA3 Hash Generator</h4>
        <div>
            <div className="mt-1">
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
            </div>
                <div className="pt-2 pb-2">
                <select 
                    onChange={handleAlgorithmChange}
                    style={{ maxWidth: "20" }}
                    className="mt-1 block w-full pl-3 pr-20 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="224">224</option>
                <option value="256">256</option>
                <option value="384">384</option> 
                <option value="512">512</option> 
                </select>
                </div>
                <label className="text-gray-900 pl-2 font-bold">
                    Auto Update
                </label>
                <div className="pb-4">
                <div className="flex" >
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
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
                <p className='pt-5'>SHA-3 is the winner of a five-year competition to select a new cryptographic hash algorithm where 64 competing designs were evaluated.
                </p>
                <p className='pt-7'>NOTE: I made a mistake when I named this implementation SHA-3. It should be named Keccak[c=2d]. Each of the SHA-3 functions is based on an instance of the Keccak algorithm, which NIST selected as the winner of the SHA-3 competition, but those SHA-3 functions won't produce hashes identical to Keccak.</p>
                </div>
        </form>
  )
}

export default Sha3