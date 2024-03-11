'use client'

import { ContextProvider } from "../utils/useMenu";

export default function SiteWrapper({ children }) {
  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  )
}
