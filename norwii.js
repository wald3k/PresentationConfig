
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


    // Configuration for Norwii N95s Presenter
    Reveal.configure({
    keyboard: {
        37: 'prev', // left
        38: 'left', //Map ArrowUp to prev
        39: 'next', // Map ArrowRight to down
        40: 'right', // Map ArrowDown to next
    }
    })
