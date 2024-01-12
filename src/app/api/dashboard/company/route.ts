import dbConnect from '@/lib/dbConnect';
import Company from '@/models/companySchema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
 try {
  await dbConnect();
  const companies = await Company.find();
  return NextResponse.json(
   {
    message: 'Companies fetched successfully.',
    success: true,
    data: companies,
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

export async function POST(req: NextRequest) {
 try {
  await dbConnect();
  const data = await req.json();

  const {
   company_name,
   incorporation_country,
   company_legal_number,
   company_website,
  } = data;
  const isExisting = await Company.findOne({
   company_name,
   incorporation_country,
   company_legal_number,
   company_website,
  });

  if (isExisting) {
   return NextResponse.json(
    {
     error: 'This company already exists.',
    },
    { status: 400 }
   );
  }

  const newCompany = await Company.create({
   company_name,
   incorporation_country,
   company_legal_number,
   company_website,
  });

  const company = newCompany._doc;

  return NextResponse.json(
   {
    message: 'Company created successfully.',
    success: true,
    data: company,
   },
   { status: 201 }
  );
 } catch (error) {
  console.error('Error:', error);
  return NextResponse.json(
   {
    error: 'Company could not be created.',
   },
   { status: 500 }
  );
 }
}
