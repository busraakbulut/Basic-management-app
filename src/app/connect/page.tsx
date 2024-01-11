import dbConnect from '@/lib/dbConnect';

import Link from 'next/link';

export const connectionTest = async () => {
 try {
  await dbConnect();
  return { isConnected: true };
 } catch (e) {
  console.error(e);
  return { isConnected: false };
 }
};

export default async function Home() {
 const { isConnected } = await connectionTest();

 return (
  <div>
   <h1 className="title">
    Welcome to <Link href="https://nextjs.org">Next.js with MongoDB!</Link>
   </h1>

   {isConnected ? (
    <h2 className="subtitle">You are connected to MongoDB</h2>
   ) : (
    <h2 className="subtitle">You are NOT connected to MongoDB.</h2>
   )}
  </div>
 );
}
