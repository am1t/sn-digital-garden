---
title: Hugo Development Tips
---

Capturing some of the tips that I find while working on the Hugo themes. As always, no order. No explanation. Just references.

## Exclude posts with categories

Say you want to get a list of posts that do not have any of the categories in another list. This uses a function that only found out recently (*as of 2nd December, 2022*) called `symdiff`. Here's the code snippet that would work.

```
{{ $posts := where site.Pages "Type" "post" }} 
{{ $hidden_posts := where $posts "Params.categories" "intersect" (slice "dev" "tech") }} 
{{ $posts = $posts | symdiff $hidden_posts }}
```