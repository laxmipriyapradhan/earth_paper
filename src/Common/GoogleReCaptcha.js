import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import { COLORS, windowWidth } from '../Constraints/Generic';

const patchPostMessageJsCode = `(${String(function () {
  var originalPostMessage = window.ReactNativeWebView.postMessage;
  var patchedPostMessage = function (message, targetOrigin, transfer) {
    originalPostMessage(message, targetOrigin, transfer);
  };
  patchedPostMessage.toString = function () {
    return String(Object.hasOwnProperty).replace(
      'hasOwnProperty',
      'postMessage',
    );
  };
  window.ReactNativeWebView.postMessage = patchedPostMessage;
})})();`;

/**
 *
 * @param {*} onMessage: callback after received response, error of Google captcha or when user cancel
 * @param {*} siteKey: your site key of Google captcha
 * @param {*} style: custom style
 * @param {*} url: base url
 * @param {*} languageCode: can be found at https://developers.google.com/recaptcha/docs/language
 * @param {*} cancelButtonText: title of cancel button
 */
const GoogleReCaptcha = ({
  onMessage,
  siteKey,
  style,
  url,
  languageCode,
  cancelButtonText = 'Cancel',
}) => {
  const captchaForm = useRef();
  const generateTheWebViewContent = siteKey => {
    const originalForm = `<!DOCTYPE html>
			<html>
			<head> 
				<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge"> 
				<script src="https://recaptcha.google.com/recaptcha/api.js?explicit&hl=${
          languageCode || 'en'
        }"></script> 
				<script type="text/javascript"> 
				var onloadCallback = function() { };  
				var onDataCallback = function(response) { 
					window.ReactNativeWebView.postMessage(response);  
					setTimeout(function () {
						
					}, 1500);
				};  
				var onCancel = function() {  
					window.ReactNativeWebView.postMessage("cancel"); 
					document.getElementById('captcha').style.display = 'none';
				}
				var onDataExpiredCallback = function(error) {  window.ReactNativeWebView.postMessage("expired"); };  
				var onDataErrorCallback = function(error) {  window.ReactNativeWebView.postMessage("error"); } 
				</script> 
				<style>
					.btn {
						background-color: #c60710; 
						color: #ffffff; padding: 8px 32px; margin-top: 8px; 
						border: none; border-radius: 25px; font-weight: bold;
					}
					.btn:active {
						outline: none;
					}
					.btn:focus {
						outline: none;
					}
          .g-recaptcha{
            transform:scale(1.18);
            transform-origin:0 0;
          }
				</style>
			</head>
			<body> 
				<div id="captcha">
					<div >
					<div class="g-recaptcha" style="display: inline-block; height: auto;" 
						data-sitekey="${siteKey}" data-callback="onDataCallback"  
						data-expired-callback="onDataExpiredCallback"  
						data-error-callback="onDataErrorCallback">
					</div>
					</div>
				</div>
			</body>
			</html>`;
    return originalForm;
  };
  return (
    <WebView
      ref={captchaForm}
      originWhitelist={['*']}
      mixedContentMode={'always'}
   	  onMessage={e => console.log(e.nativeEvent.data)}
      javaScriptEnabled
      injectedJavaScript={patchPostMessageJsCode}
      automaticallyAdjustContentInsets
      style={[{backgroundColor: 'transparent', width: windowWidth, marginHorizontal:13,  }]}
      source={{
        html: generateTheWebViewContent(siteKey),
        baseUrl: `${url}`,
      }}
    />
  );
};

export default GoogleReCaptcha;
