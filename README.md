# Cypress Element Not Found reproduction

This repo demonstrates an issue where an element being re-rendered very quickly after a page loading causes Cypress to not find the element, even though the element because the element was removed from the DOM and then recreated within 2ms.

Please note that this may be expected behavior from Cypress:

1. Element A exists on page load
1. Cypress finds element A
1. Element A is removed from the DOM
1. Element B, which is identical to element A is added to the DOM
1. Cypress attempts to click Element A, and fails, since it was removed from the DOM

User expects Cypress to have discovered that Element B is identical to element A, OR that Cypress would have automatically waited until the DOM settled, however
it may be up to the User to indicate to Cypress that the DOM has settled.

See `App.tsx` and `app_spec.ts`.

How to reproduce
1. `npm install`
1. `npm run cypress:run`

# To Green the failing test:
in `App.tsx`, increase `intervalMs` to `50`