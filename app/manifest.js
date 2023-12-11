export default function manifest() {
    return {
      name: 'TPS IGNOU Patna',
      short_name: 'IGNOU Patna',
      description: 'Next.js App',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      orientation: "portrait",
      icons: [
        {
          src: "/vercel.svg",
          sizes: "71x71"
        },
      ]
    }
  }