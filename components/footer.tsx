import Image from "next/image";
import Link from "next/link";
import {
  Home,
  UserPlus,
  Calendar,
  Mail,
  Building,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center">
              <div className="relative h-16 w-32">
                <Image
                  src="/logo.png"
                  alt="Char Mehar Azizia High School Alumni Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              The Char Mehar Azizia High School Alumni is guided by its
              Constitution in its organizational structure as well as its
              management system. The Constitution provides for a 3-tier
              structure in running the business of the organization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Home className="mr-2 h-5 w-5" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Apply For Membership
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Find us on Map</h3>
            <div className="h-48 w-full overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.1961205074754!2d90.95194717546266!3d22.646475279439144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754b5158cb08e2d%3A0x9ec9602841b5758a!2sChar%20Mehar%20Azizia%20High%20School!5e0!3m2!1sen!2sbd!4v1745171085608!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Char Mehar Azizia High School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex flex-col justify-between px-4 text-sm text-gray-400 md:flex-row">
          <p>
            Copyright © 2025 Char Mehar Azizia High School Alumni. All Right
            Reserved
          </p>
          <p>Developed by S.M.Fahid</p>
        </div>
      </div>
    </footer>
  );
}
