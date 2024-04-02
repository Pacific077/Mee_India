import React from 'react'
import img from "../../assets/pageNotFound.jpg"
import "./PageNotFound.css"
const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img src={img} alt="404" className="not-found-image" />
        <div>
          <h1 className="not-found-title">404 - Page Not Found</h1>
          <p className="not-found-message">Oops! It seems like you're lost.</p>
          <p className="not-found-message">The page you are looking for does not exist.</p>
          <button className="not-found-button">Go Back Home</button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound