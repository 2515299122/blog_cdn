/* 标签切换 */
$(document).on("click","ul.tag_area li[class*\x3dtag_]",function(){var a=$(this).attr("class");$("[class*\x3dsection_tag_]").hide();$("[class*\x3d"+a+"]").show()});$(".main").on("click",".links_click_getcard",function(){"pointer"==$(this).css("cursor")&&($("#cat_tanchuang_off").show(),$("#link_cute_card").addClass("cat_tanchuang_on"),avatar=$(this).find(".avatar").attr("src"),linkaddr=$(this).find(".x_link").text(),linkname=$(this).find(".guestbook_visitors_name").text(),linkdesc=$(this).find(".xyears_text").text(),$("#link_cute_card").find(".avatar").attr("src",avatar),$("#link_cute_card").find(".guestbook_visitors_name a").attr("href",linkaddr),$("#link_cute_card").find(".guestbook_visitors_name a").text(linkname),$("#link_cute_card").find(".xyears_text").text(linkdesc),$("#link_cute_card").find("ul.postlist_right").remove(),"nofeed"!=$(this).find(".feed_type").text()&&$.ajax({url:"/usr/themes/MyLife/api/cat_feed.php",type:"POST",dataType:"json",contentType:"application/x-www-form-urlencoded",data:JSON.stringify({feedtype:$(this).find(".feed_type").text(),feedurl:$(this).find(".feed_url").text()}),success:function(a){$("#link_cute_card").append('\x3cul class\x3d"postlist_right"\x3e\x3c/ul\x3e');a.data.forEach(function(a){$("#link_cute_card").find("ul.postlist_right").append("\x3cli title\x3d"+a.title["0"]+"\x3e\x3ctime\x3e"+a.date+"\x3c/time\x3e\x3ca href\x3d"+a.link["0"]+" target\x3d'_blank'\x3e\x3ci style\x3d'line-height: 2rem;color:var(--theme);' class\x3d'ri-file-list-2-line'\x3e\x3c/i\x3e "+a.title["0"]+"\x3c/a\x3e\x3c/li\x3e")})}}))});$(function(){group_links();random_links()});function group_links(){if(0<$("section.section_tag_friends").length){var a=$("section.section_tag_friends").attr("groups").split("||").map(function(a){return a.trim()});$("div.links_part").sort(function(b,c){var d=$(b).attr("part"),e=$(c).attr("part");return a.indexOf(d)-a.indexOf(e)}).appendTo("section.section_tag_friends")}}function random_links(){0<$(".random_links").length&&$(".random_links").each(function(){for(var a=$(this).find(".links_click_getcard"),b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}$(this).empty().append(a)})}$(document).on("click","form.sent_link_form div.submit",function(){var a=$("form.sent_link_form").find('input[name\x3d"link_category_choose"]:checked').val(),b=$("form.sent_link_form").find('input[name\x3d"nickname"]').val(),c=$("form.sent_link_form").find('input[name\x3d"mail"]').val(),d=$("form.sent_link_form").find('input[name\x3d"link"]').val(),e=$("form.sent_link_form").find('input[name\x3d"description"]').val(),f=$("form.sent_link_form").find('input[name\x3d"avatar"]').val(),g=$("form.sent_link_form").find('input[name\x3d"rss"]').val(),h=$("form.sent_link_form").find('input[name\x3d"atom"]').val();if(""==a||"undefined"==typeof a)return jbox_alert("red","\u672a\u9009\u62e9\u7f51\u7ad9\u5206\u7c7b\uff01");if(""==b||"undefined"==typeof b)return jbox_alert("red","\u672a\u586b\u5199\u6635\u79f0\uff01");if(""==d||"undefined"==typeof d)return jbox_alert("red","\u672a\u586b\u5199\u7f51\u7ad9\u94fe\u63a5\uff01");if(""==e||"undefined"==typeof e)return jbox_alert("red","\u672a\u586b\u5199\u7f51\u7ad9\u63cf\u8ff0\uff01");if(!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(c))return jbox_alert("red","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\uff01");jbox_alert("blue","\u6b63\u5728\u63d0\u4ea4\u7533\u8bf7...");$.ajax({url:"/",type:"POST",data:{category:a,nickname:b,mail:c,link:d,description:e,avatar:f,rss:g,atom:h},dataType:"text",success:function(a){a=JSON.parse(a);jbox_alert(a.color,a.words)},error:function(){jbox_alert("red","\u7533\u8bf7\u5931\u8d25")}})});$(document).one("click",".tag_circle",function(){var a=$(this).attr("type");$(this).attr("url");"nohas"==a&&$.ajax({url:"/",type:"POST",data:"circle",dataType:"text",success:function(){jbox_alert("green","\u7f13\u5b58\u6210\u529f");$("section.section_tag_circle").load(window.location.origin+"/mylife/circle.html")},error:function(){jbox_alert("red","\u7f13\u5b58\u5931\u8d25")}})});