//!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=432)}({432:function(e,t){if(window.frameElement){var n=function(){i=json.icon_youtube,r()},a=function(e,t){var n=e.parents(".theme-setting"),a=$('<img class="header-style-image" src="'.concat(t,'" alt="header style image">')).css("margin-top","10px");n.find("img").length?(n.find("img").remove(),n.append(a)):n.append(a)},r=function(){$(parent.document.getElementsByClassName("theme-editor__add-section")).map((function(e,t){var n=$(t).attr("data-new-section"),a=$(t).find(".theme-editor__add-section-item"),r=(n=n.replace(/(\{|\}|\")/gm,"")).match(/type:\s*.+(?=,)/gm);if((n=r?r[0].replace("type:","").trim():"")&&n in json.images&&!a.find(".section-sample-image").length){var i=$('<img class="section-sample-image" src="'.concat(json.images[n],'" alt="section image">'));i.css({marginTop:"10px",width:"100%"}),a.append(i).css("padding","15px")}}))},i="";$(document).ready((function(){setTimeout((function(){var e=$(parent.document.getElementsByClassName("te-panel")),t=null;e.each((function(e,n){"admin-helper"===$(n).attr("data-panel-slug")&&(t=$(n))}));var n=t.find(".next-card__section");n.length&&$.ajax({url:"//xadmin.arenacommerce.com/api/support-content",dataType:"html text",success:function(e){var t=$(e);n.find(".support-content").length||n.append(t)},error:function(e){}}),$(parent.document).off("click.arn").on("click.arn",".theme-editor-action-list > li",(function(e){setTimeout((function(){var e,t,n,r,o=parent.document.getElementsByClassName("te-panel--is-active");if($(o).length){var s=$(o).attr("id");if("add-section-panel"!==s){if(s.match(/section-.*/gm)){if((s=s.replace("section-","").replace(/-[0-9]+/g,""))in json.youtube&&(e=$(o),t=s,n=e.find(".te-panel__header >h2"),r=json.youtube[t],0==n.find("img").length&&(n.append(i),n.find("img").attr("data-link",r).click((function(){window.open($(this).attr("data-link"),"_blank")})))),"header-header"===s&&"header_styles"in json){var c=$(o).find('.theme-setting--range__slider[name="settings[sections][header][settings][header_style]"]'),l=c.val()-1;json.header_styles[l]?a(c,json.header_styles[l]):c.parents(".next-input-wrapper").find("img").remove(),c.off("change.arn").on("change.arn",(function(e){var t=e.currentTarget.value-1;json.header_styles[t]?a($(e.currentTarget),json.header_styles[t]):$(e.currentTarget).parents(".next-input-wrapper").find("img").remove()}))}if("header-header"===s&&"mobile_header_styles"in json){var d=$(o).find('.theme-setting--range__slider[name="settings[sections][header][settings][mobile_header_style]"]'),u=d.val()-1;json.mobile_header_styles[u]?a(d,json.mobile_header_styles[u]):d.parents(".next-input-wrapper").find("img").remove(),d.off("change.arn").on("change.arn",(function(e){var t=e.currentTarget.value-1;json.mobile_header_styles[t]?a($(e.currentTarget),json.mobile_header_styles[t]):$(e.currentTarget).parents(".next-input-wrapper").find("img").remove()}))}}$(o).attr("data-panel-slug")}}}),1e3)}))}),3e3);var e=document.createElement("script");e.setAttribute("src","https://cdn.arenacommerce.com/admin-help/zeexov1/zeexo-helper.js"),e.setAttribute("crossorigin","anonymous"),e.onload=n,document.body.appendChild(e)}))}}});
if (window.frameElement) {
    let ytIcon = '';
	
    $(document).ready(function() {
        /**
         * APPEND HELP INFO CONTENT
         */
        setTimeout(function() {
            // Show helper section cotent wrapper
            let showHelpers = $(parent.document.getElementsByClassName("te-panel"));
            let showHelper = null;
            showHelpers.each(function(index, elem) {
                if ($(elem).attr('data-panel-slug') === 'admin-helper') {
                    showHelper = $(elem);
                }
            });
            // Show helper section content inner
            let showHelper__Inner = showHelper.find('.next-card__section');

            if (showHelper__Inner.length) {
                $.ajax({
                    url: '//xadmin.arenacommerce.com/api/support-content',
                    dataType: 'html text',
                    success: function(data) {
                        let _data = $(data);
                        // prevent duplicate
                        if (!showHelper__Inner.find('.support-content').length) {
                            showHelper__Inner.append(_data);
                        }
                    },
                    error: function(err) {}
                });
            }

            $(parent.document).off('click.arn').on('click.arn', '.theme-editor-action-list > li', (e) => {
                setTimeout(() => {
                    let activePanel = parent.document.getElementsByClassName('te-panel--is-active');
                    if ($(activePanel).length) {
                        let panelId = $(activePanel).attr('id');
                        if (panelId !== 'add-section-panel') {
                            // section
                            if (panelId.match(/section-.*/gm)) {
                                panelId = panelId.replace('section-', '').replace(/-[0-9]+/g, '');
                                if (panelId in json.youtube) {
                                    setIconYoutube($(activePanel), panelId);
                                }

                                // header style
                                if (panelId === 'header-header' && 'header_styles' in json) {
                                    //let selector = $(activePanel).find('#setting-header-header_style');
                                    let selector = $(activePanel).find('.theme-setting--range__slider[name="settings[sections][header][settings][header_style]"]');
                                    let currentSelectVal = selector.val() - 1;
									
                                    if (json['header_styles'][currentSelectVal]) {
                                        setHeaderStyleImg(selector, json['header_styles'][currentSelectVal]);
                                    } else {
                                        selector.parents('.theme-setting').find('img').remove();
                                    }
                                    selector.off('change.arn').on('change.arn', (e) => {
                                        let curVal = e.currentTarget.value - 1;
										
                                        if (json['header_styles'][curVal]) {
                                            setHeaderStyleImg($(e.currentTarget), json['header_styles'][curVal]);
                                        } else {
                                            $(e.currentTarget).parents('.theme-setting').find('img').remove();
                                        }
                                    })
                                }
                              
                                // mobile header style
                                if (panelId === 'header-header' && 'mobile_header_styles' in json) {
                                    let selector_2 = $(activePanel).find('.theme-setting--range__slider[name="settings[sections][header][settings][mobile_header_style]"]');
                                    let currentSelectVal_2 = selector_2.val() - 1;
									
                                    if (json['mobile_header_styles'][currentSelectVal_2]) {
                                        setHeaderStyleImg(selector_2, json['mobile_header_styles'][currentSelectVal_2]);
                                    } else {
                                        selector_2.parents('.theme-setting').find('img').remove();
                                    }
                                    selector_2.off('change.arn').on('change.arn', (e) => {
                                        let curVal_2 = e.currentTarget.value - 1;
										
                                        if (json['mobile_header_styles'][curVal_2]) {
                                            setHeaderStyleImg($(e.currentTarget), json['mobile_header_styles'][curVal_2]);
                                        } else {
                                            $(e.currentTarget).parents('.theme-setting').find('img').remove();
                                        }
                                    })
                                }
                            }
                            // settings
                            if ($(activePanel).attr('data-panel-slug')) {
                                
                            }

                        }
                    }
                }, 1000)
            })

        }, 3000);

        /**
         * CHECK JSON DATA THEN ADD TO DOM
         */
        var s = document.createElement('script');
        s.setAttribute('src', adminlinks);
        s.setAttribute('crossorigin', 'anonymous');
        s.onload = jsonReady;
        document.body.appendChild(s);

    });

    function jsonReady() {
        ytIcon = json.icon_youtube;
        setNewSectionImages();
    }

    function setHeaderStyleImg(target, link) {
        let _parent = target.parents('.theme-setting');
      	console.log(_parent.length);
        let sampleImg = $(`<img class="header-style-image" src="${link}" alt="header style image">`).css('margin-top', '10px');
        if (!_parent.find('img').length) {
            _parent.append(sampleImg);
        } else {
            _parent.find('img').remove();
            _parent.append(sampleImg);
        }
    }

    function setIconYoutube(target, sectionName) {
        let $h2 = target.find('.te-panel__header >h2');
        let ytLink = json.youtube[sectionName];
        if ($h2.find("img").length == 0) {
            $h2.append(ytIcon);
            $h2.find("img").attr("data-link", ytLink).click(function() {
                window.open($(this).attr('data-link'), '_blank');
            });
        }
    }

    function setNewSectionImages() {
        let addSectionBtns = $(parent.document.getElementsByClassName("theme-editor__add-section"));

        addSectionBtns.map((index, btn_wrap) => {
            let sectionName = $(btn_wrap).attr('data-new-section');
            let btn = $(btn_wrap).find('.theme-editor__add-section-item');
            sectionName = sectionName.replace(/(\{|\}|\")/gm, "");
            let matchRegex = sectionName.match(/type:\s*.+(?=,)/gm);

            if (matchRegex) {
              sectionName = matchRegex[0].replace("type:", "").trim();
            } else {
                sectionName = '';
            }

            if (sectionName && sectionName in json.images) {
                if (!btn.find('.section-sample-image').length) {
                    let sampleImg = $(`<img class="section-sample-image" src="${json.images[sectionName]}" alt="section image">`);

                    sampleImg.css({
                        marginTop: '10px',
                        width: '100%',
                    });

                    btn.append(sampleImg).css('padding', '15px');
                }
            }

        })

    }
}