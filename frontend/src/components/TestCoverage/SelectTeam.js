import React from 'react'

function SelectTeam({team,setTeam,projects}) {
  return (
    <>
    <h2 className='team-select'>
        <label> Select Project: </label>
        <select value={team} onChange={(e)=>setTeam(e.target.value)} defaultValue="all">
          <option value="all">All</option>
          { projects.map(project=><option key={project._id} value={project.projectName}>{project.projectName}
           </option>)}
        </select>
        </h2>
    
    
    </>
  )
}

export default SelectTeam