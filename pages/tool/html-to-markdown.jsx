import React, { useState } from 'react'
import TurndownService from 'turndown';

function Markdown() {
    let [text_input, setTextInput] = useState('');
    let [output, setOutput] = useState('');
    var turndownService = new TurndownService({ option: 'value' })
    const handleTextInput = async (e) => {
        let value = e.target.value;
        let result = '';
        if ('turndownService') {
            result = await turndownService.turndown(value);
        }
        setOutput(result);
        setTextInput(value);
    }

  return (
    <form className="space-y-4 py-5 pl-4">
        <h2 className="text-xl font-bold">
        Convert HTML to Markdown
        </h2>
        <h1>Convert HTML into Markdown with JavaScript.</h1>
          <div className="mb-15 mt-20">
            <textarea
            id="text-input"
            type="text"
            name="about"
            value={output} 
            onChange={handleTextInput}
            rows={10}
            className="text-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            />
            </div> 
        <div className="mb-15">
            </div> 
        <div className="mb-15">
        <textarea
            id="text-input"
            type="text"
            name="about"
            value={text_input} 
            onChange={handleTextInput}
            rows={10}
            className="text-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            />
    </div>
    <div>
      <h1 className='text-3xl font-bold'>What is Markdown?</h1>
        </div>
      <p>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
      <p>Since the initial description of Markdown contained ambiguities and unanswered questions, the implementations that appeared over the years have subtle differences and many come with syntax extensions.
      </p>
      <p>via Wikipedia</p>
</form>
  )
}

export default Markdown
