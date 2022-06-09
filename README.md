
# Palo Cortex Web Interface Plugin
[![MIT License](https://img.shields.io/badge/developer-Mac%20Lawson-blue)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![MIT License](https://img.shields.io/github/contributors/mac-lawson/conceal-cortex_xdr)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![GitHub last commit](https://img.shields.io/github/last-commit/mac-lawson/conceal-cortex_xdr)[![MIT License](https://img.shields.io/badge/developer-Mac%20Lawson-blue)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![GitHub branch checks state](https://img.shields.io/github/checks-status/mac-lawson/conceal-cortex_xdr/main)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mac-lawson/conceal-cortex_xdr)
Interface with endpoints controlled via Palo Cortex

## Deployment
To enable the plugin, use the console to establish the API and FQDN variables 
```javascript
let API_KEY_ID = {your api key id}
let API_KEY = {api key}
let fqnd = {cortex fqdn}
```


## Reference

#### Init

```http
let API_KEY_ID = {your api key id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY_ID` | `string` | **Required**. Your API key ID |


```http
let API_KEY = {api key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `API_KEY`      | `string` | **Required**. Your API key |

```http
let fqnd = {your palo cortex fqdn}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fqdn`      | `string` | **Required**. Your Palo Cortex FQDN |

## 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `<endpoint ID>`      | `integer` | **Required**. Individual IDs for endpoints on Alto
Cortex |
| `<filter objects>`| `string / integer / double` | Specific filters for calls that require the filtering of Cortex endpoints

#### Run files for development testing in the console of a browser



## Developers

- [Lead: Mac Lawson](https://www.github.com/mac-lawson)

