(function($) {
    $(function() {
    
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
    })(jQuery);





$(document).ready(function() {
$.uploadPreview({
    input_field: "#imgInput",   // Default: .image-upload
    preview_box: "#image-preview",  // Default: .image-preview
    label_field: "#image-label",    // Default: .image-label
    label_default: "Choose File",   // Default: Choose File
    label_selected: "x<br> удалить фото",
    no_label: false                 // Default: false
});
});

function facechange (objName) {
    if ( $(objName).css('display') == 'none' ) {
    $(objName).animate({height: 'show'}, 400);
    } else {
    $(objName).animate({height: 'hide'}, 200);
    }
}