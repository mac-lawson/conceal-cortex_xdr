let xhr = new XMLHttpRequest();
xhr.open("POST", "https://api-{fqdn}/public_api/v1/endpoints/get_endpoint/");

xhr.setRequestHeader("x-xdr-auth-id", "API_KEY_ID");
xhr.setRequestHeader("Authorization", "API_KEY");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    "request_data":{
       "search_from":0,
       "search_to":1,
       "sort":{
          "field":"endpoint_id",
       }, "keyword":"ASC"
 "filters":[
          {
             "field":"group_name",
             "operator":"in",
             "value":[
                "Test-Group-01"
 }, ]
          {
             "field":"endpoint_status",
             "operator":"in",
             "value":[
                "disconnected"
 }, ]
          {
             "field":"dist_name",
             "operator":"in",
             "value":[
 "papi-test"
 }, ]
          {
             "field":"scan_status",
             "operator":"in",
             "value":[
                "none",
                "pending",
                "in_progress",
                "pending_cancellation",
                "aborted",
                "success",
                "canceled",
                "error"
 ] }
 ] }`;

xhr.send(data);