import React, { useState } from 'react'
import './committee.css'
import members from './committee_members.json'
import MemberCards from './MemberCards'

function Committee() {
  // Set default tenure to 2023-2024
  const [selectedTenure, setSelectedTenure] = useState('2023-2024');

  // Filter members based on the selected tenure
  const filteredMembers = members.filter(member => member.tenure === selectedTenure);

  // Handle tenure selection
  const handleTenureSelection = (tenure) => {
    setSelectedTenure(tenure);
  };

  return (
    <div className='committee animate__animated animate__fadeIn'>
      <center>
        <div className="committeetitle animate__animated animate__slideInLeft">Committee Members</div>
      </center>

      {/* Dropdown Menu to select tenure */}
      <div className="dropdown">
        <button className="dropdown-button">{selectedTenure}</button>
        <div className="dropdown-content">
          <a href="#" onClick={() => handleTenureSelection('2023-2024')}>2023-2024</a>
          <a href="#" onClick={() => handleTenureSelection('2024-2025')}>2024-2025</a>
          <a href="#" onClick={() => handleTenureSelection('2025-2026')}>2025-2026</a>
        </div>
      </div>

      <div className="committeemembers">
        <div className="container membersx">
          <div className="row">
            {
              filteredMembers.map(member => (
                <div className="col-sm-4 colx" key={member.id}>
                  <MemberCards
                    member_img_link={member.member_img_link}
                    member_name={member.member_name}
                    member_position={member.member_position}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Committee
