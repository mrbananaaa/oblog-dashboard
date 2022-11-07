import React from 'react'
const igLink = "https://instagram.com/mr.astagiriii";

const Footer = () => {
  return (
    <div className="footer-container">
      Made with ❤️ by{" "}
      <a
        href={igLink}
        rel="noreferrer"
        target="_blank"
        className="footer-link"
      >
        @mr.bananana
      </a>
    </div>
  )
}

export default Footer