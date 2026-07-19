import React from 'react';
import { Link } from 'react-router-dom';
import { LegalPageLayout, LegalSection } from '@/components/LegalPageLayout';

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Learn how ReplayNeonPulse collects, uses, and protects your personal information."
    >
      <LegalSection title="1. Introduction">
        <p>
          ReplayNeonPulse (“we”, “us”, or “our”) respects your privacy. This Privacy Policy
          explains how we handle information when you visit{' '}
          <span className="text-foreground/90">replayneonpulse.com</span> and related pages
          (the “Site”).
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary/70">
          <li>
            <span className="text-foreground/90 font-medium">Contact details</span> — such as
            your name and email address when you submit the contact form or reach out to us
            directly.
          </li>
          <li>
            <span className="text-foreground/90 font-medium">Message content</span> — any
            information you choose to include in a form submission or email.
          </li>
          <li>
            <span className="text-foreground/90 font-medium">Technical data</span> — limited
            usage data such as browser type, device information, and pages visited, which may
            be collected automatically by hosting or analytics tools.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary/70">
          <li>Respond to inquiries, collaboration requests, and booking messages</li>
          <li>Operate, maintain, and improve the Site</li>
          <li>Protect the security and integrity of our services</li>
          <li>Comply with legal obligations where applicable</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use your data for third-party
          advertising networks.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies and Similar Technologies">
        <p>
          The Site may use essential cookies or similar technologies required for basic
          functionality and performance. If we introduce analytics or preference cookies in the
          future, we will update this policy and, where required, request your consent.
        </p>
      </LegalSection>

      <LegalSection title="5. Sharing of Information">
        <p>
          We may share information only with trusted service providers who help us operate the
          Site (for example hosting or email delivery), and only as needed to perform those
          services. We may also disclose information if required by law or to protect our
          rights and safety.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain contact messages and related information only as long as needed to respond
          to your request and for reasonable administrative or legal purposes, after which we
          delete or anonymize the data where practicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete, or
          restrict the processing of your personal information. To make a request, contact us
          using the details below.
        </p>
      </LegalSection>

      <LegalSection title="8. Children’s Privacy">
        <p>
          The Site is not directed to children under 16. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal data,
          please contact us so we can delete it.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the
          top of this page reflects the latest revision. Continued use of the Site after changes
          means you acknowledge the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          For privacy-related questions or requests, please use our{' '}
          <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
            Contact
          </Link>{' '}
          page or email{' '}
          <a
            href="mailto:studio@replayneonpulse.com"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            studio@replayneonpulse.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default PrivacyPolicyPage;
