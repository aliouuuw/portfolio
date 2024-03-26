import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full">
        <Link href="mailto: wadealiou00@gmail.com" target="_blank" className="col-span-1 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-900 to-90% p-8 hover:scale-[1.025] transition ease-in duration-250">
        <div className="flex gap-x-2 items-center">
          <FontAwesomeIcon icon={faEnvelope} className="h-6" /><p>Send message</p>
        </div>
      </Link>
      <Link href="https://calendly.com/wadealiou00/request-info" target="_blank" className="col-span-1 flex items-center rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-900 to-90% p-8 hover:scale-[1.025] transition ease-in duration-250">
        <div className="flex gap-x-2 items-center justify-start">
          <FontAwesomeIcon icon={faPhone} className="h-6" /><p>Book a call</p>
        </div>
      </Link>
    </div>
  )
}
