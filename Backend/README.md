# Backend Written in Nodejs Typescript

The Project after deployment will capture the events when someone buy the course , after getting the details
of user , the backend will call the hook to another backend for stroring the information for user by its email

Libraries installed to use in project is Web3 and axios

```
npm i web3 axios
```

Then used the Contract Abi that was created during the deployment of contract

The account is using a hardcoded url of RPC provider that will call node for subscribing the event
speoliaProvideURL = here its websocker server used in infura for
you can create your own account on infura and replace the speoliaProvideURL with your url

PaymentReceived event will get subscribed and whenever someone pays for the course the webhook for another backend
will be called

```
tsc -b // for compiling the typescript
node index.js   // to run the backend
```
