"use client"

import { useEffect, useState } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const COOKIE_CONSENT_KEY = "cookie-consent"

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay to ensure smooth page load
      setTimeout(() => {
        setOpen(true)
      }, 500)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setOpen(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined")
    setOpen(false)
  }

  const handleOpenChange = (isOpen: boolean) => {
    // Only allow closing if user has made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!isOpen && !consent) {
      // Prevent closing - keep it open
      return
    }
    setOpen(isOpen)
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>עוגיות</DrawerTitle>
          <DrawerDescription>
            אנו משתמשים בעוגיות כדי לשפר את החוויה שלך באתר. האם אתה מסכים לשימוש בעוגיות?
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex-row gap-2 justify-end">
          <Button variant="outline" onClick={handleDecline}>
            דחה
          </Button>
          <Button onClick={handleAccept}>
            קבל
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

