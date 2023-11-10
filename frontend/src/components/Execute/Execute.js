import React, { useEffect, useState } from 'react'; 

function Execute() {
 const [workflowData,setWorkflowData]=useState([]);
  const [selectedTeam,setSelectedTeam]=useState("web");
  const [repo,setRepo]=useState("qa-dp-web-regression");
  const [workflowSelected,setWorkflowSelected]=useState();
  const teams={"andorid":["qa-dp-android"],"ios":["qa-dp-ios"],"web":["qa-dp-web-regression"]};
  

  const handleTeamChange=(e)=>{
    setSelectedTeam(e.target.value);
    setRepo(teams[e.target.value][0]);
  }
  useEffect(()=>{
    console.log(repo)
    console.log(selectedTeam)
    fetch(`/api/dp-qa/workflows/${repo}`)
    .then(res=>res.json())
    .then(data=>{setWorkflowData(data.data)
      console.log(data.data)});
  },[repo])

  const handleRepoChange=(e)=>{
    setRepo(e.target.value);
  }

  const handleExecution=()=>{
    const selectedUrl =  document.getElementById('workflowSelected').options[ document.getElementById('workflowSelected').selectedIndex];
    const  workflow_url = selectedUrl.getAttribute('data-url') + "/dispatches";
    const  workflow_ID = selectedUrl.getAttribute('data-wfid');
    document.getElementById('workFlow-section').style.display = 'block';
    document.getElementById('workFlow-progress').style.display = 'block';
    console.log(workflow_url);

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   "ref": "main",
    //   "inputs": {
    //     "component": "Billing"
    //   }
    // });
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    // fetch(`http://localhost:4000/api/dp-qa/workflows/execute?workflowURL=${workflow_url}`, requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result)).then(document.getElementById('workFlow-section').style.display = 'none')
    //   .catch(error => console.log('error', error));
  }
  const getWFstatus=()=>{

  }
  return (
      <div className='d-wmx1268 d-m-auto'>
        <h1 className='d-headline54 d-my16 d-ta-center'>Execution Details</h1>
        <div className='d-d-flex d-wmx1140 d-m-auto d-jc-space-around d-mb32 d-ai-flex-end'>
          <div className='d-d-grid d-w25p d-p8'>
            <label htmlFor="platformSelect" className='d-fw-semibold'>Select platfrom:</label>
            <select id="platformSelect" onChange={handleTeamChange} value={selectedTeam} defaultValue={selectedTeam}>
            {Object.keys(teams).map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
            ))}
            </select>
          </div>
          <div className='d-d-grid d-w25p d-p8'>
            <label htmlFor="repoSelect" className='d-fw-semibold'>Select repo:</label>
            <select id="repoSelect" onChange={handleRepoChange} defaultValue={teams[selectedTeam][0]}>
            {(teams[selectedTeam]).map((repo) => (
            <option key={repo} value={repo}>
              {repo}
            </option>
            ))}
            </select>
          </div>
          { repo &&
            <div className='d-d-grid d-w25p d-p8'>
              <label htmlFor="cycleSelect" className='d-fw-semibold'>Select a workflow to Trigger:</label>
              <select id="workflowSelected" onChange={(e)=>setWorkflowSelected(e.target.value)} value={workflowSelected}>
              {workflowData.map(e=><option data-wfid={e.workflow_id} data-url={e.workflow_url} value={e.workflow_name} key={e.workflow_name}>{e.workflow_name}</option>)}
              </select>
            </div>
          }
          <div className='d-w25p d-p8'>
            <button className="d-btn d-btn--primary d-btn--lg" type="submit" onClick={handleExecution}>start execution</button>
          </div>
        </div>

        <div id='workFlow-section' style={{display:'none'}}>
          <div id='workFlow-status'>Workflow Loading <div className='loading'><span></span><span></span><span></span><span></span><span></span></div></div>
        </div>
        <div id='workFlow-progress' style={{display:'none'}}>
          <div className='d-d-flex d-wmx512 d-m-auto d-jc-space-around d-mb32'>
            <div className='d-d-grid d-gg16 d-ai-center'>
              <div id="getWFstatus" className='d-fs-300'></div>
              <div className='d-fs-300'>
                <button className="d-btn d-btn--primary" type="submit" onClick={getWFstatus}>Get Status</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Execute;
