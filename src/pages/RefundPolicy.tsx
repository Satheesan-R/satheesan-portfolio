import LegalPageLayout from "@/components/LegalPageLayout";

const RefundPolicy = () => {
  return (
    <LegalPageLayout title="Refund Policy">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Policy Samples</h2>
        <p>
          This page explains return, exchange, and refund conditions for purchases made through
          satheeswork.com.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Refund Policy</h2>
        <p>
          Thank you for shopping at satheeswork.com. We value your satisfaction and aim to provide the
          best online shopping experience possible. If you are not fully satisfied with your purchase, we
          are here to help.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Returns</h3>
        <p>
          We accept returns within [X] days from the date of purchase. To be eligible, items must be
          unused, in original condition, and in original packaging.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Refunds</h3>
        <p>
          After receiving and inspecting your return, we will notify you of the refund status. If approved,
          a refund will be issued to your original payment method. Original shipping charges are
          non-refundable unless required by law.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Exchanges</h3>
        <p>
          For exchanges (size, color, or style), contact customer support within [X] days of receiving your
          order to receive exchange instructions.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Non-Returnable Items</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Personalized or custom-made items</li>
          <li>Perishable goods</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Damaged or Defective Items</h3>
        <p>
          If your item arrives damaged or defective, contact us immediately. We will arrange a replacement
          or issue a refund depending on your preference and product availability.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">6. Return Shipping</h3>
        <p>
          Return shipping costs are the customer's responsibility unless the return is due to our error,
          such as incorrect or defective items. In those cases, we provide a prepaid return label.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">7. Processing Time</h3>
        <p>
          Refunds and exchanges are processed within [X] business days after we receive returned items.
          Processing time may vary depending on your payment provider.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">8. Contact Us</h3>
        <p>
          If you have questions about this Refund Policy, contact our customer support team through the
          contact information available on this website.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Note: This document is provided as a general guideline and should be customized to suit your
        business operations.
      </p>
    </LegalPageLayout>
  );
};

export default RefundPolicy;
