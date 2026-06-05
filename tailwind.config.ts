import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest:'#1C3A2A', forest2:'#2C5240', gold:'#B8892A', goldLight:'#D4A843',
        cream:'#FAF6EE', warm:'#F0EBE0', ink:'#1A1A18', stone:'#7A7060', sage:'#C8DDD3', white:'#FDFAF5',
      },
      fontFamily: { serif:['Georgia','Times New Roman','serif'], sans:['Arial','Helvetica','sans-serif'] },
    },
  },
  plugins: [],
}
export default config
