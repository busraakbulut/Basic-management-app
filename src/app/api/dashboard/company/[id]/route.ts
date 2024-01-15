import dbConnect from '@/lib/dbConnect';
import Company from '@/models/companySchema';
import { NextResponse } from 'next/server';

export async function GET(ctx: any) {
 try {
  await dbConnect();
  const { id } = ctx?.params.id;
  const company = await Company.findById(id);
  return NextResponse.json(
   {
    message: 'Companies fetched successfully.',
    success: true,
    data: company,
   },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Companies could not be fetched.',
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
   company_name,
   incorporation_country,
   company_legal_number,
   company_website,
  } = data;
  const company = await Company.findByIdAndUpdate(
   id,
   {
    company_name,
    incorporation_country,
    company_legal_number,
    company_website,
   },
   { new: true }
  );

  if (!company) {
   return NextResponse.json(
    {
     error: 'This company does not exist.',
    },
    { status: 400 }
   );
  }

  return NextResponse.json(
   {
    message: 'Company updated successfully.',
    success: true,
    data: company,
   },
   { status: 201 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Company could not be updated.',
   },
   { status: 500 }
  );
 }
}

export async function DELETE(ctx: any) {
 try {
  await dbConnect();
  const { id } = ctx?.params.id;
  const company = await Company.findByIdAndDelete(id);

  if (!company) {
   return NextResponse.json(
    {
     error: 'This company does not exist.',
    },
    { status: 400 }
   );
  }

  return NextResponse.json(
   {
    message: 'Company deleted successfully.',
    success: true,
   },
   { status: 200 }
  );
 } catch (error) {
  return NextResponse.json(
   {
    error: 'Company could not be deleted.',
   },
   { status: 500 }
  );
 }
}
