import { jwtVerify } from 'jose';

export const jwtSecretKey = () => {
 const secretKey = process.env.JWT_SECRET_KEY;

 if (!secretKey) {
  throw new Error('JWT secret key is not available');
 }

 return new TextEncoder().encode(secretKey);
};

export async function verifyToken(token: string | undefined) {
 try {
  const decodedToken = token && (await jwtVerify(token, jwtSecretKey()));
  const isExpired = isTokenExpired(decodedToken);

  return !isExpired;
 } catch (error) {
  console.error('Error while verifying token:', error);
  return false;
 }
}

function isTokenExpired(decodedToken: any) {
 const currentTime = Math.floor(Date.now() / 1000);
 if (decodedToken) {
  return decodedToken.payload.exp <= currentTime;
 }
 return true;
}
