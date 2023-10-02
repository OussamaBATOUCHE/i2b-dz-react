import React, {useState, useEffect} from 'react'

// const host  = `http://localhost:3001/api/get_contacts`
const host = `https://i2b-dz.com/api/get_contacts`

const ContactList = () => {
    const [messages, setMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch the list of messages from your API endpoint
        fetch(host+`?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            setMessages(data.messages); // Update the state with the fetched messages
            setTotalPages(data.totalPages);
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    const handleReadMessage = (key, title, content) => {
        setTitle(title);
        setContent(content);

        messages.forEach(message => {
            const selected_row = document.getElementById(message.idcontact);
            selected_row.style.backgroundColor = 'white';
            selected_row.style.color= 'gray';
        }); // Change the background color to red
        
        const selected_row = document.getElementById(key);
        selected_row.style.backgroundColor = '#43baff';
        selected_row.style.color= 'white';
    };

  return (
    <>
        <section className="shop-cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2> Boîte de réception: </h2>
                        <table className="shop-cart-table shop_table_responsive">
                            <thead>
                                <tr>
                                    <th >Reçu le</th>
                                    <th >Nom</th>
                                    <th >Email</th>
                                    <th >Entreprise</th>
                                    <th >Lire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map(message => (
                                    <tr key={message.idcontact} 
                                        id={message.idcontact} 
                                        className="woocommerce-cart-form__cart-item cart_item clickable"
                                        onClick={() => handleReadMessage(message.idcontact,message.subject, message.message)}>
                                        <td > 
                                        {new Date(message.created_on).toLocaleDateString('fr', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                         </td>
                                        <td > {message.name} </td>
                                        <td > {message.email} </td>
                                        <td > {message.company} </td>
                                        <td >
                                            <div className='row'>
                                                <div style={{left:"23%"}} className='col-md-6 envolope-admin' onClick={() => handleReadMessage(message.idcontact,message.subject, message.message)}> <i className="flaticon-envelope"></i></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                <tr >
                                    <td colSpan="6" >
                                        <div className=' subject-message text-center'> <h4>Sujet: {title}</h4>  </div>
                                        <div className='content-message'> {content}</div>
                                        
                                    </td>
                                </tr>
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
        </section>
    </>
  )}

export default ContactList