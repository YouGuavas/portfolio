import React, {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const labelClass = "block uppercase tracking-wide text-xs font-bold mb-2";
  const inputClass = "my-transition my-text-forest appearance-none border border-sage block w-full bg-gray-200 border rounded py-1 px-4 mb-3 leading-tight"
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
    console.log(params);
    if (params.user_name.length && params.user_email.length && params.message.length > 0) {
      emailjs.sendForm('contact_gmail', 'basic_template', form.current, 'Cr-6gtILcNdET7irO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else {
      alert('Please make sure the form is completely filled out before submitting.');
    }
  }
  return (
    <div className="my-forest-bg h-screen p-6 grid place-items-center">
      <form className="w-full my-text" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3">
            <label className={labelClass}>Name</label>
            <input required className={inputClass} onChange={(e) => handleChange(e)} type="text" name="user_name" placeholder="John Doe" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className={labelClass}>Email</label>
            <input required className={inputClass} onChange={(e) => handleChange(e)} type="email" name="user_email" placeholder="abc@123.com"/>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass}>Message</label>
            <textarea required className={inputClass} rows="4" style={{resize: "none"}} onChange={(e) => handleChange(e)} name="message" placeholder="Leave a message for me here!" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <input className="w-full my-transition my-forest-bg border border-sage p-2 rounded block uppercase tracking-wide text-xs font-bold mb-2" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  )
}