curl -X POST https://api-{fqdn}/public_api/v1/endpoints/delete/ \
-H "x-xdr-auth-id:{API_KEY_ID}" \
-H "Authorization:{API_KEY}" \
-H "Content-Type:application/json" \
-d '{
   "request_data":{
"filters":[
         {
            "field":"endpoint_id_list",
            "operator":"in",
            "value":[
               "<endpoint ID>"
            ]
} ]
}' }

