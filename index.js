import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()

// TODO: modify to use pagination - https://docs.api.wanikani.com/20170710/#pagination
const getThatData = async (apiEndpointPath) => {
  var apiToken = process.env.TOKEN;
  // var apiEndpointPath = 'subjects';
  
  const response = await fetch('https://api.wanikani.com/v2/' + apiEndpointPath, {
    method: 'GET',
    headers: {"Authorization": `Bearer ${apiToken}`}
  });
  
  const data = await response.json();
  // console.log(JSON.stringify(data));
  return data.data;
}


const getKnownRadicals = async () => {
  var apiEndpointPath = 'subjects?subject_type=radical';
  let datData = await getThatData(apiEndpointPath)


  console.log("🚀 ~ file: index.js ~ line 23 ~ getKnownRadicals ~ datData", datData)
  

  // const known = datData.filter(word => word.length > 6);

  // filtering so only known remain

  /*
  use subject_type attribute to filter by items type (kanji, radical, vocab)
burned items will have burned attribute set to a burn date (not yet burned have it set to null)
started_at will be null if you haven’t completed a lesson for this item, other wise it will have a timestamp of when you completed the lesson
  */
}

const getKnownAssignments = () => {
  getKnownRadicals();
}

getKnownAssignments();