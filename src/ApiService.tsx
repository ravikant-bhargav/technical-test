const BASE_URL  = "https://api.github.com/search/users";
const fetchServerDataGet = async (requestVal: any, headers: any) => {
  const url = BASE_URL+"?q="+requestVal;
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    return await response;
  } catch (error) {
    console.error('Error ==> ', error);
  }
};

export {
  fetchServerDataGet
}