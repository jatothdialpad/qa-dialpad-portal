const axios = require('axios')

const token = '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';

const config = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
}
//@desc Execute a script
//@route POST /api/dp-qa/execute
const postExecute = async (req, res) => {
    try {
        const { workflowURL } = req.query
        const dispatchData = req.body;
        await axios.post(workflowURL, dispatchData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
            },
        });
        res.status(200).json("Triggered Workflow success");
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred' });
    }
}
const getWorkflow = async (req, res) => {
    let repository_name = req.params.id;
    try {
        const apiEndpoint = `https://api.github.com/repos/dialpad/${repository_name}/actions/workflows`;
        const response = await axios.get(apiEndpoint, config);
        const actualData = response.data.workflows
            .filter(workflow => !workflow.name.toLowerCase().includes(".github/workflows"))
            .map(workflow => ({
                workflow_id: workflow.id,
                workflow_name: workflow.name,
                workflow_url: workflow.url
            }));
        res.status(200).json({
            data: actualData
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred' });
    }
}
const getWorkflowStatus = async (req, res) => {
    let workflowId = req.params.id
    try{
        let apiEndpoint = 'https://api.github.com/repos/dialpad/qa-dp-web-regression/actions/workflows/74329601/runs'
        const response = await axios.get(apiEndpoint, config)
        let status = response.data.workflow_runs[0].conclusion
        res.status(200).json({
            "completionStatus": status
        });
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred' });
    }
};
const storeExecuteData = (req, res) => {
    TestCoverage.find()
    .then((testcoverages) => res.json(testcoverages))
    .catch((err) => res.status(404).json({ notestcoveragesfound: 'No TestCoverages found' }));
}
module.exports = { postExecute, getWorkflow, getWorkflowStatus }
