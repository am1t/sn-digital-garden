---
title: Setting Up Digital Garden
tag: dev
---

# Setting Up Digital Garden

As part of the whole [[digital garden]] exploration, one big point was how do I publish the thoughts and make them available on the web? For example, as referenced in [[my first note]]. Here are some references that I found online.

I have setup this digital garden with Gatsby, using the theme by Mathieu Dutour. It is heavily inspired by [Andy's working notes](https://notes.andymatuschak.org/About_these_notes). Andy's notes is what I intend to explore the most. The source for this is available [at GitHub](https://github.com/am1t/sn-digital-garden). I also have captured the learning log of my [[Gatsby Experiment on Linux]], which is what worked finally.

A beauty is this was written first in Notion and exported to Obsidian. I like that.

---

Recently, I also added a slight styling to the wiki -- mainly fixed the blockquotes. Well, Gatsby makes it a lot tricker than I thought. I knew including a custom CSS would be easier. However, getting it added to the header is not. The [official styling guide](https://www.gatsbyjs.com/docs/styling/) for a Gatsby site didn't help me much. I believe one of the reason for that is I don't understand this platform fully yet. I built something with it without learning it first. I would like to fix that. But with the list of things to learn growing, I need to prioritize better.

Anyway back to adding external CSS to head, this [stacktrace discussion](https://stackoverflow.com/questions/46980140/how-to-use-global-css-style-sheet-includes-with-gatsbyjs) is finally what helped me. Here's what I had to do.

- Create a `custom.css` with the required styling blocks and add the file to `static` directory.
- Create a `gatsby-ssr.js` file in the root directory and regiatser a `setHeadComponents` adding a link for the style element.

This was enough to resolve the problem -- so funny it took me so long to arrive at the solution.

---

[A Non-Technical Guide To Set Up Digital Garden With Obsidian For Free](https://beingpax.medium.com/a-non-technical-guide-to-set-up-digital-garden-with-obsidian-for-free-62d6df75553c)

Uses Jekyll, Netlify and Obsidian. Possibly will follow this as part of my wish to get a digital garden setup. This was an easier setup -- I have got a running digital garden in place now. Idea is to explore this and see if this sticks.

One point that did fail was the local setup. My [[experiments with ruby]] aren't going well. Here's what I have written during my experiments.

> This language beffudles me. It breaks at so many points, especially versions and dependency management.

It failed again. Some dependency could not be installed and I am sure it has got something to do with some version mismatch between Ruby's version 

---  

Another brilliant reference is this - listing down all the possible options - Jekyll (linked above), [Eleventy](https://github.com/binyamin/eleventy-garden) and Gatsby. Gatsby should be tricker. I will explore Jekyll and Eleventy.

[How to set up your own digital garden](https://nesslabs.com/digital-garden-set-up)

Gatsby Garden is a brilliant theme, though. No doubt! And I love the [Gatsby Andy](https://github.com/aravindballa/gatsby-theme-andy) theme. Should I even go there? It looks to be a complex project. I have no clue how Gatsby works.  

A reference for getting started with Gatsby Andy.

https://www.youtube.com/watch?v=bf5Wj-1IHa4

**Update**: I did follow the starter video and tried to setup a gatsby based wiki. It is predominently the theme that inspired me. I wanted to have that. But the experiement failed, again mainly because there is a mismatch between the version of Gatsby that gets installed vs what the theme wants. Neither of the plugins used like the version that exists on my system. [[Versioning in dev]] is a terrible problem to solve.