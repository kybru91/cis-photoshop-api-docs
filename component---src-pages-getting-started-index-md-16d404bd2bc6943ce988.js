(self.webpackChunkcis_photoshop_api_docs=self.webpackChunkcis_photoshop_api_docs||[]).push([[849],{1641:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a=o(2122),n=o(9756),r=(o(5007),o(4983)),i=o(9536),m=["components"],d={},l={_frontmatter:d},p=i.Z;function s(e){var t=e.components,o=(0,n.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"getting-started-with-photoshop-api"},"Getting started with Photoshop API"),(0,r.mdx)("p",null,"The first step in accessing the Photoshop APIs is getting authenticated. For that you will need an Authorization Token and an API Key. With the steps below, we'll show you how to gain access and make your first ",(0,r.mdx)("inlineCode",{parentName:"p"},"hello world")," call."),(0,r.mdx)("h2",{id:"get-access"},"Get access"),(0,r.mdx)("p",null,"Here are the steps to start with our API"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"If you ",(0,r.mdx)("strong",{parentName:"p"},"haven't signed up")," and generated credentials please follow this link and follow the steps on the confirmation modal: ",(0,r.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/photoshopapi_signup"},"https://www.adobe.com/go/photoshopapi_signup"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"If you ",(0,r.mdx)("strong",{parentName:"p"},"have")," already signed up and need a new key, Go to ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"https://developer.adobe.com/console/home")," and ",(0,r.mdx)("strong",{parentName:"p"},"sign in to the IO Console."))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click on ",(0,r.mdx)("strong",{parentName:"p"},"Create a new project")," under the ",(0,r.mdx)("strong",{parentName:"p"},"Quick Start")," section on the middle of your screen")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click on ",(0,r.mdx)("strong",{parentName:"p"},"Add API"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Photoshop APIs (Trial)")," and click on ",(0,r.mdx)("strong",{parentName:"p"},"Next"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"You should see a zip file named ",(0,r.mdx)("strong",{parentName:"p"},"Config")," in your downloads")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Open the contents of the zip and locate the file name ",(0,r.mdx)("strong",{parentName:"p"},"private.key"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Open the file named ",(0,r.mdx)("strong",{parentName:"p"},"private.key")," in a text editor like Atom or Sublime")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Copy the entire contents of the file and paste it in your project page in the section labeled ",(0,r.mdx)("strong",{parentName:"p"},"Generate access token")," and click on ",(0,r.mdx)("strong",{parentName:"p"},"Generate token")," on the bottom right hand corner.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Congrats! You have just created a JWT token."))),(0,r.mdx)("p",null,"Please note that token expires every 24 hours and you will have generate a new one after it expires. See ",(0,r.mdx)("a",{parentName:"p",href:"/cis-photoshop-api-docs/authentication/#automating-your-jwt-token"},"Automating your JWT token")," for information on how to automate this process for your application."),(0,r.mdx)("p",null,"You’ll automatically get an API key when you create your project in Adobe I/O Console. Copy ",(0,r.mdx)("strong",{parentName:"p"},"API KEY (CLIENT ID)")," from ",(0,r.mdx)("strong",{parentName:"p"},"Project Overview")," page."),(0,r.mdx)("h2",{id:"hello-world"},"Hello World"),(0,r.mdx)("p",null,"Once you have created your token you can follow the steps below to make your first API call."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},'Open your terminal and paste the code below. Make sure to replace the variables "YOUR_ACCESS_TOKEN"  with the token you generated on adobe io console.'),(0,r.mdx)("li",{parentName:"ol"},"You are also going to need your  ",(0,r.mdx)("strong",{parentName:"li"},"API KEY (CLIENT ID)")," which can be found in your adobe io console.You will need to pass in your API key in the ",(0,r.mdx)("strong",{parentName:"li"},"x-api-key")," field."),(0,r.mdx)("li",{parentName:"ol"},"Once all variables have been replaced you can run the command.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET \\\n  --url https://image.adobe.io/pie/psdService/hello \\\n  --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\\n  --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,r.mdx)("p",null,"Congrats! You just made your first request to the Photoshop API."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"NOTE: Your token will expire every 24 hours and will need to be refreshed after it expires.")),(0,r.mdx)("h2",{id:"automating-your-jwt-token"},"Automating your JWT token#"),(0,r.mdx)("p",null,"Check out these modules for a quick path to automating your token retrieval:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.datanalyst.info/python/adobe-io-user-management/adobe-io-jwt-authentication-with-python/"},"JWT Instructions for Python")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@adobe/jwt-auth"},"JWT Instructions for Node"))),(0,r.mdx)("h2",{id:"additional-service-token-and-jwt-information"},"Additional Service Token and JWT Information"),(0,r.mdx)("p",null,"You can find details on interacting with Adobe IMS API’s and authentication in general"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/AuthenticationGuide.md"},"General Authentication Information")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWT.md"},"JWT/Service Token Authentication")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/Resources/IMS.md"},"IMS API’s")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/jwt-sample-app"},"JWT Sample Code"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-md-16d404bd2bc6943ce988.js.map