import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

// DELETE
export async function DELETE(req, { params }) {
  const { id } = params;

  const { error } = await supabase.from('project_form').delete().eq('id', id);
  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}

// PUT = update project
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { title, description, image_url } = body;

  const { error } = await supabase
    .from('project_form')
    .update({ title, description, image_url })
    .eq('id', id);

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
