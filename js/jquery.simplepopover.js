(function () {

    "use strict";

    var window = window || this,
        $      = window.jQuery;

    var isUndefined = function (obj) {
        return typeof obj === 'undefined' || obj === null;
    };

    /**
     * A JavaScript plugin that displays a popover on a hovered DOM element.
     *
     * @param options: an object with the following options:
     *
     *     content: An HTML string that represent what content should be inside
     *         the popover.
     *
     *     padding: A number that represents how much padding that you would
     *          want in the popover's white area.
     *
     *     position: the popover's orientation. A string representing the
     *         popover's orientation. Accepts either the values "right", "left",
     *         "top", or "bottom". Defaults to "top".
     *
     * @returns the DOM element being acted upon, as a jQuery object.
     */
    $.fn.simplePopover = function (options) {
        $.each(this, function (index, value) {
            var $this = $(value),
                template = '<div class="simple-popover"><div class="content"></div><div class="arrow"></div></div>',
                $popover = $(template),
                self = $this;

            $this.hover(function () {
                var left, top;

                if (isUndefined(options.content)) {
                    $popover.find('.content').html(self.data('content'));
                } else {
                    $popover.find('.content').html(options.content);
                }

                $('body').append($popover);

                if (typeof options.content === options.padding !== null) {
                    $popover.find('.content').css({ 'padding': options.padding + 'px' });
                }

                if (options.position === 'right') {
                    left = self.width() + self.offset().left + 10;
                    top  = Math.floor((self.outerHeight(true) - $popover.outerHeight(true)) / 2) + self.offset().top;

                    $popover.css({
                        top: top + 'px',
                        left: left + 'px'
                    });

                    $popover.find('.arrow').css({
                        'margin-left': '0',
                        'margin-top': '-5px',
                        'border-top': '5px solid transparent',
                        'border-bottom': '5px solid transparent',
                        'border-right': '5px solid black',
                        'left': '-10px',
                        'top': '50%'
                    });
                } else if (options.position === 'left') {
                    left = self.offset().left - $popover.outerWidth(true) - 10;
                    top = Math.floor((self.outerHeight(true) - $popover.outerHeight(true)) / 2) + self.offset().top;

                    $popover.css({
                        top: top + 'px',
                        left: left + 'px'
                    });

                    $popover.find('.arrow').css({
                        'margin-left': '0',
                        'margin-top': '-5px',
                        'border-top': '5px solid transparent',
                        'border-bottom': '5px solid transparent',
                        'border-left': '5px solid black',
                        'left': $popover.outerWidth(true) + 'px',
                        'top': '50%'
                    });
                } else if (options.position === 'bottom') {
                    left = (Math.floor((self.width() - $popover.width()) / 2) + self.offset().left);

                    $popover.find('.arrow').css({
                        'border-top': 'none',
                        'border-left': "5px solid transparent",
                        'border-right': '5px solid transparent',
                        'border-bottom': '5px solid black',
                        'top': '-5px'
                    });

                    if (left < 0) {
                        left = self.offset().left;
                        $popover.find('.arrow').css({ 'left': '20px' });
                    }

                    if (left + $popover.outerWidth(true) > $(window).width()) {
                        left = self.offset().left - $popover.outerWidth(true) + self.width();
                        $popover.find('.arrow').css({ 'left': $popover.outerWidth(true) - 20 + 'px' });
                    }

                    $popover.css({
                        top: (self.offset().top + self.height(true) + 10) + 'px',
                        left: left + 'px'
                    });
                } else {
                    left = (Math.floor((self.width() - $popover.width()) / 2) + self.offset().left);

                    if (left < 0) {
                        left = self.offset().left;
                        $popover.find('.arrow').css({ 'left': '20px' });
                    }

                    if (left + $popover.outerWidth(true) > $(window).width()) {
                        left = self.offset().left - $popover.outerWidth(true) + self.width();
                        $popover.find('.arrow').css({ 'left': $popover.outerWidth(true) - 20 + 'px' });
                    }

                    $popover.css({
                        top: (self.offset().top - $popover.outerHeight(true) - 10) + 'px',
                        left: left + 'px'
                    });
                }

                $popover.fadeIn(100);

            }, function () {
                $popover.fadeOut(100, function () {
                    $popover.remove();
                    $popover = $(template);
                });
            });
        });

        return this;
    };

}.call(this));
