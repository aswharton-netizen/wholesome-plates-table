export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#FAF6EE', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 12px' }}>The Service</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#1C3A2A', margin: '0 0 16px', fontWeight: 400 }}>Decide how well you want to eat.</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.8, color: '#7A7060', maxWidth: 620, margin: '0 0 56px' }}>Every session is built around your household — your preferences, your dietary needs, your kitchen. We cook, we clean, and we leave you with a week of food that actually tastes like something.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, backgroundColor: '#C8DDD3' }}>
          <div style={{ backgroundColor: '#FAF6EE', padding: 32 }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A7060', margin: '0 0 8px' }}>01</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1C3A2A', margin: '0 0 16px', fontWeight: 400 }}>Single Session</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#7A7060', margin: '0 0 24px' }}>One cook, meals for 4–5 days, packaged and labeled. Your chef arrives with everything they need and leaves your kitchen exactly as they found it. Groceries are separate — you shop, or we do for a sourcing fee from $50.</p>
            <a href="#book" style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#B8892A', textDecoration: 'none' }}>Sessions from $350</a>
          </div>
          <div style={{ backgroundColor: '#FAF6EE', padding: 32, outline: '1.5px solid #B8892A', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 20, right: 20, backgroundColor: '#D4A843', color: '#1C3A2A', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 10px' }}>Most Popular</span>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A7060', margin: '0 0 8px' }}>02</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1C3A2A', margin: '0 0 16px', fontWeight: 400 }}>Weekly Membership</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#7A7060', margin: '0 0 24px' }}>Your chef comes every week. Meals cover 5 days. Branded glass containers travel with your chef — clean ones in, used ones out. Members receive a small seasonal extra every visit, left in a branded dish that stays in your home as long as you&rsquo;re a member.</p>
            <a href="#book" style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#B8892A', textDecoration: 'none' }}>Schedule a call →</a>
          </div>
          <div style={{ backgroundColor: '#FAF6EE', padding: 32 }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A7060', margin: '0 0 8px' }}>03</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1C3A2A', margin: '0 0 16px', fontWeight: 400 }}>2× Membership</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#7A7060', margin: '0 0 24px' }}>Two sessions per week, full 7-day coverage, a dedicated chef, priority booking, and occasional gifts that arrive without announcement. For households that take food seriously.</p>
            <a href="#book" style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#B8892A', textDecoration: 'none' }}>Schedule a call →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
