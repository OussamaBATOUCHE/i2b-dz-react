import React from 'react'
import ExpertCard from './page_components/ExpertCard'
import { experts1, experts2 } from './data/experts'

const Experts = () => {

  return (
    <>
    <section className="team-v5">
        <div className="container">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <span>{"Notre Equipe"}</span>
                        <h2 className="main-heading">Leadership Team</h2>
                    </div>
                    <div className="space-5"></div>
                    <div className="space-20"></div>
                </div>
            </div>

            <div className="row ">
                {experts1.map(expert => (
                    <ExpertCard key={expert.name} name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path} text={expert.text}/>
                ))}
            </div>

            <div className="row ">
                {experts2.map(expert => (
                    <ExpertCard key={expert.name} name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path} text={expert.text}/>
                ))}
            </div>

                {/* <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"> */}
                            
                        {/* </div>
                    </div>
                </div> */}
        </div>
    </section>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">EXPERT DETAILS</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Voilaaa
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Experts