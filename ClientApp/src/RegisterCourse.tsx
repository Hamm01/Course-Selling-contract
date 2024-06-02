import { useState } from "react"

function RegisterCourse({ web3, courseContract, courseFee, fetchingCoursefee }) {
    const [email, setEmail] = useState("")

    async function payForCourse() {
        if (!web3 || !courseContract) return
        try {
            const accounts = await web3.eth.getAccounts()
            const amountInWei = web3.utils.toWei(courseFee, 'ether')
            console.log("courseFee ", courseFee)
            console.log("amountInWei ", amountInWei)
            const receipt = await courseContract.methods.payForCourse(email).send({ from: accounts[0], value: amountInWei })
            console.log('Transaction successful:', receipt);
            alert('Payment successful!');
        }
        catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed!');
        }

    }
    return (
        <div>
            <p style={{ color: 'red', textAlign: 'center', fontSize: '1.2rem' }}>Hello</p>
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Buying from the Himanish Course Section</p>

            <h1>Digital Marketing Course Registration</h1>
            <img src="https://www.preparationinfo.org/wp-content/uploads/2017/03/digital-marketing.jpg" alt="" width="300px" height="250px" />
            <br />
            <br />
            <p>Fetching the Current price using blockchain</p>
            <button onClick={fetchingCoursefee}>FetchCourseFee</button>
            <p>Course Fee: {courseFee} ETH</p>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={payForCourse}>Pay for Course</button>
        </div>
    )

}

export default RegisterCourse