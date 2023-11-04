
const jwt=require('./JWTTokenGenerator');

function getqsh(url) {
  const head = jwt.getJWTForReq('GET&'+url);
  return fetch(url, {
  method: 'GET',
  headers: { "Authorization":head.Authorization,
             "zapiAccessKey":head.zapiAccessKey},
}).then(response => {
  return response.text();
});
}


async function getData(url) {
  try {
    const data = await getqsh(url);
    console.log('Response data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

module.exports={getData}
