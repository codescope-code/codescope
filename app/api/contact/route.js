import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const { error } = await supabase.from('contact_form').insert([
      {
        first_name: firstName,
        last_name: lastName,
        email : email,
        phone: phone,
        message: message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return NextResponse.json({ success: false, error: 'Unexpected server error' }, { status: 500 });
  }
}
