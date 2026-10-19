// Pre-filled link to the Teleba Agent Survey Google Form.
// Get it from the "Location link" line the form script logs after it runs:
// a Google Forms URL that ends in TELEBA_LOCATION. Paste it between the quotes.
// It can also be set as NEXT_PUBLIC_SURVEY_FORM_URL in Vercel instead.
export const SURVEY_FORM_URL =
  process.env.NEXT_PUBLIC_SURVEY_FORM_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLSejqoYmecXOKuVIF0kfRoDpQEmIzlchI96SIm8DzdLadpA1vA/viewform?usp=pp_url&entry.622159131=TELEBA_LOCATION";

// The placeholder in SURVEY_FORM_URL that is replaced with the coordinates.
export const LOCATION_PLACEHOLDER = "TELEBA_LOCATION";
