import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

const TypingIndicator: React.FC = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''))
    }, 500) // Adjust the interval for speed of dot animation

    return () => clearInterval(interval)
  }, [])

  return (
    <Text>
      {`Typing${dots}`}
    </Text>
  )
}

export default TypingIndicator