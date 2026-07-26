import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = 'Your message could not be sent. Please try again or email us directly at studio@replayneonpulse.com.';
const INVALID_INPUT_ERROR = 'Please check your name, email, and message, then try again.';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function validateFields(body) {
  if (!body || typeof body !== 'object') {
    return { error: INVALID_INPUT_ERROR };
  }

  if (
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.message !== 'string'
  ) {
    return { error: INVALID_INPUT_ERROR };
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!name || !email || !message) {
    return { error: INVALID_INPUT_ERROR };
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { error: INVALID_INPUT_ERROR };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: INVALID_INPUT_ERROR };
  }

  return { name, email, message };
}

function buildPlainText({ name, email, message }) {
  return [
    'New message from the ReplayNeonPulse website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

function buildHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
      <h2 style="margin: 0 0 16px;">New website message</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
      <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
    </div>
  `.trim();
}

export default async function handler(req, res) {
  setNoStoreHeaders(res);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Contact form misconfigured: RESEND_API_KEY is missing');
    return res.status(500).json({ error: GENERIC_ERROR });
  }

  const validation = validateFields(parseBody(req));

  if (validation.error) {
    return res.status(400).json({ error: validation.error });
  }

  const { name, email, message } = validation;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'ReplayNeonPulse Website <website@replayneonpulse.com>',
      to: ['studio@replayneonpulse.com'],
      replyTo: email,
      subject: `New website message from ${name}`,
      text: buildPlainText({ name, email, message }),
      html: buildHtml({ name, email, message }),
    });

    if (error) {
      console.error('Resend contact email failed', {
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
      });
      return res.status(500).json({ error: GENERIC_ERROR });
    }

    console.info('Contact email sent', { id: data?.id });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email request failed', {
      name: error?.name,
      message: error?.message,
    });
    return res.status(500).json({ error: GENERIC_ERROR });
  }
}
