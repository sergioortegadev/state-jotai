export const fetchProds = async () => {
  try {
    if (import.meta.env.VITE_API_URL_PROD) {
      const res = await fetch(`${import.meta.env.VITE_API_URL_PROD}`);
      const json = await res.json();
      return json.products;
    } else {
      const res = await fetch(`${import.meta.env.VITE_API_URL_DEV}`);
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(`  ▒▓ Error, fetching data: ${error} ▓▒`);
  }
};
