---
title: Gatsby Experiment on Linux
---

# Gatsby Experiment on Linux

I am trying the Gatsby based digital garden again. Yesterday, all the attempts failed at that. But, the reason seems to be the M1 based Mac. My assumption was it would worl on Linux and wanted to experiement with that. This is a learning log of my attempt.

I am trying now on my personal PC with ChromeOS. If this works, great. Else I will end the experiment and stay with Jekyll. **Update:** It did work, this exact wiki is a proof of that. Developement on M1 Mac is not that straightforward as I thought. 

- [x]  Setup npm and node
- [x]  Setup Gatsby
- [x]  Follow the [setup docs](https://github.com/mathieudutour/gatsby-digital-garden/) at the theme home.
- [x]  Create new gatsby project `gatsby new my-digital-garden [https://github.com/mathieudutour/gatsby-starter-digital-garden](https://github.com/mathieudutour/gatsby-starter-digital-garden)`
- [x]  Run `gatsby develop`. For some reason, this failed. A possible solution found [here](https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os).
- [x]  Test on local
- [x]  Pull Jekyll based wiki to linux.
- [x]  Take content and add them to gatsby based wiki
- [x]  Test on local and style/edit accordingly
- [x]  Push to git and setup on Netlify

A few references to follow up later.

[Using a Theme | Gatsby](https://www.gatsbyjs.com/tutorial/using-a-theme/)

[gatsby-garden | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-garden/)

[Built-in CSS Support | Gatsby](https://www.gatsbyjs.com/docs/how-to/styling/built-in-css/)

A few issues that I had to resolve along the ride.

- [https://stackoverflow.com/questions/61867606/webpackerror-typeerror-cannot-destructure-property](https://stackoverflow.com/questions/61867606/webpackerror-typeerror-cannot-destructure-property)
- [https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os](https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os)