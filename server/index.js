import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import  { v4 as uuid } from 'uuid'

import Router from "./routes/route.js";

const app =express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extented: true}));
app.use(bodyParser.urlencoded({extented: true}));
app.use('/', Router);

const PORT =8600;

//const USERNAME =process.env.DB_USERNAME;
//const PASSWORD =process.env.DB_PASSWORD;

//Connection(USERNAME ,PASSWORD);
Connection();

app.listen(PORT , () => console.log(`Server is Running successfully on ${PORT}`));

DefaultData();

export let  paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams ={};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'https://localhost:9000/callback';
paytmParams['EMAIL'] = 'mishraanmol534@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890';