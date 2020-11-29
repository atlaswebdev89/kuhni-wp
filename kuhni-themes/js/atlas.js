
$(document).ready(function(){
    $(window).on('load', function() {
        //Preloader off
        $(".loader-wrap").delay(500).fadeOut("600");
        $("#overlay-loader").delay(500).fadeOut("600");
        setTimeout(function (){

            $('#sticky-header .row').children('div').each(function (k) {
                let el = $(this);
                setTimeout( function () {
                    el.addClass('fadeIn animated');
                },  k*100, 'easeInOutExpo' );
            });

            $('.calculator-kuhni .row').children('div').each(function (k) {
                let el = $(this);
                setTimeout( function () {
                    el.addClass('fadeIn animated');
                },  k*200, 'easeInOutExpo' );
            });

        },1000);
    });


    let owlKatalog = $('.owl-carousel-catalog');
    let partner = $('.our_partner');
    let rewiews =$('.rewievs');

    owlKatalog.owlCarousel({
        loop:false,
        margin:10,
        autoHeight: false,
        nav:true,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        rewind: true,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:3
            }
        }
    });

    partner.owlCarousel({
        loop:true,
        margin:0,
        autoHeight: false,
        nav:true,
        items:1,
        autoplay: true,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        rewind: false,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2
            },
            992:{
                items:4
            }
        }
    });

    rewiews.owlCarousel({
        loop:true,
        margin:0,
        autoHeight: false,
        nav:false,
        items:1,
        autoplay: true,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        rewind: true,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    });

    /* JqueryLightGallery */
    let owl = $('.owl-carousel-catalog');
    $('.lightgallery').each(function (e) {
        $(this).lightGallery({
            thumbnail:true,
            animateThumb: true,
            showThumbByDefault: true,
            subHtmlSelectorRelative: false,
        });
        $(this).on('onBeforeOpen.lg', function (){
            owl.trigger('stop.owl.autoplay');
        })
        $(this).on('onCloseAfter.lg', function (){
            owl.trigger('play.owl.autoplay');
        })
    });

    /*******************************************************************************************************
     * Scroll To Top - Кнопка возврата к верху страницы, Кнопка появления кнопки фильтра в каталоге
     ********************************************************************************************************/

    var scrollTop = $(".wrap-button-top");
    $(window).on('scroll',function() {
        var topPos = $(this).scrollTop();
        if (topPos > 350) {
           scrollTop.fadeIn("2000");

        } else {
            scrollTop.fadeOut("2000");
        }
    });
    //Плавный переход к top page
    $(scrollTop).on('click',function() {
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1000,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });
        return false;
    });

    /*ScrollSpy js simple
       ================================================ */
    //get Anchor link, create array
    var anchorLink = Array ();
    $('section, body, .menu-scroll').each(function (i) {
        let id = $(this).attr('id');
        if (id) {
            anchorLink.push(id);
        }
    });


    function scrollSpy() {
        let current;
        for (let i = 0; i < anchorLink.length; i++) {
            if ( $('#'+anchorLink[i]).offset().top - 150 <= $(window).scrollTop() ) {
                current = anchorLink[i];
            }
        }

        $("#navigation a[href='#"+current+"'] ").addClass('active');
        $("#navigation a").not("a[href='#"+current+"']").removeClass('active');

        if( $("#navigation a[href='#"+current+"'] ").parent().parent().hasClass('submenu')) {
            $("#navigation a[href='#"+current+"'] ").closest('.has-children').children('a').addClass('active');
        };
    }
    //scrollSpy call
    $(document).ready( function() {
        scrollSpy();
    });

    $(window).on('scroll', function() {
        scrollSpy();
    });

    /* =======================================================*/


    })

