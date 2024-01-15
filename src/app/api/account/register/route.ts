import dbConnect from '@/lib/dbConnect';
import User from '@/models/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
 try {
  await dbConnect();
  const data = await req.json();
  const { email, username, password } = data;

  const isExisting = await User.findOne({ email });

  if (isExisting) {
   return NextResponse.json(
    {
     error: 'This user already exists.',
    },
    { status: 400 }
   );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
   email,
   username,
   password: hashedPassword,
  });

  const user = newUser._doc;

  return NextResponse.json(
   {
    message: 'User created successfully.',
    success: true,
    data: user,
   },
   { status: 201 }
  );
 } catch (error) {
  console.log('Error: ', error);
  return NextResponse.json(
   {
    error: 'User could not be created.',
   },
   { status: 500 }
  );
 }
}
