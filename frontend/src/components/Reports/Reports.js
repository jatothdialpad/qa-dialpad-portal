import React, { useState } from 'react';
import BarChart from './BarChart';

const versions = ["2310.01", "2310.02", "2310.03"];
const Testdata = [
  {
    "2310.01": [
      {
        "DP_Automated": {
          "total cases": 210,
          "passed": 190,
          "failed": 10,
          "executed": 200,
          "unexecuted": 10
        },
        "DP_Manual": {
          "total cases": 220,
          "passed": 200,
          "failed": 20,
          "executed": 220,
          "unexecuted": 0
        }
      }
    ]
  },
  {
    "2310.02": [
      {
        "DP_Automated": {
          "total cases": 230,
          "passed": 200,
          "failed": 10,
          "executed": 210,
          "unexecuted": 20
        },
        "DP_Manual": {
          "total cases": 2200,
          "passed": 2000,
          "failed": 200,
          "executed": 2200,
          "unexecuted": 0
        }
      }
    ]
  },
  {
    "2310.03": [
      {
        "DP_Automated": {
          "total cases": 230,
          "passed": 200,
          "failed": 10,
          "executed": 210,
          "unexecuted": 20
        },
        "DP_Manual": {
          "total cases": 2200,
          "passed": 2000,
          "failed": 200,
          "executed": 2200,
          "unexecuted": 0
        }
      }
    ]
  }
];

function Reports() {
  const [selectedVersion, setSelectedVersion] = useState("2310.01");
  const [selectedCycle, setSelectedCycle] = useState("DP_Automated");

  const handleVersionChange = (event) => {
    setSelectedVersion(event.target.value);
  };

  const handleCycleChange = (event) => {
    setSelectedCycle(event.target.value);
  };

  // Find the selected version's data
  const selectedVersionData = Testdata.find((data) => data[selectedVersion]);
  console.log(selectedVersionData)

  return (
    <div className='d-ta-center'>
      <h1>Test Execution Details</h1>
      <label htmlFor="versionSelect">Select a version:</label>
      <select id="versionSelect" value={selectedVersion} onChange={handleVersionChange}>
        {versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
      {selectedVersionData && (
        <div>
          <label htmlFor="cycleSelect">Select a cycle:</label>
          <select id="cycleSelect" value={selectedCycle} onChange={handleCycleChange}>
            {Object.keys(selectedVersionData[selectedVersion][0]).map((cycle) => (
              <option key={cycle} value={cycle}>
                {cycle}
              </option>
            ))}
          </select>
          <h2>Test cases details for {selectedVersion} - {selectedCycle} cycle</h2>
          <p>Total Cases: {selectedVersionData[selectedVersion][0][selectedCycle]["total cases"]}</p>
          <p>Passed Cases: {selectedVersionData[selectedVersion][0][selectedCycle].passed}</p>
          <p>Failed cases:{selectedVersionData[selectedVersion][0][selectedCycle].failed} </p>
          <BarChart labels={Object.keys(selectedVersionData[selectedVersion][0][selectedCycle])} Data={Object.values(selectedVersionData[selectedVersion][0][selectedCycle])}/>
        </div>
      )}
    </div>
  );
}

export default Reports;