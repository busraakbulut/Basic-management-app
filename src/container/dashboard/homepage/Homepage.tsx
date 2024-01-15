'use client';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Homepage = () => {
 const [productInfo, setProductInfo] = useState({ name: '', amount: 0 });
 const [companyCount, setCompanyCount] = useState(0);

 useEffect(() => {
  fetch('http://localhost:3000/api/dashboard/product')
   .then((res) => res.json())
   .then((data) =>
    setProductInfo({ name: data.product_name, amount: data.product_amount })
   );

  fetch('http://localhost:3000/api/dashboard/company')
   .then((res) => res.json())
   .then((data) => setCompanyCount(data.company_name));
 }, []);

 return (
  <div>
   <Card>
    <CardContent>
     <h2>Product Information</h2>
     <p>Name: {productInfo.name}</p>
     <p>Amount: {productInfo.amount}</p>
    </CardContent>
   </Card>

   <Card>
    <CardContent>
     <h2>Company Count</h2>
     <p>{companyCount}</p>
    </CardContent>
   </Card>
  </div>
 );
};

export default Homepage;
