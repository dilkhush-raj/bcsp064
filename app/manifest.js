export default function manifest() {
  return {
    id: "/",
    name: "IGNOU Patna Student Corner",
    short_name: "IPSC",
    description: "IGNOU Patna",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    orientation: "portrait",
    icons: [
      {
        src: "/logo.png",
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
    }
  ]
  };
}
