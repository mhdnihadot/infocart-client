import React from "react";
import Link from "next/link";
import Image from "next/image";
import myLogo from "@/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#060a13] border-t border-slate-800 pt-16 pb-8 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & About (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-6 block">
              <Image 
                src={myLogo} 
                alt="Infocart Logo" 
                className="w-[140px] md:w-[160px] h-auto object-contain brightness-0 invert" 
                priority 
              />
            </Link>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-[280px]">
              Infocart is a leading IT solutions provider in UAE, offering POS systems, software, and IT services to help businesses grow.
            </p>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-geist font-semibold text-white text-[15px] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Products', href: '/#categories' },
                { name: 'Contact Us', href: '/#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] text-slate-400 hover:text-white transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-geist font-semibold text-white text-[15px] mb-5">Products</h4>
            <ul className="flex flex-col gap-3">
              {['POS Systems', 'Retail Software', 'Restaurant POS', 'Barcode Solutions', 'Accounting Software'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[14px] text-slate-400 hover:text-white transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-geist font-semibold text-white text-[15px] mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-[14px] text-slate-400 font-medium">+971 4 341 1140</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-[14px] text-slate-400 font-medium">info@infocart.ae</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                <span className="text-[14px] text-slate-400 font-medium">www.infocart.ae</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-[14px] text-slate-400 font-medium">Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-geist font-semibold text-white text-[15px] mb-5">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-slate-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Infocart IT Solutions. All Rights Reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-2.5">
            <span className="text-[12px] text-slate-500 font-medium mr-2 hidden sm:block">Secure Payments:</span>
            
            {/* Visa */}
            <div className="w-10 h-[26px] bg-white rounded-md flex items-center justify-center px-1 shadow-sm">
              <svg viewBox="0 0 32 10" fill="none" className="w-full h-full text-[#1434CB]" xmlns="http://www.w3.org/2000/svg"><path d="M14.394 0l-1.802 9.68h2.89L17.283 0h-2.889zM23.36 0c-1.393 0-2.373.743-2.383 1.804-.015 1.144 1.026 1.782 1.813 2.167.803.393 1.07.644 1.068 1.002-.003.541-.652.793-1.258.793-1.048 0-1.611-.157-2.47-.56l-.35-.164-.406 2.535c.613.284 1.748.528 2.923.538 1.547 0 2.534-.766 2.553-1.954.02-1.618-2.222-1.706-2.203-2.434.007-.225.234-.473.702-.544.24-.038.896-.073 1.758.324l.321.149.398-2.483a9.23 9.23 0 00-2.466-.173zm7.042.247c-.551 0-.96.315-1.157.818l-3.298 7.859h3.036s.495-1.365.607-1.66h3.707c.088.42.348 1.66.348 1.66h2.684l-2.008-9.68h-3.056c-.02 0-2.408 6.55-2.408 6.55l-.767-3.921c-.135-.55-.522-1.1-1.053-1.42l-1.921-.762.083.39c.654.304 1.405.862 1.64 1.503l-2.394 6.787zm.797 2.176c.219-.607 1.057-2.91 1.057-2.91l.542 2.646h-1.599z" fill="#1434CB"/><path d="M10.518.246L8.147 6.643 7.828 5.04C7.42 2.95 5.86 1.492 3.666.246l3.376 9.431h3.04l4.545-9.43H10.518z" fill="#1434CB"/><path d="M3.568.246H.04L0 .438c2.723.693 4.54 1.983 5.3 3.696L4.542.247H3.568z" fill="#F5A623"/></svg>
            </div>
            
            {/* Mastercard */}
            <div className="w-10 h-[26px] bg-white rounded-md flex items-center justify-center p-1.5 shadow-sm">
              <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="33" cy="30" r="28" fill="#EB001B"/>
                <circle cx="67" cy="30" r="28" fill="#F79E1B"/>
                <path d="M50 8.5C41.2 13 35.5 22.3 35.5 30S41.2 47 50 51.5c8.8-4.5 14.5-13.8 14.5-21.5S58.8 13 50 8.5z" fill="#FF5F00"/>
              </svg>
            </div>
            
            {/* Apple Pay */}
            <div className="w-10 h-[26px] bg-white rounded-md flex items-center justify-center shadow-sm">
              <svg className="w-6 h-[14px]" viewBox="0 0 100 40" fill="black"><path d="M42.2 16.5c-2.3 0-4.6 1.4-5.6 1.4-1.1 0-3.1-1.3-5-1.3-2.6 0-5 1.5-6.3 3.8-2.6 4.6-.7 11.4 1.9 15.1 1.3 1.8 2.7 3.9 4.6 3.8 1.9-.1 2.6-1.2 4.9-1.2 2.2 0 2.9 1.2 4.9 1.2 2 0 3.3-1.9 4.5-3.8 1.5-2.2 2.1-4.3 2.1-4.4-.1-.1-4-1.5-4-6.1.1-3.9 3.2-5.7 3.3-5.8-1.9-2.7-4.8-3-5.9-3.1-1.2-.5-3.3-1.5-5.6-1.5z"/><path d="M43.7 10.9c1-1.3 1.7-3 1.5-4.8-1.5.1-3.3 1-4.4 2.3-1 1.1-1.8 2.8-1.6 4.6 1.7.1 3.4-.8 4.5-2.1z"/><path d="M57.6 14v16.1h-4V14h4z"/><path d="M68.5 22.1c0 2.8-2.1 4.7-5.1 4.7H61v-9.3h2.4c3 0 5.1 1.8 5.1 4.6zm-4 4c1 0 1.6-.7 1.6-1.8V22c0-1.1-.6-1.8-1.6-1.8H61v5.6h3.5z"/><path d="M80 30.1h-4.1l-.8-2h-3.4l-.8 2H67l3.9-9.3h4l5.1 9.3zm-5.4-3.1l-1-2.4c-.2-.6-.4-1.3-.6-1.9h-.1c-.2.6-.4 1.3-.6 1.9l-1 2.4h3.3z"/><path d="M91.3 22c0 2.2-1.3 3.6-3.3 3.6h-2.1v4.5h-4v-9.3h4.9c2 0 3.3 1.3 3.3 3.6zm-3.3 2.6c1 0 1.6-.7 1.6-1.8V22c0-1.1-.6-1.8-1.6-1.8h-1.6v4.3h1.6z"/><path d="M94.6 14v16.1h-4V14h4z"/></svg>
            </div>
            
            {/* Google Pay */}
            <div className="w-10 h-[26px] bg-white rounded-md flex items-center justify-center p-[5px] shadow-sm">
              <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M37.8 19.3v3h-7c.2 2.6 1.2 4.7 2.7 6.2 1.8 1.8 4.3 2.7 7.2 2.7 4.1 0 7.4-1.7 9.8-4.9l2.7 1.7c-2.9 4-7.2 6.1-12.5 6.1-7.2 0-13.3-5.2-13.3-13.1 0-7.9 6.1-13.1 13.3-13.1 3.5 0 6.6 1.2 9.1 3.3 2.5 2.1 4.1 5.3 4.6 9h-16.6zM49 14.1h3v19h-3v-19zm9.2 0h2.9v2.8h.1c.8-1.7 2.5-3.1 5.1-3.1 2.3 0 4.1.7 5.4 2.1 1.3 1.4 1.9 3.3 1.9 5.8v11.4h-3v-10.9c0-3.3-1.5-4.9-4.5-4.9-2.1 0-3.7 1.1-4.4 2.8-.2.5-.3 1-.3 1.6v11.4h-3v-19zm24.6 4.3c-2.3 0-4.3 1-5.3 2.9h-.1v-2.6h-2.9v24.6h3v-9.3h.1c1 1.9 2.9 2.9 5.3 2.9 4.3 0 7.4-3.6 7.4-9.3-.1-5.6-3.2-9.2-7.5-9.2zm-.8 15.6c-2.9 0-5.1-2.2-5.1-6.3 0-4.1 2.3-6.3 5.1-6.3 2.9 0 5.1 2.3 5.1 6.3 0 4-2.3 6.3-5.1 6.3z" fill="#5f6368"/><path d="M18.8 33.1v-22.3h-4.3v22.3h4.3zm6.6-4.5c1.4 1.4 3.3 2.1 5.5 2.1 4.2 0 7.4-2.9 7.4-7s-3.2-7-7.4-7c-2.2 0-4.1.8-5.5 2.1l2.4 2.4c.8-.7 1.9-1.2 3.1-1.2 2.3 0 4.1 1.8 4.1 3.7 0 1.9-1.8 3.7-4.1 3.7-1.2 0-2.3-.5-3.1-1.2l-2.4 2.4z" fill="#4285F4"/><path d="M9.8 18.6L.4 27.9l-2.2-2.2 9.4-9.4 1.6 1.6c.4.4 1 .4 1.4 0l1.4-1.4z" fill="#34A853"/><path d="M12.6 15.8L9.8 18.6l1.4-1.4c-.4-.4-1-.4-1.4 0l-1.4 1.4-1.4-1.4L4.2 20 2 17.8l5-5 5.6 3z" fill="#FABB05"/><path d="M25.4 33.1c1.3 0 2.5-.3 3.5-1l-2.2-2.2c-.4.2-.8.3-1.3.3-1.5 0-2.8-.9-3.2-2.3h-3.4v2.6c1.3 1.6 3.3 2.6 6.6 2.6z" fill="#EA4335"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
