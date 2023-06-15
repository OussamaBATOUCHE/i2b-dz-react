import React from 'react'
import ExpertCard from './page_components/ExpertCard'

const Experts = () => {
    let experts1 = [{name:'Amine', surname: 'Bennacef', position:'CO-Founder', photo_path: '7.png'},
                   {name:'Salim', surname: 'Babasi', position:'Sales Manager GEO', photo_path: '10.png'},
                   {name:'Billal', surname: 'Zidi', position:'Sales Manager AT-AI', photo_path: '8.png'},
                   {name:'Mohamed', surname: 'Betit', position:'XXX', photo_path: '9.png'},
                   {name:'Naim', surname: 'Midni', position:'XXX', photo_path: '1.png'}
                   ]

    let experts2 = [{name:'Hanane', surname: 'Toutaoui', position:'XXX', photo_path: '6.png'},
                   {name:'Yasmine', surname: 'Mezghich', position:'XXX', photo_path: '2.png'},
                   {name:'Yanis', surname: 'Si Saleh', position:'XXX', photo_path: '3.png'},
                   {name:'Oussama', surname: 'Bounouh', position:'XXX', photo_path: '5.png'},
                   {name:'Sihem', surname: 'Chouial', position:'XXX', photo_path: '4.png'}]
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
                    <ExpertCard name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path}/>
                ))}
            </div>

            <div className="row ">
                {experts2.map(expert => (
                    <ExpertCard name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path}/>
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
    </>
  )
}

export default Experts