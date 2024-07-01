import React from 'react'

const Contact = () => {
  function prev(e){
    e.preventDefault();
  }
  return (
    <div className="contact-page container d-flex justify-content-center align-items-start m-5">
      <div className="left-side p-3">
        <div className="call-us mb-4">
          <h3>Call to Us</h3>
          <p>Phone: +1 234 567 890</p>
          <p>Hours: Mon-Fri 9am - 6pm</p>
        </div>
        <div className="write-to-us">
          <h3>Write to Us</h3>
          <p>Email: support@example.com</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>
      </div>
      <div className="right-side d-flex justify-content-between p-3">
        <form className="w-100">
          <div className="d-flex justify-content-between mb-3">
            <input type="text" className="form-control me-2 input-red" placeholder="Your Name" />
            <input type="email" className="form-control me-2 input-red" placeholder="Your Email" />
            <input type="tel" className="form-control input-red" placeholder="Your Phone" />
          </div>
          <div className="mb-3">
            <textarea className="form-control input-red" rows="6" placeholder="Your Message"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-danger" onClick={(e)=>{prev(e)}}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact