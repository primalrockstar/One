const StudentReference = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Student Reference</h2>

      <details className="bg-white border border-gray-300 rounded p-4">
        <summary className="cursor-pointer text-blue-600 font-semibold">
          Trauma Assessment Steps
        </summary>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Scene safety and BSI</li>
          <li>Primary survey: ABCs</li>
          <li>Control major bleeding</li>
          <li>Rapid trauma assessment</li>
          <li>Transport decision</li>
        </ul>
      </details>

      <details className="bg-white border border-gray-300 rounded p-4">
        <summary className="cursor-pointer text-blue-600 font-semibold">
          BLS Algorithm Overview
        </summary>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Check responsiveness</li>
          <li>Call for help / AED</li>
          <li>Start compressions</li>
          <li>Open airway and give breaths</li>
          <li>Use AED as soon as available</li>
        </ul>
      </details>
    </div>
  );
};

export default StudentReference;
