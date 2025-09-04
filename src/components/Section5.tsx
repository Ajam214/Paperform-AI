// src/components/Section5.tsx

import Image from "next/image";

export default function Section5() {
  return (
    <section className="min-h-screen bg-[#f5f2e9] flex flex-col items-center py-16">
      {/* Heading Section */}
      <h1 className="text-3xl font-semibold text-gray-900">Plug and play</h1>
      <p className="mt-4 text-center text-gray-600 max-w-xl">
        Enjoy more free time and less busywork with thousands of automations.
        Bring all your tools under one roof.
      </p>

      {/* Icons Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Google Sheets */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/google-sheets.png"
            alt="Google Sheets"
            width={60}
            height={60}
          />
        </div>

        {/* Mailchimp */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/mailchimp.png"
            alt="Mailchimp"
            width={60}
            height={60}
          />
        </div>

        {/* ActiveCampaign */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/activecampaign.png"
            alt="ActiveCampaign"
            width={60}
            height={60}
          />
        </div>

        {/* Slack */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/slack.png"
            alt="Slack"
            width={60}
            height={60}
          />
        </div>

        {/* Trello */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/trello.png"
            alt="Trello"
            width={60}
            height={60}
          />
        </div>

        {/* Lite */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/lite.png"
            alt="Lite"
            width={60}
            height={60}
          />
        </div>

        {/* Empty Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/Gmail.png"
            alt="Lite"
            width={60}
            height={60}
          />
        </div>

        {/* Zoho */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src="/icons/zoho.png"
            alt="Zoho"
            width={60}
            height={60}
          />
        </div>
      </div>

      {/* Explore Button */}
      <a
        href="https://paperform.co/integrations/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 text-orange-600 font-medium hover:underline"
      >
        Explore Integrations →
      </a>
    </section>
  );
}
