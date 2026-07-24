const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = 'Something went wrong. Please try again.';
const INVALID_EMAIL_ERROR = 'Please enter a valid email address.';

function setNoStoreHeaders(res) {
  res.setHeader('Cache-Control', 'no-store');
}

function parseBody(req) {
  if (req.body == null) {
    return null;
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  if (typeof req.body === 'object') {
    return req.body;
  }

  return null;
}

export default async function handler(req, res) {
  setNoStoreHeaders(res);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!token || !groupId) {
    console.error('Newsletter subscribe misconfigured: missing MailerLite environment variables');
    return res.status(500).json({ error: GENERIC_ERROR });
  }

  const body = parseBody(req);

  if (!body || typeof body.email !== 'string') {
    return res.status(400).json({ error: INVALID_EMAIL_ERROR });
  }

  const email = body.email.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: INVALID_EMAIL_ERROR });
  }

  try {
    const mailerLiteResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: [String(groupId)],
      }),
    });

    if (mailerLiteResponse.status === 200 || mailerLiteResponse.status === 201) {
      return res.status(200).json({ ok: true });
    }

    console.error('MailerLite subscribe failed with status', mailerLiteResponse.status);

    if (mailerLiteResponse.status === 422) {
      return res.status(400).json({ error: INVALID_EMAIL_ERROR });
    }

    return res.status(500).json({ error: GENERIC_ERROR });
  } catch {
    console.error('MailerLite subscribe request failed');
    return res.status(500).json({ error: GENERIC_ERROR });
  }
}
