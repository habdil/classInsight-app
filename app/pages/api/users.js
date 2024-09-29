import { PrismaClient } from '@prisma/client';
import { supabase } from '../../lib/supabase';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { email, name } = req.body;
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, name }]);
    
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    res.status(201).json(data);
  }
}
