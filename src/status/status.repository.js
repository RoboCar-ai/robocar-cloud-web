
const STATUS_RESORUCE_URL = 'http://localhost:5000/status'
export async function getStatus() {
  const res = await fetch(STATUS_RESORUCE_URL);
  return res.json();
}