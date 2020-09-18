(function($, $document, $window){

	var ui = {};

	ui.pageSet = {
		init : function(){
			this.contentTab();
			this.breadcrumbMenu();
			//this.breadcrumbSticky();
			this.fullNavigation();
			this.utilSearch();
			this.scrollTop();
			this.layerPage();
			this.contentHeight();
			this.quickSns();
		},
		fullNavigation : function(){
			$('.nav_wrapper .list_menu > li').mouseleave(function(){
				$(this).removeClass('on');
				$(this).find('.sub_menu').stop().slideUp(250);
			});
			$('.nav_wrapper .list_menu > li').mouseover(function(){
				$(this).addClass('on');
				$(this).find('.sub_menu').stop().slideDown(250);
			});
		},
		utilSearch : function(){
			var btn = '.button_block',
				target = 'body';
			$(btn).click(function(){
				if($(target).hasClass('all_menu_open')){
					$(target).removeClass('all_menu_open');
				} else {
					$(target).addClass('all_menu_open');
				}
				
			});

			var btn2 = '.notice_wrap .btn_close',
				target2 = '.notice_wrap';
			$(btn2).click(function(){
				if($(target2).hasClass('on')){
					$(target2).removeClass('on');
					$('body').removeClass('notice_open');
				} else {
					$(target2).addClass('on');
					$('body').addClass('notice_open');
				}
			});
			if($(target2).hasClass('on')){
				$('body').addClass('notice_open');
			} 
		},
		breadcrumbMenu : function(){
			var $depth1 = $('.list_breadcrumb .depth1'),
				$depth2 = $('.list_breadcrumb .depth1 .sub_menu');
			$depth2.parent('li').addClass('is_submenu');
			$depth1.mouseover(function(){
	            $(this).addClass('on');
	            $(this).children('.sub_menu').stop().slideDown("fast");
	        });
	        $depth1.mouseleave(function(){
                $(this).removeClass('on');
                $('.list_breadcrumb .sub_menu').stop().slideUp("fast");
            });
		},
		breadcrumbSticky : function(){
			var $breadcrumb = $('.breadcrumb_block'),
				offset = $('header').outerHeight();
				console.log(offset);
			 if ($(window).scrollTop() > offset){
		        $breadcrumb.addClass("sticky_on");
		    }
		    else{
		        $breadcrumb.removeClass("sticky_on");
		    }
		},
		contentTab : function(){
		    var $btn = $('.js_tab li > a'),
		    	sticky = '.breadcrumb_block',
		    	$stickyHeight = $(sticky).outerHeight();
		    	speed = 280;

		    $btn.click(function(){
		    	var offset = $(this).offset().top;
		    	var $dataTarget = $(this).attr('data-target');
		    	if($dataTarget){
			    	$btn.removeClass('on');
		    		$(this).addClass('on');
		    		if($(this).hasClass('on')==true){
		    			$('.tab_content').removeClass('on');
			    		$('.tab_content').stop().fadeOut('fast');
				    	$('#'+$dataTarget).stop().fadeIn('fast');	
		    		}
		    	}
		    	if ($(sticky).hasClass('sticky_on')){
		    		$('body, html').animate({scrollTop: offset - $stickyHeight}, speed);
		    	} else {
		    		$('body, html').animate({scrollTop: offset - ($stickyHeight)}, speed);
		    	}
		    	return false;
		    });
		},
		layerPage : function(){
			$(".js_layer").click(function(){
				$dataTarget = $(this).attr('data-target');
				$('#'+$dataTarget).stop().fadeIn('fast');
				$("body").addClass("popup_open");
				if($dataTarget == "layerVod"){
					$('.wrap_layer .frame_vod').append('<iframe width="1170" height="575" src="https://www.youtube.com/embed/BMoFRgNie2E?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
				}
			});
			$('.wrap_layer .btn_close').click(function(){
				if($("body").hasClass('popup_open')){
					if($(this).parents('#layerVod')){
						$(".wrap_layer .frame_vod").empty();
					}
					$('#'+$dataTarget).stop().fadeOut('fast');
					$("body").removeClass("popup_open");
				}
			});
		},
		quickSns : function(){
			var $btn = $('.wrap_quick .btn_quick'),
				$target = $('.wrap_quick');
			$btn.click(function(){
				if($target.hasClass('on')){
					$target.removeClass('on');
				} else {
					$target.addClass('on');
				}
			});

		},
		scrollTop : function(){
			var $body = $(document.body);
		    var speed = 200; // �ㅽ겕濡ㅼ냽��
		    var $top = '';

		    $top=$('<div>').addClass('btn_top').html("�꾨줈媛�湲�").appendTo($body);

		    $(window).scroll(function(){
		        var y = $(this).scrollTop();
		        if(y >= 200){
		            $(".btn_top").addClass("on");
		        }
		        else {
		           $(".btn_top").removeClass("on");
		        }
		    });

		    $(".btn_top").click(function(){
		        $('body, html').animate({scrollTop:0}, speed);
		    });
		},
		contentHeight : function(){
			var target = '#siteWrap',
				$winHeight = $(window).height()
			$(target).css({
				minHeight: $winHeight+"px"
			})
		},
		
	},
	ui.toggleDisplay = {
		selector: '.js_toggle_display',
		init: function(){
			var _this = this;
			$document
				.delegate(_this.selector, 'click', function(e){
					var $this = $(this),
						$target = $(this.hash),
						$dataTarget = $this.attr('data-target');

					e.preventDefault();

					if( $this.attr('href') !== undefined ){
						_this.hrefToggle($this, $target);
					} else {
						_this.dataToggle($this, $dataTarget);
					}
					
					if($dataTarget = 'searchBox'){
						$('#'+$dataTarget).find('.inp_text').focus();
					}
				});
		},
		hrefToggle: function($this, $target){
			if( $this.hasClass('is_active') ){
				$target.slideUp(100);
				$this.removeClass('is_active');
			}else{
				$target.slideDown(100);
				$this.addClass('is_active');
			}
		},
		dataToggle: function($this, $dataTarget){
			if ( $this.hasClass('is_active') ){
				$('#'+$dataTarget).slideUp(100);
				$this.removeClass('is_active');
			}else{
				$('#'+$dataTarget).slideDown(100);
				$this.addClass('is_active');
			}
		}
	}

	$document.ready(function(){
		ui.pageSet.init();
	});

	$(window).on("scroll",function(){
		//ui.pageSet.breadcrumbSticky();
	});
	$(window).on("resize",function(){
		//ui.pageSet.breadcrumbSticky();
		ui.pageSet.contentHeight();
	});
	$(window).load(function() {
		
	});

	window.ui = ui;

	//Tab Main
	$(".game_player h4:eq(1)").addClass("on");
	$(".gm_tab_cont:eq(1)").show();

	var elemCom = $(".game_player h4");
	elemCom.on("click", function(){

		if( $(this).hasClass("on") ) {
			
			//$(this).removeClass("on");
			//$(this).next().hide();
		}
		else{
			$(".game_player h4").removeClass("on");
			$(".gm_tab_cont").hide();

			$(this).addClass("on");
			$(this).next().show();
		}
		return false;
	});

	
	//Tab Game
	$(".game_list_box h5:eq(0)").addClass("on");
	$(".game_type:eq(0)").show();

	var gameCom = $(".game_list_box h5");
	gameCom.on("click", function(){

		if( $(this).hasClass("on") ) {
			
			//$(this).removeClass("on");
			//$(this).next().hide();
		}
		else{
			$(".game_list_box h5").removeClass("on");
			$(".game_type").hide();

			$(this).addClass("on");
			$(this).next().show();
		}
		return false;
	});

	//Caption
	$( ".game_match_sort.broad" ).hover(function() {	
		var box1 = $(this).find(".broad_caption");
		var box1_width = box1.outerWidth();
		var marginLeft = Number(box1_width * .5);

		//console.log( box1_width );
		//console.log( marginLeft );
	
		box1.css("margin-left", "-" + marginLeft + "px");
	});

	//Select
	var selectTarget = $('.form_select select');

    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

	selectTarget.on({
		'focus' : function () {
			$(this).parent().addClass('focus');
		},
		'blur' : function () {
			$(this).parent().removeClass('focus');
		}
	});

	//Th Sort
	var thSort = $(".th_sort");
	thSort.on("click", function(){			
		
		if( $(this).hasClass("active") ) {				
			//$(this).removeClass("active");
		}
		else{
			$(".th_sort").removeClass("active");
			$(this).addClass("active");
		}
		return false;
	});
	
	//History Contents
	var hisList = $(".history_list li:nth-child(even)");
	hisList.css({
		"float" : "right",
		"text-align" : "left",
		"background-position" : "0 0",
	});

	//History Tab
	$(".history_area h5:eq(0)").addClass("on");
	$(".history_list:eq(0)").show();

	var gameCom = $(".history_area h5");
	gameCom.on("click", function(){

		if( $(this).hasClass("on") ) {
			
			//$(this).removeClass("on");
			//$(this).next().hide();
		}
		else{
			$(".history_area h5").removeClass("on");
			$(".history_list").hide();

			$(this).addClass("on");
			$(this).next().show();
		}
		return false;
	});

	//History_20 Contents --
	//History Tab
	$(".history_area_20 h5:eq(0)").addClass("on");
	$(".history_list_20:eq(0)").show();

	var gameCom = $(".history_area_20 h5");
	gameCom.on("click", function(){
		var activeTab = $(this).find("a").attr("href");
		console.log(activeTab);

		if( $(this).hasClass("on") ) {
			//$(this).removeClass("on");
			//$(this).next().hide();
		}
		else{
			$(".history_area_20 h5").removeClass("on");
			$(".history_list_20").hide();

			$(this).addClass("on");
//			$(this).next().show();
			$(activeTab).show();
		}
		return false;
	});
}(jQuery, $(document), $(window)));