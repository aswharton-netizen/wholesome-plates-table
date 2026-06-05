'use client'
import { useState } from 'react'
interface Photo { src: string; caption: string }
export default function PhotoStrip({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<Photo | null>(null)
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, backgroundColor: '#C8DDD3' }}>
        {photos.map(photo => (
          <button key={photo.src} onClick={() => setLightbox(photo)} style={{ display: 'block', padding: 0, border: 'none', cursor: 'pointer', background: 'none' }}>
            <img src={photo.src} alt={photo.caption} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
          </button>
        ))}
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} tabIndex={0} onKeyDown={e => e.key === 'Escape' && setLightbox(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'rgba(10,20,14,0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', color: '#C8DDD3', fontSize: 28, cursor: 'pointer', lineHeight: 1 }} aria-label="Close">×</button>
          <img src={lightbox.src} alt={lightbox.caption} onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
          <p onClick={e => e.stopPropagation()} style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#C8DDD3', marginTop: 16, textAlign: 'center', maxWidth: 500, lineHeight: 1.5 }}>{lightbox.caption}</p>
        </div>
      )}
    </>
  )
}
