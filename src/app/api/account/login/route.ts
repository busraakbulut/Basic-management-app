import { SignJWT } from 'jose';
import { jwtSecretKey } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userSchema';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';

export async function POST(request: NextRequest) {
 await dbConnect();

 const body = await request.json();
 const { email, password } = body;

 const user = await User.findOne({ email });

 if (!(user && (await bcrypt.compare(password, user?.password)))) {
  return NextResponse.json(
   {
    message: 'Email or password wrong!',
    success: false,
   },
   { status: 400 }
  );
 }

 const token = await generateToken(user._id.toString(), email);

 return NextResponse.json(
  {
   message: 'User logged in successfully.',
   success: true,
   data: {
    token,
   },
  },
  { status: 201 }
 );
}

async function generateToken(id: any, email: string) {
 const token = await new SignJWT({
  id: id,
  email: email,
 })
  .setProtectedHeader({
   alg: 'HS256',
  })
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(jwtSecretKey());

 return token;
}
