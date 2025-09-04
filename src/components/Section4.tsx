import React from "react";

const Section4: React.FC = () => {
  return (
    <main className="bg-white min-h-screen px-6">
      {/* ================= AI + Video Section ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left side text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            A better way to work with native <span className="text-blue-600">AI</span>
          </h2>

          <p className="text-gray-700 mb-6">
            Paperform's AI-powered features help you create, analyze, and optimize your forms with ease.
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg">
            <li>
              <span className="font-bold">AI form creation</span> – spin up
              complex forms in <em>seconds</em> with natural language prompts
            </li>
            <li>
              <span className="font-bold">AI Insights</span> – view submission
              results and ask AI to make sense of it all in design-savvy reports
            </li>
            <li>
              <span className="font-bold">AI Calculations</span> – more than just
              advanced logic, ask AI to build Excel-style functions to do things
              no other builder can
            </li>
            <li>
              <span className="font-bold">AI Response Analysis</span> – automatically categorize and extract insights from open-ended responses
            </li>
          </ul>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Try AI features
          </button>
        </div>

        {/* Right side video box */}
        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden bg-gray-50 border border-gray-100">
          <video
            src="/images/insights.mp4"
            className="w-full h-auto aspect-video object-cover rounded-2xl"
            controls
            poster="/images/ai-poster.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ================= Endless Possibilities Section ================= */}
      <div className="max-w-6xl mx-auto text-center py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Endless possibilities
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Solutions that empower you to get back to life. Create anything from simple contact forms to complex payment workflows.
        </p>
      </div>

      {/* Reusable sections */}
      <div className="max-w-6xl mx-auto space-y-32"> {/* ⬅️ more gap between sections */}
        
        {/* Forms & Surveys */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Forms & Surveys</h3>
            <p className="text-gray-700 mb-4">
              Flexible online forms that are easy to create and even easier to fill out. 
              Capture leads, accept payments, share surveys — and so much more.
            </p>
            <p className="italic text-gray-600">
              Replaces: Google Forms, Typeform, Jotform
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/webform-nocode.png"
              alt="Forms & Surveys"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Scheduling and Booking */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-10">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src="/images/scheduling.jpg"
              alt="Scheduling and Booking"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Scheduling and Booking Management
            </h3>
            <p className="text-gray-700 mb-4">
              Automate your schedule with Paperform. Simply add your availability, connect your calendar and let people find the perfect time.
            </p>
            <p className="italic text-gray-600">
              Replaces: Calendly, Doodle, TidyCal
            </p>
          </div>
        </div>

        {/* Papersign */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-10">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Papersign</h3>
            <p className="text-gray-700 mb-4">
              Simplify document signing with our eSignature product Papersign, so you can spend less time in email chains and more time on the important stuff.
            </p>
            <p className="italic text-gray-600">
              Replaces: DocuSign, HelloSign, Acrobat Sign
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/papersign.gif"
              alt="Papersign"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Payments */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-10">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src="/images/payments.jpg"
              alt="Payments"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Payments</h3>
            <p className="text-gray-700 mb-4">
              Start selling online in minutes. Services. Subscriptions. Physical goods. 
              Whatever you want. Paperform makes it easy to get a custom storefront up-and-running in minutes.
            </p>
            <p className="italic text-gray-600">
              Integrate: Stripe, Square, Paypal
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section4;
