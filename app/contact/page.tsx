'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, LoaderCircle } from 'lucide-react';
import { studioInfo } from '@/lib/data';

interface FormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 50) {
      newErrors.message = 'Message should be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-32 pb-24 max-w-7xl mx-auto px-6 md:px-12">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-4">
            [ 04 / CONTACT ]
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.02] tracking-tight">
            Let&apos;s discuss your next brand chapter.
          </h1>
          <p className="text-charcoal-muted text-lg font-light max-w-3xl leading-relaxed pt-6">
            We take on 8–10 projects per year, each one requiring direct collaboration. If you&apos;re building something with lasting intent, let&apos;s connect.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-bone-light border border-sand-dark/60 p-8 space-y-6">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Reach Out</h3>

            <div className="space-y-4 text-sm font-light text-charcoal-muted">
              <div>
                <p className="font-mono text-xs text-sand-text uppercase tracking-widest mb-1">Email Direct</p>
                <p className="text-base text-charcoal">{studioInfo.email}</p>
              </div>

              <div>
                <p className="font-mono text-xs text-sand-text uppercase tracking-widest mb-1">WhatsApp (India)</p>
                <p className="text-base text-charcoal">{studioInfo.phone}</p>
              </div>

              <div>
                <p className="font-mono text-xs text-sand-text uppercase tracking-widest mb-1">Studio Visit</p>
                <p className="text-base text-charcoal text-sm">{studioInfo.address}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-sand-dark/60">
              <p className="font-mono text-[10px] text-sand-text uppercase tracking-widest mb-2">Response Window</p>
              <p className="text-sm text-charcoal">24–48 business hours for initial reply</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="bg-bone-light border border-sand-dark/60 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitStatus === 'success' && (
              <div className="bg-vermilion/10 border border-vermilion/30 rounded-md p-6 text-center">
                <CheckCircle className="w-8 h-8 text-vermilion inline mb-3" />
                <p className="font-serif text-charcoal text-lg mb-2">Thank you for reaching out!</p>
                <p className="text-charcoal-muted text-sm">
                  I&apos;ll review your message and respond within 24–48 business hours.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="font-mono text-[10px] text-sand-text uppercase tracking-wider block mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border transition-all duration-200 ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-sand-dark focus:border-charcoal focus:ring-charcoal/20'
                  } rounded-sm bg-bone`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500 font-mono" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-[10px] text-sand-text uppercase tracking-wider block mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border transition-all duration-200 ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-sand-dark focus:border-charcoal focus:ring-charcoal/20'
                  } rounded-sm bg-bone`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500 font-mono" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="font-mono text-[10px] text-sand-text uppercase tracking-wider block mb-2">
                COMPANY
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-sand-dark focus:border-charcoal focus:ring-charcoal/20 transition-all duration-200 rounded-sm bg-bone"
                placeholder="Company or project name"
              />
            </div>

            <div>
              <label htmlFor="subject" className="font-mono text-[10px] text-sand-text uppercase tracking-wider block mb-2">
                SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border transition-all duration-200 ${
                  errors.subject
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-sand-dark focus:border-charcoal focus:ring-charcoal/20'
                } rounded-sm bg-bone`}
                placeholder="Brief subject line"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-500 font-mono" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-[10px] text-sand-text uppercase tracking-wider block mb-2">
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border transition-all duration-200 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-sand-dark focus:border-charcoal focus:ring-charcoal/20'
                } rounded-sm bg-bone resize-y font-light`}
                placeholder="Describe your project vision, timeline, and any questions. Minimum 50 characters."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500 font-mono" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-vermilion text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Send your project brief"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief</span>
                </>
              )}
            </button>

            <p className="font-mono text-[11px] text-sand-text/60">
              * Required fields. I&apos;ll never share your information with third parties.
            </p>
          </form>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 border-y border-sand-dark">
        <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-6 text-center">
          [ PROJECT TIMELINE ]
        </span>
        <div className="bg-bone-light border border-sand-dark/60 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal mb-2">1-3</p>
            <p className="font-mono text-xs text-sand-text uppercase">Days</p>
            <p className="text-xs text-charcoal-muted mt-1">Discovery Call</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal mb-2">2-4</p>
            <p className="font-mono text-xs text-sand-text uppercase">Weeks</p>
            <p className="text-xs text-charcoal-muted mt-1">Project Brief Phase</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal mb-2">8-12</p>
            <p className="font-mono text-xs text-sand-text uppercase">Weeks</p>
            <p className="text-xs text-charcoal-muted mt-1">Design & Development</p>
          </div>
        </div>
      </section>
    </div>
  );
}