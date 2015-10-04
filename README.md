# ZDF [zee-dee-eff]
**noun**

1. a badass replacement to PDF's hungry binary formatting
1. a document format designed for the modern web

**verb**

1. to enjoy document writing
1. to become the next big thing

# Why ZDF?
The web is accelerating at a rapid pace. Why are our documents still in the stoneage?

ZDF was designed with a few key goals:
* HTML and CSS provide an already great standard for UI. Let's utilize that.
* Binary files suck with source control. We can fix that too.
* GUI designers shouldn't have to be overpriced and overcomplicated by complex specifications.
* Developers should be able to quickly and easily write code to export documents, not fight with an expensive software library's support team.
* Browsers should be able to render the document without a hefty plugin.

# OK, so how does it work?
ZDF stands for zero document format. Zero what? Zero hassle. Zero cost. Zero learning curve. Zero risk. ZDF is built to be powerful, but simple. To make that happen, there are a few easy to use specs.

# Specifications
## Manifest
The ZDF manifest is a simple JSON document containing information about the documents contents. Things like the title, author, description, page setup, and other attributes are configured in the ZDF manifest.
```json
{
  "title": "How to Spy",
  "author": "Sterling Archer",
  "description": "Read this shit!",
  "mainFile": "index.html",
  "page": {
    "height": "11in",
    "width": "8.5in"
  },
  "permissions": []
}
```

## Packaging
To be zero hassle, the ZDF package specification must be simple to implement on any platform and in any programming language. ZDF utilizes common archiving and compression formats to meet these requirements. Packaging is as simple as archiving all of the files into a tar file, then compressing that file using gzip. All common programming languages and platforms have libraries and applications to package files this way. ZDF just builds on this format and uses a custom extension to designate the file's contents. As popularity grows, first and third-party libraries will be written to wrap these steps up, making the process even easier.

See [Libraries](#libraries) and [Applications](#applications) for a list of tools and utilities for working with ZDF documents.

## Security
Security is an ever-growing topic. ZDF embraces that topic with the modern, but proven technology of public key cryptography. Specifically, PGP encryption is used to both encrypt and sign ZDF documents.

### Public document, but verified origin
Sometimes you just need to make sure your document hasn't been tampered with in transit. Sign it with your private key, and leave your public key out on the web for anyone to grab. If they compare your public key to the document's private key they'll know it's you.

### Private document
Other times a document needs to be shared securely. Sign it with your recipient's public key. They should have a private key to decrypt it. Without the private key, your document is hunk of garbage data.

### Private document with verified origin
The above approaches can be combined to achieve the maximum security for a ZDF document! Just encrypt the document with the recipient's public key and sign it with your private key.

# <a name="libraries"></a>Libraries
* Node.js
  * [node-zdf](https://github.com/Team-ZDF/node-zdf)
    * First-party library for working with ZDF files in Node.js. Development is being done alongside specification finalization.

# <a name="applications"></a>Applications
* [Aerialist](https://github.com/Team-ZDF/aerialist)
  * First-party cross platform application for viewing ZDF files. Development is being done alongside specification finalization.
* [Alchemist](https://github.com/Team-ZDF/alchemist)
  * First-party cross platform application for packaging ZDF files. Development is being done alongside specification finalization.
* [Artisan](https://github.com/Team-ZDF/artisan) **Coming Soon**
  * First-party cross platform application for designing ZDF documents. Development has yet to begin. If you're looking to contribute, this would be a great place to help once the specification is closer to completion.

# Contributing
ZDF cannot be successful without the support of developers and users around the world. If you would like to join the ZDF group to help finalize the specification or assist in development of first-party tools, email [zdf@zerodarktech.com](zdf@zerodarktech.com). If you have suggestions or requests please open an issue on the specification Github page. If you'd just like to show your support for the project and encourage us to continue further on our mission to purge clunky binary formats from existence, star and watch our Github pages.

We want ZDF to be the document format of the open source community. If you support us on this front, please help us make it a success.
