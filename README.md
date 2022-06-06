# conceal-cortex_xdr
Integration for Alto Cortex and Conceal.io

## API Information
Get your Cortex XDR API Key.
- InCortexXDR,navigatetoSengs>Configuraons>Integraons>APIKeys.
- Select +NewKey.

## Further Information
### API Key
The API Key is your unique idenfier used as the "Authorization:{key}" header required for callng API calls.
Depending on your desired security level, you can generate two types of API keys, Advanced or Standard, from your Cortex XDR app.
### API Key ID
The API Key ID is your unique token used to authencate the API Key. The header used when running an API call is "x-xdr-auth-id: {key_id}".
### FQDN
The FQDN is a unique host and domain name associated with each tenant. When you generate the API Key and Key ID, you are assigned an individual FQDN.
