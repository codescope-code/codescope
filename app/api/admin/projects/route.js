// GET + POST + PATCH projects
import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase.from('project_form').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const { title, description, image_url } = body;

  const { error } = await supabase.from('project_form').insert({ title, description, image_url });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}

// PATCH: Update a project
export async function PATCH(req) {
  const body = await req.json();
  const { id, title, description, image_url } = body;

  if (!id) {
    return NextResponse.json({ error: 'Project id is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('project_form')
    .update({ title, description, image_url })
    .eq('id', id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
