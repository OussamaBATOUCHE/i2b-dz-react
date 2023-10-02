import React from 'react'
import ContactList from './page_components/ContactList';
import SubscribersList from './page_components/SubscribersList';

function AdminHome({onLogin}) {

  return (
    <>  
    <section className="top-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 align-self-center">
                    <div className="home2-top-right text-align-center">
                        <h2> Welcome to the Admin space !</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <ContactList />
      <SubscribersList />
    </>
  )
}

export default AdminHome