
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { Mail } from 'lucide-react';
import FormFieldError from '@/components/FormFieldError';
import { validateNewsletterEmail, validationMessages } from '@/lib/validationMessages';

function NewsletterForm({ className = "" }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateNewsletterEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      await pb.collection('newsletter_signups').create({
        email: email.trim()
      }, { $autoCancel: false });

      toast.success(validationMessages.subscribeSuccess);
      setEmail('');
      setError('');
    } catch (submitError) {
      if (submitError.data?.email?.message?.includes('already exists')) {
        setError(validationMessages.subscribeDuplicate);
      } else {
        toast.error(validationMessages.genericError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) {
              setError('');
            }
          }}
          disabled={isLoading}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-email-error' : undefined}
          className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
        <FormFieldError id="newsletter-email-error" message={error} />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] whitespace-nowrap sm:self-start"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}

export default NewsletterForm;
