import React, { useState, useCallback } from "react";
import './css/TeamSection.css';
import { backendUrl, teamData } from "../Datasets/data";

const TeamMember = React.memo(({ member, onMemberClick }) => (
  <div className="team-card-container" onClick={() => onMemberClick(member)}>
    <img className="team-card-image" src={`${backendUrl}${member.imageURL}`} alt={member.imageALT} />
    <div className="team-card-name">{member.name}</div>
    <div className="team-card-job-title">{member.jobTitle}</div>
  </div>
));

const Modal = ({ member, onClose, isVisible }) => (
  <>
    <div className={`tm-full-container ${isVisible ? 'visible' : ''}`} onClick={onClose}></div>
    <div className={`team-modal-container ${isVisible ? 'visible' : ''}`}>
      {member && (
        <>
          <div className="modal-left-container">
            <img src={`${backendUrl}${member.imageURL}`} alt={member.imageALT} className="team-modal-image" />
          </div>
          <div className="team-modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <div className="modal-first-container">
              <h3>{member.name}</h3>
              <p className="job-title">{member.jobTitle}</p>
            </div>
            <p className="modal-description">{member.description}</p>
            {member.likes && (
              <>
                <p className="sub-header">Likes</p>
                <p className="likes">{member.likes}</p>
              </>
            )}
            {member.dislikes && (
              <>
                <p className="sub-header">Dislikes</p>
                <p className="dislikes">{member.dislikes}</p>
              </>
            )}
            <div className="social-icons-container">
              {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>}
              {member.facebook && <a href={member.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>}
              {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>}
            </div>
          </div>
        </>
      )}
    </div>
  </>
);


const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(false);

  const handleOpenModal = useCallback((member) => {
    if (!clickDisabled) {
      setSelectedMember(member);
      setModalOpen(true);
      setClickDisabled(true);
      setTimeout(() => setClickDisabled(false), 500);
    }
  }, [clickDisabled]);

  const handleCloseModal = useCallback(() => {
    if (!clickDisabled) {
      setModalOpen(false);
      setClickDisabled(true);
      setTimeout(() => {
        setSelectedMember(null);
        setClickDisabled(false);
      }, 500);
    }
  }, [clickDisabled]);

  return (
    <section className="team-container" id="meet-our-team">
      <div className="team-text-container">
        <h2>Meet the Team</h2>
        <p>Team spirit starts with spirited humans. We believe great work begins with happy people and ends with happy clients.</p>
      </div>
      <div className="team-flex-container">
        {teamData.map(member => (
          <TeamMember key={member.id} member={member} onMemberClick={handleOpenModal} />
        ))}
      </div>
      <Modal member={selectedMember} onClose={handleCloseModal} isVisible={modalOpen} />
    </section>
  );
};


export default TeamSection;
