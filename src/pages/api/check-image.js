import { HistoryModel } from "@/models/HistoryModel";
import { dbConnect } from "@/utils/dbConnect";
import { UserModel } from "@/models/UserModel";

require("dotenv").config();
const axios = require("axios");
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const response = await axios.get(
    "https://api.thenextleg.io/v2/message/" + req.query.id,
    {
      headers: {
        Authorization: process.env.NEXT_LEG,
        "Content-Type": "application/json",
      },
    }
  );

  // TODO - Upgrade
  // if (response.data.progress == 100) {
  //   const { imageUrl, imageUrls, content } = response.data?.response;
  //   const { token } = req.cookies;
  //   if (token) {
  //     const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  //     const email = decoded.email;
  //     await dbConnect();
  //     const newHistory = new HistoryModel({
  //       email,
  //       onBoard: req.body,
  //       output: {
  //         imageUrl,
  //         imageUrls,
  //         prompt: content,
  //       },
  //     });
  //     newHistory.save().catch((err) => {
  //       console.log(err);
  //     });

  //     // Update user history_count
  //     const uid = decoded.uid;
  //     UserModel.findOne({ uid }).then((thisUser) => {
  //       if (thisUser) {
  //         if (thisUser.history_count == null) {
  //           thisUser.history_count = 0;
  //         }
  //         thisUser.history_count += 1;
  //         thisUser.save();
  //       }
  //     });
  //   }
  // }
  res.send(response.data);
}
