# Simple Popover

This serves as an alternative to Twitter Bootstrap's Popover plugin.

## How to use

This is, afterall, a jQuery plugin. You are going to have to include jQuery. Once done, you can can simply call the `simplePopover` method, and it should work.

    $('myobject').simplePopover({ content: "Hello, World!" });

And boom! Should be ready.

Of course, you can pass additional options to the `simplePopover` method. And here they are:

    {
        // An HTML string that represent what content should be inside the
        // popover.
        content: "<p>Hello, World!<p>"

        // A number that represents how much padding that you would want in the
        // popover's white area.
        padding: 0,

        // A string representing the popover's orientation. Accepts either the
        // values "right", "left", "top", or "bottom". Defaults to "top".
        position: "top"
    }
