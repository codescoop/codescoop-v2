import React from 'react'

const EditorSection = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top: Editor */}
      <div id="editorPane" className="h-2/3 p-4 overflow-hidden flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800">Online JS Compiler</h2>
        <textarea id="code" className="w-full flex-1 p-4 mt-2 border border-gray-300 rounded-lg font-mono text-sm resize-none" placeholder="Write your JavaScript code here...">
          {/* function reverseLinkedList(head) {
            // Your code here
          }
          console.log('Hello CodeScoop!'); */}
        </textarea>
        <button onClick={() => "runCode()"} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-3 w-fit">
          Run Code
        </button>
      </div>

      {/* Horizontal Resizer */}
      <div id="horizontal-resizer" className="resizer"></div>

      {/* Bottom: Output */}
      <div id="outputPane" className="flex-1 p-4 overflow-auto">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Output:</h4>
        <pre id="output" className="bg-gray-100 text-sm p-4 rounded-lg h-full border border-gray-300 whitespace-pre-wrap"></pre>
      </div>
    </div>
  )
}

export default EditorSection