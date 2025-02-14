import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import ValentineQR from "./_components/valentineQR";

export default function Home() {
  const valentineURL = "https://your-site.vercel.app/valentine";
    
    return (
      <div className="">
      <ValentineQR/>

      </div>
    
  );
}
