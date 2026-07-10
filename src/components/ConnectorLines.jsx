export default function ConnectorLines({ positions, activeStepId, connectorTargets }) {
  return (
    <svg className="connector-lines">
      {connectorTargets.map(({ mediaKey, stepId }) => {
        const pos = positions[mediaKey]
        if (!pos) return null

        const isActive = activeStepId === stepId
        // S-curve from the media card out to the map dot
        const midX = (pos.x1 + pos.x2) / 2
        const d = `M ${pos.x1} ${pos.y1} C ${midX} ${pos.y1}, ${midX} ${pos.y2}, ${pos.x2} ${pos.y2}`

        return (
          <path
            key={mediaKey}
            d={d}
            className={`connector-line ${isActive ? 'is-active' : ''}`}
          />
        )
      })}
    </svg>
  )
}
