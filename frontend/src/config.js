/**
 * ============================================================
 * DEALERSHIP CONFIGURATION — swap these values per client
 * ============================================================
 * All placeholders use [BRACKET] notation so a find-replace
 * across the project will catch anything missed here.
 * ============================================================
 */

export const DEALERSHIP_NAME   = 'Your Dealership Name'
export const TAGLINE           = 'Your Tagline Here'
export const PHONE             = '(555) 555-5555'
export const EMAIL             = 'stepdugas@gmail.com'
export const ADDRESS           = '123 Main Street'
export const CITY_STATE_ZIP    = 'City, State ZIP'
export const LOGO_URL          = ''

// Business hours — displayed in header, footer, contact page
export const HOURS = {
  monday:    '9:00 AM – 6:00 PM',
  tuesday:   '9:00 AM – 6:00 PM',
  wednesday: '9:00 AM – 6:00 PM',
  thursday:  '9:00 AM – 6:00 PM',
  friday:    '9:00 AM – 6:00 PM',
  saturday:  '10:00 AM – 4:00 PM',
  sunday:    'Closed',
}

// Google Maps embed URL — paste the embed src from Google Maps
export const GOOGLE_MAPS_EMBED_URL = ''

// Social media — set to null to hide icon
export const FACEBOOK_URL  = null
export const INSTAGRAM_URL = null
export const TWITTER_URL   = null

// Primary brand color (CSS hex) — also update tailwind.config.js > primary
export const PRIMARY_COLOR = '#3b82f6'

// Public site URL — used for canonical links, OG tags, and sitemap
// Set VITE_SITE_URL in Netlify env vars (no trailing slash)
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://custom-dealership-website.netlify.app'

// Backend API base URL — update for production
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

// Cloudinary config — set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in Netlify env vars
export const CLOUDINARY_CLOUD_NAME    = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME    || '[CLOUDINARY_CLOUD_NAME]'
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '[CLOUDINARY_UPLOAD_PRESET]'
