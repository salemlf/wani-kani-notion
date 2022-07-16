import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()

var apiToken = process.env.TOKEN;
var apiEndpointPath = 'assignments';

const response = await fetch('https://api.wanikani.com/v2/' + apiEndpointPath, {
	method: 'GET',
  headers: {"Authorization": `Bearer ${apiToken}`}
});

const data = await response.json();
console.log(data);