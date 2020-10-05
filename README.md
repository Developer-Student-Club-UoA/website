# Google Developer Student Club - University of Auckland Website

<img src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_white.svg" width="90"> <img src="https://github.com/favicon.ico" width="40">

The commitment of this repository is to allow all the Developer Student Clubs to **generate a site** for their club in **less than 3 minutes**, performing a few simple steps.<br> <br>
**The management of this site does not require any kind of web development and backend competence.**

## How can I change the content of the site without knowing web languages?

To change the content of the site, go to the `content` folder located in the root of the project. In this folder there are several .yaml files in which you can modify the contents. 

## 🚀 Quick Start

To install you first need [node.js](https://nodejs.org/en/) on your machine.
You need to perform the following steps only the first time.
```bash
# Clone the repo
git clone https://github.com/Developer-Student-Club-UoA/website/
cd website

# Install dependencies
yarn

# Run on localhost:8000 (by default)
# and edit the /content folder
npm run develop
```

**that's it!**

## Deploy on Github Pages

```bash
npm run deploy
```

## Extra steps: How to add extra icons, links

#### Add a social link to teams.yaml

<details><summary>Click here to read  How to add extra icons </summary>
<p>
(for twitter, youtube, github, linkedin, you only need step 1)

Let's say I want to add the `telegram.org` as telegram link in the John Doe card.

Step 0: Check [here](https://fontawesome.com/icons?d=gallery&s=brands) if the icon is present

Step 1: Add a `telegram: telegram.org` entry in the John Doe social yaml field

Step 2: Add the following export in `./src/icons.js`:

```js
faTelegram as telegram
```

Step 3: In `./src/components/index/Teams.js`, add telegram:

```graphql
social {
	twitter
	github
	linkedin
	telegram
}
```

#### Add a social link to website footer

(for twitter, youtube, github, linkedin, you only need step 1)

Let's say I want to add the `telegram.org` as telegram link in the website footer.

Step 0: Check [here](https://fontawesome.com/icons?d=gallery&s=brands) if the icon is present

Step 1: Add a `telegram: telegram.org` entry in the siteMetadata.social field in `./gatsby-config.js`

Step 2: Add the following export in `./src/icons.js`:

```js
faTelegram as telegram
```

Step 3: In `./src/components/Footer.js`, add telegram:

```graphql
social {
	youtube
	github
	twitter
	telegram
}
```

</p>
</details>

## Recognition

Thanks to the unoffical Google DSC organisation for creating the [dsc-website-template](https://github.com/google-developer-student-club/dsc-website-template).
