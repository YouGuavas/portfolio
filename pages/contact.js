import React, { useRef, useState } from 'react';
import { grabElement } from '@/utils/_functions';

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/contact.module.scss';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Contact() {
	const { theme, setTheme } = useContext(MyContext);

	const labelClass =
		'block uppercase tracking-wide text-xs font-bold mb-2 my-text-mustard';
	const inputClass = `my-transition leading-tight appearance-none ${styles.inputClass}`;

	const [params, setParams] = useState({
		user_name: '',
		user_email: '',
		message: '',
	});

	const form = useRef();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setParams((prevParams) => ({
			...prevParams,
			[name]: value,
		}));
	};

	/*const sendEmail = async e => {
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
                const name_field = grabElement('user_name')
                const email_field = grabElement('user_email')
                const message_field = grabElement('user_message')
                const elements = [name_field, email_field, message_field]
                elements.map(element => {
                    element.value = ''
                })
            } else {
                console.log('Failed')
            }
        } else {
            alert(
                'Please make sure the form is completely filled out before submitting.'
            )
        }
    }*/

	return (
		<>
			<Head>
				<title>Patrick Yambrick | Contact</title>
			</Head>
			<section
				className={`pad-top-vh my-background-generic place-items-center ${styles.contact} ${theme}`}
			>
				<div>
					<h2 className="my-title">Email:</h2>
					<Link href="mailto:patrick@patdesigns.online">
						patrick@patdesigns.online
					</Link>
				</div>
			</section>
		</>
	);
}

/*
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
                                    className="my-contact-btn my-text w-1/3 py-4 block uppercase tracking-wide text-xs font-bold mb-2"
                                    type="submit"
                                    value="Send"
                                />
                            </div>
                        </div>
                    </form>*/
