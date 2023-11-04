const {getJWTToken}=require('../zephyr/getjwtToken');
async function versionDetails(){
  const headers=await getJWTToken('https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/cycles/search?versionId=22500&expand=&projectId=10100');
  const response=await fetch('https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/cycles/search?versionId=22500&expand=&projectId=10100', {
        method: 'GET',
        headers: { "Authorization":headers.Authorization,
                   "zapiAccessKey":headers.zapiAccessKey},
      });
  const data=await response.json();
  console.log(data)
}
versionDetails();
