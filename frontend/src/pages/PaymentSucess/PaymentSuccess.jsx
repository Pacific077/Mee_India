import React from 'react'
import "./PaymentSucess.css"
import { useParams } from 'react-router-dom'
const PaymentSuccess = () => {
  const { type, refId } = useParams()
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
            <circle cx="12" cy="12" r="10" stroke={type === "no" ? "red" : "currentColor"}></circle>
            {type === "yes" ? (
              <polyline points="6 12 10 16 18 8"></polyline>
            ) : (
              <g>
                <line x1="6" y1="6" x2="18" y2="18" stroke="red" />
                <line x1="6" y1="18" x2="18" y2="6" stroke="red" />
              </g>
            )}

          </svg>
        </div>
        {type==="yes"?<h2 className="success-message">Payment Successful!</h2>:<h2 className="success-message">Payment Declined!</h2>}
        {type==="yes"? <p className="success-description">Thank you for your payment. Your transaction has been completed successfully.</p>: <p className="success-description">We are sorry for inconvience !! Please contact Customer care for support.</p>}
        
       
        {refId && (
          <p className="ref-id">Reference ID: {refId}</p>
        )}
        <button className="continue-dashboard-button">Dashboard</button>
      </div>
    </div>
  )
}

export default PaymentSuccess