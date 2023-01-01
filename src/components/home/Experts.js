import React from 'react'
import ExpertCard from './page_components/ExpertCard'

const Experts = () => {
    let experts = [{name:'Amine', surname: 'Bennacef', position:'CO-Founder'},
                   {name:'Salim', surname: 'Babasi', position:'Sales Manager GEO'},
                   {name:'Billal', surname: 'Zidi', position:'Sales Manager AT-AI'},
                   {name:'Badis', surname: 'Bendemagh', position:'CTO'},
                   {name:'Test', surname: 'Test', position:'test position'}]
  return (
    <>
    <section className="team-v5">
        <div className="container">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <span>{"Notre Equipe"}</span>
                        <h2 className="main-heading">Executive Leadership Team</h2>
                    </div>
                    <div className="space-5"></div>
                    <p> 
                        Nous aidons les entreprises à augmenter leur rentabilité grâce à des services 
                        personnalisés,<br/>assurés par une équipe expérimentée, réactive et à l'écoute.
                    </p>
                    <div className="space-20"></div>
                </div>
            </div>

            {/* Start expert Row */}
            <div className="row ">
                {/* <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"> */}
                            {experts.map(expert => (
                                <ExpertCard name={expert.name} surname={expert.surname} position={expert.position}/>
                            ))}
                        {/* </div>
                    </div>
                </div> */}

            </div>
            {/* End expert Row */}

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <h2 className="main-heading">Senior Leadership Team</h2>
                    </div>
                    <div className="space-5"></div>
                    <p> 
                        Nous aidons les entreprises à augmenter leur rentabilité grâce à des services 
                        personnalisés,<br/>assurés par une équipe expérimentée, réactive et à l'écoute.
                    </p>
                    <div className="space-20"></div>
                </div>
            </div>

            {/* Start expert Row */}
            <div className="row ">
                {/* <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"> */}
                            {experts.map(expert => (
                                <ExpertCard name={expert.name} surname={expert.surname} position={expert.position}/>
                            ))}
                        {/* </div>
                    </div>
                </div> */}

            </div>
            {/* End expert Row */}
        </div>
    </section>
    </>
  )
}

export default Experts