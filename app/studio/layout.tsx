import { metadata as studioMetadata, viewport } from 'next-sanity/studio'

export { studioMetadata as metadata, viewport }

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


