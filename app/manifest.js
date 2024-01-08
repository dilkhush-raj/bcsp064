export default function manifest() {
  return {
    id: "/",
    name: "IGNOU TPS Patna",
    short_name: "IGNOU Patna",
    description: "IGNOU Patna",
    start_url: "/",
    display: "standalone",
    background_color: "#ddd",
    theme_color: "#222",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
      },
    ],
  screenshots: [
    {
      src: "/screenshot-desktop-wide.jpeg",
      sizes: "1693x857",
      form_factor: "wide"
    },
    {
      src: "/screenshot-mobile.jpeg",
      sizes: "469x833",
      // form_factor: "wide"  // or you can omit the form_factor property
    }
  ]
  };
}
