import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import './contact.css'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Ponte en contacto</h5>
            <h2>Contactame</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>mateo1040@hotmail.com</h5>
                        <a href='mailto:mateo1040@hotmail.com' target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
                    </article>
                </div>

                <form action=''>
                    <input type='text' name="name" placeholder='Ingresa Nombre Completo' required />
                    <input type='email' name="email" placeholder='Ingresa el correo' required />
                    <textarea type='text' name="message" rows='7' placeholder='Ingresa el mensaje' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;