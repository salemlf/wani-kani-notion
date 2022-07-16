import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()

// TODO: modify to use pagination - https://docs.api.wanikani.com/20170710/#pagination
const getThatData = async (apiEndpointPath) => {
  var apiToken = process.env.TOKEN;
  
  const response = await fetch('https://api.wanikani.com/v2/' + apiEndpointPath, {
    method: 'GET',
    headers: {"Authorization": `Bearer ${apiToken}`}
  });
  
  const data = await response.json();
  return data.data;
}


const getRadicals = async () => {
  var apiEndpointPath = 'subjects?type=radical';
  let radicals = await getThatData(apiEndpointPath);
  return radicals;
}

const getStartedRadicalAssignments = async () => {
  let apiEndpointPath = "assignments?subject_types=radical&started=true";
  let assignments = await getThatData(apiEndpointPath);

  // *testing
  console.log("🚀 ~ file: index.js ~ line 41 ~ getRadicalAssignments ~ assignments", assignments)
  console.log("Radicals started: ", assignments.length);
  // *testing
}

// referencing this a bit: https://community.wanikani.com/t/getting-a-list-of-all-wanikani-kanji-known-and-unknown/51203/6
const getStartedAssignments = async () => {
  getRadicals();
  getStartedRadicalAssignments();

  // TODO: filter to get info on specific subjects: https://docs.api.wanikani.com/20170710/#get-a-specific-subject
}

getStartedAssignments();