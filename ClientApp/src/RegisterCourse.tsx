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
        <div className="content">
            <div className="title-desc">
                <h3 className="title">Hello</h3>
                <h3 className="desc1">Buying from the Himanish Course Section</h3>
            </div>
            <div className="courseImage">
                <img
                    src="https://www.preparationinfo.org/wp-content/uploads/2017/03/digital-marketing.jpg"
                    alt="Courseimage"
                />
                <h2 className="desc2">Digital Marketing Course</h2>
            </div>
            <div className="container">
                <div className="item-hints">
                    <div className="hint" data-position="4">
                        <span className="hint-radius"></span>
                        <span className="hint-dot"></span>
                        <div className="hint-content do--split-children">
                            <p>
                                To use this app and fetchCoursefee you need to install
                                Metamask extn. and select an account with Sepolia Test network
                                on ethereum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-box">
                    <button className="button-fetch" onClick={fetchingCoursefee}>
                        FetchCourseFee
                    </button>
                    <p>Course Fee: {courseFee} ETH</p>
                    <input
                        className="inputEdited"
                        type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <button className="button-snap" onClick={payForCourse}>
                        Pay for Course
                    </button>
                </div>
            </div>
        </div>
    )

}

export default RegisterCourse