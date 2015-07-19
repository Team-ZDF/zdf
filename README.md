# ZDF [zee-dee-eff]
**noun**

1. packaged markup language
2. a badass replacement to PDF's hungry binary formatting
3. a packaged HTML document
4. that thing all the blogs are raving about

**verb**

1. to enjoy document writing
1. to become the next big thing

# Why ZDF?
The web is accelerating at a rapid pace. Why are our documents still in the stoneage?

ZDF was designed with a few key goals:
* HTML and CSS provide an already great standard for UI. Let's utilize that.
* Binary files suck with source control. We can fix that too.
* GUI designers shouldn't have to be overpriced and overcomplicated by complext specifications
* Developers should be able to quickly and easily write code to export documents, not fight with an expensive software library's support team
* Browsers should be able to render it without a hefty plugin

# OK, so how does it work?
ZDF stands for zero document format. Zero what? Zero hassle. Zero cost. Zero learning curve. Zero risk. ZDF is built to be powerful, but simple. To make that happen, there are a few easy to use specs.

# Specifications
## Manifest
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

See [Libraries](#libraries) and [Applications](#applications) for a list of tools and utilities for workign with ZDF documents.

## Security
Security is an ever-growing topic. ZDF embraces that topic with the modern, but proven technology of public key cryptography.

Packages are optionally signed with a public or private key, depending on the direction the security should be embraced.

### Public document, but verified origin
Sometimes you just need to make sure your document hasn't been tampered with in transit. Sign it with your private key, and leave your public key out on the web for anyone to grab. If they compare your public key to the document's private key they'll know it's you.

### Private document
Other times a document needs to be shared securely. Sign it with your recipient's public key. They should have a private key to decrypt it. Without the private key, your document is hunk of garbage data.

# <a name="libraries"></a>Libraries
* Node.js
 * [node-zdf](https://github.com/ZDF-Group/node-zdf)
   * First-party library for working with ZDF files in Node.js. Development is being done alongside specification finalization.

# <a name="applications"></a>Applications
* [Alchemist](https://github.com/ZDF-Group/alchemist)
 * First-party cross platform application for packaging ZDF files. Development is being done alongside specification finalization.
* [Artisan](https://github.com/ZDF-Group/artisan) **Coming Soon**
 * First-party cross platform application for designing ZDF documents. Development has yet to begin. If you're looking to contribute, this would be a great place to help once the specification is closer to completion.

# Contributing
ZDF cannot be successful without the support of developers and users around the world. If you would like to join the ZDF group to help finalize the specification or assist in development of first-party tools, email [rtbenfield@gmail.com](mailto:rtbenfield@gmail.com). 