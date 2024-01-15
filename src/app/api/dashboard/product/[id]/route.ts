import dbConnect from '@/lib/dbConnect';
import Product from '@/models/productSchema';
import { NextResponse } from 'next/server';

export async function GET(ctx: any) {
 try {
  await dbConnect();
  const { id } = ctx?.params.id;
  const product = await Product.findById(id);
  return NextResponse.json(
   {
    message: 'Products fetched successfully.',
    success: true,
    data: product,
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

export async function PATCH(ctx: any) {
 try {
  await dbConnect();
  const { id } = ctx?.params.id;
  const data = await ctx.json();
  const {
   product_name,
   product_category,
   product_amount,
   amount_unit,
   company,
  } = data;
  const product = await Product.findByIdAndUpdate(
   id,
   {
    product_name,
    product_category,
    product_amount,
    amount_unit,
    company,
   },
   { new: true }
  );

  if (!product) {
   return NextResponse.json(
    {
     error: 'This product does not exist.',
    },
    { status: 400 }
   );
  }

  return NextResponse.json(
   {
    message: 'Product updated successfully.',
    success: true,
    data: product,
   },
   { status: 201 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Product could not be updated.',
   },
   { status: 500 }
  );
 }
}

export async function DELETE(ctx: any) {
 try {
  await dbConnect();
  const { id } = ctx?.params.id;
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
   return NextResponse.json(
    {
     error: 'This product does not exist.',
    },
    { status: 400 }
   );
  }

  return NextResponse.json(
   {
    message: 'Product deleted successfully.',
    success: true,
   },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Product could not be deleted.',
   },
   { status: 500 }
  );
 }
}
