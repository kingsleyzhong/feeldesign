const { v4 } = require("uuid");
const channelId = process.env.LINE_CLIENT;
const redirectUrl = process.env.REDIRECT_URL;
const state = v4();
const scope = "profile openid email";
const nonce = "anythingToSecureTheURI012";

const getLineAuth = (base_url) => {
  const new_redirectUrl = base_url + "/api/line-auth";
  const lineAuth_ = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${new_redirectUrl}&state=${state}&bot_prompt=aggressive&scope=${scope}&nonce=${nonce}`;
  return lineAuth_;
};

let lineAuth = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${redirectUrl}&state=${state}&bot_prompt=aggressive&scope=${scope}&nonce=${nonce}`;

export default lineAuth;
export { getLineAuth };
