import { renderTextWithMarkup } from '../lib/textMarkup.jsx'

// media.caption goes through renderTextWithMarkup too, so [links](url) and
// *italics* work in captions
export default function MediaCard({ media, mediaRef, compact }) {
  if (!media) return null

  return (
    <div className={`media-card ${compact ? 'media-card--compact' : ''}`} ref={mediaRef}>
      {media.src ? (
        media.type === 'video' ? (
          <video
            className="media-card__media"
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img className="media-card__media" src={media.src} alt={media.caption || ''} />
        )
      ) : (
        <div className="media-card__placeholder">
          <span className="media-card__icon" aria-hidden="true">
            {media.type === 'video' ? (
              <svg viewBox="0 0 24 24" width="28" height="28">
                <polygon points="9,7 18,12 9,17" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="9" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 17l5-4 4 3 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </span>
          <p>{media.type === 'video' ? 'Video placeholder' : 'Photo placeholder'}</p>
        </div>
      )}
      {media.caption && (
        <p className="media-card__caption">{renderTextWithMarkup(media.caption)}</p>
      )}
    </div>
  )
}
