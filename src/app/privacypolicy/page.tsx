import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: September 27, 2024</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to our Privacy Policy. Your privacy is critically important to us. Our privacy policy is straightforward, we don’t ask for personal information unless we truly need it, and we don’t share it with anyone except to comply with the law.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
          <p>
            We collect information to provide better services to all our users. The information we collect includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal identification information (Name, email address, etc.)</li>
            <li>Usage data and cookies</li>
            <li>Other information you provide to us voluntarily</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
          <p>
            We use your information for various purposes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To improve the quality of our website</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Your Privacy Choices</h2>
          <p>
            You can choose not to provide certain information, but this may limit your ability to use some of our services. You can also contact us at any time to request to review, update, or delete your personal data.
          </p>
          <Link href='/contactus'>
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          </Link>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold">Email: abelaatkelet@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
