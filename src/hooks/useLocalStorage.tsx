'use client'

import { useState, useEffect } from "react"

function getSavedValue(key:any, initValue:any) {
  const savedValue = JSON.parse(JSON.stringify(localStorage.getItem(key)))
  if (savedValue) return savedValue

  if (initValue instanceof Function) return initValue()
  return initValue
}

export default function useLocalStorage(Key:any, initialValue:any) {
  const [value, setValue] = useState(() => {
    return getSavedValue(Key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(Key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}