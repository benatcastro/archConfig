(() => {
    if (!window.injectScriptLoaded) {
        window.injectScriptLoaded = !0, console.log("Loaded TP Netflix Injected");
        var getVideoPlayer = function() {
            var e = window.netflix.appContext.state.playerApp.getAPI().videoPlayer, t = e.getAllPlayerSessionIds().find((val => val.includes("watch")));
            return e.getVideoPlayerBySessionId(t);
        };
        function getWrapperStateNode() {
            const watchVideoWrapper = document.querySelector(".watch-video");
            if (watchVideoWrapper) {
                const internals = getReactInternals(watchVideoWrapper);
                if (internals) return internals.return.stateNode;
            }
            return null;
        }
        function isMovie() {
            try {
                const wrapperStateNode = getWrapperStateNode();
                return !!wrapperStateNode && "movie" === wrapperStateNode.state.playableData.summary.type;
            } catch (error) {
                return !1;
            }
        }
        function getReactInternals(root) {
            if (null == root) return null;
            for (var keys = Object.keys(root), key = null, i = 0; i < keys.length; i++) if (keys[i].startsWith("__reactInternalInstance")) {
                key = keys[i];
                break;
            }
            return key ? root[key] : null;
        }
        function delay(milliseconds) {
            return function(result) {
                return new Promise((function(resolve, reject) {
                    setTimeout((function() {
                        resolve(result);
                    }), milliseconds);
                }));
            };
        }
        async function showControlsAsync() {
            const wrapper = function() {
                try {
                    const selectorList = [ document.querySelector('div[data-uia="player"]'), document.querySelector("div[data-videoid]"), document.querySelector("div .ltr-fntwn3"), document.querySelector(".active"), document.querySelector(".inactive"), document.querySelector(".passive"), document.querySelector(".watch-video--player-view").children[0] ];
                    for (var i = 0; i < selectorList.length; i++) try {
                        if (selectorList[i]) return selectorList[i];
                    } catch (error) {}
                    return null;
                } catch (error) {
                    return null;
                }
            }();
            if (wrapper) {
                const reactInstance = getReactInternals(wrapper);
                reactInstance && (reactInstance.memoizedProps.onPointerMoveCapture({
                    stopPropagation: () => {},
                    preventDefault: () => {}
                }), await delay(2)());
            }
        }
        async function changeEpisodeFallback(id) {
            try {
                (function() {
                    try {
                        return getReactInternals(document.querySelector(".watch-video")).return.stateNode;
                    } catch (e) {
                        return;
                    }
                })().handleSelectorEpisodePlay({
                    stopPropagation: () => {}
                }, id);
            } catch (error) {
                console.log(error);
            }
        }
        window.addEventListener("message", (function seekInteraction(e) {
            try {
                if (e.source == window) if (e.data.type && "SEEK" === e.data.type) e.data.time >= getVideoPlayer().duration ? (getVideoPlayer().pause(), 
                getVideoPlayer().seek(getVideoPlayer().duration - 100)) : getVideoPlayer().seek(e.data.time); else if (e.data.type && "PAUSE" === e.data.type) getVideoPlayer().pause(); else if (e.data.type && "FIX_POST_PLAY" === e.data.type) !function() {
                    if (isMovie()) {
                        const wrapperStateNode = getWrapperStateNode();
                        wrapperStateNode && (window.oldHasPostPlay = wrapperStateNode.hasPostPlay, wrapperStateNode.hasPostPlay = () => !1, 
                        console.log("DISABLED POST PLAY FOR MOVIE"));
                    }
                }(); else if (e.data.type && "PLAY" === e.data.type) isMovie(), getVideoPlayer().play(); else if (e.data.type && "IsPaused" === e.data.type) {
                    const paused = getVideoPlayer().isPaused();
                    var evt = new CustomEvent("FromNode", {
                        detail: {
                            type: "IsPaused",
                            paused,
                            updatedAt: Date.now()
                        }
                    });
                    window.dispatchEvent(evt);
                } else if (e.data.type && "GetCurrentTime" === e.data.type) {
                    const time = getVideoPlayer().getCurrentTime();
                    evt = new CustomEvent("FromNode", {
                        detail: {
                            type: "CurrentTime",
                            time,
                            updatedAt: Date.now()
                        }
                    });
                    window.dispatchEvent(evt);
                } else if (e.data.type && "teardown" == e.data.type) !function() {
                    const wrapperStateNode = getWrapperStateNode();
                    wrapperStateNode && window.oldHasPostPlay && (wrapperStateNode.hasPostPlay = oldHasPostPlay);
                }(), window.removeEventListener("message", seekInteraction, !1), window.injectScriptLoaded = !1; else if (e.data.type && "NEXT_EPISODE" == e.data.type) try {
                    changeEpisodeFallback(e.data.videoId);
                } catch (error) {
                    console.log("Caught Error in React Next Episode " + error);
                } else if (e.data.type && "GetState" == e.data.type) {
                    const player = getVideoPlayer();
                    if (isMovie(), player) {
                        const paused = player.isPaused(), time = player.getCurrentTime(), loading = null !== player.getBusy();
                        evt = new CustomEvent("FromNode", {
                            detail: {
                                type: "UpdateState",
                                time,
                                paused,
                                loading,
                                updatedAt: Date.now()
                            }
                        });
                        window.dispatchEvent(evt);
                    }
                } else e.data.type && "ShowControls" === e.data.type && showControlsAsync();
            } catch (error) {
                console.log(error);
            }
        }), !1);
    }
})();