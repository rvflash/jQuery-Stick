/**
 * jQuery Stick plugin
 * 
 * @desc Gives the ability to make any element on one page always stay visible
 * @author Hervé GOUCHET
 * @requires jQuery 1.4.3+
 * @licenses Creative Commons BY-SA 2.0
 * @see https://github.com/rvflash/jQuery-Stick
 * @version 1.0.1
 */
;
(function($)
{
    var _defaults = {
        latency: 250,
        enable: false
    };

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

    $.fn.stick = function(settings)
    {
        var _options;
        if ('undefined' != typeof settings) {
            _options = $.extend({}, _defaults, settings);
        } else {
            _options = _defaults;
        }
        var _self = this;

        // Do not use scroll event, slows the browser
        $(window).scroll(function() {
            _options.enable = true;
        });
        setInterval(function()
        {
            if (_options.enable) {
                stick(_self);
            }
        }, _options.latency);
    };
})(jQuery);
