import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tejasvi Interiors",
    short_name: "Tejasvi",
    description: "Luxury interior design and execution.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#161514"
  };
}
