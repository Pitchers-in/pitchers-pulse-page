import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-12">
          Privacy Policy for Pitchers
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed text-center">
          At <span className="font-semibold text-white">Pitchers</span>, accessible from 
          <a href="https://pitchers.in/" className="text-blue-400 hover:underline ml-1">
            https://pitchers.in/
          </a>, we are committed to protecting your privacy. 
          This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              We may collect personal information such as your name, email address, and any other information 
              you voluntarily provide when you contact us or sign up for our services. We also collect 
              non-personal information such as browser type, IP address, and browsing behavior through cookies 
              and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information is used to provide and improve our services, respond to your inquiries, 
              send you updates and promotional materials, and ensure the security of our website. 
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to access, correct, or delete your personal information. 
              You may also opt out of receiving promotional communications from us at any time 
              by following the unsubscribe instructions in our emails.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this 
              page with an updated effective date. We encourage you to review this policy periodically 
              to stay informed about how we are protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at 
              <a href="mailto:dev@pitchers.in" className="text-blue-400 hover:underline ml-1">
                dev@pitchers.in
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pitchers. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
