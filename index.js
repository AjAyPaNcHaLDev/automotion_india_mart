import express, { response } from "express";
import data1 from "./data.js";
import axios from "axios";
import env from "dotenv";
import data from "./data.js";
env.config();
const app = express();

const API_URL = "https://mapi.indiamart.com/wservce/crm/crmListing/v2/";
const GLUSR_CRM_KEY = "mR26Fr1t4nbIQPeo5HOC7liOolvElDlhXw==";
// const START_TIME = "05-sept-2023";
// const END_TIME = "11-sept-2023";
let num = "918570091377";
app.post("/api/v1/wp/send", async (req, res) => {
  let i = 0;
  for (const msg of data1.RESPONSE) {
    if (i === 4) {
      res
        .status(200)
        .json({ msg: "you get 5 dummy saved messages by API to WhatsApp" });
      break; // Exit the loop when i reaches 4
    }
    sendMsg(msg);
    i++;
  }
  //   res.status(200).json({ status: 200, msg: "sent" });
});

const sendMsg = async (item) => {
  await axios
    .post(`${process.env.SendMessageWhatsappUrl}`, {
      number: "918570091377",
      type: "text",
      message: ` 
              ${item.SENDER_NAME} 
              ${item.QUERY_MCAT_NAME} 
              ${item.QUERY_MESSAGE} 
              ${item.SENDER_COMPANY}
              ${item.SENDER_STATE}   
              ${item.SENDER_CITY}       
      `,
      instance_id: process.env.InstanceID,
      access_token: process.env.AccessToken,
    })
    .then((response) => {
      console.log("sent");
    })
    .catch((error) => {
      console.log("error");
    });
};

const getData = async (start_time, end_time) => {
  try {
    const { data } = await axios.get(
      `${process.env.IndiaMartApiUrl}?glusr_crm_key=${process.env.GLUSR_CRM_KEY}&start_time=${start_time}&end_time=${end_time}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

app.listen(process.env.Port, (req, res) => {
  console.log("server listen port", process.env.Port);
});
