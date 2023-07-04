# Norwii settings for Reveal.js
This should enable navigation with left/right & top/down as well as spolight functionality with Norwii controller.
## Markdown Spotlight plugin
[Follow instructions for getting ](https://github.com/denniskniep/reveal.js-plugin-spotlight)

## Mapping keys for Norwii Presenter
```index.html

... PUT THIS INTO index.html file inside <script> tag ...

// Remap keys
// https://stackoverflow.com/questions/19626684/how-can-i-make-reveal-js-work-with-a-presenter-remote
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "p") {
    event.preventDefault();
          // Create and dispatch a new keyboard event with only the "p" key
          var newEvent = new KeyboardEvent("keydown", {
          key: "ArrowLeft",
          code: "ArrowLeft",
          keyCode: 37,
          ctrlKey: false,
          altKey: false,
          shiftKey: false,
          metaKey: false,
          repeat: false
        });

    document.dispatchEvent(newEvent);
  }
  else if( event.key === "e" ){
    event.preventDefault();
          // Create and dispatch a new keyboard event with only the "p" key
          var newEvent = new KeyboardEvent("keydown", {
          key: "ArrowRight",
          code: "ArrowRight",
          keyCode: 39,
          ctrlKey: false,
          altKey: false,
          shiftKey: false,
          metaKey: false,
          repeat: false
        });

    document.dispatchEvent(newEvent);
  }
});


...
		Reveal.initialize({
      // For navigation with Remote Presenter
      navigationMode: 'default',
      dependencies: [
          { src: 'plugin/spotlight/spotlight.js' },
        ],
      spotlight: {
      
              // size of the spotlight
              size: 120,
      
              // true: Locks the mouse pointer inside the presentation
              // there is by design (Pointer Lock API) no spotlightCursor and presentingCursor
              // displayed regardless of the configured values
              lockPointerInsideCanvas: true,
      
              // toggle spotlight by holding down the mouse key
              toggleSpotlightOnMouseDown: true,
      
              // the keyCode pressed and held to turn on spotlight, disabled when set to false
              // Problems with this config? Maybe your touchpad is disabled on keypress?
              spotlightOnKeyPressAndHold: false,
      
              // choose the cursor when spotlight is on. Maybe "crosshair"?
              spotlightCursor: 'none',
      
              // choose the cursor when spotlight is off and in presentation mode. Maybe "default"?
              presentingCursor: 'none',
      
              // true: initially in presentation mode, will also be ture if this is not set and toggleSpotlightOnMouseDown is true
              initialPresentationMode: true,
      
              // true: disable selecting in presentation mode
              disablingUserSelect: true,
      
              // set to a number as transition duration in ms to enable fade in and out, disabled when set to false
              fadeInAndOut: 50,
      
              // enable pointer mode
              useAsPointer: false,
      
              // pointer color (If pointer mode enabled)
              pointerColor: 'red'
              },
              keyboard: {
              // alternative to toggleSpotlightOnMouseDown:
              // toggle spotlight by pressing key 'top on Norwii'
              // 80: function() { RevealSpotlight.toggleSpotlight() },
      
              // enter/leave presentation mode by pressing key 'p'
              // 80: function() {RevealSpotlight.togglePresentationMode();},
          },

})

...


    // Configuration for Norwii N95s Presenter
    Reveal.configure({
    keyboard: {
        37: 'prev', // left
        38: 'left', //Map ArrowUp to prev
        39: 'next', // Map ArrowRight to down
        40: 'right', // Map ArrowDown to next
    }
})


```
