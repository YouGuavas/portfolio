import React, { useRef, useState } from 'react'

import Head from 'next/head'

import styles from '../styles/contact.module.scss'

export default function Contact() {
    const labelClass =
        'block uppercase tracking-wide text-xs font-bold mb-2 my-text-mustard'
    const inputClass = `my-transition leading-tight appearance-none ${styles.inputClass}`

    const [params, setParams] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })

    const form = useRef()

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setParams(prevParams => ({
            ...prevParams,
            [name]: value,
        }))
    }

    const sendEmail = async e => {
        e.preventDefault()

        if (
            params.user_name.length &&
            params.user_email.length &&
            params.message.length > 0
        ) {
            const response = await fetch('./api/contact', {
                method: 'POST',

                body: JSON.stringify({
                    name: params.user_name,
                    email: params.user_email,
                    message: params.message,
                }),
            })
            if (response.ok) {
                console.log('Email sent')
            } else {
                console.log('Failed')
            }
        } else {
            alert(
                'Please make sure the form is completely filled out before submitting.'
            )
        }
    }

    return (
        <div>
            <Head>
                <title>Contact | Patrick Yambrick</title>
            </Head>
            <section
                className={`my-background-generic place-items-center ${styles.contact}`}
            >
                <div className={`my-overlay grid place-items-center`}>
                    <div className="lg:flex lg:flex-wrap">
                        <h2 className={`${styles.jumbo} pt-4`}>Email:</h2>
                        <a
                            href="mailto:patrickyambrick@gmail.com"
                            className={`${styles.jumbo} pt-4`}
                        >
                            patrickyambrick@gmail.com
                        </a>
                    </div>
                    <p className={styles.or}>Or:</p>
                    <form
                        id="contact-form"
                        name="contact form"
                        className="w-full my-text"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className="flex flex-wrap">
                            <div className="w-full px-3">
                                <label
                                    htmlFor="contact form"
                                    className={styles.contactTitle}
                                >
                                    Contact Me
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 xs:w-1/4 px-3">
                                <label className={labelClass}>Name</label>
                                <input
                                    required
                                    className={inputClass}
                                    onChange={e => handleChange(e)}
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                <label className={labelClass}>Email</label>
                                <input
                                    required
                                    className={inputClass}
                                    onChange={e => handleChange(e)}
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="abc@123.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full px-3">
                                <label className={labelClass}>Message</label>
                                <textarea
                                    required
                                    className={inputClass}
                                    rows="4"
                                    id="user_message"
                                    style={{ resize: 'none' }}
                                    onChange={e => handleChange(e)}
                                    name="message"
                                    placeholder="Leave a message for me here!"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <input
                                    className="my-contact-btn my-text w-1/2 py-12 block uppercase tracking-wide text-xs font-bold mb-2"
                                    type="submit"
                                    value="Send"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
