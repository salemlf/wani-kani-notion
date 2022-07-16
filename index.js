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
  var apiEndpointPath = 'subjects?subject_type=radical';
  let radicals = await getThatData(apiEndpointPath);
  return radicals;
}

const getRadicalAssignments = async () => {

    /*
  use subject_type attribute to filter by items type (kanji, radical, vocab)
  burned items will have burned attribute set to a burn date (not yet burned have it set to null)
  started_at will be null if you haven’t completed a lesson for this item, other wise it will have a timestamp of when you completed the lesson
  */

  // filtering so only known remain
  // *testing
  // datData.forEach(element => {
  //   console.log(element)
  // });
  // *testing

  const known = datData.filter(item => item.data.started_at != null);
  console.log("🚀 ~ file: index.js ~ line 32 ~ getKnownRadicals ~ known", known)
}


const getKnownAssignments = async () => {
  getRadicals();
  getRadicalAssignments();
  let radicals = await getRadicals();
}

getKnownAssignments();