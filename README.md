# Autonexa AI — static website

A responsive, client-facing AI services website built with plain HTML, CSS and browser JavaScript. No package manager or build step is required.

## Run locally

Open `index.html` in a browser, or serve this directory using any static web server.

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository `PaRaDoX-xen/HR-Automation`.
3. Select **Other** as the framework preset (or leave it as detected).
4. Leave the build command blank and set the output directory to `.` if Vercel requests one.
5. Click **Deploy**.

This is a static HTML site; it has no server build step. Vercel must be connected to the GitHub account and the first deployment authorized from the Vercel dashboard.

## Included

- Responsive navigation and page sections
- Six service cards with category filters
- Multi-agentic, multi-modal, LLM-agnostic, and integration capabilities
- Engagement process and company positioning sections
- Front-end contact form validation and a demonstration success screen

## Before using this for production leads

The contact form is currently front-end only: it does not send or store enquiries. Connect it to a verified form endpoint, serverless function, email service, or CRM before publishing as a live lead-generation site. No secrets or access tokens should be stored in client-side files.
