// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const axios = require("axios");
const jwt = require("jsonwebtoken");
import { UserModel } from "@/models/UserModel";
import { dbConnect } from "@/utils/dbConnect";
import { parse, serialize } from "cookie";
export default function handler(req, res) {
  const { code, state } = req.query;
  getAccessToken({ code }).then((idToken) => {
    getProfile({ idToken }).then(async ({ name, email, picture, sub: uid }) => {
      const token = await jwt.sign(
        { name, email, picture, uid },
        process.env.JWT_SECRET
      );
      console.log(uid, "uid");
      const maxAge = 2600000;
      const serializedCookie = serialize("token", token, {
        maxAge,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      await dbConnect();
      UserModel.findOne({ uid }).then((thisUser) => {
        if (thisUser) {
          thisUser.name = name;
          thisUser.email = email;
          thisUser.picture = picture;
          thisUser.uid = uid;
          thisUser.save().then((userDb) => {
            res.setHeader("Set-Cookie", serializedCookie);
            res.redirect("/ai");
          });
        } else {
          console.log("new user");
          console.log(name, email, picture, uid);
          const thisUser = new UserModel({
            name,
            email,
            picture,
            uid,
            history_count: 0,
            unlimited: false,
          });
          thisUser.save().then(() => {
            res.setHeader("Set-Cookie", serializedCookie);
            res.redirect("/ai");
          });
        }
      });
    });
  });
}

const getProfile = ({ idToken }) => {
  const data = new URLSearchParams();
  data.append("client_id", process.env.LINE_CLIENT);
  data.append("id_token", idToken);

  console.log(idToken, "idToken");

  return axios
    .post("https://api.line.me/oauth2/v2.1/verify", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((result) => result.data);
};

const getAccessToken = ({ code }) => {
  const data = new URLSearchParams();
  data.append("grant_type", "authorization_code");
  data.append("code", code);
  data.append("redirect_uri", process.env.REDIRECT_URL);
  data.append("client_id", process.env.LINE_CLIENT);
  data.append("client_secret", process.env.LINE_SECRET);

  console.log(code, "code");

  return axios
    .post("https://api.line.me/oauth2/v2.1/token", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((result) => result.data.id_token);
};
