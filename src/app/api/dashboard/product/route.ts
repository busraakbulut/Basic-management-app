import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/productSchema';

// Connect to the MongoDB database

async function handler(req: NextApiRequest, res: NextApiResponse) {
 await dbConnect();
 const { method } = req;

 switch (method) {
  case 'GET':
   try {
    const products = await Product.find({});
    res.status(200).json(products);
   } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
   }
   break;

  case 'POST':
   try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
   } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
   }
   break;

  default:
   res.status(405).json({ error: 'Method Not Allowed' });
   break;
 }
}

export default handler;
