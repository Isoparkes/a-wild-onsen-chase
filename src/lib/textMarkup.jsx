// Shared by StepText.jsx (step title/text) and MediaCard.jsx (captions):
//   [link text](url)  -> <a>
//   *word or phrase*   -> <em> (italics)
// Everything else in the string stays plain text.
const MARKUP_PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g

export function renderTextWithMarkup(text) {
  if (!text) return text

  const parts = []
  let lastIndex = 0
  let match
  let key = 0

  while ((match = MARKUP_PATTERN.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, linkText, href, italicText] = match
    if (italicText !== undefined) {
      parts.push(<em key={key++}>{italicText}</em>)
    } else {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )
    }
    lastIndex = MARKUP_PATTERN.lastIndex
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts
}
