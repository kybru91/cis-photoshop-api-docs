# Photoshop API  Example: Node.js

This sample app will show you how to use Adobe Photoshop APIs with Service Principal using Node.js.

After setting up the sample, you will have a Node.js app that:

1. Generates a Service Principal for your credentials
1. Obtains an access token
1. Obtains a pre-signed url from AWS for Photoshop file in S3
1. Get the document manifest from the Photoshop file
1. Obtains a pre-signed PUT url for saving a rendition
1. Create a jpeg rendition for the Photoshop file
1. Add an adjustment layer to the file and save to another pre-signed PUT url

<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 3 -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
  - [Install Node.js packages](#install-nodejs-packages)
  - [Set your Adobe API credentials](#set-your-adobe-api-credentials)
  - [Specify the location of a sample file](#specify-the-location-of-a-sample-file)
  - [Obtain AWS credentials](#obtain-aws-credentials)
- [Usage](#usage)
- [Other Resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used

1. Node.js 10 or higher and the `npm` package manager
1. OpenSSL CLI

## Prerequisites

Please be sure to follow the instructions about obtaining your credentials [here](https://developer.adobe.com/photoshop/photoshop-api-docs/getting-started/)

You will also need an AWS account with access to S3.

## Configuration

The following steps will help you get this sample up and running.

### Install Node.js packages

The `package.json` file contains a list of dependencies. Run the following command from the top level directory of the app to install these dependencies:

```bash
cd ..
npm install
```

### Set your Adobe API credentials

Set your Adobe API credentials in the file `config.json` on these lines:

```json
        "client_id": "<your API Key (Client ID)>",
        "client_secret": "<Client secret value provided by Adobe IO>"
```

### Specify the location of a sample file

In `config.json`, provide an AWS S3 bucket and prefix for the sample Photoshop file.

```json
    "sample_file": {
        "s3_bucket": "<your bucket>",
        "s3_region": "<your bucket region e.g., us-east-1, eu-west-1>",
        "s3_prefix": "<your sample file, e.g., test/Sunflower.psd>",
        "s3_rendition_prefix": "<location for rendition output,e.g., test/Sunflower-out-200.jpg>",
        "rendition_type": "<rendition type, e.g., image/jpeg>",
        "rendition_width": "<integer value in pixels, e.g., 200>",
        "s3_add_layer_prefix": "<location for add layer output, e.g., test/Sunflower-out-add-layer.jpg>"
    }
```

### Obtain AWS credentials

You will need an AWS account to use this sample as is. Ensure AWS credentials are available for the sample app. See [Setting Credentials in Node.js](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html)

## Usage

Now, run the app:

```bash
node index.js
```

The app will write output to the console to show progress and results. Many of the outputs are numbered so that you can match them up to the corresponding locations in the code.

## Other Resources

- [Adobe Photoshop API Documentation](https://developer.adobe.com/photoshop/photoshop-api-docs/api/)
- [Adobe Photoshop API SDK](https://github.com/adobe/adobe-photoshop-api-sdk#readme)
