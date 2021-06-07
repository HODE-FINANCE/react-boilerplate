import { useEffect, useState } from 'react'
//
export const useLocale = () => {
  const [locale, setLang] = useState('en')
  const [messages, setMessages] = useState(null)

  const [componentMounted, setComponentMounted] = useState(false)

  const loadMessages = (lang) => {
    switch (lang) {
      case 'en':
        return import('./lang/en.json')
      default:
        return import('./lang/en.json')
    }
  }
  const changeLocal = (updateLocal) => {
    window.localStorage.setItem('lang', updateLocal)
    setLang(updateLocal)
    loadMessages(updateLocal).then(setMessages)
  }

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang')
    if (localLang) {
      setLang(localLang)
      loadMessages(localLang).then(setMessages)
    } else {
      changeLocal('en')
    }
    setComponentMounted(true)
  }, [locale])

  return { locale, changeLocal, messages, componentMounted }
}
