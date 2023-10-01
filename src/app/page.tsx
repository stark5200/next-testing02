'use client'

import React, { useState } from "react"
import useLocalStorage from "@/hooks/useLocalStorage"
import useUpdateLogger from "@/hooks/useUpdateLogger"

export default function Home() {

  const [name, setName] = useLocalStorage('10', '')
  useUpdateLogger(name)
  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)} 
    />
    )
}
