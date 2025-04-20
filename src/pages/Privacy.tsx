
const Privacy = () => {
  return (
    <div className="py-12">
      <div className="eco-container">
        <h1 className="text-3xl font-bold mb-8 text-eco-green-dark">Privacy Policy</h1>
        <div className="prose max-w-none text-eco-green-dark/80">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-eco-green-dark">1. Information Collection and Use</h2>
            <p>At Dukaan, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">What We Collect:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal identification information</li>
              <li>Contact details</li>
              <li>Purchase history</li>
              <li>Browsing behavior on our platform</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-eco-green-dark">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Personalize your shopping experience</li>
              <li>Send promotional offers and newsletters</li>
              <li>Improve our products and services</li>
              <li>Respond to customer support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-eco-green-dark">3. Data Protection</h2>
            <p>We implement robust security measures to protect your data, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive information</li>
              <li>Secure payment gateways</li>
              <li>Regular security audits</li>
              <li>Strict access controls</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-eco-green-dark">4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data deletion</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
