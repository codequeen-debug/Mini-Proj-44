import { FaFire } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 py-8 text-center">
      <h1 className="font-syne font-extrabold text-3xl text-gray-900">
        Rate My Prof — Swipe Edition
      </h1>
      <p className="text-gray-600 text-base max-w-lg mx-auto mt-2">
        Tap the heart to save, X to skip, ⭐ to wishlist a top pick.
      </p>
    </div>
  )
}
