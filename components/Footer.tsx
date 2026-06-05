export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C3A2A', padding: '40px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D4A843' }}>Wholesome Plates Table</div>
        <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://table.wholesomeplatescatering.com" style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(200,221,211,0.55)', textDecoration: 'none' }}>table.wholesomeplatescatering.com</a>
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(200,221,211,0.3)' }}>Wholesome Plates To-Go — coming soon</span>
          <a href="https://wholesomeplatescatering.com" style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(200,221,211,0.55)', textDecoration: 'none' }}>Catering</a>
        </nav>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(200,221,211,0.3)', margin: 0 }}>&copy; 2026 Wholesome Plates Catering LLC</p>
      </div>
    </footer>
  )
}
