export function videoId(url = "") {
  const m = url.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : "";
}

export function thumbnailFor(project) {
  if (project.img) return project.img;
  const id = videoId(project.yt);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}
