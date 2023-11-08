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
    <div class="customer-stories-cards d-wmx1268 d-m-auto d-mb32">
      <h1 className='d-headline54 d-my16 d-ta-center'>Test Execution Details</h1>
      {selectedVersionData && (
      <>
      <div className='d-d-flex d-wmx512 d-m-auto d-jc-space-around d-mb32'>
        <div className='d-d-grid d-w40p'>
          <label htmlFor="versionSelect" className='d-fw-semibold'>Select a version:</label>
          <select className='d-w100p' id="versionSelect" value={selectedVersion} onChange={handleVersionChange}>
            {versions.map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </div>
        <div className='d-d-grid d-w40p'>
          <label htmlFor="cycleSelect" className='d-fw-semibold'>Select a cycle:</label>
          <select id="cycleSelect" value={selectedCycle} onChange={handleCycleChange}>
            {Object.keys(selectedVersionData[selectedVersion][0]).map((cycle) => (
              <option key={cycle} value={cycle}>
                {cycle}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='d-d-flex d-wmx1024 d-m-auto'>
        <div className='d-d-grid d-w70p d-mx32'>
          <BarChart labels={Object.keys(selectedVersionData[selectedVersion][0][selectedCycle])} Data={Object.values(selectedVersionData[selectedVersion][0][selectedCycle])} />
        </div>
        <div className='d-d-grid d-w30p d-mx16'>
          <h2 className='d-headline32'>Test cases details:</h2>
          <div className='d-fw-semibold'>{selectedVersion} - {selectedCycle} cycle</div> 
          <div className='d-d-grid d-gg16 d-g-cols2'>
            <div className='d-fw-semibold'>Total Cases:</div>
            <div> {selectedVersionData[selectedVersion][0][selectedCycle]["total cases"]}</div>
          </div>
          <div className='d-d-grid d-gg16 d-g-cols2'>
            <div className='d-fw-semibold'>Passed Cases: </div>
            <div>{selectedVersionData[selectedVersion][0][selectedCycle].passed}</div>
          </div>
          <div className='d-d-grid d-gg16 d-g-cols2'>
            <div className='d-fw-semibold'>Failed cases:</div>
            <div>{selectedVersionData[selectedVersion][0][selectedCycle].failed} </div>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}

export default Reports;