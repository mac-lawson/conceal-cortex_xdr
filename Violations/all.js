let xhr = new XMLHttpRequest();
xhr.open("POST", "https://api-{fqdn}/public_api/v1/device_control/get_violation");

xhr.setRequestHeader("x-xdr-auth-id", "API_KEY_ID");
xhr.setRequestHeader("Authorization", "API_KEY");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
        "request_data":{
        }
}`;

xhr.send(data);