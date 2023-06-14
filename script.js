        $(document).ready(function() {

            $("img").sparkle({ 
                "minSize": 2 , 
                "maxSize": 5 ,
                "overlap": 0 ,
                "direction": "up" ,
                "speed": 0.4
            });
        });

        $(document).ready(function() {
                $('.popup').addClass('show');

                // Close the popup when clicked outside
                $(document).on('click', function(event) {
                        if (!$(event.target).closest('.popup').length) {
                                $('.popup').removeClass('show');
                        }
                });
        });
