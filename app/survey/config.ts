// Pre-filled link to the Teleba Agent Survey Google Form.
// Get it from the "Location link" line the form script logs after it runs:
// a Google Forms URL that ends in TELEBA_LOCATION. Paste it between the quotes.
// It can also be set as NEXT_PUBLIC_SURVEY_FORM_URL in Vercel instead.
export const SURVEY_FORM_URL =
  process.env.NEXT_PUBLIC_SURVEY_FORM_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLSejqoYmecXOKuVIF0kfRoDpQEmIzlchI96SIm8DzdLadpA1vA/viewform?usp=pp_url&entry.622159131=TELEBA_LOCATION";

// The placeholder in SURVEY_FORM_URL that is replaced with the coordinates.
export const LOCATION_PLACEHOLDER = "TELEBA_LOCATION";

// Form fields pre-filled on teleba.io/survey/enumerator. These IDs change if
// the form is rebuilt: copy the new ones from the "Enumerator link" line the
// form script logs.
export const INTERVIEWER_NAME_ENTRY = "entry.456329883";
export const SURVEY_MODE_ENTRY = "entry.2135718706";
export const IN_PERSON_CHOICE = "In person with an interviewer";

// "Reference ID (filled automatically, do not change)": links a response to
// the survey start the Teleba API logged.
export const REFERENCE_ID_ENTRY = "entry.1989797680";

// The Teleba API that logs each survey start and issues its reference ID.
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.zesha.app";