/* Modile Menu*/

        let burger_mobile = $('.js-mobile-toggle');
        let overlay_offcavnas = $('#overlay-menu');
        let owl = $('.owl-carousel');

        var CLose_overlay_mobile = function () {
            overlay_offcavnas.fadeOut(1000);
            $('body').removeClass('open-body');
        }
        var Open_overlay_mobile = function () {
            overlay_offcavnas.fadeIn("1000");
            // отключить скрол пока открыто мобильное меню
            $('body').addClass('open-body');
        }
        //Клик по burger открытия мобильного меню
        burger_mobile.on('click', function (e) {
                    e.preventDefault();
                    $(this).addClass('active');
                        //Открытие Submenu при активном пункте
                        if ($('#navigation').find('.collapse li a.active').length > 0){
                            $('#navigation').find('.collapse li a.active').each(function (i) {
                                let active = $(this);
                                if(active.closest('.collapse').hasClass('collapse'))
                                {
                                    let item = active.closest('.collapse');
                                    //Проверяем есть другие открытые подменю
                                    if($('#navigation').find('.collapse.show').not(item).length > 0){
                                        $('#navigation').find('.collapse.show').not(item).each(function () {
                                            $(this).collapse('hide');
                                            $(this).parent().children('.arrow-collapse').removeClass('active');
                                        });
                                    }
                                    let has_children = item.parent();
                                    if(!item.hasClass('show'))
                                    {
                                        item.collapse('show');
                                    }
                                   if (!has_children.children('.arrow-collapse').hasClass('active')){
                                        has_children.children('.arrow-collapse').addClass('active');
                                    }
                                }
                            });
                        }else {
                            $('#navigation').find('.has-children').each(function (h) {
                                let items =$(this);
                                if (items.children('.collapse').hasClass('show')) {
                                    items.children('.collapse').collapse('hide');
                                }
                                if(items.children('.arrow-collapse').hasClass('active')) {
                                    items.children('.arrow-collapse').removeClass('active');
                                }
                            })
                        }
            Open_overlay_mobile();
            //Открыть offcavnas меню
            $('.mobile_menu_block').addClass('open_offcavnas');
            //Отключить все карусели owl-carusel
            owl.trigger('stop.owl.autoplay');
        })

        overlay_offcavnas.on('click', function () {
            $('.mobile_menu_block').removeClass('open_offcavnas');
            CLose_overlay_mobile();
            //Включить все карусели owl-carusel
            owl.trigger('play.owl.autoplay');
            burger_mobile.removeClass('active');
        })
//Закрытие мобильного меню
$('.closed-mobile-menu').on('click', function (e) {
    e.preventDefault();
    if (burger_mobile.hasClass('active')) {
        burger_mobile.removeClass('active');
        $('.mobile_menu_block').removeClass('open_offcavnas');
        CLose_overlay_mobile();
        //Включить все карусели owl-carusel
        owl.trigger('play.owl.autoplay');
    }
})

var siteMenuClone = function() {

    $('.js-clone-nav').each(function() {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.offcavnas-main-menu');
    });
    $('.js-clone-social').each(function () {
        var $this = $(this);
        $this.clone().appendTo('.offcavnas-social-menu');
    })

    setTimeout(function() {

        var counter = 0;
        $('.offcavnas-main-menu .has-children').each(function(){
            var $this = $(this);

            $this.prepend('<span class="arrow-collapse collapsed"><i class="fa fa-angle-up" aria-hidden="true"></i>');

            $this.find('.arrow-collapse').attr({
                'data-toggle' : 'collapse',
                'data-target' : '#collapseItem' + counter,
            });

            $this.find('> ul').attr({
                'class' : 'collapse',
                'id' : 'collapseItem' + counter,
            });
            counter++;
        });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
        var $this = $(this);
        if ( $this.closest('li').find('.collapse').hasClass('show') ) {
            $this.removeClass('active');
        } else {
            $this.closest('.site-nav-wrap').find('.has-children').each(function () {
                $(this).find('.arrow-collapse').removeClass('active').addClass('collapsed');
                $(this).find('.collapse').collapse('hide');
            });
            $this.addClass('active');
        }
        e.preventDefault();
    });
};
siteMenuClone();

/* ======= Плавное появление эелементов при скролле с помощью плагина WayPoint =========*/
var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {
        console.log("START");
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            i++;
            console.log(i);
            $(this.element).addClass('item-animate');
            setTimeout(function(){
                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated');
                        }else if ( effect === 'jackInTheBox') {
                            el.addClass('jackInTheBox animated');
                        } else {
                            el.addClass('fadeInUp animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 50, 'easeInOutExpo' );
                });
            }, 100);
        }
    } , { offset: '80%' } );
};
contentWayPoint();
/* ========================== END ==============================*/

/* Smooth Scroll Menu */
$('#navigation a').on('click', function (e) {
    e.preventDefault();
    let href = $(this).attr('href');
    if(href != '#') {
        let position = $(href).offset().top;
        $('html, body').animate(
            {
                scrollTop: position-60
            },
            {
                duration: 1000,   // по умолчанию «400»
                easing: "swing" // по умолчанию «swing»
            });
    };
    //Закрыть боковое меню
    $(this).closest('.mobile_menu_block').removeClass('open_offcavnas');
    CLose_overlay_mobile();
});
/* end Smooth Scroll */


