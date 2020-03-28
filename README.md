# Piotr Morawski Portfolio

Mainly developed to try out and learn new technologies. Big chunks of FE side has been reused from [old portfolio](https://github.com/morawskiOZ/Portfolio) (my early days of programming).

## Intro

Gatsby generated website deployed on Netlify with CircleCI CI process.One push automatic deployments linked with Github repo. You can see it live [here](https://morawski.online).

Mailing server has been done with Netlify (Lambda) function.

For testing - Jest, also built in the CI process.

Strong emphasis on CEO, performance and accessibility. Aiming for 100 in each section of Lighthouse audit.

Hosted through Cloudflare on GoDaddy. Amazon S3 CDN for images.

## Technologies

- Gatsby
- React (TypeScript ans SCSS)
- Netlify (deployment and lambda functions)
- CircleCi
- Jest
- Cloudflare
- Amazon S3 bucket CDN

#### Backlog

- CDN Images -  performance
- SEO 100  - lighthouse score shows some improvements needed
- user experience with image overlay, once click should go to live examples (consider just on desktop)
- bigger buttons on project overlay - lighthouse score shows some improvements needed
- Styling migration to JSS
- Styling needs refactoring, lots of bad quality, repetitive code,
- Move content to Headless CMS like Contentful
- automate with bash script build/npm i for each function


#### Bugs

- Sometimes there is flickering on mobile probably caused by scrolling libraries
