(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false}f.cookie(j,"",f.extend({},i,{expires:-1}));return !f.cookie(j)}}));(function(a){a.fn.imageSlider=function(j){var e=a.extend({fadeTime:1000,switchTime:5000},j);var h=new Array();a("ul li",this).each(function(){h.push({img:a(this).attr("data-img"),title:a(this).html(),uri:a(this).attr("data-href")})});if(h.length>0){var f=h.length;var g=0;var b=a(this);var d=a("<a></a>").prependTo(b);var i=a("<span></span>").prependTo(d);var c=function(){b.css("background-image","url('"+h[g].img+"')");g=(g!=(f-1)?g+1:0);d.fadeOut(e.fadeTime,function(){d.css("background-image","url('"+h[g].img+"')");d.fadeIn(e.fadeTime);d.attr("href",h[g].uri);i.text(h[g].title)})};bgSlider=setInterval(c,e.switchTime);d.css("background-image","url('"+h[g].img+"')");d.attr("href",h[g].uri);i.text(h[g].title)}}}(jQuery));
(function(a){a.fn.hoverIntent=function(m,d,h){var j={interval:100,sensitivity:6,timeout:0};if(typeof m==="object"){j=a.extend(j,m)}else{if(a.isFunction(d)){j=a.extend(j,{over:m,out:d,selector:h})}else{j=a.extend(j,{over:m,out:m,selector:d})}}var l,k,g,f;var e=function(n){l=n.pageX;k=n.pageY};var c=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.sqrt((g-l)*(g-l)+(f-k)*(f-k))<j.sensitivity){a(n).off("mousemove.hoverIntent",e);n.hoverIntent_s=true;return j.over.apply(n,[o])}else{g=l;f=k;n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}};var i=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);n.hoverIntent_s=false;return j.out.apply(n,[o])};var b=function(p){var o=a.extend({},p);var n=this;if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)}if(p.type==="mouseenter"){g=o.pageX;f=o.pageY;a(n).on("mousemove.hoverIntent",e);if(!n.hoverIntent_s){n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}}else{a(n).off("mousemove.hoverIntent",e);if(n.hoverIntent_s){n.hoverIntent_t=setTimeout(function(){i(o,n)},j.timeout)}}};return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},j.selector)}})(jQuery);(function(b){var a=(function(){var o={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},e=(function(){var c=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(c){b(window).load(function(){b("body").children().on("click",b.noop)})}return c})(),j=(function(){var c=document.documentElement.style;return("behavior" in c&&"fill" in c&&/iemobile/i.test(navigator.userAgent))})(),l=function(r,s){var c=o.menuClass;if(s.cssArrows){c+=" "+o.menuArrowClass}r.toggleClass(c)},q=function(c,r){return c.find("li."+r.pathClass).slice(0,r.pathLevels).addClass(r.hoverClass+" "+o.bcClass).filter(function(){return(b(this).children(r.popUpSelector).hide().show().length)}).removeClass(r.pathClass)},m=function(c){c.children("a").toggleClass(o.anchorClass)},f=function(c){var r=c.css("ms-touch-action");r=(r==="pan-y")?"auto":"pan-y";c.css("ms-touch-action",r)},i=function(s,t){var c="li:has("+t.popUpSelector+")";if(b.fn.hoverIntent&&!t.disableHI){s.hoverIntent(k,g,c)}else{s.on("mouseenter.superfish",c,k).on("mouseleave.superfish",c,g)}var r="MSPointerDown.superfish";if(!e){r+=" touchend.superfish"}if(j){r+=" mousedown.superfish"}s.on("focusin.superfish","li",k).on("focusout.superfish","li",g).on(r,"a",t,h)},h=function(s){var r=b(this),c=r.siblings(s.data.popUpSelector);if(c.length>0&&c.is(":hidden")){r.one("click.superfish",false);if(s.type==="MSPointerDown"){r.trigger("focus")}else{b.proxy(k,r.parent("li"))()}}},k=function(){var c=b(this),r=n(c);clearTimeout(r.sfTimer);c.siblings().superfish("hide").end().superfish("show")},g=function(){var c=b(this),r=n(c);if(e){b.proxy(p,c,r)()}else{clearTimeout(r.sfTimer);r.sfTimer=setTimeout(b.proxy(p,c,r),r.delay)}},p=function(c){c.retainPath=(b.inArray(this[0],c.$path)>-1);this.superfish("hide");if(!this.parents("."+c.hoverClass).length){c.onIdle.call(d(this));if(c.$path.length){b.proxy(k,c.$path)()}}},d=function(c){return c.closest("."+o.menuClass)},n=function(c){return d(c).data("sf-options")};return{hide:function(r){if(this.length){var u=this,v=n(u);if(!v){return this}var s=(v.retainPath===true)?v.$path:"",c=u.find("li."+v.hoverClass).add(this).not(s).removeClass(v.hoverClass).children(v.popUpSelector),t=v.speedOut;if(r){c.show();t=0}v.retainPath=false;v.onBeforeHide.call(c);c.stop(true,true).animate(v.animationOut,t,function(){var w=b(this);v.onHide.call(w)})}return this},show:function(){var s=n(this);if(!s){return this}var r=this.addClass(s.hoverClass),c=r.children(s.popUpSelector);s.onBeforeShow.call(c);c.stop(true,true).animate(s.animation,s.speed,function(){s.onShow.call(c)});return this},destroy:function(){return this.each(function(){var r=b(this),s=r.data("sf-options"),c;if(!s){return false}c=r.find(s.popUpSelector).parent("li");clearTimeout(s.sfTimer);l(r,s);m(c);f(r);r.off(".superfish").off(".hoverIntent");c.children(s.popUpSelector).attr("style",function(t,u){return u.replace(/display[^;]+;?/g,"")});s.$path.removeClass(s.hoverClass+" "+o.bcClass).addClass(s.pathClass);r.find("."+s.hoverClass).removeClass(s.hoverClass);s.onDestroy.call(r);r.removeData("sf-options")})},init:function(c){return this.each(function(){var s=b(this);if(s.data("sf-options")){return false}var t=b.extend({},b.fn.superfish.defaults,c),r=s.find(t.popUpSelector).parent("li");t.$path=q(s,t);s.data("sf-options",t);l(s,t);m(r);f(s);i(s,t);r.not("."+o.bcClass).superfish("hide",true);t.onInit.call(this)})}}})();b.fn.superfish=function(d,c){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{return b.error("Method "+d+" does not exist on jQuery.fn.superfish")}}};b.fn.superfish.defaults={popUpSelector:"ul",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:true,disableHI:false,onInit:b.noop,onBeforeShow:b.noop,onShow:b.noop,onBeforeHide:b.noop,onHide:b.noop,onIdle:b.noop,onDestroy:b.noop}})(jQuery);(function($){$.fn.markItUp=function(settings,extraSettings){var method,params,options,ctrlKey,shiftKey,altKey;ctrlKey=shiftKey=altKey=false;if(typeof settings=="string"){method=settings;params=extraSettings}options={id:"",nameSpace:"",root:"",previewHandler:false,previewInWindow:"",previewInElement:"",previewAutoRefresh:true,previewPosition:"after",previewTemplatePath:"~/templates/preview.html",previewParser:false,previewParserPath:"",previewParserVar:"data",resizeHandle:true,beforeInsert:"",afterInsert:"",onEnter:{},onShiftEnter:{},onCtrlEnter:{},onTab:{},markupSet:[{}]};$.extend(options,settings,extraSettings);if(!options.root){$("script").each(function(a,tag){miuScript=$(tag).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);if(miuScript!==null){options.root=miuScript[1]}})}var uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"}};var matched=uaMatch(navigator.userAgent);var browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version}if(browser.chrome){browser.webkit=true}else{if(browser.webkit){browser.safari=true}}return this.each(function(){var $$,textarea,levels,scrollPosition,caretPosition,caretOffset,clicked,hash,header,footer,previewWindow,template,iFrame,abort;$$=$(this);textarea=this;levels=[];abort=false;scrollPosition=caretPosition=0;caretOffset=-1;options.previewParserPath=localize(options.previewParserPath);options.previewTemplatePath=localize(options.previewTemplatePath);if(method){switch(method){case"remove":remove();break;case"insert":markup(params);break;default:$.error("Method "+method+" does not exist on jQuery.markItUp")}return}function localize(data,inText){if(inText){return data.replace(/("|')~\//g,"$1"+options.root)}return data.replace(/^~\//,options.root)}function init(){id="";nameSpace="";if(options.id){id='id="'+options.id+'"'}else{if($$.attr("id")){id='id="markItUp'+($$.attr("id").substr(0,1).toUpperCase())+($$.attr("id").substr(1))+'"'}}if(options.nameSpace){nameSpace='class="'+options.nameSpace+'"'}$$.wrap("<div "+nameSpace+"></div>");$$.wrap("<div "+id+' class="markItUp"></div>');$$.wrap('<div class="markItUpContainer"></div>');$$.addClass("markItUpEditor");header=$('<div class="markItUpHeader"></div>').insertBefore($$);$(dropMenus(options.markupSet)).appendTo(header);footer=$('<div class="markItUpFooter"></div>').insertAfter($$);if(options.resizeHandle===true&&browser.safari!==true){resizeHandle=$('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown.markItUp",function(e){var h=$$.height(),y=e.clientY,mouseMove,mouseUp;mouseMove=function(e){$$.css("height",Math.max(20,e.clientY+h-y)+"px");return false};mouseUp=function(e){$("html").unbind("mousemove.markItUp",mouseMove).unbind("mouseup.markItUp",mouseUp);return false};$("html").bind("mousemove.markItUp",mouseMove).bind("mouseup.markItUp",mouseUp)});footer.append(resizeHandle)}$$.bind("keydown.markItUp",keyPressed).bind("keyup",keyPressed);$$.bind("insertion.markItUp",function(e,settings){if(settings.target!==false){get()}if(textarea===$.markItUp.focused){markup(settings)}});$$.bind("focus.markItUp",function(){$.markItUp.focused=this});if(options.previewInElement){refreshPreview()}}function stripHTML(html){var tmp=document.createElement("DIV");tmp.innerHTML=html;return tmp.textContent||tmp.innerText}function dropMenus(markupSet){var ul=$("<ul></ul>"),i=0;$("li:hover > ul",ul).css("display","block");$.each(markupSet,function(){var button=this,t="",title,li,j;title=(button.key)?(stripHTML(button.name)||"")+" [Ctrl+"+button.key+"]":(stripHTML(button.name)||"");key=(button.key)?'accesskey="'+button.key+'"':"";if(button.separator){li=$('<li class="markItUpSeparator">'+(button.separator||"")+"</li>").appendTo(ul)}else{i++;for(j=levels.length-1;j>=0;j--){t+=levels[j]+"-"}li=$('<li class="markItUpButton markItUpButton'+t+(i)+" "+(button.className||"")+'"><a href="" '+key+' title="'+title+'">'+(button.name||"")+"</a></li>").bind("contextmenu.markItUp",function(){return false}).bind("click.markItUp",function(e){e.preventDefault()}).bind("focusin.markItUp",function(){$$.focus()}).bind("mouseup",function(){if(button.call){eval(button.call)()}setTimeout(function(){markup(button)},1);return false}).bind("mouseenter.markItUp",function(){$("> ul",this).show();$(document).one("click",function(){$("ul ul",header).hide()})}).bind("mouseleave.markItUp",function(){$("> ul",this).hide()}).appendTo(ul);if(button.dropMenu){levels.push(i);$(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu))}}});levels.pop();return ul}function magicMarkups(string){if(string){string=string.toString();string=string.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(x,a){var b=a.split("|!|");if(altKey===true){return(b[1]!==undefined)?b[1]:b[0]}else{return(b[1]===undefined)?"":b[0]}});string=string.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(x,a){var b=a.split(":!:");if(abort===true){return false}value=prompt(b[0],(b[1])?b[1]:"");if(value===null){abort=true}return value});return string}return""}function prepare(action){if($.isFunction(action)){action=action(hash)}return magicMarkups(action)}function build(string){var openWith=prepare(clicked.openWith);var placeHolder=prepare(clicked.placeHolder);var replaceWith=prepare(clicked.replaceWith);var closeWith=prepare(clicked.closeWith);var openBlockWith=prepare(clicked.openBlockWith);var closeBlockWith=prepare(clicked.closeBlockWith);var multiline=clicked.multiline;if(replaceWith!==""){block=openWith+replaceWith+closeWith}else{if(selection===""&&placeHolder!==""){block=openWith+placeHolder+closeWith}else{string=string||selection;var lines=[string],blocks=[];if(multiline===true){lines=string.split(/\r?\n/)}for(var l=0;l<lines.length;l++){line=lines[l];var trailingSpaces;if(trailingSpaces=line.match(/ *$/)){blocks.push(openWith+line.replace(/ *$/g,"")+closeWith+trailingSpaces)}else{blocks.push(openWith+line+closeWith)}}block=blocks.join("\n")}}block=openBlockWith+block+closeBlockWith;return{block:block,openBlockWith:openBlockWith,openWith:openWith,replaceWith:replaceWith,placeHolder:placeHolder,closeWith:closeWith,closeBlockWith:closeBlockWith}}function markup(button){var len,j,n,i;hash=clicked=button;get();$.extend(hash,{line:"",root:options.root,textarea:textarea,selection:(selection||""),caretPosition:caretPosition,ctrlKey:ctrlKey,shiftKey:shiftKey,altKey:altKey});prepare(options.beforeInsert);prepare(clicked.beforeInsert);if((ctrlKey===true&&shiftKey===true)||button.multiline===true){prepare(clicked.beforeMultiInsert)}$.extend(hash,{line:1});if((ctrlKey===true&&shiftKey===true)){lines=selection.split(/\r?\n/);for(j=0,n=lines.length,i=0;i<n;i++){if($.trim(lines[i])!==""){$.extend(hash,{line:++j,selection:lines[i]});lines[i]=build(lines[i]).block}else{lines[i]=""}}string={block:lines.join("\n")};start=caretPosition;len=string.block.length+((browser.opera)?n-1:0)}else{if(ctrlKey===true){string=build(selection);start=caretPosition+string.openWith.length;len=string.block.length-string.openWith.length-string.closeWith.length;len=len-(string.block.match(/ $/)?1:0);len-=fixIeBug(string.block)}else{if(shiftKey===true){string=build(selection);start=caretPosition;len=string.block.length;len-=fixIeBug(string.block)}else{string=build(selection);start=caretPosition+string.block.length;len=0;start-=fixIeBug(string.block)}}}if((selection===""&&string.replaceWith==="")){caretOffset+=fixOperaBug(string.block);start=caretPosition+string.openBlockWith.length+string.openWith.length;len=string.block.length-string.openBlockWith.length-string.openWith.length-string.closeWith.length-string.closeBlockWith.length;caretOffset=$$.val().substring(caretPosition,$$.val().length).length;caretOffset-=fixOperaBug($$.val().substring(0,caretPosition))}$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition});if(string.block!==selection&&abort===false){insert(string.block);set(start,len)}else{caretOffset=-1}get();$.extend(hash,{line:"",selection:selection});if((ctrlKey===true&&shiftKey===true)||button.multiline===true){prepare(clicked.afterMultiInsert)}prepare(clicked.afterInsert);prepare(options.afterInsert);if(previewWindow&&options.previewAutoRefresh){refreshPreview()}shiftKey=altKey=ctrlKey=abort=false}function fixOperaBug(string){if(browser.opera){return string.length-string.replace(/\n*/g,"").length}return 0}function fixIeBug(string){if(browser.msie){return string.length-string.replace(/\r*/g,"").length}return 0}function insert(block){if(document.selection){var newSelection=document.selection.createRange();newSelection.text=block}else{textarea.value=textarea.value.substring(0,caretPosition)+block+textarea.value.substring(caretPosition+selection.length,textarea.value.length)}}function set(start,len){if(textarea.createTextRange){if(browser.opera&&browser.version>=9.5&&len==0){return false}range=textarea.createTextRange();range.collapse(true);range.moveStart("character",start);range.moveEnd("character",len);range.select()}else{if(textarea.setSelectionRange){textarea.setSelectionRange(start,start+len)}}textarea.scrollTop=scrollPosition;textarea.focus()}function get(){textarea.focus();scrollPosition=textarea.scrollTop;if(document.selection){selection=document.selection.createRange().text;if(browser.msie){var range=document.selection.createRange(),rangeCopy=range.duplicate();rangeCopy.moveToElementText(textarea);caretPosition=-1;while(rangeCopy.inRange(range)){rangeCopy.moveStart("character");caretPosition++}}else{caretPosition=textarea.selectionStart}}else{caretPosition=textarea.selectionStart;selection=textarea.value.substring(caretPosition,textarea.selectionEnd)}return selection}function preview(){return;if(typeof options.previewHandler==="function"){previewWindow=true}else{if(options.previewInElement){previewWindow=$(options.previewInElement)}else{if(!previewWindow||previewWindow.closed){if(options.previewInWindow){previewWindow=window.open("","preview",options.previewInWindow);$(window).unload(function(){previewWindow.close()})}else{iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>');if(options.previewPosition=="after"){iFrame.insertAfter(footer)}else{iFrame.insertBefore(header)}previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1]}}else{if(altKey===true){if(iFrame){iFrame.remove()}else{previewWindow.close()}previewWindow=iFrame=false}}}}if(!options.previewAutoRefresh){refreshPreview()}if(options.previewInWindow){previewWindow.focus()}}function refreshPreview(){renderPreview()}function renderPreview(){var phtml;if(options.previewHandler&&typeof options.previewHandler==="function"){options.previewHandler($$.val())}else{if(options.previewParser&&typeof options.previewParser==="function"){var data=options.previewParser($$.val());writeInPreview(localize(data,1))}else{if(options.previewParserPath!==""){$.ajax({type:"POST",dataType:"text",global:false,url:options.previewParserPath,data:options.previewParserVar+"="+encodeURIComponent($$.val()),success:function(data){writeInPreview(localize(data,1))}})}else{if(!template){$.ajax({url:options.previewTemplatePath,dataType:"text",global:false,success:function(data){writeInPreview(localize(data,1).replace(/<!-- content -->/g,$$.val()))}})}}}}return false}function writeInPreview(data){if(options.previewInElement){$(options.previewInElement).html(data)}else{if(previewWindow&&previewWindow.document){try{sp=previewWindow.document.documentElement.scrollTop}catch(e){sp=0}previewWindow.document.open();previewWindow.document.write(data);previewWindow.document.close();previewWindow.document.documentElement.scrollTop=sp}}}function keyPressed(e){shiftKey=e.shiftKey;altKey=e.altKey;ctrlKey=(!(e.altKey&&e.ctrlKey))?(e.ctrlKey||e.metaKey):false;if(e.type==="keydown"){if(ctrlKey===true){li=$('a[accesskey="'+((e.keyCode==13)?"\\n":String.fromCharCode(e.keyCode))+'"]',header).parent("li");if(li.length!==0){ctrlKey=false;setTimeout(function(){li.triggerHandler("mouseup")},1);return false}}if(e.keyCode===13||e.keyCode===10){if(ctrlKey===true){ctrlKey=false;markup(options.onCtrlEnter);return options.onCtrlEnter.keepDefault}else{if(shiftKey===true){shiftKey=false;markup(options.onShiftEnter);return options.onShiftEnter.keepDefault}else{markup(options.onEnter);return options.onEnter.keepDefault}}}if(e.keyCode===9){if(shiftKey==true||ctrlKey==true||altKey==true){return false}if(caretOffset!==-1){get();caretOffset=$$.val().length-caretOffset;set(caretOffset,0);caretOffset=-1;return false}else{markup(options.onTab);return options.onTab.keepDefault}}}}function remove(){$$.unbind(".markItUp").removeClass("markItUpEditor");$$.parent("div").parent("div.markItUp").parent("div").replaceWith($$);$$.data("markItUp",null)}init()})};$.fn.markItUpRemove=function(){return this.each(function(){$(this).markItUp("remove")})};$.markItUp=function(settings){var options={target:false};$.extend(options,settings);if(options.target){return $(options.target).each(function(){$(this).focus();$(this).trigger("insertion",[options])})}else{$("textarea").trigger("insertion",[options])}}})(jQuery);var myBBCodeSettings={markupSet:[{name:"Bold",key:"B",openWith:"[b]",closeWith:"[/b]"},{name:"Italic",key:"I",openWith:"[i]",closeWith:"[/i]"},{name:"Underline",key:"U",openWith:"[u]",closeWith:"[/u]"},{name:"Strikethrough",openWith:"[s]",closeWith:"[/s]"},{name:"Font Size",openWith:"[size=[![Font size]!]]",closeWith:"[/size]",dropMenu:[{name:'<span style="line-height:16px;font-size:120%">Big</span>',openWith:"[size=120%]",closeWith:"[/size]"},{name:'<span style="line-height:16px;font-size:100%">Normal</span>',openWith:"[size=100%]",closeWith:"[/size]"},{name:'<span style="line-height:16px;font-size:80%">Small</span>',openWith:"[size=80%]",closeWith:"[/size]"}]},{name:"Font Color",className:"colors",openWith:"[color=[![Font Color]!]]",closeWith:"[/color]",dropMenu:[{name:"Yellow",openWith:"[color=yellow]",closeWith:"[/color]",className:"col1-1"},{name:"Orange",openWith:"[color=orange]",closeWith:"[/color]",className:"col1-2"},{name:"Red",openWith:"[color=red]",closeWith:"[/color]",className:"col1-3"},{name:"Blue",openWith:"[color=blue]",closeWith:"[/color]",className:"col2-1"},{name:"Purple",openWith:"[color=purple]",closeWith:"[/color]",className:"col2-2"},{name:"Green",openWith:"[color=green]",closeWith:"[/color]",className:"col2-3"},{name:"White",openWith:"[color=white]",closeWith:"[/color]",className:"col3-1"},{name:"Gray",openWith:"[color=gray]",closeWith:"[/color]",className:"col3-2"},{name:"Black",openWith:"[color=black]",closeWith:"[/color]",className:"col3-3"}]},{name:"Font Background Color",className:"bgcolors",openWith:"[bgcolor=[![Font Background Color]!]]",closeWith:"[/bgcolor]",dropMenu:[{name:"Yellow",openWith:"[bgcolor=yellow]",closeWith:"[/bgcolor]",className:"col1-1"},{name:"Orange",openWith:"[bgcolor=orange]",closeWith:"[/bgcolor]",className:"col1-2"},{name:"Red",openWith:"[bgcolor=red]",closeWith:"[/bgcolor]",className:"col1-3"},{name:"Blue",openWith:"[bgcolor=blue]",closeWith:"[/bgcolor]",className:"col2-1"},{name:"Purple",openWith:"[bgcolor=purple]",closeWith:"[/bgcolor]",className:"col2-2"},{name:"Green",openWith:"[bgcolor=green]",closeWith:"[/bgcolor]",className:"col2-3"},{name:"White",openWith:"[bgcolor=white]",closeWith:"[/bgcolor]",className:"col3-1"},{name:"Gray",openWith:"[bgcolor=gray]",closeWith:"[/bgcolor]",className:"col3-2"},{name:"Black",openWith:"[bgcolor=black]",closeWith:"[/bgcolor]",className:"col3-3"}]},{separator:" "},{name:"Picture",key:"P",replaceWith:"[img][![Image url]!][/img]"},{name:"Link",key:"L",openWith:"[url=[![Link url]!]]",closeWith:"[/url]",placeHolder:"Your text to link here..."},{name:"YouTube Video",openWith:"[youtube]",closeWith:"[/youtube]"},{separator:" "},{name:"Bulleted list",openWith:"[list]\n",closeWith:"\n[/list]"},{name:"Numeric list",openWith:"[list=[![Starting number]!]]\n",closeWith:"\n[/list]"},{name:"List item",openWith:"[*] "},{separator:" "},{name:"Quotes",openWith:"[quote]",closeWith:"[/quote]"},{name:"Code",openWith:"[code]",closeWith:"[/code]"},{separator:" "},{name:"Clean",replaceWith:function(a){return a.selection.replace(/\[(.*?)\]/g,"")}},]};(function(c){var b=0;c.fn.upload=function(f,i,n,m){var l=this,k,j="jquery_upload"+ ++b,h=c('<iframe name="'+j+'" style="position:absolute;top:-9999px" />').appendTo("body"),g='<form target="'+j+'" method="post" action="'+f+'" enctype="multipart/form-data" />';if(c.isFunction(i)){m=n;n=i;i={}}g=l.wrap(g).parent("form");k=e(i);k=k?c(k).appendTo(g):null;g.submit(function(){h.on("load",function(){var o=a(this,m);if(k){k.remove()}l.unwrap();h.remove();if(m==="script"){c.globalEval(o)}if(n){n.call(self,o)}})}).submit()};function e(f){return c.map(d(f),function(g){return'<input type="hidden" name="'+g.name+'" value="'+g.value+'"/>'}).join("")}function d(f){if(c.isArray(f)){return f}var h=[];function g(i,j){h.push({name:i,value:j})}if(typeof f==="object"){c.each(f,function(i){if(c.isArray(this)){c.each(this,function(){g(i,this)})}else{g(i,c.isFunction(this)?this():this)}})}else{if(typeof f==="string"){c.each(f.split("&"),function(){var i=c.map(this.split("="),function(j){return decodeURIComponent(j.replace(/\+/g," "))});g(i[0],i[1])})}}return h}function a(g,f){var i;var h=c(g).contents()[0];if(c.isXMLDoc(h)){return h}i=c(h).find("body").html();switch(f){case"xml":i=c.parseXML(i);break;case"json":i=c.parseJSON(i);break}return i}})(jQuery);$.cookie.defaults={expires:365,path:"/",domain:document.domain.split(".").slice(-2).join(".")};$(document).ready(function(){var k=$.cookie("uid");k=(!k)?0:parseInt(k,10);if(k<0){k=0}if(k>0){$(".v_guest").remove();$(".v_user").show();$('[class*="v_user_"]').hide();$(".v_user_"+k).show();var f=$.cookie("urole");if(f){var B=f.split("|");for(var w=0;w<B.length;++w){$(".v_user_"+B[w]).show()}}var g=$.cookie("username");if(g){$("#username").text(g)}}else{$(".v_guest").show();$('[class*="v_user"]').remove()}$(".image_slider").imageSlider();$(".ajax_load").each(function(){var i=$(this);var C=i.attr("data-ajax");if(C){$.getJSON(C,function(D){for(var E in D){$(".ajax_"+E,i).html(D[E])}})}});$("nav#page_navbar ul.sf-menu").superfish();var z=false,s=$("div.nav_mobile > a.icon-menu"),u=$("nav#page_navbar");var v=function(){if(u.css("display")==="none"){if(!z){s.on("click",function(i){i.preventDefault();u.toggleClass("hidden")});z=true}}else{if(z){s.off("click");z=false}if(!u.hasClass("hidden")){u.addClass("hidden")}}};v();$(window).resize(v);$("div.nav_mobile a.icon-left-big").click(function(i){i.preventDefault();window.history.back()});$("div.nav_mobile a.icon-right-big").click(function(i){i.preventDefault();window.history.forward()});$("div.nav_mobile a.icon-cw").click(function(i){i.preventDefault();location.reload()});var A=function(i){var C=new Array();$("th",i).each(function(){C.push(this.innerHTML)});if(C.length>0){$("tbody tr",i).each(function(){var D=$("td",this);for(w=0;w<D.length;w++){$(D.get(w)).attr("data-header",C[w])}})}};$("table").each(function(){A(this)});if(k>0){var t=$.cookie("pmCount");if(t>0){$("a#pm").append('<span style="color:red;"> ('+t+") <span>")}var c=$("#bbcode_editor");if(c.length){var q=$("#bbcode_editor textarea"),y=$("#bbcode_editor .node_title"),o=$("#file_list"),p=$("tbody",o);q.markItUp(myBBCodeSettings);$("button.delete").click(function(C){var i=confirm("此操作不可恢复，您确认要删除该内容吗？");if(i){window.location=$(this).attr("data-action")}});$("button.reply").click(function(i){c.attr("action",$(this).attr("data-action"));y.hide();o.hide();p.children().remove();q.val("").focus();window.scrollTo(0,c.offset().top)});$("button.quote").click(function(D){c.attr("action",$(this).attr("data-action"));y.hide();o.hide();p.children().remove();var C=$($(this).attr("data-raw"));var i=C.find("pre.username").html(),E='[quote="'+i+'"]'+C.find("pre.body").html()+"[/quote]\n";q.val("").focus();$.markItUp({replaceWith:E});window.scrollTo(0,c.offset().top)});var d=function(G){for(var E=0;E<G.length;E++){var I=G[E].fid?G[E].fid:G[E].path,F=new Array("jpeg","gif","png"),D=G[E].path.split(".").pop(),C;if(F.indexOf(D)>=0){C="[img]"+G[E].path+"[/img]"}else{C='[file="'+G[E].path+'"]'+G[E].name+"[/file]"}var H='<tr><td><input type="text" name="files['+I+'][name]" value="'+G[E].name+'"><input type="hidden" name="files['+I+'][path]" value="'+G[E].path+'"></td><td>'+C+'</td><td><button type="button" class="file_delete">删除</button></td></tr>';p.append(H)}A(o)};$("button.edit").click(function(E){var D=$(this).attr("data-action");c.attr("action",D);if(D.split("/")[1]=="node"){y.show()}else{y.hide()}p.children().remove();var C=$($(this).attr("data-raw"));var i=$.parseJSON(C.find("pre.files").html());if(i instanceof Array&&i.length>0){d(i);o.show()}else{o.hide()}q.val($($(this).attr("data-raw")).find("pre.body").html()).focus();window.scrollTo(0,c.offset().top)});$("button.create_node").click(function(i){c.attr("action",$(this).attr("data-action"));y.show();o.hide();p.children().remove();q.val("");$("input",y).val("").focus();window.scrollTo(0,c.offset().top)});$("#file_upload").click(function(F){var D=$("#file_select");if(D.val().length>0){var i=0,E=D.get(0).files;if(E){if(E.length>5){alert("一次只能上传 5 张图片");return}for(w=0;w<E.length;w++){i+=E[w].size;if(i>5242880){alert("一次只能上传图片的总大小为 5 MB，您只能选择前 "+w+" 张图片上传");return}}}var C=$(this);C.prepend('<span class="spinner"></span>');C.prop("disabled",true);D.upload("/file/ajax/upload",function(H){D.val("");C.prop("disabled",false);C.find("span.spinner").remove();try{if(H.error&&H.error.length>0){var J="";if(Object.prototype.toString.call(H.error)==="[object Array]"){for(var G=0;G<H.error.length;G++){J=J+H.error[G].name+" : "+H.error[G].error+"\n"}}else{J=H.error}alert(J)}if(H.saved&&H.saved.length>0){d(H.saved);o.show()}}catch(I){alert("您的浏览器在上传文件过程中遇到错误，请换用其他浏览器上传文件。");$.post("/bug/ajax-file-upload","error="+I.message+"&res="+encodeURIComponent(H))}},"json")}});$("#file_clear").click(function(){$("#file_select").val("")});o.on("click",".file_delete",function(C){var D=this.parentNode.parentNode;var i=D.parentNode.parentNode;i.deleteRow(D.rowIndex);if(i.rows.length<=1){o.hide()}});$("#bbcode_editor button:submit").click(function(i){if($("#file_select").val()){alert("请先上传或清空选中的文件");i.preventDefault()}});$("button.bookmark").click(function(){var i=$(this);$.get(i.attr("data-action"),function(){alert("帖子成功加入到您的收藏夹中！")})})}var b=[];$("button.edit_bookmark").click(function(){var i=$(this);if(i.text()=="编辑"){i.text("保存");$("button.delete_bookmark").show()}else{if(b){i.prop("disabled",true);$.get(i.attr("data-action")+"?nid="+b.join(),function(){i.text("编辑");$("button.delete_bookmark").hide();b=[];i.prop("disabled",false)})}else{i.text("编辑");$("button.delete_bookmark").hide()}}});$("button.delete_bookmark").click(function(){button=$(this);b.push(button.attr("data-nid"));button.parent().remove()})}var m=$(window),j=$("#goTop"),l=false;var n=function(){l=true;j.stop().animate({bottom:"20px"},300)};var r=function(){l=false;j.stop().animate({bottom:"-100px"},300)};var e=function(){if(m.scrollTop()>300){if(!l){n()}}else{if(l){r()}}};e();m.scroll(e);j.click(function(i){$("html, body").stop().animate({scrollTop:0},300,r);i.preventDefault()});var x={"#/user/login":'<form accept-charset="UTF-8" autocomplete="on" method="post" action="/user/login"><fieldset><label class="label" data-help="输入您在 缤纷休斯顿 华人论坛 的用户名">用户名</label><input name="username" type="text" required="" autofocus=""></fieldset><fieldset><label class="label" data-help="输入与您用户名相匹配的密码">密码</label><input name="password" type="password" required=""></fieldset><fieldset><button type="submit">登录</button></fieldset></form>',"#/password/forget":'<form accept-charset="UTF-8" autocomplete="on" method="post" action="/password/forget"><fieldset><label class="label" data-help="输入您的用户名">用户名</label><input name="username" type="text" required="" autofocus=""></fieldset><fieldset><label class="label" data-help="输入您注册时使用的电子邮箱地址">注册邮箱</label><input name="email" type="email" required=""></fieldset><fieldset><button type="submit">发送重设密码链接</button></fieldset></form>',"#/user/username":'<form accept-charset="UTF-8" method="post" action="/user/username"><fieldset><label class="label" data-help="输入您注册时使用的电子邮箱地址">注册邮箱</label><input size="22" name="email" type="email" required="" autofocus=""></fieldset><fieldset><button type="submit">发送您的用户名</button></fieldset></form>',"#/user/register":'<form accept-charset="UTF-8" method="post" action="/user/register"><fieldset><label class="label" data-help="允许空格，不允许&quot;.&quot;、“-”、“_”以外的其他符号">用户名</label><input name="username" type="text" required="" autofocus=""></fieldset><fieldset><label class="label" data-help="一个有效的电子邮件地址。帐号激活后的初始密码和所有本站发出的信件都将寄至此地址。电子邮件地址将不会被公开，仅当您想要接收新密码或通知时才会使用">电子邮箱</label><input name="email" type="email" required=""></fieldset><fieldset><label class="label" data-help="确认电子邮箱">确认邮箱</label><input name="email2" type="email" required=""></fieldset><fieldset><label class="label">右边图片的内容是什么？</label><input name="captcha" type="text" required=""><img id="captchaImage" title="图形验证" alt="图形验证未能正确显示，请刷新" src="/captcha/1053381520"><a onclick="document.getElementById("captchaImage").setAttribute("src", "/captcha/1053381520" + Math.random().toString().slice(2)); event.preventDefault();" href="#">看不清，换一张</a></fieldset><fieldset><a href="/node/23200">网站使用规范</a><br><a href="/term">免责声明</a></fieldset><fieldset><button type="submit">同意使用规范和免责声明，并创建新帐号</button></fieldset></form>',"#/password/change":'<form accept-charset="UTF-8" autocomplete="off" method="post" action="/password/change"><fieldset><label class="label oldpassword">旧密码</label><input name="password_old" type="password" required="" autofocus=""></fieldset><fieldset><label class="label">新密码</label><input name="password_new" type="password" required=""></fieldset><fieldset><label class="label">确认新密码</label><input name="password_new2" type="password" required=""></fieldset><fieldset><button type="submit">更改密码</button></fieldset></form>',"#/pm/send":'<form accept-charset="UTF-8" autocomplete="off" method="post" action="/pm/send/[uid]"><fieldset><label class="label">收信人</label><a href="/user/[uid]">[username]</a></fieldset><fieldset><label class="label">短信正文</label><textarea name="body" required="required"></textarea></fieldset><fieldset><button type="submit">发送短信</button></fieldset></form>'};var h=$("div#popupbox"),a=$("div#messagebox");$("a.popup").click(function(G){G.preventDefault();var E=$(this);var D=E.attr("href"),i=x[D];if(i){$('<div id="overlay"></div>').insertBefore(h).click(function(){$(this).remove();h.hide()});if(E.attr("data-vars")){var F=JSON.parse(E.attr("data-vars"));for(var C in F){i=i.replace(new RegExp("\\["+C+"\\]","g"),String(F[C]))}}h.html(i);var H=$("form",h);H.submit(function(I){I.preventDefault();if(H.attr("action")){$.ajax({type:"POST",url:H.attr("action"),data:H.serialize(),success:function(J){h.html(J)}})}else{alert("错误：无法提交数据")}});h.show();h.css("margin-left",h.width()*-0.5);h.css("margin-top",h.height()*-0.5)}})});