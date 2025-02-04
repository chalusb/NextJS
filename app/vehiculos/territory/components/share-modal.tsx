"use client"

import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Facebook, Twitter, Mail, X } from "lucide-react"

interface ShareModalProps {
  url: string
  title: string
}

export function ShareModal({ url, title }: ShareModalProps) {
  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2">
          <span>Compartir</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8L8 16M8.5 8H16V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Compartir</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 