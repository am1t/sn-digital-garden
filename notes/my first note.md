---
title: my first note
---

# My First Note!

This is my first note. I have set it up in my [`notes/`](https://github.com/am1t/sn-digital-garden/tree/main/notes) directory. This note is my playground around what can be done with Obsidian and the digital gardens. This possibly has nothing of interest for anyone who reads this. But for me, This matters a lot. I am learning as I work the system. For me, my [[digital garden setup]] is a good place to start.

This space is where I plan to share my notes across all my projects or my thoughts on what I read or watch. Most of what I write here would hardly have any structured, these are thoughts as they arrive. <mark>So expect some broken links for things I am yet to explore or sentences that make no sense to you.</mark> More than you, the words on this site is for my eyes.

### Link syntax

To link to another note, you can use multiple syntaxes. The following four use the "double-bracket" notation ([view the Markdown source file](https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/master/_notes/your-first-note.md#link-syntax) to see the underlying syntax).

- ~~Using the note title: [[a note about cats]]~~ Doesn't work with Gatsby
- Using the note's filename: [[cats]]
- ~~Using the note's title, with a label: [[A note about cats|link to the note about cats using the note title]]~~ Doesn't work with Gatsby
- Using the note's filename, with a label: [[cats|link to the note about cats using the note's filename]]

You can organize notes in subdirectories and link them normally. For example, the links above all point to the `notes/animals/cats.md` file.

So what if I want to link to [[consistency]]. Nice! It added it! 

And what about [[move your body every day]]. Brilliant!

~~In all cases, if the double-bracket link does not point to a valid note, the double brackets will still be shown, like this: [[there is no note that matches this link]].~~ Doesn't work yet!

Alternatively, you can use regular [Markdown syntax](https://www.markdownguide.org/getting-started/) for links, with a relative link to the other note, like this: [this is a Markdown link to the note about cats](/cats){: .internal-link}. Don't forget to use the `.internal-link` class to make sure the link is styled as an internal link (without the little arrow).

Since the Web is all about HTML, you can always use plain HTML if you want, like this: <a class="internal-link" href="/cats">This is a link to the note about cats with HTML</a>.

Of course, you can also link to external websites, like this: [this is a link to Wikipedia](https://wikipedia.org/). Again, you can use plain HTML if you prefer. Footnotes are also supported and will be treated like internal links.[^1] You can point to other notes in your footnotes.[^2]

[^1]: This is a footnote. For more information about using footnotes, check out the [Markdown Guide](https://www.markdownguide.org/extended-syntax/#footnotes).
[^2]: This is another footnote that links to the note about [[cats]]. You may also point to [[notes that do not exist]] if you wish.

### Automatic bi-directional links

Notice in the "Notes mentioning this note" section that there is another note linking to this note. This is a bi-directional link, and those are automatically created when you create links to other notes.

### Link previews

If you're on a device with mouse support, try hovering your mouse on internal links to preview the notes: [[cats|notes about cat]].

Links that have been previewed will be cached to avoid redundant requests.

### Images and other Markdown goodies

Finally, because you have the full power of Markdown in this template, you can use regular Markdown syntax for various formatting options.

Lists work as expected, here's the unordered list.

- List element A
- List element B
- List element C

If you'd like to quote other people, consider using quote blocks. Quote blocks aren't styled yet. So idea how to style with Gatsby.

> Lorem ipsum dolor sit amet

You can also <mark>highlight some content</mark> by wrapping it with `<mark>`.

### Code syntax highlighting

You can add code blocks with full syntax color highlighting by wrapping code snippet in triple backticks and specifying the type of the code (`js`, `rb`, `sh`, etc.):

```js
// Here's a bit of JavaScript:
console.log('hello!')
```
And now some Ruby.

```rb
def foo(bar)
  "baz"
end
```


```sh
$ cat /dev/urandom | grep "the answer to life" # shell scripts look nice too
```


### Next steps

Do I want to style this place? May be, I am not too sure. But I want to use this place for capturing my thoughts for sure. I will keep updating things in Obsidian and push them to the space.

[ ] Minimal styling improvement for  consistency
[ ] Starting moving in content

Idea is to move, have fun, and learn new something every day! ✌️
