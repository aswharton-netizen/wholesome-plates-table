const items = [
  { category: 'Southern', name: 'Smothered turkey legs', desc: "Marlene's signature. Slow-cooked until the meat falls and the gravy deepens. Better every day it sits." },
  { category: 'Braise', name: 'Citrus-braised pork tacos', desc: 'Cochinita pibil-inspired. Pork shoulder braised with orange, chipotle, and warm spices. Avocado crema, pickled onion, cotija, charred corn tortilla.' },
  { category: 'Grains', name: 'Truffle mushroom farro', desc: 'Finished like a risotto — maitake, Parmesan, lemon. Creamy but with chew. Holds all week.' },
  { category: 'Asian-inspired', name: 'Bún thịt nướng', desc: 'Vietnamese grilled pork bowl. Marinated overnight, caramelized on high heat, served with nước chấm and pickled daikon.' },
  { category: 'Smoked', name: 'Pitmaster pulled pork', desc: "Mike's method. Bark built low and slow, pulled clean, portioned for the week." },
  { category: 'Braise', name: 'Short rib ragu with porcini', desc: 'Beef braised with anchovies, five-spice, and dried mushrooms. Over polenta or pasta.' },
]
export default function MenuSection() {
  return (
    <section id="menu" style={{ backgroundColor: '#FAF6EE', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 12px' }}>Sample Menus</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#1C3A2A', margin: '0 0 16px', fontWeight: 400 }}>A taste of what a session looks like.</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.8, color: '#7A7060', maxWidth: 600, margin: '0 0 56px' }}>Your menu is built around your preferences every week. These examples are drawn from our current rotation across all four chefs.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, backgroundColor: '#C8DDD3' }}>
          {items.map(item => (
            <div key={item.name} style={{ backgroundColor: '#FAF6EE', padding: 24 }}>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 8px' }}>{item.category}</p>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: '#1C3A2A', margin: '0 0 10px', fontWeight: 400 }}>{item.name}</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#7A7060', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
