import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Prescripto</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, medical history, and appointment details when you register or interact with our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your data is used to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Book and manage doctor appointments</li>
        <li>Send notifications and reminders</li>
        <li>Improve our platform and user experience</li>
        <li>Ensure compliance with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement strong security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Information may be shared with healthcare providers solely to facilitate your care.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal data. Please contact us if you wish to make a request regarding your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We recommend reviewing it periodically for any changes.
      </p>

      <p className="mt-10 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Prescripto. All rights reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
