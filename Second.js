(function($) {
    $(document).ready(function() {
        var $container = $('.product-grid');
        $container.isotope({
            itemSelector: '.grid-product',
            layoutMode: 'masonry'
        });

        var $filterSelects = $('.filter-grid select');
        var performFilter = function() {
            var filterVal = ($(this).val() === '*') ? '*' : '.' + $(this).val();
            $container.isotope({
                filter: filterVal
            });
        };
        $filterSelects.on('change', performFilter);

        var $addToCart = $('.js-add-to-cart');
        var performNotification = function() {
            $('.your-cart').addClass('have-items');
            $('.notifications').removeClass('fadeOut').addClass('fadeInLeft');
            setTimeout(function() {
                $('.notifications').removeClass('fadeInLeft').addClass('fadeOut');
            }, 3000);
        };
        $addToCart.on('click', performNotification);

        var $cartToggle = $('.js-toggle-cart');
        var performCartToggle = function() {
            $('.cart').toggleClass('show-cart');
        };
        $cartToggle.on('click', performCartToggle);

        var manipulateNumberInput = function(e) {
            e.preventDefault();
            var $numberInput = $(this).siblings('input[type=number]');
            var currentValue = $numberInput.val() !== '' ? $numberInput.val() : 1;
            var adjustedValue = parseInt(currentValue) + ($(this).hasClass('plus') ? 1 : -1);
            $numberInput.val(adjustedValue).trigger('change');
        };

        var validateNumberInput = function(e) {
            var $numberInput = $(this);
            var currentValue = parseInt($numberInput.val());
            var minimumValue = parseInt($numberInput.attr('min'));
            var maximumValue = parseInt($numberInput.attr('max'));
            if (currentValue < minimumValue) {
                $numberInput.val(minimumValue);
            }
            if (currentValue > maximumValue) {
                $numberInput.val(maximumValue);
            }
        };

        var $numberControls = $('.js-number-control');
        $numberControls.on('click', manipulateNumberInput);

        var $numberInputs = $('input[type=number]');
        $numberInputs.on('change', validateNumberInput);
    });
})(jQuery);
