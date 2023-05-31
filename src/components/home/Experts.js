import React from 'react'
import ExpertCard from './page_components/ExpertCard'

const Experts = () => {
    let experts = [{name:'Amine', surname: 'Bennacef', position:'CO-Founder'},
                   {name:'Salim', surname: 'Babasi', position:'Sales Manager GEO'},
                   {name:'Billal', surname: 'Zidi', position:'Sales Manager AT-AI'},
                   {name:'Mohamed', surname: 'Betit', position:'XXX'},
                   {name:'Nisrine', surname: 'Batata', position:'XXX'},
                   {name:'Naim', surname: 'Midni', position:'XXX'},
                   {name:'Hanane', surname: 'Toutaoui', position:'XXX'}]
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