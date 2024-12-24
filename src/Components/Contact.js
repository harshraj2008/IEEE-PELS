import React from 'react';
import './contact.css';
import 'animate.css'; // Import the animate.css library

function Contact() {
  return (
    <div className='contact animate__animated animate__fadeIn'>
      {/* Added a rise-up animation for the title */}
      <p className="contacttitle animate__animated animate__fadeInUp">Contact Details</p>

      {/* Contact details for Dr. Albert Alexander S. */}
      <div className="contact_card">
        <img 
          src="facultycoordinator/albert_alexander_s.jpeg" 
          alt="Dr. Albert Alexander S." 
          className="contact_image" 
        />
        <div className="contact_info">
          <div className="contact_name">Dr. Albert Alexander S.</div>
          <div className="contact_position">Faculty Co-ordinator</div>
          <div className="contact_email">ootyalex@gmail.com</div>
        </div>
      </div>

      {/* Contact details for Dr. Chitra A. */}
      <div className="contact_card">
        <img 
          src="facultycoordinator/chitra_a.jpeg" 
          alt="Dr. Chitra A." 
          className="contact_image" 
        />
        <div className="contact_info">
          <div className="contact_name">Dr. Chitra A.</div>
          <div className="contact_position">Faculty Co-ordinator</div>
          <div className="contact_email">chitra.a@vit.ac.in</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
