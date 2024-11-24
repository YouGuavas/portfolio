import React, { useRef, useState } from 'react';
import { grabElement } from '@/utils/_functions';

import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/contact.module.scss';

export default function Contact() {
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
				<title>Privacy Policy | Patrick Yambrick</title>
			</Head>
			<section
				className={`pad-top-vh my-background-generic place-items-center ${styles.contact}`}
			>
				<div>
					<h2>I collect no data</h2>
				</div>
			</section>
		</>
	);
}
