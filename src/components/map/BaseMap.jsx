import { useEffect, useRef, useState } from 'react'
import { withBase } from '../../lib/assetPath.js'

export default function BaseMap({ src }) {
  const [current, setCurrent] = useState(src)
  const [previous, setPrevious] = useState(null)
  const prevSrcRef = useRef(src)

  useEffect(() => {
    if (src === prevSrcRef.current) return

    // Preload the next image before swapping so the crossfade starts once
    const img = new Image()
    img.src = withBase(src)
    const swap = () => {
      setPrevious(prevSrcRef.current)
      setCurrent(src)
      prevSrcRef.current = src
    }
    if (img.complete) swap()
    else img.onload = swap

    return () => {
      img.onload = null
    }
  }, [src])

  useEffect(() => {
    if (!previous) return
    const t = setTimeout(() => setPrevious(null), 900)
    return () => clearTimeout(t)
  }, [previous])

  return (
    <div className="map-layer map-layer--base">
      {previous && (
        <img
          key={previous}
          className="map-layer__img map-layer__img--under"
          src={withBase(previous)}
          alt=""
          draggable={false}
        />
      )}
      <img
        key={current}
        className="map-layer__img map-layer__img--over"
        src={withBase(current)}
        alt=""
        draggable={false}
      />
    </div>
  )
}
