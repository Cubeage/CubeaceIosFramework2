var uxt={initUxt:function(){var ma=document.createElement("script");ma.type="text/javascript",ma.async=!0,ma.src=(document.location.protocol,"https://ux.21cn.com/api/htmlReportRest/getJs.js?pid=A22FA6F381D849C3BFEA045E327FEDE1");var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ma,s)}},j_other_line=document.getElementById("j-other-line"),j_other_logo=document.getElementById("j-other-logo"),j_loading_btn=document.getElementById("j-loading-btn"),j_loading_btn_text=document.getElementById("j-loading-btn-text"),j_agreement_checkbox=document.getElementById("j-agreement-checkbox"),j_mobile_page=document.getElementById("j-mobile-page"),codeGroup=document.getElementById("j-code-group"),j_code_page=document.getElementById("j-code-page"),j_second_validate=document.getElementById("j-second-validate"),timeouttimmer="8000",waittimmer=500,hasTouch="ontouchstart"in window,START_EV=hasTouch?"touchend":"click",isloginText="该账号已登录，请登录其他账号",_uxtsdkid="test",_uxt_version="h5V354"+_mini_prefix+"+sdk3.6.0",otherloginText="其他登录方式",onlineTypeText={0:"仅移动数据网络",1:"WiFi和移动数据网络",2:"只开WiFi",3:"无网络"};function getQueryString(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),r=decodeURI(window.location.search).substr(1).match(reg);return null!==r?unescape(r[2]):null}function getJsBrigeSdkFunc(fName,params){if(window.JSKitOnClient&&"function"==typeof window.JSKitOnClient[fName])return params&&params.length>0?window.JSKitOnClient[fName](params):window.JSKitOnClient[fName]();try{window.webkit.messageHandlers.iOSSDKTest.postMessage(null)}catch(e){return!1}var m=window.prompt(fName,params);return"MethodNotFound"!==m&&m}function closeWindow(){getJsBrigeSdkFunc("methodWithJsonPara",'{"result":-7002,"msg":"退出登录，关闭webview"}'),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version,"客户端调用","退出登录"])}function backWay(id,returnPath,str){"undifined"!=typeof returnPath&&("autoLogin"===returnPath?(id.setAttribute("href",_mini_prefix+"auto_login.html"),_uxt.push(["_trackEvent",str,"点击","返回免密登录页面"])):(id.setAttribute("href","javascript:closeWindow();"),_uxt.push(["_trackEvent",str,"点击","调用客户端关闭登录"])))}function fshowNormalLogin(page){commLogin.showDivIndex=1,j_mobile_page.className="block",j_second_validate.className="hide",page&&1===page?_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+安全验证","点击","返回上一页"]):page&&2===page&&_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+设备校验","点击","返回上一页"])}function fshowNormalLoginSms(page){sms_login.showDivIndex=1,j_mobile_page.className="block",j_code_page.className="hide",_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+短信验证","点击","返回上一页"]),sms_login.j_mobile.value.length>10&&(sms_login.j_sendBtn.classList.remove("ui-btn-disable"),sms_login.j_sendBtn.removeAttribute("disabled"))}var checkUserLogin=function(flag){"true"===flag&&("undefined"!=typeof commLogin?(fshowNormalLogin(),popup.showErrorPopup(isloginText,!0)):popup.showErrorPopup(isloginText,!0))};function uibtnBackClick(){document.getElementById("j-client-back").click()}var extend=function(obj1,obj2){for(var k in obj2)obj1.hasOwnProperty(k)&&"object"==typeof obj1[k]?extend(obj1[k],obj2[k]):obj1[k]=obj2[k];return obj2};function linkURL(url){window.location.href=encodeURI(url)}function checkEmpty(input){return input.value.replace(/\s+/g,"").length>0}var mobileFormat={strimVal:function(input){return _val=input.value.replace(/\s+/g,""),_val},b_MobileCheck:function(input){return/^1\d{10}$/.test(this.strimVal(input))},b_MobileCodeCheck:function(input){return/^[0-9]{6}$/.test(this.strimVal(input))},b_captchaCheck:function(input){return/^[A-Za-z0-9]{4,6}$/.test(this.strimVal(input))}};function show(obj){obj.classList.remove("hide"),obj.classList.add("block")}function hidden(obj){obj.classList.add("hide"),obj.classList.remove("block")}function displayblock(obj){obj.style.display="block"}var btnClasses="ui-btn ",btnClassesDis="ui-btn ui-btn-disable",safebtnClasses="ui-btn mt-87",safbtneClassesDis="ui-btn ui-btn-disable mt-87";function changeBtnDisable(obj,flag){flag?(obj.className=btnClasses,obj.removeAttribute("disabled")):(obj.className=btnClassesDis,obj.setAttribute("disabled",!0))}function changeSafeDisable(obj,flag){flag?(obj.className=safebtnClasses,obj.removeAttribute("disabled")):(obj.className=safbtneClassesDis,obj.setAttribute("disabled",!0))}function getGuid(){var _checkGUIDFn=getJsBrigeSdkFunc("getUserGUID"),userGUID={key:"guid",value:""};return _checkGUIDFn&&(userGUID.value=_checkGUIDFn),userGUID.deviceId=userGUID.value,userGUID}function uuid(len,radix){var i,r,chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),uuid=[];if(radix=radix||chars.length,len)for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix];else for(uuid[8]=uuid[13]=uuid[18]=uuid[23]="-",uuid[14]="4",i=0;i<36;i++)uuid[i]||(r=0|16*Math.random(),uuid[i]=chars[19===i?3&r|8:r]);return uuid.join("")}var guid=getGuid(),kanJianTitle="其他登录方式",smsTitle="短信验证登录",accoutTitle="账号密码登录";function hasThreeLogin(showthirdlogin){if(showthirdlogin&&showthirdlogin.length>0){var _threeLoginArray=showthirdlogin.split("|");return-1!=_threeLoginArray.indexOf("qq")||(-1!=_threeLoginArray.indexOf("weibo")||-1!=_threeLoginArray.indexOf("weixin"))}return!1}function checkEntryMobileTitle(data){var checkOperator="CT"===data.accessOperator||"CU"===data.accessOperator,checkEntryMobile=data.encryptMobile.length>0;return checkOperator&&checkEntryMobile}function agreementBoxEvent(id){"0"===id.getAttribute("data-type")?(id.setAttribute("data-type","1"),id.classList.add("checkbox-icon-a-active"),id.setAttribute("aria-checked",!0)):(id.setAttribute("data-type","0"),id.classList.remove("checkbox-icon-a-active"),id.setAttribute("aria-checked",!1))}function agreementBoxDefault(element,flag){changeAgreementBox(element,!!flag)}function changeAgreementBox(id,flag){flag?(id.setAttribute("data-type","1"),id.classList.add("checkbox-icon-a-active"),id.setAttribute("aria-checked",!0),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"点击","协议勾选（选中）"])):(id.setAttribute("data-type","0"),id.classList.remove("checkbox-icon-a-active"),id.setAttribute("aria-checked",!1),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"点击","协议勾选（不选）"]))}function checkAgreementBox(element,checkText,btn,agreementLink){var _result=!0;if("0"===element.getAttribute("data-type")){if(void 0!==checkText&&void 0!==btn){var _link='<a id="j-agreement-popup1" class="agreement"  onclick="'+(_link_uxt="_uxt.push(['_trackEvent','"+_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage+"+协议提示弹窗', '点击', '协议']);")+'" href ="'+agreementLink+'">《服务协议》</a><span>和<br></span><a id="j-agreement-popup2" class="agreement"  onclick="'+_link_uxt+'"  href ="'+agreementLink+'">《隐私政策》</a>';popup.showErrorPopup("我已阅读并同意"+_link,!1,"返回");var _url="javascript:onclick=checkAndAjax('"+btn.id+"');_uxt.push(['_trackEvent','"+_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage+"+协议提示弹窗', '点击', '确认登录']);";popup.showErrorBtn("返回",checkText,_url)}else{var _link_uxt;_link='<a id="j-agreement-popup1" class="agreement" onclick="'+(_link_uxt="_uxt.push(['_trackEvent', '"+_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage+"+协议提示弹窗', '点击', '协议']);")+'" href ="" >《服务协议》</a><span>和<br></span><a id="j-agreement-popup2" class="agreement" onclick="'+_link_uxt+'" href ="'+agreementLink+'" >《隐私政策》</a>';popup.showErrorPopup("我已阅读并同意"+_link,!0,"知道了")}var j_agreement_autoLogin_popup1=document.getElementById("j-agreement-popup1"),j_agreement_autoLogin_popup2=document.getElementById("j-agreement-popup2");j_agreement_autoLogin_popup1.setAttribute("href",appkeyForUrl.detailURL(1)),j_agreement_autoLogin_popup2.setAttribute("href",appkeyForUrl.detailURL(2)),_result=!1}return _result}function checkAndAjax(id){changeAgreementBox(this.j_agreement_checkbox,!0),popup.closePopup(),document.getElementById(id).click()}function showPassword(pwdElement2,iconElement,pwdElement){"none"==pwdElement2.style.display?(pwdElement2.style.display="block",pwdElement.style.display="none",pwdElement2.focus(),iconElement.classList.remove("ui-btn-show-no"),iconElement.classList.add("ui-btn-show-yes"),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+账号密码登录页","点击","显示密码"])):(pwdElement.style.display="block",pwdElement2.style.display="none",pwdElement.focus(),iconElement.classList.remove("ui-btn-show-yes"),iconElement.classList.add("ui-btn-show-no"),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+账号密码登录页","点击","隐藏密码"]))}function loadingBtn(btn,text){btn.value=" ",btn.classList.add("ui-btn-disable"),btn.setAttribute("disabled","disabled"),this.j_loading_btn.classList.remove("hide"),this.j_loading_btn.classList.add("block"),this.j_loading_btn_text.innerHTML=text}function removeLoadingBtn(btn,btnText){btn.value=btnText,btn.classList.remove("ui-btn-disable"),btn.removeAttribute("disabled"),this.j_loading_btn.classList.add("hide"),this.j_loading_btn.classList.remove("block"),this.j_loading_btn_text.innerHTML=" "}function showNetTips(){var _netType=getJsBrigeSdkFunc("getNetState");if("null"==_netType)popup.showErrorPopup('<span style="display:block;text-align: left;font-size: .28rem;">网络无法连接，可能是以下原因造成：<br>1.设备未开启移动网络  <br>2.设备未允许当前APP使用网络权限</span>',!0);else if("WIFI"==_netType){popup.showErrorPopup('<span style="display:block;text-align: left;font-size: .28rem;">当前网络不支持免密登录，可能是以下原因造成：<br>1. 设备未开启移动数据网络；<br>2. 设备禁止当前APP使用移动数据网络；<br>请检查后重试。</span>',!1,"返回");var _link_text=document.getElementById("j-tab-login-link").innerHTML,_link_href=document.getElementById("j-tab-login-link").getAttribute("href");popup.showErrorBtn("返回",_link_text,_link_href)}else popup.showErrorPopup('<span style="display:block;text-align: left;font-size: .28rem;">若您已开启数据网络并允许当前APP使用网络权限，请点击登录按钮进行免密登录。</span>',!0)}function ajax(options){function empty(){}function obj2Url(obj){if(obj&&obj instanceof Object){var arr=[];for(var i in obj)obj.hasOwnProperty(i)&&("function"==typeof obj[i]&&(obj[i]=obj[i]()),null===obj[i]&&(obj[i]=""),arr.push(escape(i)+"="+escape(obj[i])));return arr.join("&").replace(/%20/g,"+")}return obj}var opt={url:"",sync:!0,method:"GET",data:null,username:null,password:null,dataType:null,success:empty,error:empty,timeout:0,header:null};for(var i in options)options.hasOwnProperty(i)&&(opt[i]=options[i]);var accepts={script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},abortTimeout=null,xhr=new XMLHttpRequest;if(xhr.onreadystatechange=function(){if(4==xhr.readyState){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var protocol=/^([\w-]+:)\/\//.test(options.url)?RegExp.$1:window.location.protocol,result,dataType,error=!1;if(xhr.status>=200&&xhr.status<300||304==xhr.status||0===xhr.status&&"file:"==protocol){if("arraybuffer"==xhr.responseType||"blob"==xhr.responseType)result=xhr.response;else{for(var i in result=xhr.responseText,dataType=opt.dataType?opt.dataType:xhr.getResponseHeader("content-type").split(";",1)[0],accepts)accepts.hasOwnProperty(i)&&accepts[i].indexOf(dataType)>-1&&(dataType=i);try{"script"==dataType?eval(result):"xml"==dataType?result=xhr.responseXML:"json"==dataType&&(result=""===result.trim()?null:JSON.parse(result))}catch(e){opt.error(e,xhr),xhr.abort()}}opt.success(result,xhr)}else opt.error(xhr.statusText,xhr)}},"GET"==opt.method){var parse=opt.url.parseURL();opt.data=Object.assign({},opt.data,parse.params),opt.url=parse.pathname+"?"+obj2Url(opt.data),opt.data=null}xhr.open(opt.method,opt.url,opt.sync,opt.username,opt.password),"POST"==opt.method&&xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),opt.header&&(xhr.setRequestHeader(opt.header.key,opt.header.value),xhr.setRequestHeader("deviceId",opt.header.deviceId),xhr.setRequestHeader("reqId",opt.header.reqId)),opt.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),opt.error("timeout",xhr)},opt.timeout)),xhr.send(opt.data?obj2Url(opt.data):null)}var popup=function(){var loadElement,loadingText,element,errorText,errorLoginLink,okBtn,loadAnimate,options={loadElement:"j-loading-popup",loadingText:"j-loading-text",errorPop:"error-pop",element:"j-popup",errorText:"j-error-text",errorLoginLink:"j-login-link",okBtn:"j-error-ok",loadAnimate:"j-loading-animate"},closePopup=function(){loadElement.classList.add("hide"),loadElement.classList.remove("block"),errorPop.classList.remove("pop-show"),errorPop.classList.add("pop-hide"),errorPop.classList.remove("block"),errorPop.classList.remove("hide"),element.classList.remove("popup-bgShow"),element.classList.add("popup-bgHide"),element.classList.remove("block"),element.classList.remove("hide"),setTimeout(function(){element.classList.add("hide"),errorPop.classList.add("hide")},300)},exports={};return exports.setOptions=function(opts){return extend(options,opts),element=document.getElementById(options.element),loadElement=document.getElementById(options.loadElement),loadingText=document.getElementById(options.loadingText),errorPop=document.getElementsByClassName(options.errorPop)[0],errorText=document.getElementById(options.errorText),errorLoginLink=document.getElementById(options.errorLoginLink),okBtn=document.getElementById(options.okBtn),loadAnimate=document.getElementById(options.loadAnimate),okBtn.addEventListener("click",function(e){closePopup(),e.stopPropagation()}),exports},exports.showErrorPopup=function(msg,block,okBtnMsg){errorText.innerHTML=msg;var _okBtnText=void 0!==okBtnMsg&&""!==okBtnMsg?okBtnMsg:"确定";isios?setTimeout(function(){okBtn.innerHTML=_okBtnText,errorPop.classList.add("block"),errorPop.classList.add("pop-show"),errorPop.classList.remove("pop-hide"),errorPop.classList.remove("hide"),element.classList.add("block"),element.classList.remove("hide"),element.classList.add("popup-bgShow"),element.classList.remove("popup-bgHide"),loadAnimate.classList.remove("loading-animate"),loadElement.classList.add("hide")},100):(okBtn.innerHTML=_okBtnText,errorPop.classList.add("block"),errorPop.classList.add("pop-show"),errorPop.classList.remove("pop-hide"),errorPop.classList.remove("hide"),element.classList.add("block"),element.classList.remove("hide"),element.classList.add("popup-bgShow"),element.classList.remove("popup-bgHide"),loadAnimate.classList.remove("loading-animate"),loadElement.classList.add("hide")),block?(errorLoginLink.classList.add("hide"),errorLoginLink.classList.remove("block"),okBtn.classList.add("btn-block")):(errorLoginLink.classList.remove("hide"),errorLoginLink.classList.add("block"),okBtn.classList.remove("btn-block"))},exports.showLoadingPopup=function(msg){loadAnimate.classList.add("loading-animate"),loadElement.classList.remove("hide"),loadElement.classList.add("block"),loadingText.innerHTML=msg},exports.closePopup=closePopup,exports.showErrorBtn=function(btn1,btn2,url){okBtn.innerHTML=btn1,errorLoginLink.innerHTML=btn2,errorLoginLink.setAttribute("href",url)},exports}(),toast=function(){var noticeElement,noticeText,options={noticeElement:"j-toast",noticeText:"j-notice-text"},exports={setOptions:function(opts){return extend(options,opts),noticeElement=document.getElementById(options.noticeElement),noticeText=document.getElementById(options.noticeText),exports},notice:function(msg){noticeElement.classList.remove("hide"),noticeElement.classList.remove("toast-hide"),noticeElement.classList.add("toast-show"),noticeElement.classList.add("block"),noticeText.innerHTML=msg},closeToast:function(){noticeElement.classList.add("toast-hide"),setTimeout(function(){noticeElement.classList.add("hide"),noticeElement.classList.remove("toast-hide")},800),noticeElement.classList.remove("toast-show"),noticeElement.classList.remove("block")}};return exports}(),loginPrompt=function(){var element,captchBox,captchText,captchErrorMsg,options={element:"j-prompt",captchBox:"j-captch-box",captchText:"j-captch-text",captchInput:"j-captch-code",captchErrorMsg:"j-captch-error-msg",captchBtn:"j-captch-btn"},closeCapPopup=function(){captchCode.value="",captchCode.blur(),captchBox.classList.add("captch-hide"),captchBox.classList.remove("captch-show"),element.classList.remove("block"),element.classList.remove("prompt-bgShow"),element.classList.add("prompt-bgHide"),setTimeout(function(){element.classList.add("hide"),captchBox.classList.add("hide")},300)},exports={};return exports.setOptions=function(opts){return extend(options,opts),element=document.getElementById(options.element),captchBox=document.getElementById(options.captchBox),captchText=document.getElementById(options.captchText),captchCode=document.getElementById(options.captchInput),captchErrorMsg=document.getElementById(options.captchErrorMsg),document.getElementById(options.captchBtn).addEventListener(START_EV,function(e){closeCapPopup(),captchCode.blur(),e.stopPropagation(),e.preventDefault()}),exports},exports.captchPop=function(text,errorMsg){element.classList.add("block"),element.classList.add("prompt-bgShow"),element.classList.remove("hide"),element.classList.remove("prompt-bgHide"),captchBox.classList.remove("captch-hide"),captchBox.classList.add("captch-show"),captchBox.classList.add("block"),captchBox.classList.remove("hide"),captchText.innerHTML=text,captchErrorMsg.classList.add("hide2"),setTimeout(function(){captchCode.focus()},500)},exports.closeCapPopup=closeCapPopup,exports}(),appkeyForUrl={page:"",helpURL:function(mobile){var unautologin=getQueryString("unautologin"),checkToken=getQueryString("forTokenTimeout"),onlinetype=getQueryString("onlinetype"),url_=encodeURIComponent(appkeyForUrl.page+"?mobile="+mobile+"&forTokenTimeout="+checkToken+"&onlinetype="+onlinetype+"&unautologin="+unautologin);return mobile?"https://e.189.cn/sdk/agreement/help.do?returnUrl="+url_+"&appKey="+initData.baseV.appkey+"&forSDK=true":"https://e.189.cn/sdk/agreement/help.do?returnUrl="+appkeyForUrl.page+"&appKey="+initData.baseV.appkey+"&forSDK=true"},detailURL:function(agType){return"https://e.189.cn/sdk/agreement/detail.do?"+(1==agType?"agreemenType=service":"agreemenType=personal")+"&returnUrl="+appkeyForUrl.page+"&appKey="+initData.baseV.appkey+"&forSDK=true"},freeURL:function(){return"https://e.189.cn/sdk/agreement/free.do?returnUrl="+_mini_prefix+"auto_login.html&appKey="+initData.baseV.appkey+"&forSDK=true"},linkForLogin:function(){appkeyForUrl.page=_mini_prefix+"login.html";var j_help_login=document.getElementById("j-help-login"),j_login_help_more=document.getElementById("j-login-help-more"),j_agreement_login1=document.getElementById("j-agreement-login1"),j_agreement_login2=document.getElementById("j-agreement-login2"),j_back=document.getElementById("j-client-back"),j_adv_link=document.getElementById("j-adv-link"),j_client_close=document.getElementById("j-client-close");j_help_login.setAttribute("href",appkeyForUrl.helpURL()),j_login_help_more.setAttribute("href",appkeyForUrl.helpURL()),j_agreement_login1.setAttribute("href",appkeyForUrl.detailURL(1)),j_agreement_login2.setAttribute("href",appkeyForUrl.detailURL(2)),j_help_login.setAttribute("appkey",_uxtsdkid),j_help_login.setAttribute("version",_uxt_version),j_agreement_login1.setAttribute("appkey",_uxtsdkid),j_agreement_login1.setAttribute("version",_uxt_version),j_agreement_login2.setAttribute("appkey",_uxtsdkid),j_agreement_login2.setAttribute("version",_uxt_version),j_back.setAttribute("appkey",_uxtsdkid),j_back.setAttribute("version",_uxt_version),null!==j_client_close&&(j_client_close.setAttribute("appkey",_uxtsdkid),j_client_close.setAttribute("version",_uxt_version)),_isMiniSdk||(j_adv_link.setAttribute("appkey",_uxtsdkid),j_adv_link.setAttribute("version",_uxt_version))},linkForSmsLogin:function(mobile){appkeyForUrl.page=_mini_prefix+"sms_login.html";var j_help_smsLogin=document.getElementById("j-help-smsLogin"),j_smsLogin_help_more=document.getElementById("j-help-more"),j_agreement_smsLogin1=document.getElementById("j-agreement-smsLogin1"),j_agreement_smsLogin2=document.getElementById("j-agreement-smsLogin2"),j_sms_back=document.getElementById("j-client-back"),j_adv_link=document.getElementById("j-adv-link"),j_client_close=document.getElementById("j-client-close");j_agreement_smsLogin1.setAttribute("href",appkeyForUrl.detailURL(1)),j_agreement_smsLogin2.setAttribute("href",appkeyForUrl.detailURL(2)),j_help_smsLogin.setAttribute("href",appkeyForUrl.helpURL()),j_smsLogin_help_more.setAttribute("href",appkeyForUrl.helpURL(mobile)),j_help_smsLogin.setAttribute("appkey",_uxtsdkid),j_help_smsLogin.setAttribute("version",_uxt_version),j_agreement_smsLogin1.setAttribute("appkey",_uxtsdkid),j_agreement_smsLogin1.setAttribute("version",_uxt_version),j_agreement_smsLogin2.setAttribute("appkey",_uxtsdkid),j_agreement_smsLogin2.setAttribute("version",_uxt_version),j_sms_back.setAttribute("appkey",_uxtsdkid),j_sms_back.setAttribute("version",_uxt_version),null!==j_client_close&&(j_client_close.setAttribute("appkey",_uxtsdkid),j_client_close.setAttribute("version",_uxt_version)),_isMiniSdk||(j_adv_link.setAttribute("appkey",_uxtsdkid),j_adv_link.setAttribute("version",_uxt_version))},linkForAutoLogin:function(){appkeyForUrl.page=_mini_prefix+"auto_login.html";var j_help_autoLogin=document.getElementById("j-help-autoLogin"),j_agreement_autoLogin1=document.getElementById("j-agreement-autoLogin1"),j_agreement_autoLogin2=document.getElementById("j-agreement-autoLogin2"),j_client_back=document.getElementById("j-client-back"),j_client_close=document.getElementById("j-client-close");j_help_autoLogin.setAttribute("href",appkeyForUrl.helpURL()),j_agreement_autoLogin1.setAttribute("href",appkeyForUrl.detailURL(1)),j_agreement_autoLogin2.setAttribute("href",appkeyForUrl.detailURL(2)),j_help_autoLogin.setAttribute("appkey",_uxtsdkid),j_help_autoLogin.setAttribute("version",_uxt_version),j_client_back.setAttribute("appkey",_uxtsdkid),j_client_back.setAttribute("version",_uxt_version),null!==j_client_close&&(j_client_close.setAttribute("appkey",_uxtsdkid),j_client_close.setAttribute("version",_uxt_version)),j_agreement_autoLogin1.setAttribute("appkey",_uxtsdkid),j_agreement_autoLogin1.setAttribute("version",_uxt_version),j_agreement_autoLogin2.setAttribute("appkey",_uxtsdkid),j_agreement_autoLogin2.setAttribute("version",_uxt_version)}},getDeviceData=function(){var data={imsi:"ERWERDFDS",imei:"DerererWEWEW","mac地址":"10:16:14:55"};return data=JSON.stringify(data)},checkAccessCode=function(){var accessCodeData={accessCode:"",accessCodeCreateTime:"",accessCodeVaildTime:"",encryptMobile:"",accessOperator:""},getTimeStamp=function(){var _checkgetCurrTimeStampFn=getJsBrigeSdkFunc("getCurrTimeStamp");return _checkgetCurrTimeStampFn||Date.parse(new Date)},checkAvailable=function(obj){var checkResultKeyArray=[],checkMobileKeyArray=[];for(var k in obj)"encryptMobile"===k?checkMobileKeyArray.push(k):checkResultKeyArray.push(obj[k]);return isInArray(checkMobileKeyArray,"encryptMobile")&&!isInArray(checkResultKeyArray,"")&&!isInArray(checkResultKeyArray,void 0)};function isInArray(arr,value){for(var i=0;i<arr.length;i++)if(value===arr[i])return!0;return!1}var encryptParams=function(){guid.reqId=uuid(32,16);var paramJson={accessCode:accessCodeData.accessCode,guid:guid.value,reqId:guid.reqId,deviceId:guid.deviceId,networkAuthParams:preGetMobileUtil.appendParams(preGetMobileUtil.networkAuthParamsArray)};console.log("encryptParams",encryptParams);var encryptLoginParam=getJsBrigeSdkFunc("encryptParams",JSON.stringify(paramJson));return encryptLoginParam.length>0?JSON.parse(encryptLoginParam):encryptLoginParam},exports={setOptions:function(opts){checkAvailable(opts)&&extend(accessCodeData,opts)},checkExpiryDate:function(){var checkDataAvailable=checkAvailable(accessCodeData);return getTimeStamp()<parseInt(accessCodeData.accessCodeCreateTime)+parseInt(1e3*accessCodeData.accessCodeVaildTime)+1e4&&checkDataAvailable}};return exports.checkAvailable=checkAvailable,exports._timeoutCodeStamp=1e4,exports.getTimeStamp=getTimeStamp,exports.getEncryptParams=function(callBackAccessData){checkAccessCode.setOptions(callBackAccessData);var encryptResult=encryptParams();if(encryptResult.length<=0)preGetMobileUtil.changeOtherLoginWay();else if("true"===getJsBrigeSdkFunc("isNetworkAvailable","preGetMobileUtil.networkAuthLogin"))switch(preGetMobileUtil.networkAuthLogin(encryptResult),encryptResult.onlineType){case 0:case"0":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号成功+只开移动数据网络"]);break;case 1:case"1":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号成功+开启WiFi和移动数据网络"]);break;case 2:case"2":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号成功+只开WiFi"]);break;default:_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号成功+未知网络问题"])}else popup.showErrorPopup(autoLogin.errorMsg.errorunnet,!0),_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号失败+未知网络问题"])},exports.delAccessCode=function(){accessCodeData={accessCode:"",accessCodeCreateTime:"",accessCodeVaildTime:"",encryptMobile:"",accessOperator:""}},exports}(),_report={},preGetMobileUtil={preGetMobileURL:"http://id6.me/openapi/gateway/pe.do",preGetMobileParamArray:[],networkAuthParamsArray:[],networkAuthURL:"https://open.e.189.cn/openapi/gbcs/auth/nh.do",splitFalg:"|",fristParamFalg:"?",appendParams:function(appendArray){for(var returnStr="",i=0;i<appendArray.length;i++)returnStr+=appendArray[i]+this.splitFalg;return returnStr.substring(0,returnStr.length-1)},preGetMobile:function(){if(checkAccessCode.checkExpiryDate())checkAccessCode.getEncryptParams(checkAccessCode.accessCodeData);else{var preGetParams={preGetMobileURL:this.preGetMobileURL,preGetMobileParams:this.appendParams(this.preGetMobileParamArray)};!1===getJsBrigeSdkFunc("preGetMobile",JSON.stringify(preGetParams))&&preGetMobileUtil.changeOtherLoginWay()}},callBackGetMobile:function(callBackData){if(callBackData=JSON.parse(callBackData),checkAccessCode.checkAvailable(callBackData))checkAccessCode.getEncryptParams(callBackData);else{preGetMobileUtil.changeOtherLoginWay();var netType=getJsBrigeSdkFunc("getNetState");if(netType)switch(netType){case"4G":case"3G":case"2G":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号失败+只开移动数据网络"]);break;case"BOTH":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号失败+开启WiFi和移动数据网络"]);break;case"WIFI":_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号失败+只开WiFi"]);break;default:_uxt.push(["_trackEvent",_uxtsdkid+"+"+_uxt_version+"+"+_uxtsdkpage,"统计","取号失败+未知网络问题"])}}},callBackGetMobileNum:function(callBackData){callBackData=JSON.parse(callBackData),checkAccessCode.checkAvailable(callBackData)?(checkAccessCode.setOptions(callBackData),autoLogin.j_login_mobile.innerHTML=callBackData.encryptMobile,autoLogin.j_login_title.classList.remove("hide2")):autoLogin.j_login_mobile.innerHTML=autoLogin.loginTitleText},networkAuthLogin:function(params){_report.info={},_report.info.ri=guid.reqId,_report.info.api="nh",_report.bt=(new Date).getTime(),_report.data=params,ajax({url:this.networkAuthURL,data:params,method:"POST",dataType:"json",timeout:timeouttimmer,success:function(ds){preGetMobileUtil.decryptResult(ds),getJsBrigeSdkFunc("delAccessCodeData")},error:function(XMLHttpReuqest){"timeout"===XMLHttpReuqest?(popup.showErrorPopup(autoLogin.errorMsg.errorunnet,!0),removeLoadingBtn(autoLogin.j_auto_login,"本机号码一键登录"),_report.info.ep=autoLogin.errorMsg.errorunnet):(popup.showErrorPopup(autoLogin.errorMsg.errorClientFn,!0),removeLoadingBtn(autoLogin.j_auto_login,"本机号码一键登录"),_report.info.ep=autoLogin.errorMsg.errorClientFn),getJsBrigeSdkFunc("delAccessCodeData"),_report.info.tt=(new Date).getTime()-_report.bt,_report.info.p=JSON.stringify(params),_report.info.rt=-90001,getJsBrigeSdkFunc("reportLog",JSON.stringify(_report.info))}})},decryptResult:function(decryptObj){var resultJson=getJsBrigeSdkFunc("decryptResult",JSON.stringify(decryptObj));autoLogin.gatewayLoginCallBack(resultJson);var _r=JSON.parse(resultJson);if(_report.info.tt=(new Date).getTime()-_report.bt,_r&&_r.hasOwnProperty("result")){var result=parseInt(_r.result);_report.info.rt=result,_report.info.msg=_r.msg}_report.info.p=JSON.stringify(_report.data),getJsBrigeSdkFunc("reportLog",JSON.stringify(_report.info))},changeOtherLoginWay:function(){autoLogin.gatewayLoginCallBack(JSON.stringify({result:1,onlinetype:"2"}))}},timeoutToken=function(){var exports={},loginMode=0,tokenAccount="",modifyAccount="true",backBtn=document.getElementById("j-client-back"),j_tab_login_link=document.getElementById("j-tab-login-link"),handelZMTokenOut=function(){try{if("undefined"!=typeof commLogin)var deleteSpan=commLogin.j_userName.parentNode.getElementsByTagName("span")[0];if("false"===modifyAccount){/^1[3456789]\d{9}$/.test(tokenAccount)?(j_tab_login_link.className="txt-group inline-block","undefined"!=typeof sms_login&&(sms_login.j_mobile.value=tokenAccount,sms_login.j_mobile.setAttribute("readonly",!0))):j_tab_login_link.className="txt-group hide2",commLogin.j_userName.setAttribute("readonly",!0),initClearInput.changeDeleteIcon(deleteSpan,!1)}else initClearInput.changeDeleteIcon(deleteSpan,!0);commLogin.j_userName.value=tokenAccount;var checkToken=timeoutToken.checkTokenTimeout(),onlinetype=initData.baseV.onlinetype;commLogin.j_tab_login_link.href="sms_login.html?onlinetype="+onlinetype+"&unautologin=true&forTokenTimeout="+checkToken+"#unauto",_isMiniSdk&&(commLogin.j_tab_login_link.href="mini_sms_login.html?onlinetype="+onlinetype+"&unautologin=true&forTokenTimeout="+checkToken+"#unauto")}catch(e){}},handelDMTokenOut=function(){try{if("undefined"!=typeof sms_login)var deleteSpan=sms_login.j_mobile.parentNode.getElementsByTagName("span")[0];"false"===modifyAccount?(/^1[3456789]\d{9}$/.test(tokenAccount)?(j_tab_login_link.className="txt-group inline-block","undefined"!=typeof commLogin&&(commLogin.j_userName.value=tokenAccount,commLogin.j_userName.setAttribute("readonly",!0))):j_tab_login_link.className="txt-group hide2",sms_login.j_mobile.setAttribute("readonly",!0),initClearInput.changeDeleteIcon(deleteSpan,!1)):initClearInput.changeDeleteIcon(deleteSpan,!0),sms_login.j_mobile.value=tokenAccount;var checkToken=timeoutToken.checkTokenTimeout(),onlinetype=initData.baseV.onlinetype;sms_login.j_tab_login_link.href="login.html?onlinetype="+onlinetype+"&unautologin=true&forTokenTimeout="+checkToken+"#unauto",_isMiniSdk&&(sms_login.j_tab_login_link.href="mini_login.html?onlinetype="+onlinetype+"&unautologin=true&forTokenTimeout="+checkToken+"#unauto")}catch(e){}};return exports.checkTokenTimeout=function(){var checkAppkey="189mail"===initData.baseV.appkey;tokenAccount=initData.baseV.tokenAccount?initData.baseV.tokenAccount:tokenAccount,loginMode=initData.baseV.loginMode?initData.baseV.loginMode:loginMode,modifyAccount=initData.baseV.modifyAccount?initData.baseV.modifyAccount:modifyAccount;var checkTokenAccount=tokenAccount.length>0,checkLoginModel=loginMode.length>0;return checkAppkey&&checkTokenAccount&&checkLoginModel},exports.settingModifyAccount=function(){"zm"===loginMode||"dv"===loginMode?handelZMTokenOut():"dm"===loginMode&&handelDMTokenOut()},exports.handelMMTokenOut=function(){if("true"!==(initData.baseV.basicapp||"false")){var _loginWay=initData.baseV.loginway?initData.baseV.loginway.split("|"):"1";_loginWay="1"!==_loginWay[0]&&"2"!==_loginWay[0]?["1"]:_loginWay,autoLogin.j_tab_login_link.href=autoLogin.loginLinkUrl[_loginWay[0]]+"?forTokenTimeout=true",autoLogin.j_tab_login_link.innerHTML=initData.baseV.basiclogintxt||autoLogin.j_tab_login_link.innerHTML}},exports.handelEntryLoginBox=function(){"zm"!==loginMode&&"dm"!==loginMode&&"dv"!==loginMode||backBtn.setAttribute("href","javascript:closeWindow();")},exports.handelLinkOtherLogin=function(){"undefined"!=typeof sms_login&&handelDMTokenOut(),"undefined"!=typeof commLogin&&handelZMTokenOut()},exports.handleTokenTimeout=function(id){var checkToken=timeoutToken.checkTokenTimeout();"false"!==initDom.forTokenTimeout&&checkToken&&(timeoutToken.settingModifyAccount(),timeoutToken.handelEntryLoginBox()),"true"===initDom.forTokenTimeout&&timeoutToken.handelLinkOtherLogin()},exports}(),islocalDev=!1,isios=!1,_uxtsdkid="test",_uxtsdkpage="",initData={j_weixin:document.getElementById("j-weixin"),j_weibo:document.getElementById("j-weibo"),j_qq:document.getElementById("j-qq"),j_eHealthy:document.getElementById("j-eHealthy"),body_height:document.body.offsetHeight,j_loading_popup:document.getElementById("j-loading-popup"),j_popup:document.getElementById("j-popup"),j_prompt:document.getElementById("j-prompt"),j_bottom_login:document.getElementById("j-bottom-login"),j_tab_login_link:document.getElementById("j-tab-login-link"),j_mobile_page:document.getElementById("j-mobile-page"),j_vcode_bottom:document.getElementById("j-bottom-vcodeLogin"),j_safe_bottom:document.getElementById("j-bottom-safeLogin"),j_bottom_logo:document.getElementById("j-bottom-logo"),j_auto_login_bottom:document.getElementById("j-auto-login-bottom"),deviceHeight:document.body.offsetHeight,j_form_group:document.getElementById("j-form-group"),j_header:document.getElementById("j-header"),init:function(){var currModel={};"undefined"!=typeof autoLogin&&(currModel=autoLogin,_uxtsdkpage="免密登录页"),"undefined"!=typeof sms_login&&(currModel=sms_login,_uxtsdkpage="短信验证登录页"),"undefined"!=typeof commLogin&&(currModel=commLogin,_uxtsdkpage="账号密码登录页"),void 0!==currModel&&"undefined"!=typeof initDom&&(initDom.popupMsg=currModel.tipsMsg.changeMsg,currModel.initTips=initDom.initTips,currModel.initTips());var data=getJsBrigeSdkFunc("getClientInitData");data=JSON.parse(data),_uxtsdkid=data.appname?data.appname:"test",isios=!(!data.sdktype||-1===data.sdktype.indexOf("ios")&&-1===data.sdktype.indexOf("iOS")),_uxt_version=data.sdktype&&""!==data.sdktype?"h5V370_0"+_mini_prefix+"+"+data.sdktype:"h5V370_0",null!==data?("flow"===data.appkey&&(data.loginway="2"),this.baseV=data,void 0!==currModel&&"function"==typeof currModel.initDOM&&currModel.initDOM(),uxt.initUxt(),void 0!==currModel&&"function"==typeof currModel.init&&currModel.init(),this.showActiveVersion(),isios&&initData.checkOrientation()):(popup.setOptions(),popup.showErrorPopup("服务器连接失败，请稍候再试",!0))},checkOrientation:function(){var _this=this,evt="onorientationchange"in window?"orientationchange":"resize";function resize(fals){setTimeout(function(){var _height=document.documentElement.clientHeight||document.body.clientHeight;_this.bottomPositioin(_height)},100)}window.addEventListener(evt,resize,!1),resize()},getAdvertSwitch:function(){var _this=this,access_op="CT"===_this.baseV.accessOperator.toUpperCase(),op=_this.baseV.operator.toUpperCase().indexOf("CT")>-1,app="189mail"===_this.baseV.appkey||"cloud"===_this.baseV.appkey;if(access_op&&app||app&&op)try{ajax({url:"https://open.e.189.cn/api/oauth2/account/getAdvertSwitch.do",data:{clientId:_this.baseV.appkey},method:"POST",dataType:"json",sync:!1,timeout:timeouttimmer,header:guid,success:function(ds){0===ds.result&&"on"===ds.advertSwitch?_this.showAdv():_this.hideAdv()},error:function(XMLHttpReuqest){_this.hideAdv()}})}catch(e){_this.hideAdv()}},showAdv:function(){var j_adv=document.getElementById("j-adv");document.getElementById("j-adv-box").style.display="block",j_adv.setAttribute("class","adv"),j_adv.setAttribute("src","https://static.e.189.cn/e/2016/source/images/passport-wap/mine/adsl/adv.png"),j_adv.setAttribute("alt","广告")},hideAdv:function(){var j_adv=document.getElementById("j-adv"),j_adv_box=document.getElementById("j-adv-box"),j_bottom_login=document.getElementById("j-bottom-login"),mgt=parseInt(j_bottom_login.style.marginTop.replace("px",""))+j_adv.clientHeight;j_adv_box.style.display="none",j_adv.setAttribute("class",""),j_adv.setAttribute("src",""),j_adv.setAttribute("alt",""),j_bottom_login.style.marginTop=mgt+"px"},bottomPositioin:function(){this.deviceHeight=document.body.clientHeight,console.log(this.deviceHeight);var deviceHeight=this.deviceHeight;if(!isios&&!_isMiniSdk){!1===getJsBrigeSdkFunc("getScreenHeight")&&(deviceHeight=this.deviceHeight);var allContentHeight=(document.getElementById("j-auto-header")||document.getElementById("j-header")).clientHeight+document.getElementById("j-form-group").clientHeight,bottomHeight=this.j_bottom_login.offsetHeight;if(deviceHeight-allContentHeight-bottomHeight<26)document.body.style.overflow="auto",this.j_bottom_login.setAttribute("style","position:static;visibility:visible;margin-top:26px");else{var _top=this.deviceHeight-bottomHeight;this.j_bottom_login.setAttribute("style","position:absolute;visibility:visible;top:"+_top+"px")}}this.j_loading_popup.style.height=document.body.scrollHeight+"px",this.j_popup.style.height=document.body.scrollHeight+"px",this.j_prompt.style.height=document.body.scrollHeight+"px"},thirdLogin:function(){var _thirdLoginArray=this.baseV&&this.baseV.showthirdlogin?this.baseV.showthirdlogin.split("|"):[],_showLine=!1;if(_thirdLoginArray.length>0&&this.baseV.showthirdlogin.length>0){for(var i=0;i<_thirdLoginArray.length;i++){var _curricon=this["j_"+_thirdLoginArray[i]];_curricon.setAttribute("appkey",_uxtsdkid),_curricon.setAttribute("version",_uxt_version),void 0!==_curricon&&(_showLine=!0),_curricon&&displayblock(_curricon)}_showLine&&show(j_other_line),_isMiniSdk||show(j_other_logo)}},showActiveVersion:function(){var clickflag=0;(document.getElementById("j-auto-header")||document.getElementById("j-header")).addEventListener("click",function(){5===++clickflag&&(popup.showErrorPopup("当前登录框版本为"+_uxt_version,!0,"知道了"),clickflag=0)})}};initData.init();