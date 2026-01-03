
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address
            to: process.env.SMTP_USER,   // List of receivers (sending to support/self)
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send message.' },
            { status: 500 }
        );
    }
}
