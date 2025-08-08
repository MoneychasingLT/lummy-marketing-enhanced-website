import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>At Lummy Marketing, we collect publicly available business contact information for the purpose of outreach and offering our services. We may contact businesses via SMS or email as part of our marketing efforts.</p>
          <p>If you submit your information on our site (e.g., through our contact form), you consent to receive communications from us. You can opt out at any time by replying STOP to SMS messages or contacting us directly.</p>
          <p>We do not sell or share your information with third parties.</p>
          <p>For any questions, please contact us at hello@lummymarketing.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
