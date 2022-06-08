let xhr = new XMLHttpRequest();
xhr.open("POST", "https://api-{fqdn}/public_api/v1/endpoints/delete");

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
                       "<endpoint ID>"
                    ]
        } ]
        }   
}`;

xhr.send(data);