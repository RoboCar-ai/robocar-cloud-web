const SESSIONS_RESOURCE_URL = 'http://localhost:5000/sessions';

export async function getSessions() {
  const res = await fetch(SESSIONS_RESOURCE_URL);
  return res.json()
}

export function createSession(name) {
  return fetch(SESSIONS_RESOURCE_URL, {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({name: name, status: 'active'})
  });
}

export function deactivateSession(name) {
  return fetch(SESSIONS_RESOURCE_URL, {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({name: name, status: 'inactive'})
  });
}