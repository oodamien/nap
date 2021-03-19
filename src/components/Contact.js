import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            {/* <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Nom / Prénom</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Envoyer" className="special" /></li>
                    </ul>
                </form>
            </section> */}
            <section className="list">
                <section>
                    <div className="contact-item">
                        <h3>Le Napoli</h3>
                        <div>
                          <span>05 58 43 77 31</span>
                          <div className="icons">
                            <a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
                            <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
                          </div>
                          <em>Réservation non possible</em>
                        </div>
                    </div>
                </section>
                    <section>
                        <div className="contact-item">
                            <h3>Là-Haut</h3>
                            <div>
                              <span>05 58 43 77 31</span><div className="icons">
                                <a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
                                <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
                              </div>
                              <em>Réservation recommandée</em>
                            </div>
                        </div>
                    </section>
                <section>
                    <div className="contact-item">
                        <h3>Adresse</h3>
                        <span>755 Avenue de la Grande Dune<br />
                        40150 Soorts-Hossegor
                        </span>
                    </div>
                </section>
                
            </section>
        </div>
    </section>
)

export default Contact
