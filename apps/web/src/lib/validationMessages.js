export const validationMessages = {
  nameRequired: 'Please enter your name.',
  emailRequired: 'Please enter your email address.',
  emailInvalid: 'Please enter a valid email address.',
  messageRequired: 'Please enter your message.',
  subscribeSuccess: 'Thank you for subscribing!',
  subscribeDuplicate: 'This email is already subscribed.',
  messageSent: 'Your message has been sent successfully.',
  genericError: 'Something went wrong. Please try again.',
};

export function isValidEmail(value) {
  const email = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm({ name, email, message }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = validationMessages.nameRequired;
  }

  if (!email.trim()) {
    errors.email = validationMessages.emailRequired;
  } else if (!isValidEmail(email)) {
    errors.email = validationMessages.emailInvalid;
  }

  if (!message.trim()) {
    errors.message = validationMessages.messageRequired;
  }

  return errors;
}

export function validateNewsletterEmail(email) {
  if (!email.trim()) {
    return validationMessages.emailRequired;
  }

  if (!isValidEmail(email)) {
    return validationMessages.emailInvalid;
  }

  return null;
}
