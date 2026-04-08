import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Policy Samples</h2>
        <p>
          This page explains how satheeswork.com collects, uses, and protects customer information when
          users browse the site or make purchases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Privacy Policy</h2>
        <p>
          At satheeswork.com, we are committed to protecting the privacy and security of customers'
          personal information. By using this website, you consent to the practices described in this
          Privacy Policy.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Information We Collect</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Personal identification information such as name, email address, and phone number provided
            during contact, registration, or checkout.
          </li>
          <li>
            Payment and billing details required to process orders. Payment data is handled by trusted
            third-party processors.
          </li>
          <li>
            Browsing information such as IP address, browser type, and device data collected through
            cookies and similar technologies.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Use of Information</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>To process and fulfill orders, including shipping and delivery.</li>
          <li>To communicate with customers and respond to support requests.</li>
          <li>To personalize user experience and improve products, services, and website content.</li>
          <li>To detect and prevent fraud, unauthorized activity, and abuse.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Information Sharing</h3>
        <p>
          We do not sell or trade personal information to third parties. We may share data only in the
          following cases:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Trusted service providers who support payment processing, operations, and delivery, under
            confidentiality obligations.
          </li>
          <li>Legal requirements where disclosure is required by applicable law or legal process.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Data Security</h3>
        <p>
          We implement industry-standard technical and organizational safeguards to protect personal
          information. However, no internet transmission or storage system is fully secure.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar technologies to improve user experience and analyze website traffic.
          You can disable cookies in your browser settings, but some website features may not function as
          intended.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">6. Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy at any time. Updates will be posted on this page with a
          revised "last updated" date.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">7. Contact Us</h3>
        <p>
          For privacy-related questions or requests, contact us through the contact information provided on
          this website.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Note: This document is provided as a general guideline and should be customized to suit your
        business operations.
      </p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
