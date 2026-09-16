export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function readableError(body, fallback) {
  const value = body?.detail ?? body?.message;
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.map((item) => item?.msg || item?.message || String(item)).join("; ");
  }
  if (value && typeof value === "object") {
    return value.message || value.msg || JSON.stringify(value);
  }
  return fallback;
}

export async function sendScan({ establishment, location, inspector, photos }) {
  const formData = new FormData();
  formData.append("establishment_name", establishment);
  formData.append("location", location);
  formData.append("inspector_name", inspector);

  photos.forEach((item, index) => {
    formData.append("files", item.file, item.file.name);
    formData.append("photo_types", item.type);
    formData.append("photo_indexes", String(index + 1));
  });

  const response = await fetch(`${API_BASE_URL}/scan`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    let body = {};
    try { body = await response.json(); } catch {}
    throw new Error(readableError(body, `Backend request failed (${response.status}).`));
  }

  return response.json();
}
