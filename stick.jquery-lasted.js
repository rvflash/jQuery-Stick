/**
 * jQuery Stick plugin
 * 
 * @desc Gives the ability to make any element on one page always stay visible
 * @author Hervé GOUCHET
 * @requires jQuery 1.4.3+
 * @licenses Creative Commons BY-SA 2.0
 * @see https://github.com/rvflash/jQuery-Stick
 */
;
(function($)
{
    var stick = function (elem)
    {
        $(elem).each(function()
        {
            var _self = $(this);

            if (null == _self.data('_stick')) {
                _self.data('_stick', _self.offset().top);
            }

            if (_self.data('_stick') < $(window).scrollTop()) {
                _self.css({
                    position: 'fixed',
                    top: 0,
                    width: _self.css('width'),
                    height: _self.css('height')
                });
            } else {
                _self.css('position', 'static');
            }
        });
    };

    $.fn.stick = function()
    {
        var _self = this;

        $(window).scroll(function() {
            stick(_self);
        });
        // Currently displayed
        $(window).scroll();
    };
})(jQuery);
