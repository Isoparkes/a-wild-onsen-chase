import BaseMap from './map/BaseMap.jsx'
import OnsenDots from './map/OnsenDots.jsx'

export default function StoryMap({ activeStepId, steps, registerDotRef }) {
  const activeIndex = steps.findIndex((s) => s.id === activeStepId)

  let src = steps[0]?.mapImage
  for (let i = 0; i <= activeIndex; i++) {
    if (steps[i].mapImage) src = steps[i].mapImage
  }

  return (
    <div className="story__map-inner">
      <BaseMap src={src} />
      <OnsenDots steps={steps} activeStepId={activeStepId} registerDotRef={registerDotRef} />
    </div>
  )
}
