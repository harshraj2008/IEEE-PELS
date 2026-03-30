import React, { useState, useEffect, useRef } from 'react';
import './committee.css';
import members from './committee_members.json';
import advisoryBoard from './advisoryboard.json';

function Committee() {
  const [selectedTenure, setSelectedTenure] = useState('2024-2025');
  const titleRef = useRef(null);

  const filteredMembers = members.filter(member => member.tenure === selectedTenure);
  const filteredAdvisoryBoard = advisoryBoard.filter(member => member.tenure === selectedTenure);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.style.opacity = 0;
      titleElement.style.transform = 'translateY(50px)';
      titleElement.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

      setTimeout(() => {
        titleElement.style.opacity = 1;
        titleElement.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="committee">
      <center>
        <div className="committeetitle" ref={titleRef}>
          Committee Members
        </div>
      </center>

      {/* Dropdown Menu to Select Tenure */}
      <div className="menu-container">
        <div className="dropdown-item">
          <label htmlFor="tenure-select" className="dropdown-label">Select Tenure</label>
          <select
            id="tenure-select"
            className="dropdown"
            onChange={(e) => setSelectedTenure(e.target.value)}
            value={selectedTenure}
            aria-label="Select Committee Tenure"
          >
            <option value="2022-2023">2022-2023</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
            <option value ="2025-2026">2025-2026</option>
          </select>
        </div>
      </div>

      {/* Committee Members Section */}
      <div className="committeemembers">
        {filteredMembers.map(member => (
          <div className="membersx" key={member.id}>
            <img
              src={member.member_img_link}
              alt={`Profile of ${member.member_name}`}
              className="member-img"
            />
            <div className="member-info">
              <a
                href={member.linkedin_profile}
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                {member.member_name}
              </a>
              <div className="member-position">{member.member_position}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory Board Section */}
      {filteredAdvisoryBoard.length > 0 && (
        <div className="advisoryboard">
          <center>
            <div className="advisorytitle">Advisory Board</div>
          </center>
          <div className="committeemembers">
            {filteredAdvisoryBoard.map(member => (
              <div className="membersx" key={member.id}>
                <img
                  src={member.member_img_link}
                  alt={`Profile of ${member.member_name}`}
                  className="member-img"
                />
                <div className="member-info">
                  <a
                    href={member.linkedin_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-name"
                  >
                    {member.member_name}
                  </a>
                  <div className="member-position">{member.member_position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Committee;
