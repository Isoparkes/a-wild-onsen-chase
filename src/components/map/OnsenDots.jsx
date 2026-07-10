import { MAP_WIDTH, MAP_HEIGHT } from '../../lib/constants.js'

// Ring-and-core dot per step that has `dotPixel`
// these are the only points a connector line can attach to (see ConnectorLines.jsx)
// registerDotRef records each dot's DOM node so useConnectorPositions can
// read its on-screen position via getBoundingClientRect
export default function OnsenDots({ steps, activeStepId, registerDotRef }) {
  const dotSteps = steps.filter((s) => s.dotPixel)

  return (
    <svg className="map-layer map-layer--dots" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}>
      {dotSteps.map((step) => {
        const [x, y] = step.dotPixel
        const isActive = activeStepId === step.id
        return (
          <g
            key={step.id}
            ref={(node) => registerDotRef?.(step.id, node)}
            transform={`translate(${x}, ${y})`}
            className={`onsen-dot ${isActive ? 'is-active' : ''}`}
          >
            <circle r={26} className="onsen-dot__ring" />
            <circle r={9} className="onsen-dot__core" />
          </g>
        )
      })}
    </svg>
  )
}
