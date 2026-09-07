export interface VisualGallery {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: 'ship' | 'plane';
}

export const visualGalleries: VisualGallery[] = [
  {
    id: "ship-spotting",
    title: "Ship Spotting Gallery",
    description: "Stalking steel giants with a lens. Served directly from my self-hosted Immich.",
    url: "https://photos.sanchez.ph/s/ship-spotting",
    icon: "ship",
  },
  {
    id: "plane-spotting",
    title: "Plane Spotting Gallery",
    description: "Chasing winged wonders across the sky. Served directly from my self-hosted Immich.",
    url: "https://photos.sanchez.ph/s/plane-spotting",
    icon: "plane",
  },
];
