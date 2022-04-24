const axios = require('axios');
let urlString = 'https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json';

axios({
    method: 'get',
    url: urlString, 
    responseType: 'json',
    headers: {
        'Content-Type':'application/json'
    }
}).then(
    function (response) 
    {
        console.log(JSON.stringify(response.data));
    }
)
