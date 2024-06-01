# React + TypeScript Frontend project for Client side for Course Selling and Accepting payment using Ether blockchain

Explanation of Things done in this project

1. Browser Router used for make two routes for project
   a. RegisterCourse.tsx used for Registering the user using email and making metamask transaction
   b. Admin page will be used to see the no of users bought the course and with the public eth address , email and amount
2. Project used Vite to bundle the project, used react-router-dom , web3.js and types for web3.js installed in project
3. App.tsx created with importing and window.ethererum is an object injected into the browser by Ethereum-compatible wallets such as MetaMask.
   and object provides a connection between your web application (frontend) and the Ethereum blockchain

   a) To check if Ethereum Provider is Available:

   ```
   if (window.ethereum) {
    console.log('Ethereum provider is available');
    }
   ```

   b) Request Account Access: when we interact with the user's Ethereum account, you need to request access. This typically involves a popup in MetaMask asking the user to approve the connection.

   ```
       window.ethereum.request({ method: 'eth_requestAccounts' })
     .then(accounts => {
       console.log('User account:', accounts[0]);
     })
     .catch(error => {
       console.error('User denied account access:', error);
     });
   ```

   c) Creating a Web3 Instance: window.ethereum can be used to create a new instance of Web3.js, which is a library for interacting with the Ethereum blockchain.

   ```
   import Web3 from 'web3';
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(accounts => {
            console.log('User account:', accounts[0]);
          })
          .catch(error => {
            console.error('User denied account access:', error);
          });
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
   ```

4. BrowserRouter used in main.tsx and then in App.tsx it has declared two routes and for functionality i delcared three
   state Variable, Web3 for storing the object for the web3Instance , CourseContract state variable to store the contract object that
   was instanitiated using web3.eth.contract and CourseFee state varible for storing predefined fee on contract deployed on ether blockchain ,this will be fetched in using function
