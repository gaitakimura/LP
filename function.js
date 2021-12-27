$(function() {
    // スクロールしたら表示
    // ---------------------------------------
	var showFlag = false;
    
	$('#page_top').css('bottom', '-100px');
	
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				$('#page_top').stop().animate({'bottom' : '20px'}, 300);
			}
		} else {
			if (showFlag) {
				showFlag = false;
				$('#page_top').stop().animate({'bottom' : '-100px'}, 300); 
			}
		}
	});
    
    // ページ内スクロールリンク
    // ---------------------------------------
    $('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		// 移動先を調整する場合 var position = target.offset().top - 調整値;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

$(document).ready(function(){    
    // 事例スライド
    // ---------------------------------------
    var allImage = $("#sec05_slide img");
    var allImageCount = allImage.length;
    var completeImageCount = 0;
    var $slide;

    for(var i = 0; i < allImageCount; i++){
        var img = $('<img>');
        img.load(function() {
            completeImageCount ++;
            if (allImageCount == completeImageCount){
                // 処理
                $slide = $('#sec05_slide').flickity({
                    wrapAround: true
                })
            }
        });
        img.attr('src', $('#sec05_slide img').attr('src'));
    }
});
