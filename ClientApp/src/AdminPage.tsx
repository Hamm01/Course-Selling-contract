import { useEffect, useState } from 'react'
import Web3 from 'web3';
import './admin.css'

interface PaymentType {
    email: string,
    user: string,
    amount: number
}
interface ParametersType {
    web3: Web3 | null,
    courseContract: any
}

export default function AdminPage({ web3, courseContract }: ParametersType) {
    const [payments, setPayments] = useState<PaymentType[]>([])

    const fetchPayments = async () => {
        if (!web3 || !courseContract) return;


        try {
            const paymentDetails = await courseContract.methods.getAllPayments().call()
            paymentDetails.map(payment => payment.amount = web3.utils.fromWei(payment.amount, 'ether'))
            setPayments(paymentDetails)
        } catch (error) {
            console.error("Error in fetching the payment details of user", error)
            alert(" Errors in fetching Payment details")
        }

    }
    useEffect(() => {
        fetchPayments()

    }, [web3, courseContract])
    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1><br />
            <p>Total {payments?.length} people have bought the course!</p>
            <table className="payments-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.email}>
                            <td>{payment.user}</td>
                            <td>{payment.email}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)

}