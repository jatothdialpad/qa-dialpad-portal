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
    let URL = req.params.url;
    let workflowURL = `${URL}`;
    try {
        const dispatchData = req.body
        //await axios.post(workflowURL, dispatchData);
        res.status(200).json("Triggered Workflow success");
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred' });
    }
}

const getWorkflow = async (req, res) => {

    const respository_name=req.params.id
    // if (osId === 'android') {
    //     repository_name = 'qa-dp-android';
    // } else if (osId === 'web') {
    //     respository_name = 'qa-dp-web-regression';
    // } else if (osId === 'ios') {
    //     respository_name = 'qa-dp-ios'
    // } else {
    //     respository_name = osId.toLowerCase();
    // }

    try {
        const apiEndpoint = `https://api.github.com/repos/dialpad/${respository_name}/actions/workflows`;
        const response = await axios.get(apiEndpoint, config);

        const actualData = response.data.workflows
            .filter(workflow => !workflow.name.toLowerCase().includes(".github/workflows"))
            .map(workflow => ({
                workflow_name: workflow.name,
                Workflow_url: workflow.url
            }));

        res.status(200).json({
            data: actualData
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'An error occurred' });
    }
};



module.exports = { postExecute, getWorkflow }