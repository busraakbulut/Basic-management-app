import dbConnect from '@/lib/dbConnect';
import Product from '@/models/productSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
 try {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json(
   {
    message: 'Products fetched successfully.',
    success: true,
    data: products,
   },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Products could not be fetched.',
   },
   { status: 500 }
  );
 }
}

export async function POST(req: NextRequest) {
 try {
  await dbConnect();
  const data = await req.json();

  const {
   product_name,
   product_description,
   product_category,
   product_price,
   product_image,
  } = data;
  const isExisting = await Product.findOne({
   product_name,
   product_description,
   product_category,
   product_price,
   product_image,
  });

  if (isExisting) {
   return NextResponse.json(
    {
     error: 'This product already exists.',
    },
    { status: 400 }
   );
  }

  const newProduct = await Product.create({
   product_name,
   product_description,
   product_category,
   product_price,
   product_image,
  });

  return NextResponse.json(
   {
    message: 'Product created successfully.',
    success: true,
    data: newProduct,
   },
   { status: 201 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Product could not be created.',
   },
   { status: 500 }
  );
 }
}
