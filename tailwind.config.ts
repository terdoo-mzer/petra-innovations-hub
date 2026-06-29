import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'page': '#050912',
        'card': '#07091A',
        'blue-primary': '#3B6FFF',
        'blue-dark': '#2950D4',
        'blue-light': '#7B9FFF',
        'text-primary': '#EFF2F9',
        'text-muted': '#94A3B8',
        'text-subtle': '#64748B',
        'text-faint': '#4A5D7A',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
} satisfies Config
