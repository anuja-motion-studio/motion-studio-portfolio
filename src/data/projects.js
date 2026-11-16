/* ===== EDIT YOUR PROJECTS HERE =====
   yt:    YouTube link (the thumbnail loads automatically)
   img:   optional – your own image, e.g. "/images/brand-film.jpg" placed in /public/images
          (overrides the YouTube thumbnail)
   shape: "wide" (16:9 video), "tall" (Shorts / Reels 9:16) or "square" (1:1)
   type:  "Video" or "Motion" (used by the filter buttons) */
const DEMO = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export const projects = [
  { id: 1, title: "Brand film – Project one", type: "Video", shape: "wide", yt: DEMO, img: "" },
  { id: 2, title: "Logo animation – Project two", type: "Motion", shape: "tall", yt: DEMO, img: "" },
  { id: 3, title: "Product ad – Project three", type: "Video", shape: "wide", yt: DEMO, img: "" },
  { id: 4, title: "Explainer – Project four", type: "Motion", shape: "square", yt: DEMO, img: "" },
  { id: 5, title: "Reel – Project five", type: "Video", shape: "tall", yt: DEMO, img: "" },
  { id: 6, title: "Titles – Project six", type: "Motion", shape: "wide", yt: DEMO, img: "" },
];

export const filters = [
  { value: "All", label: "All" },
  { value: "Video", label: "Video" },
  { value: "Motion", label: "Motion graphics" },
];

export const typeLabel = { Video: "Video editing", Motion: "Motion graphics" };
export const aspectRatio = { wide: "16/9", tall: "9/16", square: "1/1" };
// relative heights used to balance the masonry columns
export const shapeHeight = { wide: 0.5625, tall: 1.78, square: 1 };
export const gradients = [
  ["#5b3df5", "#ff3d86"],
  ["#00b89c", "#5b3df5"],
  ["#ff3d86", "#ffb400"],
  ["#1d4ed8", "#00d4a8"],
];
