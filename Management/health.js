// checks the health of the Palo Cortex Enviorment
let xhr = new XMLHttpRequest();

let data_active = false

xhr.open("POST", "https://api-" + (fqdn) + "/public_api/v1/healthcheck/");

xhr.setRequestHeader("x-xdr-auth-id", (API_KEY_ID));
xhr.setRequestHeader("Authorization", (API_KEY));
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    ("request_data":{
        "status":[
 ]
        }   
}`;

xhr.send(data);