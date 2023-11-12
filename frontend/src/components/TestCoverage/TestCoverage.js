import React, { useState } from 'react'
import { useEffect } from 'react';
import SelectTeam from './SelectTeam';

function TestCoverage() {
  const [coverage,setCoverage] = useState([]);
  const [team,setTeam]=useState("all");
  useEffect(() => {
    fetch("https://dialpad-qa-portal-backend-latest.onrender.com/api/testcoverages")
    .then(res=>res.json())
    .then(data=>{
      setCoverage(data)
    })
  
  }, []);
  return (

    <>
      <div className="d-wmx1268 d-m-auto d-jc-center">
      <div className='d-ta-center d-mt32'>
       <SelectTeam team={team} setTeam={setTeam} projects={coverage} />
      <div className='d-w100p d-of-y-auto'>
        <table className='d-table d-table--striped d-mt32 d-fc-neutral-white d-bar16' bgcolor='red'>
          <thead>
            <tr>
              <th>Project</th>
              <th>Total TCs</th>
              <th>Automated</th>
              <th>Partially Automated</th>
              <th>Not Automatable</th>
              <th>Not In Scope</th>
              <th>Automation percentage</th>
            </tr>
          </thead>
          {console.log(team)}
          <tbody>
            {team === 'all' ? (
              coverage.map((project) => (
                <tr key={project._id}>
                  <td>{project.projectName}</td>
                  <td>{project.totalTCs}</td>
                  <td>{project.automatedTCS}</td>
                  <td>{project.partialAutomatedTCs}</td>
                  <td>{project.notAutomatableTCs}</td>
                  <td>{project.notInScopeTCs}</td>
                  <td>{project.currentPercentage}</td>
                </tr>
              ))
            ) : (
              coverage
                .filter((project) => project.projectName === team)
                .map((project) => (
                  <tr key={project._id}>
                    <td>{project.projectName}</td>
                    <td>{project.totalTCs}</td>
                    <td>{project.automatedTCS}</td>
                    <td>{project.partialAutomatedTCs}</td>
                    <td>{project.notAutomatableTCs}</td>
                    <td>{project.notInScopeTCs}</td>
                    <td>{project.currentPercentage}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      </div>
      <div className='d-ta-center d-mt32 d-headline-large'>Automation Percentage : Automated /  Total test cases 
      </div>
      </div>
    </>
  )
}

export default TestCoverage