
"use client";

import React, { useState } from 'react';
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Linkedin, Twitter, Github, Zap, Target, Brain, Handshake } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.privacy) {
            setStatus({ type: 'error', message: 'Please agree to the Terms & Conditions to proceed.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'info', message: 'Sending...' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
            } else {
                setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="py-12 md:py-20 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-4 md:mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-lg md:text-2xl text-accent-foreground/90 font-medium mb-3 md:mb-4">
                            Let's Discuss Your AI Transformation
                        </p>
                        <p className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Let's discuss how 4sight AI can transform your enterprise with cutting-edge AI solutions.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Contact Section */}
            <Wrapper className="py-12 md:py-20 bg-muted/20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Contact Form */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            {/* Decorative element mimicking 'floating-particles' implicitly via clean design or subtle gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Row 1: Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john.doe@company.com"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Ask us anything *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project, goals, and how we can help..."
                                        required
                                        rows={4}
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                {/* Privacy and Terms */}
                                <div className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        required
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight">
                                        I agree to the <Link href="/terms" className="font-semibold text-foreground hover:underline">Terms & Conditions</Link> and <Link href="/terms?section=privacy" className="font-semibold text-foreground hover:underline">Privacy Policy</Link> *
                                    </label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    size="lg"
                                    disabled={!formData.privacy || isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                                {status.message && (
                                    <div className={`p-4 rounded-lg flex items-start gap-2 text-sm ${status.type === 'success' ? 'bg-green-500/15 text-green-600 border border-green-500/20' :
                                        status.type === 'error' ? 'bg-destructive/15 text-destructive border border-destructive/20' :
                                            'bg-muted text-muted-foreground border border-border'
                                        }`}>
                                        {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                                        <span>{status.message}</span>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Info Card */}
                            <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Location</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Bangalore, Karnataka<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <div className="text-muted-foreground text-sm flex flex-col gap-1">
                                                <a href="mailto:contact@4sightai.com" className="hover:text-primary transition-colors">contact@4sightai.com</a>
                                                <a href="mailto:sales@4sightai.com" className="hover:text-primary transition-colors">sales@4sightai.com</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone</h4>
                                            <div className="text-muted-foreground text-sm">
                                                <p>+91 (800) 123-4567</p>
                                                <p className="text-xs mt-1 opacity-80">Mon-Fri 9:00 AM - 6:00 PM IST</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-border/50">
                                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="https://linkedin.com/company/4sight-ai" target="_blank" rel="noopener noreferrer" className="bg-muted p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="https://twitter.com/4sightai" target="_blank" rel="noopener noreferrer" className="bg-muted p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href="https://github.com/4sightai" target="_blank" rel="noopener noreferrer" className="bg-muted p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Image Card */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video w-full h-[300px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                                    alt="4sight AI Office - AI Technology Hub"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Why Contact Us Section */}
            <Wrapper className="py-12 md:py-20 bg-background relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Why Contact 4sight AI?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            What you can expect when you reach out to us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-primary/30 transition-colors">
                            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Rapid Response</h3>
                            <p className="text-muted-foreground text-sm">
                                We respond to all inquiries within 24 hours. For urgent matters, we'll connect you with the right expert faster.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-primary/30 transition-colors">
                            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Tailored Solutions</h3>
                            <p className="text-muted-foreground text-sm">
                                We don't believe in one-size-fits-all. Every consultation begins with understanding your unique needs.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-primary/30 transition-colors">
                            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Brain className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                            <p className="text-muted-foreground text-sm">
                                Connect directly with AI experts who have 10,000+ hours of research and real-world implementation experience.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-primary/30 transition-colors">
                            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">No Obligation</h3>
                            <p className="text-muted-foreground text-sm">
                                Initial consultations are always free. We're here to help you understand AI's potential with no strings attached.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* FAQ Section */}
            <Wrapper className="py-12 md:py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-card border-l-4 border-l-blue-500 border-y border-r border-border/50 p-6 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-2">How quickly will I hear back after submitting the form?</h4>
                            <p className="text-muted-foreground">We aim to respond to all inquiries within 24 hours on business days. For urgent matters, you can also reach us directly via phone.</p>
                        </div>
                        <div className="bg-card border-l-4 border-l-blue-500 border-y border-r border-border/50 p-6 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-2">Do you offer free consultations?</h4>
                            <p className="text-muted-foreground">Yes! We offer complimentary initial consultations to understand your needs and explore how AI can benefit your organization.</p>
                        </div>
                        <div className="bg-card border-l-4 border-l-blue-500 border-y border-r border-border/50 p-6 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-2">What information should I prepare before contacting you?</h4>
                            <p className="text-muted-foreground">It's helpful to have a general understanding of your business challenges, goals, and any specific AI use cases you're interested in.</p>
                        </div>
                        <div className="bg-card border-l-4 border-l-blue-500 border-y border-r border-border/50 p-6 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-2">Do you work with companies outside of India?</h4>
                            <p className="text-muted-foreground">Yes, while we're based in Bangalore, we work with clients globally. Our services are available remotely.</p>
                        </div>
                        <div className="bg-card border-l-4 border-l-blue-500 border-y border-r border-border/50 p-6 rounded-r-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-2">What's the typical timeline for AI implementation?</h4>
                            <p className="text-muted-foreground">Timelines vary. A POC can take 4-8 weeks, while full implementations may take 3-6 months. We'll provide a detailed timeline after discussion.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="py-12 md:py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6">
                            Ready to Start Your AI Journey?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Don't wait to harness the power of AI. Reach out today and let's explore how 4sight AI can transform your enterprise together.
                        </p>
                        <Button
                            className="px-8"
                            size="lg"
                            onClick={() => {
                                document.getElementById('name')?.focus();
                                document.getElementById('name')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                        >
                            Fill Out the Form Above
                        </Button>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default Contact;
