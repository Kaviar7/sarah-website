import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  guests: number;
  message?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) throw error;

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error('Failed to send email notification');
    }
  } catch (emailError) {
    console.error('Email notification error:', emailError);
  }
}

export async function submitBookingInquiry(data: BookingInquiry) {
  const { error } = await supabase
    .from('booking_inquiries')
    .insert([data]);

  if (error) throw error;
}
