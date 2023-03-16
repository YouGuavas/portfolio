import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';


import styles from '../styles/contact.module.scss';

export default function Contact() {
  const labelClass = "block uppercase tracking-wide text-xs font-bold mb-2 my-text-mustard";
  const inputClass = `my-transition leading-tight appearance-none ${styles.inputClass}`;//"my-transition my-text-forest my-placeholder-mustard appearance-none border border-sage block w-full my-sage-bg border rounded py-1 px-4 mb-3 leading-tight"

  const [params, setParams] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'user_name') {
      setParams({
        user_name: value,
        user_email: params.user_email,
        message: params.message
      })
    } else if (name === 'user_email') {
      setParams({
        user_name: params.user_name,
        user_email: value,
        message: params.message
      })
    } else {
      setParams({
        user_name: params.user_name,
        user_email: params.user_email,
        message: value
      })
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (params.user_name.length && params.user_email.length && params.message.length > 0) {
      //if all fields are filled out, send the email
      emailjs.sendForm('contact_gmail', 'basic_template', form.current, 'Cr-6gtILcNdET7irO')
        .then((result) => {
          const userName = document.getElementById('user_name');
          const userEmail = document.getElementById('user_email');
          const message = document.getElementById('user_message');
          console.log(result.text);
          alert('Your message has been sent!');
          setParams({
            user_name: '',
            user_email: '',
            message: ''
          })
          userName.value = '';
          userEmail.value = '';
          message.value = '';
        }, (error) => {
          console.log(error.text);
        });
    } else {
      //else, inform the user they need to fill out the form
      alert('Please make sure the form is completely filled out before submitting.');
    }
  }


  return (
    <div>
      <Head>
        <title>Contact | Patrick Yambrick</title>
      </Head>
      <section className={`my-forest-bg p-6 grid place-items-center ${styles.contact}`}>
        <div className="flex flex-wrap">
          <h2 className={`${styles.jumbo} mx-2 pt-4`}>Email:</h2>
          <p className={`${styles.jumbo} mx-2 pt-4`}>patrickyambrick@gmail.com</p>
        </div>
        <p>Or:</p>
        <form name="contact form" className="w-full my-text" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="contact form" className={styles.contactTitle}>Contact Me</label>
            </div>
          </div>
          <div className="flex flex-wrap">

            <div className="w-full md:w-1/2 px-3">
              <label className={labelClass}>Name</label>
              <input required className={inputClass} onChange={(e) => handleChange(e)} type="text" id="user_name" name="user_name" placeholder="John Doe" />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className={labelClass}>Email</label>
              <input required className={inputClass} onChange={(e) => handleChange(e)} type="email" id="user_email" name="user_email" placeholder="abc@123.com" />
            </div>

          </div>

          <div className="flex flex-wrap">

            <div className="w-full px-3">
              <label className={labelClass}>Message</label>
              <textarea required className={inputClass} rows="4" id="user_message" style={{ resize: "none" }} onChange={(e) => handleChange(e)} name="message" placeholder="Leave a message for me here!" />
            </div>

          </div>

          <div className="flex flex-wrap">

            <div className="w-full px-3">
              <input className="my-contact-btn my-text w-full p-2 rounded block uppercase tracking-wide text-xs font-bold mb-2" type="submit" value="Send" />
            </div>

          </div>

        </form>
      </section>
    </div>
  )
}