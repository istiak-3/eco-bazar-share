$(document).ready(function () {
    /** ----------------------------------------------------------------- */
    /**                           HEADER SECTION                             */

    /** fixed-header padding offset ----(Note: To change after next section is done)*/
    // $('#afterHeadingSection').css({
    // 'padding-top': $('header').outerHeight(true) + 100
    // })


    // $(window).on('scroll', function () {
    //     event.stopPropagation();

    //     /**header shrink */
    //     if ($(this).scrollTop() > 80) {
    //         $('#bottom-header ul.page_list li.categories, #bottom-header ul.page_list > li').css({
    //             'padding-top': 4,
    //             'padding-bottom': 4
    //         })

    //         $('#top-header').slideUp(300, 'linear')
    //     }
    //     else {
    //         $('#bottom-header ul.page_list li.categories, #bottom-header ul.page_list > li').css({
    //             'padding': ''
    //         })
    //         $('#top-header').fadeIn(100)
    //     }
    // });

    /** ---- middle-header part Start ------- */
    /** search input behaviour */
    $('#middle-header .search_input').on({
        'focus': function () {
            $('#middle-header .search_input').css({
                'padding-left': 20
            })
            $('#middle-header .search_icon').hide()
        },
        'blur': function () {
            /** Crucial logic */
            if ($(this).val() === "") {
                $('#middle-header .close_btn').hide();
                $('#middle-header .search_icon').show();
                $(this).css('padding-left', '');
            }

        }
    })
    /** ---- middle-header part End ------- */

    /** ---- bottom-header part Start ------- */

    /** bottom header category-list toggle */
    $('#bottom-header li.categories').hover(function () {
        $('#bottom-header ul.category_list').stop(true, true).slideToggle(300)
    })
    /** ---- bottom-header part End ------- */


    /** ---- mobile-header Section Start ------- */
    $('#mobile-header .offcanvas-top .search_input').on({
        'focus': function () {
            $('#mobile-header .offcanvas-top .search_input').css({
                'padding-left': 20
            })
            $('#mobile-header .offcanvas-top .search_icon').hide()
        },
        'blur': function () {
            /** Crucial logic */
            if ($(this).val() === "") {
                $('#mobile-header .offcanvas-top .close_btn').hide();
                $('#mobile-header .offcanvas-top .search_icon').show();
                $(this).css('padding-left', '');
            }
        }
    })
    /** ---- mobile-header Section End ------- */

    /** ----------------------------------------------------------------- */


    
    /** -- Banner Part Start -- */
    /** slick slider init. */
    $('.banner_slider').slick({
        'prevArrow': '.prev_arrow',
        'nextArrow': '.next_arrow',
        'dots': true,
        'cssEase': 'linear'
    })

    /** slick slider custom pagination*/
    $('.banner_slider ul.slick-dots li button').text('')
    /** -- Banner Part End -- */

})