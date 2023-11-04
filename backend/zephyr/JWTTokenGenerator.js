const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class JWTGenerator {
  constructor(account_id, access_key, secret_key, canonical_path) {
    this.account_id = account_id;
    this.access_key = access_key;
    this.secret_key = secret_key;
    this.expire = 3600;
    this.canonical_path = canonical_path;
  }

  get jwt() {
    const qsh = crypto.createHash('sha256').update(this.canonical_path).digest('hex');
    const payload = {
      sub: this.account_id,
      qsh,
      iss: this.access_key,
      exp: Math.floor(Date.now() / 1000) + this.expire,
      iat: Math.floor(Date.now() / 1000)
    };
    const token = jwt.sign(payload, this.secret_key, { algorithm: 'HS256' });
    return token;
  }

  get headers() {
    const headers = {
      'Authorization': 'JWT ' + this.jwt,
      'Content-Type': 'application/json',
      'zapiAccessKey': this.access_key
    };
    return headers;
  }
}

// Example usage
function getJWTForReq(url) {
  const CANONICAL_PATH = url;
  const generator = new JWTGenerator('61d700337c6f9800706434f3','amlyYTpjNGZhMzAwZi1mZGNmLTQwYjgtYWFiZC02NWFmYTBiNzc3ZjYgNjFkNzAwMzM3YzZmOTgwMDcwNjQzNGYzIFVTRVJfREVGQVVMVF9OQU1F','6jTcHWaRWe6o-OagDsuWvkHfJN6oDVP9SO0e4Jfge6M', CANONICAL_PATH)
  return generator.headers;
}
module.exports={getJWTForReq};

