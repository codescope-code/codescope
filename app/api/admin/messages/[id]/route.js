import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const { error } = await supabase
      .from('contact_form') 
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, error: 'Unexpected server error' }, { status: 500 });
  }
}
