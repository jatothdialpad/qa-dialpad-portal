import React, { useState } from 'react'
import { useEffect } from 'react';
import SelectTeam from './SelectTeam';

function TestCoverage() {
  const [coverage,setCoverage] = useState([]);
  const [team,setTeam]=useState("all");
  useEffect(() => {
    fetch("/api/testcoverages")
    .then(res=>res.json())
    .then(data=>{
      setCoverage(data)
    })
  
  }, []);
  return (
    <>
    <div className="d-d-grid d-jc-center">
    <div className='d-ta-center d-mt32'>

    <SelectTeam team={team} setTeam={setTeam} projects={coverage} />

<table className='d-table d-table--striped d-mt32' bgcolor='red'>
  <thead>
    <tr>
      <th>Project</th>
      <th>Total TCs</th>
      <th>Automated TCs</th>
      <th>Partially Automated TCs</th>
      <th>Not Automatable TCs</th>
      <th>Not In Scope TCs</th>
      <th>Not Analyzed TCs</th>
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
          <td>{project.notAnalyzedTCs}</td>
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
            <td>{project.notAnalyzedTCs}</td>
            <td>{project.currentPercentage}</td>
          </tr>
        ))
    )}
  </tbody>
</table>


</div>
    </div>
    </>
  )
}

export default TestCoverage