import React, { useEffect, useState } from 'react'; 

function Execute() {
 const [workflowData,setWorkflowData]=useState([]);
  const [selectedTeam,setSelectedTeam]=useState("web");
  const [repo,setRepo]=useState("qa-dp-web-regression");
  const [workflowSelected,setWorkflowSelected]=useState();
  const teams={"andorid":["qa-dp-android","qa-dm-android"],"ios":["qa-dp-ios"],"web":["qa-dp-web-regression"]};
  

  const handleTeamChange=(e)=>{
    setSelectedTeam(e.target.value);
    setRepo(teams[e.target.value][0]);
  }
  useEffect(()=>{
    console.log(repo)
    console.log(selectedTeam)
    fetch(`http://localhost:4000/api/dp-qa/workflows/${repo}`)
    .then(res=>res.json())
    .then(data=>{setWorkflowData(data.data)
      console.log(data.data)});
  },[selectedTeam])

  const handleRepoChange=(e)=>{
    setRepo(e.target.value);
  }
  const handleExecution=()=>{
    
  }
  return (
    <div className='d-wmx1268 d-m-auto'>
    <h1 className='d-headline54 d-my16 d-ta-center'>Execution Details</h1>
    <div className='d-d-flex d-wmx512 d-m-auto d-jc-space-around d-mb32'>
          <label htmlFor="platformSelect" className='d-fw-semibold'>Select platfrom:</label>
          <select id="platformSelect" onChange={handleTeamChange} value={selectedTeam} defaultValue={selectedTeam}>
            {Object.keys(teams).map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
             ))}
        </select>
        <label htmlFor="repoSelect" className='d-fw-semibold'>Select repo:</label>
          <select id="repoSelect" onChange={handleRepoChange} defaultValue={teams[selectedTeam][0]}>
            {(teams[selectedTeam]).map((repo) => (
              <option key={repo} value={repo}>
                {repo}
              </option>
             ))}
        </select>
        </div>
        {/* <div className='d-d-grid d-w30p'>
          <label htmlFor="repoSelect" className='d-fw-semibold'>Select a Repo:</label>
          <select>
          </select>
        </div> */}
        {/* <div>{workflowData.map(e=><p>{e.workflow_name}</p>)}</div> */}
        { repo &&
           <div className='d-d-grid d-w30p'>
          <label htmlFor="cycleSelect" className='d-fw-semibold'>Select a workflow to Trigger:</label>
          <select onChange={(e)=>setWorkflowSelected(e.target.value)} value={workflowSelected}>
            {workflowData.map(e=><option value={e.workflow_name} key={e.workflow_name}>{e.workflow_name}</option>)}
          </select>
        </div>
}
     <button type="submit" onClick={handleExecution}>start execution</button>

      </div>
  );
}

export default Execute;
