import React from 'react'

const QuestionSection = () => {
  return (
    <div id="leftPane" className="w-[40%] min-w-[250px] max-w-[70%] border-r border-gray-200 overflow-hidden flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button onClick={() => "setTab('question')"} id="tab-question" className="flex-1 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Question</button>
        <button onClick={() => "setTab('submission')"} id="tab-submission" className="flex-1 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">Submission</button>
        <button onClick={() => "setTab('solution')"} id="tab-solution" className="flex-1 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">Solution</button>
      </div>

      {/* Scrollable Tab Content */}
      <div className="overflow-y-auto flex-1 p-4 space-y-4" id="tabContent">
        <div id="content-question">
          <h2 className="text-xl font-semibold">Reverse a Linked List</h2>
          <p className="text-sm text-gray-600 mb-2">Difficulty: <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Beginner</span></p>
          <p className="text-gray-700">
            Write a function to reverse a singly linked list. Implement both iterative and recursive approaches.
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-1">Example:</h4>
            <pre className="bg-gray-50 p-3 rounded border text-sm"><code>Input: 1 → 2 → 3 → 4
              Output: 4 → 3 → 2 → 1</code></pre>
          </div>
        </div>

        <div id="content-submission" className="hidden">
          <p className="text-gray-700">You have not submitted this problem yet.</p>
        </div>

        <div id="content-solution" className="hidden">
          <p className="text-gray-700 mb-2">Recursive Solution:</p>
          <pre className="bg-gray-50 p-3 rounded border text-sm">
            <code>
              {
                `
                     function reverse(head) {
  if (!head || !head.next) return head;
  let newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
                `
              }
            </code></pre>
        </div>
      </div>
    </div>
  )
}

export default QuestionSection