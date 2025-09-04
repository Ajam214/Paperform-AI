import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Enterprise', href: '#' },
      { name: 'Security', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Docs', href: '#' },
      { name: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Legal', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '/images/twitter.svg' },
  { name: 'Facebook', href: '#', icon: '/images/facebook.svg' },
  { name: 'Instagram', href: '#', icon: '/images/instagram.svg' },
  { name: 'LinkedIn', href: '#', icon: '/images/linkedin.svg' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top section with logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Paperform</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              The easiest way to create forms, surveys, quizzes, landing pages, and more.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    {item.name[0]}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Paperform. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
