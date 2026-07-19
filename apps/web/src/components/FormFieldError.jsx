import React from 'react';

function FormFieldError({ id, message }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-1.5 text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}

export default FormFieldError;
