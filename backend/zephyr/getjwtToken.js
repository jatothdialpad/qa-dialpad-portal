const {getData}=require('./GetQSH');
const {getJWTForQSH}=require('./jwtTokenUsingQsh');
function getExpectedQSH(string) {
      const pattern = /Expecting claim ('qsh') to have value '([^']+)'/;
    
      // Match the regular expression against the given string.
      const match = pattern.exec(string);
    
      // If the regular expression matches, get the expected claim 'qsh'.
      if (match) {
        return match[2];
      } else {
        return null;
      }
    };


async function getJWTToken(url){
  const data=await getData(url);
  const qshValue=getExpectedQSH(data);
  const token=await getJWTForQSH(qshValue);
  return token;
};

module.exports={getJWTToken}