import Web3 from 'web3'
import axios from 'axios'
import { contractABI } from './abi'
const speoliaProvideURL =
  'wss://sepolia.infura.io/ws/v3/bbcf44cfb50f19f9bbc71e91826d859c'
const contractAddress = '0xb5ed31d8a78b71d7ed85d02e253b0d9d79a9c678'

const web3 = new Web3(new Web3.providers.WebsocketProvider(speoliaProvideURL))
const contract = new web3.eth.Contract(contractABI, contractAddress)

contract.events
  .PaymentReceived({
    fromBlock: 0
  })
  .on('data', async function (event) {
    console.log(`we got the new user payment notification to the course `)

    console.log(
      `${event.returnValues.email} ${event.returnValues.user} ${event.returnValues.amount}`
    )
  })
