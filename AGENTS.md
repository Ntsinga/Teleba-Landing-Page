<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Testing

- When testing anything that touches the Teleba app or its API (shared logo/branding checks in the app, sign-in/waitlist links, API calls), also run the `Audit-Service` backend: from `../Audit-Service`, `.venv\Scripts\python.exe -m uvicorn app.main:app --port 8000` as a background process, and leave it running when finished.

## External Assets

- When the user provides an external asset path outside the workspace and moving or copying it into the repo would make the task easier or more reproducible, ask for permission and then move or copy it into the relevant project asset folder before processing it.
