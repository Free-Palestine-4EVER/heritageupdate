import Link from "next/link"
import Image from "next/image"

export default function WhatsAppFloatingButton() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=962777991583&text=Hello%2C%20I%20want%20to%20book%20a%20trip%20to%20Wadi%20Rum%20with%20you%20!"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-10 h-10">
        <Image src="/images/whatsapp-icon.png" alt="WhatsApp" fill className="object-contain" />
      </div>
    </Link>
  )
}

