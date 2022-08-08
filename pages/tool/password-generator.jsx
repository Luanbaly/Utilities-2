import React, { useRef, useState } from "react";
import { MdContentCopy, MdCheck } from 'react-icons/md';
import useClipboard from "../../components/hooks/useClipboard";

// Utility functions
import { generatePassword } from "../../components/utils/form.utils";

export default function Password() {
  const lowercaseRef = useRef();
  const uppercaseRef = useRef();
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();
  const [value, setValue] = useState("20");
  const [password, setPassword] = useState("qlazasomheagsavvfdte");
  const md5 = require('md5');
  const sha256 = require('sha256');
  // console.log(md5('12321'));
  const [isCopied, copy] = useClipboard();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPassword = generatePassword(
      lowercaseRef.current.checked,
      uppercaseRef.current.checked,
      numberRef.current.checked,
      symbolsRef.current.checked,
      lengthRef.current.value || 20
    );

    setPassword(newPassword);
  };

    return (
      <form className="space-y-4 py-5 pl-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Password Random Generator</h2>
      <div>
        <select 
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ maxWidth: "20" }}
            ref={lengthRef}
            className="mt-1 block w-full pl-3 pr-20 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="7">7</option> 
          <option value="8">8</option> 
          <option value="9">9</option> 
          <option value="10">10</option> 
          <option value="12">12</option> 
          <option value="15">15</option> 
          <option value="18">18</option> 
          <option value="20">20</option>
          <option value="25">25</option> 
          <option value="28">28</option> 
          <option value="30">30</option> 
          <option value="36">36</option> 
          <option value="40">40</option> 
          <option value="50">50</option>
          </select>
          </div>
        <fieldset className="space-y-3">
        <legend className="sr-only">Notifications</legend>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="comments"
              ref={lowercaseRef}
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-900">
            Include Lowercase ( e.g. abcdefgh )
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="candidates"
              ref={uppercaseRef}
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="candidates" className="font-medium text-gray-900">
            Include Uppercase ( e.g. ABCDEFGH )
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="offers"
              ref={numberRef}
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-900">
            Include Numbers ( e.g. 123456789 )
            </label>
          </div>
        </div>
        <div className="relative flex items-start pb-4">
          <div className="flex items-center h-5">
            <input
              id="offers"
              ref={symbolsRef} 
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-900">
            Include Symbols ( e.g. @#$% )
            </label>
          </div>
        </div>
      </fieldset>
        <button
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Random
      </button>
      <div className="flex" >
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
      Result:
        </span>
      <h4 className="flex-1 border rounded-none border-gray-300 pt-1 pb-1 pl-2">{password}</h4>
      <button
        type="button"
        onClick={() => copy(password)}
        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
    </button>
      </div>
      <div className="flex" >
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
      MD5:
        </span>
      <h4 className="flex-1 border rounded-none border-gray-300 pt-1 pb-1 pl-2">{(md5(password))}</h4>
      <button
        type="button"
        onClick={() => copy(md5(password))}
        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
    </button>
      </div>
      <div className="flex" >
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
      SHA256:
        </span>
      <h4 className="flex-1 border rounded-none border-gray-300 pt-1 pb-1 pl-2">{(sha256(password))}</h4>
      <button
        type="button"
        onClick={() => copy(sha256(password))}
        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
    </button>
      </div>
      <div className="flex" >
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700 sm:text-sm">
      2xSHA256:
        </span>
      <h4 className="flex-1 border rounded-none border-gray-300 pt-1 pb-1 pl-2">{(sha256.x2(password))}</h4>
      <button
        type="button"
        onClick={() => copy(sha256.x2(password))}
        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-500 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-indigo-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        {isCopied ? <MdCheck className="h-5 w-5"></MdCheck> : <MdContentCopy className="h-5 w-5"></MdContentCopy>}
    </button>
      </div>
    </form>
    );
}