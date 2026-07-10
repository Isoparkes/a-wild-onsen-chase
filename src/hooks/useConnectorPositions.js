import { useCallback, useEffect, useRef, useState } from 'react'

// 'connectorTargets' is a list of { mediaKey, stepId } pairs — mediaKey
// looks up the media card (a step can have more than one, see steps.js),
// stepId looks up that step's single map dot
export function useConnectorPositions(scrollContainerRef, mediaRefs, dotRefs, connectorTargets) {
  const [positions, setPositions] = useState({})
  const rafRef = useRef(null)

  const measure = useCallback(() => {
    const next = {}
    for (const { mediaKey, stepId } of connectorTargets) {
      const mediaEl = mediaRefs.current[mediaKey]
      const dotEl = dotRefs.current[stepId]
      if (!mediaEl || !dotEl) continue
      const mediaRect = mediaEl.getBoundingClientRect()
      const dotRect = dotEl.getBoundingClientRect()
      next[mediaKey] = {
        x1: mediaRect.right,
        y1: mediaRect.top + mediaRect.height / 2,
        x2: dotRect.left + dotRect.width / 2,
        y2: dotRect.top + dotRect.height / 2,
      }
    }
    setPositions(next)
  }, [mediaRefs, dotRefs, connectorTargets])

  useEffect(() => {
    measure()

    const scheduleMeasure = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        measure()
      })
    }

    const scrollEl = scrollContainerRef.current
    scrollEl?.addEventListener('scroll', scheduleMeasure, { passive: true })
    window.addEventListener('resize', scheduleMeasure)

    return () => {
      scrollEl?.removeEventListener('scroll', scheduleMeasure)
      window.removeEventListener('resize', scheduleMeasure)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [measure, scrollContainerRef])

  return positions
}
