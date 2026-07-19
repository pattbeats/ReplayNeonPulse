
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import NewsletterForm from '@/components/NewsletterForm';
import FormFieldError from '@/components/FormFieldError';
import { validateContactForm, validationMessages } from '@/lib/validationMessages';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(validationMessages.messageSent);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch {
      toast.error(validationMessages.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Contact - ReplayNeonPulse`}</title>
        <meta name="description" content="Get in touch with ReplayNeonPulse for collaborations, bookings, or general inquiries. Connect through email or social media." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="relative min-h-[52vh] md:min-h-[58vh] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 min-h-full">
            <picture className="absolute inset-0 block size-full">
              <source srcSet="/images/artist/contact-hero.webp" type="image/webp" />
              <img
                src="/images/artist/contact-hero.jpg"
                alt="ReplayNeonPulse DJ live performance"
                className="absolute inset-0 size-full object-cover object-[42%_38%] sm:object-[44%_40%] lg:object-[46%_42%]"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>

          <div className="relative container-custom text-center z-10 px-4 pb-12 md:pb-16 lg:pb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Have a question, collaboration idea, or just want to say hello? Reach out below.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form and we will get back to you soon.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-card-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                      <FormFieldError id="name-error" message={errors.name} />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-card-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                        placeholder="your.email@example.com"
                      />
                      <FormFieldError id="email-error" message={errors.email} />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-card-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className="mt-2 min-h-[150px] bg-input border-border text-foreground placeholder:text-muted-foreground"
                        placeholder="Your message..."
                      />
                      <FormFieldError id="message-error" message={errors.message} />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Direct Contact</CardTitle>
                    <CardDescription>Prefer email? Reach out directly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:studio@replayneonpulse.com" className="text-card-foreground hover:text-primary transition-colors duration-200">
                        studio@replayneonpulse.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Connect on Social</CardTitle>
                    <CardDescription>Follow for updates and behind-the-scenes content.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SocialLinks className="justify-start" />
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Stay Updated</CardTitle>
                    <CardDescription>Join the newsletter for exclusive content.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NewsletterForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
