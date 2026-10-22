Hey! It's Sina. You made it this far. That's awesome.

I made this README file to show you how to use this code and see all it can do.


# Switching between the video and div demos
The demo has two JavaScript files: one for video elements (on by default), and one for div elements. To switch versions, update both the HTML elements and the script reference in the page. Do not load both scripts together.

## Video version

- Keep the `<video>` elements in the HTML, with the selectors expected by the video script.
- Load the video JavaScript file and remove the div script reference.

```html
<video class="video" muted playsinline>
	<source src="path/to/video.mp4" type="video/mp4">
</video>
<script src="videos.js" defer></script>
```

## Div version

- Comment out the `<video>` tags.
- Uncomment the `<div>` cards
- Load the div JavaScript file and remove the video script reference.

```html
<div class="container">
  <div id="div1" class="card">1</div>
  <div id="div2" class="card">2</div>
  <div id="div3" class="card">3</div>
</div>
<script src="divs.js" defer></script>
```

The filenames and class names in these examples are illustrative. Use the actual filenames and selectors in this project, and make sure the selected script queries the elements present in the HTML. The `defer` attribute runs the script after the document has been parsed.

The `styles.css` has all the styles you need to render the pages just like what I demonstrated in the video.

Good luck!