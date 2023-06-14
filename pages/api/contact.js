import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

const transporter = nodemailer.createTransport(
    sgTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY,
        },
    })
)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = JSON.parse(req.body)
            const formatMessage = () => {
                //format text to be sent
                const description = `                Name: ${name}
                Email: ${email}
                Message:
                ${message}`
                return description
            }
            // Compose and send the email
            const mailOptions = {
                from: 'patrizzzzzzle193@gmail.com',
                to: 'patrickyambrick@gmail.com',
                subject: `Email from ${name} at ${email}`,
                text: formatMessage(),
            }

            await transporter.sendMail(mailOptions)

            // Email sent successfully
            res.status(200).json({ message: 'Email sent successfully' })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).json({ message: 'Failed to send email' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
