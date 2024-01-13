import dbConnect from '@/lib/dbConnect';
import User from '@/models/userSchema';
import { NextRequest, NextResponse } from 'next/server';

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

  const newUser = await User.create({
   email,
   username,
   password,
  });

  const user = newUser._doc;

  return NextResponse.json(
   {
    message: 'User created successfully.',
    success: true,
    data: user,
   },
   { status: 200 }
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
