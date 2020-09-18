$(document).ready(function(){

    /*
    var imgArray = new Array();
	imgArray[0] = "./static/images/20/player/player_1.png";
	imgArray[1] = "./static/images/20/player/player_2.png";
	imgArray[2] = "http://www.samsungblueminx.com/function/image_stream.jsp?path=player&filename=56ea3fcd-36bf-4e23-af2e-4fce9b254322"
    imgArray[3] = "http://www.samsungblueminx.com/function/image_stream.jsp?path=player&filename=8118db64-2fab-491d-b9a6-c84bc64a0e5b";
    imgArray[4] = "http://www.samsungblueminx.com/function/image_stream.jsp?path=player&filename=2bdf2b93-1a6e-4a07-a514-14712a8c623c";
    imgArray[6] = "http://www.samsungblueminx.com/function/image_stream.jsp?path=player&filename=e2b8635d-11b8-4535-a9ae-5937c73e7cd3";
    imgArray[7] = "";
    imgArray[8] = "";
    imgArray[9] = "";
    imgArray[10] = "";
    imgArray[11] = "";
    imgArray[12] = "";
    imgArray[13] = "";
    imgArray[14] = "";
    imgArray[15] = "";
    imgArray[16] = "";
	
	function showImage(){
        var imgNum = Math.round(Math.random()*2);
		var leftImg = document.getElementById("leftPlayer");
		var rightImg = document.getElementById("rightPlayer");
		leftImg.src = imgArray[imgNum];
		rightImg.src = imgArray[imgNum];
	}
    */
    

    $('.news_slide .slider').slick({
        //infinite: true,
        slide: 'div',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    
    $('.sns_slide .slider').slick({
        //infinite: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
    
    $('.blueminx_sponsor .slider').slick({
        //infinite: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        //arrows: false,
        centerMode:true,
    });

    $(".tab_con div").hide();
    $(".tab_list a:first").addClass("active"); 
    $(".tab_con div:first").show(); 

    $('.tab_list a').on('click',function(){
        $(".tab_list a").removeClass("active");
        $(this).addClass("active");
        $(".tab_con div").hide();

        var activeTab = $(this).attr("href");
        $(activeTab).fadeIn();
        return false;
        console.log(activeTab);
    });
});