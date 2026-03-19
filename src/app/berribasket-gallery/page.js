'use client';
import AsciiBackground from "@/comps/AsciiBackground";
import Link from "next/link";
import Image from "next/image";
import promo from "@/comps/static/berribasket/promo.png";
import header from "@/comps/static/berribasket/header.png";
import laptop from "@/comps/static/berribasket/laptop.png";
import logo from "@/comps/static/berribasket/logo.png";
import cac from "@/comps/static/berribasket/cac.jpg";
import farm from "@/comps/static/berribasket/farm.png";

export default function BerriBasketGallery() {
  return (
    <div className="w-full flex justify-center">
      <AsciiBackground />
      <div className="min-w-0 w-[100%] md:w-[75%] mb-10">
        <div className="border border-1 mt-4 p-4 rounded-sm">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl">BerriBasket — Asset Gallery</p>
            <Link href="/" className="text-md text-gray-400 underline">← Back</Link>
          </div>

          <div className="grid grid-cols-3 gap-3">

            {/* Row 1: promo wide + video square */}
            <div className="col-span-2 border border-1 rounded-sm overflow-hidden">
              <Image src={promo} alt="Promo" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 border border-1 rounded-sm overflow-hidden">
              <video
                src="/biz animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2: farm square + laptop square + cac square */}
            <div className="col-span-1 border border-1 rounded-sm overflow-hidden">
              <Image src={farm} alt="Farm" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 border border-1 rounded-sm overflow-hidden">
              <Image src={laptop} alt="Laptop" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 border border-1 rounded-sm overflow-hidden">
              <Image src={cac} alt="CAC" className="w-full h-full object-cover" />
            </div>

            {/* Row 3: header wide + logo square */}
            <div className="col-span-2 border border-1 rounded-sm overflow-hidden">
              <Image src={header} alt="Header" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 border border-1 rounded-sm overflow-hidden flex items-center justify-center bg-neutral-900 p-6">
              <Image src={logo} alt="Logo" className="w-full object-contain" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
