export default function robots() {
  const baseUrl = "https://fixbuginfotech.online";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
