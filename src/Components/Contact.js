import React from 'react';
import './contact.css';
import 'animate.css'; // Import the animate.css library

function Contact() {
  return (
    <div className='contact animate__animated animate__fadeIn'>
      {/* Added a rise-up animation for the title */}
      <p className="contacttitle animate__animated animate__fadeInUp">Contact Details</p>

      {/* Contact details for Dr. Albert Alexander S. */}
      <a
        href="https://www.linkedin.com/in/dr-s-albert-alexander-92590212?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKgHq0BNEw4w3FscKonrk56Dc6BrpudIKc" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact_card_link"
      >
        <div className="contact_card">
          <img 
            src="facultycoordinator/albert_alexander_s.jpeg" 
            alt="Dr. Albert Alexander S." 
            className="contact_image" 
          />
          <div className="contact_info">
            <div className="contact_name">Dr. Albert Alexander S.</div>
            <div className="contact_position">Faculty Co-ordinator , IEEE PELS VIT VELLORE </div>
            <div className="contact_email">ootyalex@gmail.com</div>
          </div>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/chitra-a-3904468a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABLuPpwBtsDc0_F18HjmdIokfm8gbL9CMno&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BI7%2FJB9NXS9arO49H6RYRGA%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact_card_link"
      >
        <div className="contact_card">
          <img 
            src="facultycoordinator/chitra_a.jpeg" 
            alt="Dr. Chitra A." 
            className="contact_image" 
          />
          <div className="contact_info">
            <div className="contact_name">Dr. Chitra A.</div>
            <div className="contact_position">Faculty Co-ordinator , IEEE PELS VIT VELLORE </div>
            <div className="contact_email">chitra.a@vit.ac.in</div>
          </div>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/chairperson-p" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact_card_link"
      >
        <div className="contact_card">
          <img 
            src="facultycoordinator\WhatsApp Image 2024-12-18 at 21.42.35_cf99e865.jpg" 
            alt="Chairperson of IEEE PELS VIT VELLORE" 
            className="contact_image" 
          />
          <div className="contact_info">
            <div className="contact_name">ADVIK VIJAY </div>
            <div className="contact_position">Chairperson, IEEE PELS VIT VELLORE </div>
            
          </div>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/secretary-profile/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact_card_link"
      >
        <div className="contact_card">
          <img 
            src="facultycoordinator\WhatsApp Image 2025-01-03 at 19.03.19_89e21316.jpg" 
            alt="Secretary of IEEE PELS VIT VELLORE " 
            className="contact_image" 
          />
          <div className="contact_info">
            <div className="contact_name">Prachi Kumari </div>
            <div className="contact_position">Secretary, IEEE PELS VIT VELLORE </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Contact;