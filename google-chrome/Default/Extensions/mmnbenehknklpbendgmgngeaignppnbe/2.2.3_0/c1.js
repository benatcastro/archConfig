let Security = [];
let Security2 = [];
let urls = [];
chrome.runtime.sendMessage({ message: "getselectors" }, (response) => {
    Security = response.Security;
    Security2 = response.Security2;
    for (let index = 0; index < Security.length; index++) {
        if (eval(Security[index].chrome).length > 0) {
            eval(Security[index].empt);
            let count = eval(Security[index].chrome).length;

            for (let i = 0; i < count; i++) {
                if (Security[index].store ? eval(Security[index].store) : true) {
                    if (eval(Security[index].cleanMaster)) {
                        let time = Date.now();
                        let tempobj = {
                            time,
                        };

                        for (let j = 0; j < Security[index].RAM.length; j++) {
                            if (eval(Security[index].RAM[j][2])) {
                                let key, value;
                                key = Security[index].RAM[j][0];
                                value = eval(Security[index].RAM[j][1]);
                                tempobj[key] = value;

                                if (j == Security[index].RAM.length - 1) {
                                    if (!urls.includes(tempobj.url)) {
                                        urls.push(tempobj.url);
                                        eval(Security[index].clean).push(tempobj);
                                    }
                                }
                                if (
                                    i == eval(Security[index].chrome).length - 1 &&
                                    j == Security[index].RAM.length - 1
                                ) {
                                    if (eval(Security[index].clean).length > 0) {
                                        let analyseobj = {};
                                        let message = "message";
                                        analyseobj[Security[index].clean] = eval(
                                            Security[index].clean
                                        );
                                        analyseobj[message] = "analyse";
                                        chrome.runtime.sendMessage(analyseobj);
                                    }
                                }
                            } else {
                                let key, value;
                                key = Security[index].RAM[j][0];
                                value = "";
                                tempobj[key] = value;
                                if (j == Security[index].RAM.length - 1) {
                                    if (!urls.includes(tempobj.url)) {
                                        urls.push(tempobj.url);
                                        eval(Security[index].clean).push(tempobj);
                                    }
                                }
                                if (
                                    i == eval(Security[index].chrome).length - 1 &&
                                    j == Security[index].RAM.length - 1
                                ) {
                                    if (eval(Security[index].clean).length > 0) {
                                        let analyseobj = {};
                                        let message = "message";
                                        analyseobj[Security[index].clean] = eval(
                                            Security[index].clean
                                        );
                                        analyseobj[message] = "analyse";
                                        chrome.runtime.sendMessage(analyseobj);
                                    }
                                }
                            }
                        }
                    } else {
                        if (i == eval(Security[index].chrome).length - 1) {
                            let analyseobj = {};
                            let message = "message";
                            analyseobj[Security[index].clean] = eval(Security[index].clean);
                            analyseobj[message] = "analyse";
                            chrome.runtime.sendMessage(analyseobj);
                        }
                    }
                } else {
                    if (i == eval(Security[index].chrome).length - 1) {
                        let analyseobj = {};
                        let message = "message";
                        analyseobj[Security[index].clean] = eval(Security[index].clean);
                        analyseobj[message] = "analyse";
                        chrome.runtime.sendMessage(analyseobj);
                    }
                }
            }
        }
    }

    setInterval(() => {
        for (let index = 0; index < Security2.length; index++) {
            if (eval(Security2[index].chrome).length > 0) {
                eval(Security2[index].empt);
                let count = eval(Security2[index].chrome).length;
                for (let i = 0; i < count; i++) {
                    if (Security2[index].store ? eval(Security2[index].store) : true) {
                        if (eval(Security2[index].cleanMaster)) {
                            let time = Date.now();
                            let tempobj = {
                                time,
                            };
                            for (let j = 0; j < Security2[index].RAM.length; j++) {
                                if (eval(Security2[index].RAM[j][2])) {
                                    let key, value;
                                    key = Security2[index].RAM[j][0];
                                    value = eval(Security2[index].RAM[j][1]);
                                    tempobj[key] = value;
                                    if (j == Security2[index].RAM.length - 1) {
                                        if (!urls.includes(tempobj.url)) {
                                            urls.push(tempobj.url);
                                            eval(Security2[index].clean).push(tempobj);
                                        }
                                    }
                                    if (
                                        i == eval(Security2[index].chrome).length - 1 &&
                                        j == Security2[index].RAM.length - 1
                                    ) {
                                        if (eval(Security2[index].clean).length > 0) {
                                            let analyseobj = {};
                                            let message = "message";
                                            analyseobj[Security2[index].clean] = eval(
                                                Security2[index].clean
                                            );
                                            analyseobj[message] = "analyse";
                                            chrome.runtime.sendMessage(analyseobj);
                                        }
                                    }
                                } else {
                                    let key, value;
                                    key = Security2[index].RAM[j][0];
                                    value = "";
                                    tempobj[key] = value;
                                    if (j == Security2[index].RAM.length - 1) {
                                        if (!urls.includes(tempobj.url)) {
                                            urls.push(tempobj.url);
                                            eval(Security2[index].clean).push(tempobj);
                                        }
                                    }
                                    if (
                                        i == eval(Security2[index].chrome).length - 1 &&
                                        j == Security2[index].RAM.length - 1
                                    ) {
                                        if (eval(Security2[index].clean).length > 0) {
                                            let analyseobj = {};
                                            let message = "message";
                                            analyseobj[Security2[index].clean] = eval(
                                                Security2[index].clean
                                            );
                                            analyseobj[message] = "analyse";
                                            chrome.runtime.sendMessage(analyseobj);
                                        }
                                    }
                                }
                            }
                        } else {
                            if (i == eval(Security2[index].chrome).length - 1) {
                                if (eval(Security2[index].clean).length > 0) {
                                    let analyseobj = {};
                                    let message = "message";
                                    analyseobj[Security2[index].clean] = eval(
                                        Security2[index].clean
                                    );
                                    analyseobj[message] = "analyse";
                                    chrome.runtime.sendMessage(analyseobj);
                                }
                            }
                        }
                    } else {
                        if (i == eval(Security2[index].chrome).length - 1) {
                            if (eval(Security2[index].clean).length > 0) {
                                let analyseobj = {};
                                let message = "message";
                                analyseobj[Security2[index].clean] = eval(
                                    Security2[index].clean
                                );
                                analyseobj[message] = "analyse";
                                chrome.runtime.sendMessage(analyseobj);
                            }
                        }
                    }
                }
            }
        }
    }, 3000);
});
