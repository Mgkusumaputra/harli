const siteURL = process.env.NEXT_PUBLIC_SITE_URL
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : siteURL

export const SITE_URL = siteURL;
export const BASE_URL = baseURL