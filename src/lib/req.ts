export async function get(endpoint: String) {
 try {
  const response = await fetch(`${process.env.API_URL}/${endpoint}`, {
   method: 'GET',
   headers: {
    'Content-Type': 'application/json',
   },
  });
  const data = await response.json();

  return data;
 } catch (error) {
  console.log('Error fetching data', error);
  return null;
 }
}

export async function post(endpoint: String, data: any) {
 try {
  const response = await fetch(`${process.env.API_URL}/${endpoint}`, {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
    'Content-Type': 'application/json',
   },
  });

  const responseData = await response.json();

  return responseData;
 } catch (error) {
  console.log('Error fetching data', error);
  return null;
 }
}
