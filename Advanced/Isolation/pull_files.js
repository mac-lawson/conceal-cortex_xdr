let xhr = new XMLHttpRequest();

let data_active = false

xhr.open("POST", "https://api-" + (fqdn) + "/public_api/v1/endpoints/file_retrieval/");

xhr.setRequestHeader("x-xdr-auth-id", (API_KEY_ID));
xhr.setRequestHeader("Authorization", (API_KEY));
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    "request_data":{
       "filters":[
          {
             "field":"endpoint_id_list",
             "operator":"in",
             "value":[
                "<endpoint ID 1>",
                "<endpoint ID 2>",
                "<endpoint ID 3>"
 ]
       ], }
       "files":{
 "windows":[
             prin"C:\\<file path>\\test.txt"
          ]
 } } }`

xhr.send(data);
