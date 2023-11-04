import React, { useState } from 'react'
import { useEffect } from 'react';
import SelectTeam from './SelectTeam';

function TestCoverage() {
  const [coverage,setCoverage] = useState([]);
  const [team,setTeam]=useState();
  useEffect(() => {
    fetch("/api/testcoverages")
    .then(res=>res.json())
    .then(data=>{
      setTeam(data[0]?.projectName)
      setCoverage(data)
    })
  
  }, []);
  return (
    <>
    <div className='d-ta-center d-mt32'>

      <SelectTeam team={team} setTeam={setTeam} projects={coverage} />

        {team?<table className='d-ml-auto d-mr-auto d-mt32'>
          <tbody>
          {Object.entries((coverage.find(obj=>obj.projectName===team))).map(([key, value]) => (
            <tr key={key}>
              <strong>{key}:</strong>
              <td>{value}</td>
            </tr>
          ))
}</tbody>
</table>:""}

        
    </div>
    </>
  )
}

export default TestCoverage