var pjax=new Pjax({selectors:"title;meta:not([http-equiv\x3d'origin-trial']);.cat_announcement;.need_index_swiper;.main .main_body;.main .main_sidebar;.pjax_anniu_area;.pjax_end_area;#search_card .card1 .cat_categorymenu;#share_card;.cat_mainmenu_out .left_bread;.Login_in;.end_right;#admin_cute_card".split(";"),cacheBust:!1});$(document).on("pjax:send",function(){$(".pjax_loading").fadeIn()});$(document).on("pjax:complete",function(){comment_li_add_px();swiper_item();cat_pagination_all();eye_button_number_each();eye_button_down_each();comment_blur_getavatar();diary_getmoodandweather_hand();diary_getbackgroundimage();create_postmenu();aside_last_part_px();OWO();reloadJlViewHistory();group_links();random_links();if("undefined"!==typeof Prism){for(var b=document.getElementsByTagName("pre"),a=0;a<b.length;a++)0<b[a].getElementsByTagName("code").length&&(b[a].className="line-numbers");Prism.highlightAll(!1,null)}$(".search input").val("");fanyi_choose();cat_user_pjax_callback();$("div[id*\x3djBox]").hide();new jBox("Tooltip",{attach:"[title]",theme:"TooltipDark"});setTimeout(function(){$(".pjax_loading").fadeOut()},500);console.log("pjax to "+window.location.href)});