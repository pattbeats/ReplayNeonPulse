import React from 'react';
import { Link } from 'react-router-dom';
import { LegalPageLayout, LegalSection } from '@/components/LegalPageLayout';

function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      description="Read the terms that apply when you use the ReplayNeonPulse website."
    >
      <LegalSection title="1. Agreement to Terms">
        <p>
          By accessing or using the ReplayNeonPulse website (the “Site”), you agree to these
          Terms of Service. If you do not agree, please do not use the Site.
        </p>
      </LegalSection>

      <LegalSection title="2. About the Site">
        <p>
          The Site presents information about ReplayNeonPulse, including artist story content,
          upcoming activity, and contact options. Content is provided for general informational
          and promotional purposes and may change at any time without notice.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary/70">
          <li>Use the Site in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to the Site, related systems, or data</li>
          <li>Interfere with or disrupt the Site’s operation or security</li>
          <li>
            Submit false, misleading, abusive, or unlawful content through forms or other
            contact channels
          </li>
          <li>
            Scrape, copy, or redistribute Site content for commercial purposes without our prior
            written permission
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          All text, graphics, logos, images, audiovisual materials, and other content on the
          Site are owned by ReplayNeonPulse or used with permission. You may view and share
          links to the Site for personal, non-commercial purposes. You may not reproduce,
          modify, distribute, or create derivative works from Site content without prior written
          consent, except where permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Links">
        <p>
          The Site may include links to third-party platforms such as social media services.
          We are not responsible for the content, policies, or practices of those third parties.
          Your use of third-party services is governed by their own terms and privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact Submissions">
        <p>
          If you send us a message through the Site, you confirm that the information you
          provide is accurate to the best of your knowledge and that you have the right to share
          it. We may use your message to respond to your inquiry. Submitting a message does not
          create any obligation for us to reply, collaborate, or enter into a contract.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          The Site is provided on an “as is” and “as available” basis. To the fullest extent
          permitted by law, we disclaim warranties of any kind, whether express or implied,
          including merchantability, fitness for a particular purpose, and non-infringement. We
          do not guarantee that the Site will be uninterrupted, secure, or error-free.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, ReplayNeonPulse and its contributors shall not
          be liable for any indirect, incidental, special, consequential, or punitive damages,
          or any loss of data, profits, or goodwill, arising from your use of or inability to
          use the Site.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to These Terms">
        <p>
          We may update these Terms of Service from time to time. The “Last updated” date at the
          top of this page reflects the latest revision. Continued use of the Site after changes
          means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these Terms can be sent through our{' '}
          <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
            Contact
          </Link>{' '}
          page or to{' '}
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

export default TermsOfServicePage;
