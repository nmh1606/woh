$.fn.textShuffle = function (options) {
    options = $.extend(
        {bindElement: this},
        options
    );

    new TextShuffle(options);
    return this;
};
