import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using the Music Club IIITDM website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Permission is granted to temporarily access the materials (information or software) on Music Club IIITDM's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Conduct
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Users are expected to conduct themselves in a respectful and appropriate manner. Any form of harassment, discrimination, or inappropriate behavior will not be tolerated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The materials on Music Club IIITDM's website are provided on an 'as is' basis. Music Club IIITDM makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms of Service, please contact us at musicclub.iiitdm@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 