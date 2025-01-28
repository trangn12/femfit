import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-soft-pink">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Contact With Us</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-soft-pink" />
          <span className="text-gray-600">trangn12@uci.edu</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-soft-pink" />
          <span className="text-gray-600">714-552-7557</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-soft-pink" />
          <span className="text-gray-600">UC Irvine</span>
        </div>
      </div>
    </div>
  )
}

