import { useEffect, useRef, useState } from 'react'
import scrollama from 'scrollama'

export function useScrollama() {
  const scrollerRef = useRef(null)
  const [activeStepId, setActiveStepId] = useState(null)

  useEffect(() => {
    const scroller = scrollama()
    scrollerRef.current = scroller

    scroller
      .setup({
        step: '.step',
        offset: 0.6, // trigger when step is 60% down the viewport
      })
      .onStepEnter(({ element }) => {
        setActiveStepId(element.dataset.stepId)
      })

    const onResize = () => scroller.resize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      scroller.destroy()
    }
  }, [])

  return { activeStepId }
}
