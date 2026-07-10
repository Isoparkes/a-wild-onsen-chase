import { useEffect } from 'react'

export function useWheelScroll(targetRef, { minWidth = 800 } = {}) {
  useEffect(() => {
    const onWheel = (e) => {
      if (window.innerWidth <= minWidth) return // mobile: let the page scroll normally
      const el = targetRef.current
      if (!el) return
      e.preventDefault()
      el.scrollTop += e.deltaY
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [targetRef, minWidth])
}
