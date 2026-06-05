const steps = [
  { num: '01', title: 'Tell us about your table', body: 'Complete our intake form. Household size, food preferences, grocery habits, and what a great week of eating looks like for you.' },
  { num: '02', title: '15-minute intro call', body: "A quick call to finalize your menu direction, confirm timing, and introduce you to your chef. Nothing is booked until you're ready." },
  { num: '03', title: 'Your chef arrives', body: '50% deposit holds your session. Your chef cooks, portions, labels, and stores everything. Then cleans the kitchen and leaves.' },
  { num: '04', title: 'Open the fridge', body: "Everything is labeled with reheating notes. The braises and grain bakes deepen as the week goes on. That's by design." },
]
export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#2C5240', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 12px' }}>How It Works</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#FDFAF5', margin: '0 0 56px', fontWeight: 400 }}>Four steps. Your fridge, full.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {steps.map(s => (
            <div key={s.num}>
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 32, color: '#D4A843', marginBottom: 16, lineHeight: 1 }}>{s.num}</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: '#FDFAF5', margin: '0 0 12px', lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#C8DDD3', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
