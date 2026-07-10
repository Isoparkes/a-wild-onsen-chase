import { useCallback, useMemo, useRef } from 'react'
import StoryMap from './components/StoryMap.jsx'
import StepText from './components/StepText.jsx'
import ConnectorLines from './components/ConnectorLines.jsx'
import { useScrollama } from './hooks/useScrollama.js'
import { useWheelScroll } from './hooks/useWheelScroll.js'
import { useConnectorPositions } from './hooks/useConnectorPositions.js'
import { steps } from './data/steps.js'

export default function App() {
  const { activeStepId } = useScrollama()
  const textRef = useRef(null)
  useWheelScroll(textRef)

  const mediaRefs = useRef({})
  const dotRefs = useRef({})
  const registerMediaRef = useCallback((mediaKey, node) => {
    mediaRefs.current[mediaKey] = node
  }, [])
  const registerDotRef = useCallback((id, node) => {
    dotRefs.current[id] = node
  }, [])

  const connectorTargets = useMemo(
    () =>
      steps
        .filter((s) => s.dotPixel)
        .flatMap((s) =>
          (s.media || []).map((_, mediaIndex) => ({
            mediaKey: `${s.id}::${mediaIndex}`,
            stepId: s.id,
          }))
        ),
    []
  )
  const positions = useConnectorPositions(textRef, mediaRefs, dotRefs, connectorTargets)

  return (
    <div className="story">
      <StepText
        ref={textRef}
        steps={steps}
        activeStepId={activeStepId}
        registerMediaRef={registerMediaRef}
      >
        <div className="story__header">
          <p className="story__published">Published: July 11, 2026</p>
          <h1 className="story__title">A Wild Onsen Chase</h1>
          <p className="story__subtitle">
            Earlier this year, my fiancé and I, bundled in thermals and down jackets, made our way through northern Japan 
            by bullet train and local rail: first to Nozawa Onsen, then to the tiny town of Tsukioka, north to the 
            coast at Aomori, and finally across the Tsugaru Strait, to stop in Hakodate and Niseko. 
            At every place, we made sure to bathe in the traditional hot springs, or onsen 温泉. 
            This map traces our route across Japan’s railway network, and the particular character of the 
            onsens we visited. 
          </p>
        </div>
      </StepText>
      <div className="story__map">
        <StoryMap activeStepId={activeStepId} steps={steps} registerDotRef={registerDotRef} />
      </div>
      <ConnectorLines
        positions={positions}
        activeStepId={activeStepId}
        connectorTargets={connectorTargets}
      />
    </div>
  )
}
