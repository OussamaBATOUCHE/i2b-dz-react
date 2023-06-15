import React from 'react'

const ExpertCard = ({name, surname, position, photo_path}) => {
  return (
    <>
    <div className="team-item col">
        <div className="">
            <div className="team-wrap v3">
                <div className="team-thumb">
                    <img src={process.env.PUBLIC_URL+`/static/images/team/`+photo_path} alt="GPS Algerie" />
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
    photo_path: `${process.env.PUBLIC_URL}/static/images/team/user.png`,
}
  

export default ExpertCard