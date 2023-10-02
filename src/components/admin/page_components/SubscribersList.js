import React, {useState, useEffect} from 'react'

// const host  = `http://localhost:3001/api/get_subscribers`
const host = `https://i2b-dz.com/api/get_subscribers`

const SubscribersList = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);




    useEffect(() => {
        // Fetch the list of subscribers from your API endpoint
        fetch(host+`?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            setSubscribers(data.subscribers); // Update the state with the fetched subscribers
            setTotalPages(data.totalPages);
        })
        .catch(error => {
            console.error('Error fetching subscribers:', error);
        });
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };


  return (
    <>
        {/* <section className="shop-cart"> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2> Liste d'abonnés: </h2>
                        <table className="shop-cart-table shop_table_responsive">
                            <thead>
                                <tr>
                                    <th >Reçu le</th>
                                    <th >Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map(subscriber => (
                                    <tr key={subscriber.id} 
                                        id={subscriber.id} 
                                        className="woocommerce-cart-form__cart-item cart_item clickable">
                                        <td > 
                                        {new Date(subscriber.created_on).toLocaleDateString('fr', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                         </td>
                                        <td > {subscriber.email} </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="6" className="actions text-right">
                                        <div>
                                            <button style={{margin:"1%"}} className="octf-btn button" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                                            <span>Page {currentPage} of {totalPages}</span>
                                            <button style={{margin:"1%"}} className="octf-btn button " disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        {/* </section> */}
    </>
  )}

export default SubscribersList