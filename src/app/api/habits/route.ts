 import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { habits } from '@/db/schema';

const sqlite = new Database('dev.db');
const db = drizzle(sqlite);

export async function GET() {
  const data = await db.select().from(habits);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { name } = await req.json();
  if (!name) return NextResponse.json({ error: 'Falta el nombre' }, { status: 400 });
  
  await db.insert(habits).values({ name });
  return NextResponse.json({ success: true });
}

