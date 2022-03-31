"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[733],{5733:function(T,g,i){i.r(g),i.d(g,{FavoritesModule:function(){return r}});var d=i(7289),u=i(5134),v=i(1048),m=i(269),l=i(435),c=i(9870),L=i(8674),Z=i(7621),F=i(2967),p=i(2522),t=i(138),y=i(5947),x=i(792);function A(n,e){if(1&n){var o=t.EpF();t.TgZ(0,"app-merchant-teaser",5),t.NdJ("go",function(f){return t.CHM(o),t.oxw(2).merchantClicked(f)})("favorite",function(f){return t.CHM(o),t.oxw(2).favoriteStatusToggle(f)}),t.qZA()}if(2&n){var a=e.$implicit;t.Q6J("merchant",a)("isLogin",!0)}}function M(n,e){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,A,1,2,"app-merchant-teaser",4),t.qZA()),2&n){var o=e.ngIf;t.xp6(1),t.Q6J("ngForOf",o)}}function _(n,e){1&n&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.O4$(),t.TgZ(2,"svg",8),t._UZ(3,"rect",9),t._UZ(4,"path",10),t._UZ(5,"path",11),t._UZ(6,"path",12),t.qZA(),t.qZA(),t.kcU(),t.TgZ(7,"div",13),t.TgZ(8,"div"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.hij(" ",t.lcZ(10,2,"popupFavoritesListEmptyTitle")," "),t.xp6(3),t.hij(" ",t.lcZ(13,4,"popupFavoritesListEmptySubTitle")," "))}var s=function(){function n(e,o,a,C){(0,u.Z)(this,n),this.bg=e,this.eventService=o,this.router=a,this.popupService=C}return(0,d.Z)(n,[{key:"ngOnInit",value:function(){this.eventService.fireEvent(p.P.SEND_GOOGLE_ANALYTICS,{tabId:null,data:{type:"event",category:"Extension",action:"Popup Favorite",label:"Show"}}),this.favorites=this.popupService.favorites}},{key:"favoriteStatusToggle",value:function(o){var a=o.merchant;this.popupService.toggleFavorite(a),a.isFavorite=!a.isFavorite,this.eventService.fireEvent(p.P.SEND_GOOGLE_ANALYTICS,{tabId:null,data:{type:"event",category:"Extension",action:"Favorite reset",label:a.title}})}},{key:"merchantClicked",value:function(o){o.promoId?this.autoPromoActivation(o):this.goToMerchantInfo(o)}},{key:"autoPromoActivation",value:function(o){this.popupService.autoPromoActivation(o),window.close()}},{key:"goToMerchantInfo",value:function(o){var a=this,C=o.id;this.router.navigate(["merchant",C]).then(function(){a.router.navigate([{outlets:{popup:null}}])})}}]),n}();s.\u0275fac=function(e){return new(e||s)(t.Y36(F.v),t.Y36(p.P),t.Y36(m.F0),t.Y36(y.q))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-favorites"]],decls:5,vars:4,consts:[[1,"favorite"],["class","favorite__list",4,"ngIf","ngIfElse"],["empty",""],[1,"favorite__list"],["class","search-result-item",3,"merchant","isLogin","go","favorite",4,"ngFor","ngForOf"],[1,"search-result-item",3,"merchant","isLogin","go","favorite"],[1,"favorite__empty"],[1,"favorite__empty-img"],["width","214","height","128","viewBox","0 0 214 128","fill","none","xmlns","http://www.w3.org/2000/svg"],["x","0.5","y","0.5","width","213","height","127","fill","white","stroke","#EEEEEE"],["fill-rule","evenodd","clip-rule","evenodd","d","M143.529 47.5442L140.833 46.6071L139.754 38.7491C139.133 34.294 135.44 30.9568 130.978 30.8089C130.455 30.7925 129.949 30.8253 129.426 30.8911L105.517 34.2447L88.5371 28.2937C85.8406 27.3402 82.8826 28.7868 81.9347 31.4993L79.7449 37.8449L76.4764 38.3052C74.0577 38.6505 71.9168 39.9163 70.4297 41.8726C68.9589 43.8289 68.3215 46.2619 68.6647 48.6949L70.7565 63.8192L67.2919 73.8143C66.3441 76.5268 67.7822 79.5023 70.4787 80.4558L73.1752 81.3929L74.2538 89.2509C74.8748 93.706 78.5519 97.0432 83.0297 97.1911C83.5526 97.2076 84.0593 97.1747 84.5822 97.1089L108.491 93.7553L125.471 99.7063C128.167 100.66 131.125 99.2132 132.073 96.5007L134.263 90.1715L137.532 89.7112C142.532 89.0207 146.03 84.352 145.327 79.3379L143.235 64.1973L146.7 54.2021C147.664 51.4732 146.226 48.4977 143.529 47.5442ZM76.7548 46.6729C76.8855 46.4921 77.147 46.2619 77.5555 46.1962L130.521 38.7985C130.587 38.782 130.668 38.782 130.734 38.782C131.24 38.7985 131.812 39.1601 131.894 39.8341L136.078 70.1812L124.834 61.6163C123.723 60.7615 122.121 60.9916 121.272 62.1095L114.097 71.6443L97.3952 58.9203C96.2839 58.0654 94.6824 58.2956 93.8326 59.4134L80.5789 77.0365L76.5096 47.5771C76.4606 47.1661 76.6077 46.8538 76.7548 46.6729ZM118.803 51.769C118.803 55.1101 116.111 57.8187 112.789 57.8187C109.468 57.8187 106.775 55.1101 106.775 51.769C106.775 48.4278 109.468 45.7193 112.789 45.7193C116.111 45.7193 118.803 48.4278 118.803 51.769Z","fill","#EEEEEE"],["fill-rule","evenodd","clip-rule","evenodd","d","M187.333 14.6667C187.753 14.6667 188.135 14.7716 188.478 14.9815C188.822 15.1914 189.079 15.4776 189.251 15.8402L192.571 22.738L200.213 23.8543C200.595 23.9115 200.938 24.0642 201.244 24.3122C201.549 24.5603 201.768 24.8751 201.902 25.2568C202.016 25.6193 202.031 25.9866 201.945 26.3587C201.859 26.7308 201.673 27.0599 201.387 27.3461L195.805 32.9274L197.093 40.6839C197.17 41.0656 197.127 41.4376 196.965 41.8002C196.802 42.1627 196.559 42.4585 196.235 42.6875C196.044 42.821 195.844 42.9164 195.634 42.9737C195.424 43.0309 195.214 43.0596 195.004 43.0596C194.832 43.0596 194.661 43.0405 194.489 43.0023C194.317 42.9641 194.145 42.8974 193.974 42.802L187.333 39.2242L180.665 42.802C180.512 42.8974 180.35 42.9641 180.178 43.0023C180.006 43.0405 179.834 43.0596 179.663 43.0596C179.434 43.0596 179.219 43.0309 179.019 42.9737C178.818 42.9164 178.623 42.821 178.432 42.6875C178.108 42.4585 177.864 42.1627 177.702 41.8002C177.54 41.4376 177.497 41.0656 177.573 40.6839L178.861 32.9274L173.28 27.3461C172.994 27.0599 172.808 26.7308 172.722 26.3587C172.636 25.9866 172.65 25.6193 172.765 25.2568C172.898 24.8942 173.118 24.5841 173.423 24.3265C173.728 24.0689 174.072 23.9115 174.454 23.8543L182.096 22.738L185.416 15.8402C185.587 15.4776 185.845 15.1914 186.189 14.9815C186.532 14.7716 186.914 14.6667 187.333 14.6667Z","fill","#FFD839"],["fill-rule","evenodd","clip-rule","evenodd","d","M185.025 13.9122C184.998 13.8542 184.97 13.8226 184.912 13.7872C184.851 13.7501 184.783 13.7255 184.667 13.7255C184.55 13.7255 184.482 13.7501 184.422 13.7872C184.364 13.8226 184.336 13.8542 184.308 13.9122L184.304 13.9219L180.586 21.6462L172.041 22.8943C171.987 22.9026 171.938 22.9203 171.869 22.9787C171.8 23.0374 171.76 23.0911 171.733 23.1484C171.722 23.1991 171.723 23.2454 171.737 23.304C171.745 23.3418 171.762 23.3875 171.833 23.4594L178.042 29.6681L176.604 38.3279L176.599 38.3557C176.596 38.3674 176.596 38.3746 176.596 38.3781C176.595 38.3815 176.596 38.3834 176.596 38.3848C176.596 38.386 176.597 38.3994 176.61 38.4289C176.646 38.5077 176.688 38.5595 176.758 38.6092C176.808 38.6439 176.83 38.6491 176.826 38.6479C176.858 38.657 176.912 38.6674 176.996 38.6674C177.03 38.6674 177.067 38.6644 177.107 38.6573L177.132 38.6418L184.668 34.5985L192.145 38.6268C192.188 38.6508 192.205 38.6531 192.196 38.6513C192.248 38.6628 192.295 38.6674 192.337 38.6674C192.388 38.6674 192.446 38.6607 192.513 38.6423C192.518 38.641 192.538 38.6353 192.576 38.6091C192.645 38.5595 192.688 38.5076 192.723 38.4289C192.736 38.3988 192.738 38.3855 192.738 38.3848C192.738 38.3834 192.738 38.3815 192.738 38.3781C192.738 38.3746 192.737 38.3674 192.735 38.3557L192.729 38.3279L191.291 29.6681L197.5 23.4594C197.572 23.3875 197.588 23.3418 197.597 23.304C197.612 23.2399 197.611 23.1906 197.597 23.134C197.568 23.0618 197.534 23.0214 197.489 22.9847C197.419 22.9279 197.362 22.905 197.293 22.8944C197.292 22.8942 197.291 22.8941 197.291 22.894L188.748 21.6462L185.025 13.9122ZM197.547 21.1876C197.928 21.2449 198.272 21.3975 198.577 21.6456C198.882 21.8936 199.102 22.2085 199.235 22.5901C199.35 22.9526 199.364 23.32 199.278 23.692C199.192 24.0641 199.006 24.3933 198.72 24.6795L193.139 30.2608L194.427 38.0173C194.503 38.3989 194.46 38.771 194.298 39.1335C194.136 39.4961 193.892 39.7918 193.568 40.0208C193.377 40.1544 193.177 40.2498 192.967 40.307C192.757 40.3643 192.547 40.3929 192.337 40.3929C192.166 40.3929 191.994 40.3738 191.822 40.3357C191.65 40.2975 191.479 40.2307 191.307 40.1353L184.667 36.5576L177.998 40.1353C177.845 40.2307 177.683 40.2975 177.511 40.3357C177.339 40.3738 177.168 40.3929 176.996 40.3929C176.767 40.3929 176.552 40.3643 176.352 40.307C176.152 40.2498 175.956 40.1544 175.765 40.0208C175.441 39.7918 175.198 39.4961 175.035 39.1335C174.873 38.771 174.83 38.3989 174.907 38.0173L176.195 30.2608L170.613 24.6795C170.327 24.3933 170.141 24.0641 170.055 23.692C169.969 23.32 169.984 22.9526 170.098 22.5901C170.232 22.2275 170.451 21.9175 170.756 21.6599C171.062 21.4023 171.405 21.2449 171.787 21.1876L179.429 20.0714L182.749 13.1735C182.921 12.811 183.178 12.5247 183.522 12.3148C183.865 12.1049 184.247 12 184.667 12C185.086 12 185.468 12.1049 185.812 12.3148C186.155 12.5247 186.413 12.811 186.584 13.1735L189.904 20.0714L197.547 21.1876Z","fill","#121212"],[1,"favorite__empty-text"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,M,2,1,"div",1),t.ALo(2,"async"),t.qZA(),t.YNc(3,_,14,6,"ng-template",null,2,t.W1O)),2&e){var a=t.MAs(4);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,o.favorites))("ngIfElse",a)}},directives:[v.O5,v.sg,x.H],pipes:[v.Ov,c.X$],styles:["[_nghost-%COMP%]   *[_ngcontent-%COMP%]{font-family:Open Sans,Aria,Helvetica,sans-serif;box-sizing:border-box}.favorite[_ngcontent-%COMP%]{height:100%}.favorite__list[_ngcontent-%COMP%]{display:block;height:100%;overflow-y:auto;overflow-x:hidden;padding:4px}.favorite__empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;background:#FAFAFA;border-radius:4px}.favorite__empty-text[_ngcontent-%COMP%]{text-align:center;font-weight:400;font-size:12px;line-height:16px;max-width:65%;margin:24px auto 0}.favorite__empty-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){color:#121212}.favorite__empty-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){color:#a0a0a0;margin-top:8px}"],changeDetection:0});var E=[{path:"",component:s}],r=(0,d.Z)(function n(e){(0,u.Z)(this,n),this.svgIconsService=e,e.registerIcons([l.UA,l.GI])});r.\u0275fac=function(e){return new(e||r)(t.LFG(l.tw))},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[v.ez,c.aw.forChild({loader:{provide:c.Zw,useClass:Z.H}}),m.Bz.forChild(E),L.K,l.Kz]]})}}]);