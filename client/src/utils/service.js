export const baseUrl = 'http://localhost:5000/api';

export const postRequest = async (url, body) => {
   const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      // body: JSON.stringify(body),
   });

   const data = await response.json();

   if (!response.ok) {
      let message;
      if (data?.message) {
         message = data.message;
      } else {
         message = data;
      }

      return { error: true, message };
   }

   return data;
};

export const getRequest = async (url) => {
   const headers = { 'Content-Type': 'application/json' };
   
   const response = await fetch(url, headers);

   const data = await response.json();

   if (!response.ok) {
      let message = 'An error occurred';

      if (data?.message) {
         message = data.message;
      }

      return { error: true, message };
   }

   return data;
};
