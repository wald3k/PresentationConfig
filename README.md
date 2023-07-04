# Norwii settings for Reveal.js
This should enable navigation with left/right & top/down as well as spolight functionality with Norwii controller.
## Markdown Spotlight plugin
[Follow instructions for getting ](https://github.com/denniskniep/reveal.js-plugin-spotlight)

## Install Norwii plugin for Reval.js
copy contents of `norwii.js` into `plugin/norwii/norwii.js`

```
Reveal.initialize({
	// ...
	dependencies: [
		// ... 		
		{ src: 'plugin/norwii/norwii.js' },
		// ... 
	]
});
```
