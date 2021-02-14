import { useEffect, useState } from 'react'

const useTypingMachine = (
  words,
  options = { typeDelay: 200, wordDelay: 2000 }
) => {
  const { typeDelay, wordDelay } = options
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [display, setDisplay] = useState('')
  const [delta, setDelta] = useState(typeDelay)

  useEffect(() => {
    const index = currentIndex % words.length
    const fullText = words[index]

    const nextCharIndex = isDeleting ? display.length - 1 : display.length + 1
    let nextDelta = parseInt(typeDelay  - Math.random() * 100)

    if (isDeleting) {
      nextDelta /= 2
    }

    setDelta(nextDelta)
    if (!isDeleting && display === fullText) {
      setIsDeleting(true)
      setDelta(wordDelay)
    } else if (isDeleting && display === '') {
      setIsDeleting(false)
      setCurrentIndex(currentIndex + 1)
    }

    const timeout = setTimeout(
      () => setDisplay(fullText.substring(0, nextCharIndex)),
      delta
    )

    return () => clearTimeout(timeout)
  }, [display, currentIndex, isDeleting])

  return display
}

export default useTypingMachine
