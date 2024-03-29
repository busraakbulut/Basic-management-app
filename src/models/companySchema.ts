import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
 company_name: {
  type: String,
  required: [true, 'Please provide a company name.'],
 },
 incorporation_country: {
  type: String,
  required: [true, 'Please provide a company address.'],
 },
 company_legal_number: {
  type: Number,
  required: [true, 'Please provide a company legal number.'],
 },
 company_website: {
  type: String,
  required: [true, 'Please provide a company website.'],
 },
});

const Company =
 mongoose.models.Company || mongoose.model('Company', CompanySchema);

export default Company;
