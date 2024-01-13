import dbConnect from '@/lib/dbConnect';
import User from '@/models/userSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
 try {
  await dbConnect();
  const data = await req.json();
  const { email, password } = data;
  const isExisting = await User.findOne({ email });

  if (!isExisting) {
   return NextResponse.json(
    {
     error: 'This user does not exist.',
    },
    { status: 400 }
   );
  }

  return NextResponse.json(
   {
    message: 'User logged in successfully.',
    success: true,
    data: isExisting,
   },
   { status: 200 }
  );
 } catch (error) {
  console.log('Error: ', error);
  return NextResponse.json(
   {
    error: 'User could not enter the system.',
   },
   { status: 500 }
  );
 }
}
