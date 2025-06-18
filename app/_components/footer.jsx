'use client';
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t-8 border-green-500">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        {/* قسم Follow Us */}
        <div className="flex">
          <img src="/footerphoto.jpg" width={120} height={100}/>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-950 mb-10 mt-9">
    CodeScope
</h2>

        </div>
       

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p>Alexandria, Egypt</p>
            <p className="mt-1">codescope.tech@gmail.com</p>
            <p className="mt-1">Tel: +201113899128</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">Facebook</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Accessibility Statement</Link></li>
            </ul>
          </div>

          <div />
        </div>
      <div className="text-center  pt-12">      
          <div className="flex justify-center items-center space-x-6 text-2xl text-black">
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
            <Link href="#"><FaYoutube /></Link>
          </div>
        </div>
        <div className="mt-12 border-t pt-4 text-sm text-gray-500">
          © 2025 by CodeScope Built on{" "}
          <Link href="" target="_blank" className="underline">
            CodeScope
          </Link>
        </div>
         
      </div>
      
    </footer>
  );
}