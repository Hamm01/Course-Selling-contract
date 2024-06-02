import './App.css'
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import type { Contract } from 'web3-eth-contract';
import { contractABI } from "./abi.ts";
import RegisterCourse from './RegisterCourse.tsx';
import AdminPage from './AdminPage.tsx';

function App() {
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [courseContract, setCourseContract] = useState<Contract | null>(null)
  const [courseFee, setCourseFee] = useState('')
  const contractAddress = '0xb5ed31d8a78b71d7ed85d02e253b0d9d79a9c678'

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          // first time if some one visiting the site it will ask to select account using metamask
          const web3Instance: any = new Web3(window.ethereum)
          setWeb3(web3Instance)

        })
    }
    else if (window.web3) {
      const web3 = new Web3(window.web3.currentProvider);
      setWeb3(web3)
    } else {
      console.log('Any Wallet like metamask extension not found!!');
    }

  }, [])

  async function fetchingCoursefee() {
    if (web3) {
      try {
        const courseContractInstance = new web3.eth.Contract(contractABI, contractAddress)
        setCourseContract(courseContractInstance)
        const _CourseFee: number = await courseContractInstance.methods.courseFee().call()
        setCourseFee(web3.utils.fromWei(_CourseFee, 'ether'))
      } catch (error) {
        console.error('Error in fetching course fee:', error);
      }
    }
  }



  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">CourseRegistration Homepage</Link></li>
          <li><Link to="/admin">Admin page</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterCourse web3={web3} courseContract={courseContract} courseFee={courseFee} fetchingCoursefee={fetchingCoursefee} />} />
        <Route path="/admin" element={<AdminPage web3={web3} courseContract={courseContract} />} />

      </Routes>
    </>

  );
}

export default App
