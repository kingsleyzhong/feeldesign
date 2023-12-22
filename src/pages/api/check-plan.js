import { HistoryModel } from "@/models/HistoryModel";
import { UserModel } from "@/models/UserModel";
import { dbConnect } from "@/utils/dbConnect";

require("dotenv").config();
const axios = require("axios");
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  // Check database for user, interested in history_count and unlimited

  // If user has unlimited, return true
  // If user has history_count < 5, return true
  // Else return false

  // Req has user uid
  // Get user from database

  // TEMP: FEELDESIGN
  res.send(true);
  return;

  await dbConnect();
  //   res.send(true);

  UserModel.findOne({ uid: req.body.uid }).then((thisUser) => {
    if (thisUser) {
      // Check for null
      if (thisUser.unlimited == null) {
        thisUser.unlimited = false;
      }
      if (thisUser.history_count == null) {
        thisUser.history_count = 0;
      }

      if (thisUser.unlimited) {
        res.send(true);
      } else if (thisUser.history_count < 5) {
        res.send(true);
      } else {
        res.send(false);
      }
      thisUser.save();
    } else {
      console.log("error");
      res.send(false);
    }
  });
}
