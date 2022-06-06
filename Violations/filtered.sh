curl -X POST https://api-{fqdn}.xdr.pan.com/public_api/v1/
device_control/get_violations/ \
-H "x-xdr-auth-id:{key_id}" \
-H "Authorization:{key}" \
-H "Content-Type:application/json" \
-d'{
 "request_data": {
        "filters": [
            {
                "field": "type",
                "operator": "in",
                "value": ["disk drivE"]
} ],
        "search_to":1
    }
}'