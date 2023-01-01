import React from 'react'

const ExpertCard = ({name, surname, position, image}) => {
  return (
    <>
    <div className="team-item col">
        <div className="">
            <div className="team-wrap v3">
                <div className="team-thumb">
                    <img src={image} alt="GPS Algerie" />
                </div>
                <div className="team-info">
                    <h4>{name} {surname}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )}


ExpertCard.defaultProps = {
    name: 'Nom',
    surname: 'prenom',
    position: 'position here',
    image: `${process.env.PUBLIC_URL}/static/images/team/user.jpg`,
}
  

export default ExpertCard