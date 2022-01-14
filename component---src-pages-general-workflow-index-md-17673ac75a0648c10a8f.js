(self.webpackChunkcis_photoshop_api_docs=self.webpackChunkcis_photoshop_api_docs||[]).push([[355],{8875:function(e,o,t){"use strict";t.r(o),t.d(o,{_frontmatter:function(){return l},default:function(){return d}});var a=t(2122),r=t(9756),s=(t(5007),t(4983)),i=t(9536),n=["components"],l={},p={_frontmatter:l},m=i.Z;function d(e){var o=e.components,t=(0,r.Z)(e,n);return(0,s.mdx)(m,(0,a.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"general-workflow-for-our-api"},"General Workflow for our API"),(0,s.mdx)("p",null,"The typical workflow involves making one or more calls to our API, to edit PSD or other image files, and to create new image renditions."),(0,s.mdx)("p",null,"As you begin integrating the Ps APIs into your workflow, there are a few considerations to keep in mind which we've outlined below:"),(0,s.mdx)("h2",{id:"input-and-output-file-storage"},"Input and Output file storage"),(0,s.mdx)("p",null,"We currently do not support Cloud docs. You can use any of the following services for input and output storage."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"AWS S3: By using a presigned GET/PUT URL. More Info ",(0,s.mdx)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html"},"here"),".\nHere are some code samples for getting presigned urls",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/aws-s3/presignedURLs.js"},"Example")," in Node.JS"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/aws-s3/presignedURLs.js"},"Example")," in Python"),(0,s.mdx)("li",{parentName:"ul"},"You can find a sample NodeJS application ",(0,s.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/aws-s3/example.js"},"here")))),(0,s.mdx)("li",{parentName:"ul"},"Azure: By generating a SAS (Shared Access Signature) for upload/download. More Info ",(0,s.mdx)("a",{parentName:"li",href:"https://azuresdkdocs.blob.core.windows.net/$web/python/azure-storage-blob/12.9.0/index.html"},"here"),".\nHere are some code samples for getting presigned urls",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/azure/presignedURLs.js"},"Example")," in Node.JS"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/azure/presignedURLs.js"},"Example")," in Python"))),(0,s.mdx)("li",{parentName:"ul"},"Dropbox: Generate temporary upload/download. More Info ",(0,s.mdx)("a",{parentName:"li",href:"https://www.dropbox.com/developers/documentation"},"here"),".\nYou can create file upload link for dropbox ",(0,s.mdx)("a",{parentName:"li",href:"https://www.dropbox.com/developers/documentation/http/documentation#files-get_temporary_upload_link"},"here"))),(0,s.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,s.mdx)("p",null,"There are a few limitations to the APIs you should be aware of ahead of time.  "),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Multi-part uploads and downloads are not yet supported"),(0,s.mdx)("li",{parentName:"ul"},"All the endpoints only support a single file input"),(0,s.mdx)("li",{parentName:"ul"},"Error handling is a work in progress. Sometimes you may not see the most helpful of messages")),(0,s.mdx)("h2",{id:"retries"},"Retries"),(0,s.mdx)("p",null,"For increased reliability and stability we have added a retry mechanism for all API calls, and have some recommendations on how to handle these:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The service will retry status codes of 429, 502, 503, 504 three times."),(0,s.mdx)("li",{parentName:"ul"},"You should only retry requests that have a 5xx response code. A 5xx error response indicates there was a problem processing the request on the server."),(0,s.mdx)("li",{parentName:"ul"},"You should implement an exponential back-off retry strategy with 3 retry attempts."),(0,s.mdx)("li",{parentName:"ul"},"You should not retry requests for any other response code.")),(0,s.mdx)("h2",{id:"compatibility-with-photoshop-versions"},"Compatibility with Photoshop versions"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The APIs will open any PSD created with Photoshop 1.0 or later."),(0,s.mdx)("li",{parentName:"ul"},"When saving as PSD, the APIs will create PSDs compatible with the current shipping Photoshop."),(0,s.mdx)("li",{parentName:"ul"},'In regards to "maximize compatibility" referenced in ',(0,s.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"},"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"),"  the API's default to “yes”")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-general-workflow-index-md-17673ac75a0648c10a8f.js.map