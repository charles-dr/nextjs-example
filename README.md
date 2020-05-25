# Next.JS app setup

Setup for the NextJS app is relatively simple.

Install modules:
`yarn`

You will need to configure the API_URL and Stripe public key found within the project.

Make sure to add `/api/v1/` to end of URL

For the API_URL, navigate to the `next.config.js` file and modify within the `env` property of the module exports.
For the Stripe public key, navigate to the `pages/pricing/index.jsx` file and find the `stripePromise` variable within the PricingPage component. Replace the supplied public key with your public key found in the Stripe dashboard.

Run development environment/build for production:
`yarn dev`
`yarn build`

Production build will be exported to a static build directory at the root of the project.

