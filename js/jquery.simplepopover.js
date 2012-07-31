(function ($) {

    /**
     * A JavaScript plugin that displays a popover on a hovered DOM element.
     *
     * @param content: the content to display in the popover.
     * @returns the DOM element being acted upon, as a jQuery object.
     */
    $.fn.simplePopover = function (content) {
        var template = '<div class="simple-popover"><div class="content"></div><div class="arrow"></div></div>',
            $popover = $(template),
            self = this;

        this.hover(function () {
            $popover.find('.content').html(content);
            $('body').append($popover);
            $popover.css({
                'top': (self.offset().top - $popover.outerHeight(true) - 10) + 'px',
                'left': ( Math.floor((self.width() - $popover.width()) / 2) + self.offset().left) + 'px'
            });

            $popover.fadeIn(100);
        }, function () {
            $popover.fadeOut(100, function () {
                $popover.remove();
                $popover = $(template);
            });
        });

        return this;
    };

}.call(this, jQuery));