/* MaskInputPhone*/
/* ===================================================== */
$('.phone').mask("+375 (99) 999-99-99",
    {
        completed: function(){
            console.log("OK");
        }
    });
/* ===================================================== */

/* Botton for Clear input form */
$('#clear').on('click', function (e) {
    e.preventDefault();
    $('.clear-form')[0].reset();
})
/* === */
/* Validate for form */
$('#desing-form').validate({
    rules: {
        name:{
            required:true,
            minlength: 2
        },
        phone:{
            required:true,
            minlength: 19
        },
    },
    errorPlacement: function (error, element) {},
    errorClass: "has-error",
    validClass: "has-success",
    highlight: function (element, errorClass, validClass ) {
        $(element)
            .closest('.form-control')
            .addClass(errorClass);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element)
            .closest('.form-control')
            .removeClass(errorClass)
    },
    submitHandler: function(form) {
        urlencodeForm(form);
    }
});
$('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            subject: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            },
        },
        messages: {
            name: {
                required: "Заполните поле",
                minlength: "Слишком коротное имя"
            },
            email: {
                required: "Заполните поле",
                email: "Укажите email адрес"
            },
            message: {
                required: "Заполните поле",
                minlength: "Еще что-нибудь напишите"
            }
        },
        errorClass: "has-error",
        validClass: "has-success",
        highlight: function (element, errorClass, validClass ) {
            $(element)
                .closest('.form-control')
                .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element)
                .closest('.form-control')
                .removeClass(errorClass)
        },
        submitHandler: function(form) {
            urlencodeForm(form);
        },
    });
$('#contactFormModal').validate({
    rules: {
        name:{
            required:true,
            minlength: 2
        },
        email:{
            required:true,
        },
    },
    errorPlacement: function (error, element) {},
    errorClass: "has-error",
    validClass: "has-success",
    highlight: function (element, errorClass, validClass ) {
        $(element)
            .closest('.form-control')
            .addClass(errorClass);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element)
            .closest('.form-control')
            .removeClass(errorClass)
    },
    submitHandler: function(form) {
          urlencodeForm(form);
    }
});

function dataForm (form) {
    let formData = new FormData(form);
    ajaxTransfer(form, formData);
}

function urlencodeForm(form) {
    let form_encode = $(form).serialize();
    ajaxTransferUrlEncode(form, form_encode);
}

function NotyMessage (type, message) {
    //Noty notifytions
    let noty = new Noty({
        type:       type,
        theme:      'bootstrap-v4',
        layout:     'topRight',
        text:       message,
        animation: {
            open : 'animated fadeInRight',
            close: 'animated fadeOutRight'
        },
        timeout: 3000,
    }).show();
}

/*Функция передачи данных формы*/
function ajaxTransferUrlEncode(forma, dataForm) {
    let uri = 'test.php';
    let form =$(forma);
    $.ajax({
        type: 'POST',
        url:uri,
        processData: false,
        data:dataForm,
        timeout: 5000,
        //Указывая тип json использовать функцию JSON.parse не надо будет ошибка
        dataType: "json",
        beforeSend: function (data) {
            //Блокируем кнопку и элементы формы
            form.find('button, input, textarea').attr('disabled', 'disabled');
            form.append("<div id='loading' class='text-center p-3'></div>");
        },
        success:  function (data) {
            form.find('#loading').remove();
            if(data) {
                //Если ошибок нет, очищаем форму
                if(data.status == true){
                    //Очистка формы
                    form[0].reset();
                    //Включение кнопки и элементов формы
                    form.find('button, input, textarea').removeAttr('disabled');
                    NotyMessage('success', data.message);
                    setTimeout(function () {
                        //Если форма в модально окне, закрываем модальное окно при успехе
                        if (form.closest('.modal').hasClass('modal')) {
                            form.closest('.modal').modal( 'hide' );
                        }

                    }, 3000);
                }else {
                    NotyMessage('error', data.message);
                    setTimeout(function () {
                        //Включение кнопки и элементов формы
                        form.find('button,input, textarea').removeAttr('disabled');
                    },2000);
                }
            }
        },
        error: function(x, t, e){
            form.find('#loading').remove();
            if( t === 'timeout') {
                // Произошел тайм-аут
                //Очистка формы
                form[0].reset();
                //Включение кнопки и элементов формы
                form.find('button,input, textarea').removeAttr('disabled');
                NotyMessage('error', 'Превышено время ожидания');
            }
        }
    })
}

/* === */



