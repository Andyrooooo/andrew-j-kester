import { json } from '@sveltejs/kit'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

export async function POST({request}) {
    const newMessage = await request.json()
    let message

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    })

    const mailOptions = {
        from: newMessage.email,
        to: 'wheelbiter666@gmail.com',
        subject: 'New Message From Portfolio Site',
        text: `From: ${newMessage.name}\n\n${newMessage.email}\n\nMessage:\n${newMessage.message}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error)
            message = 'Error: internal server error'
        } else {
            console.log('Email sent:', info.response)
            message = 'email sent successfully'
        }
    })

    return json(message)
}