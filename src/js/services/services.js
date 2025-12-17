export const API_URL = 'https://gist.githubusercontent.com/Alexsey2000531/3f812ed0b0ef059e8dd1f39a79ed9b34/raw/db.json';

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });

  return await res.json();
};

async function getResurs(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

export { postData };
export { getResurs };
