const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL = siteURL;
export const BASE_URL =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
    ? "http://[::1]:3000"
    : siteURL;
