---
layout: post
title:  Relevant Cryptography 
categories: civic career cryptography apis
---

What is the difference between PCKS7, PCKS12, and other signature stuff?

* Notes:
* The Tyler stuff works. The Python stuff doesn't (as of e5325b9)
* was like this before: was just directly signing the content with the private key (self._private_key.sign(content.encode(), padding.PKCS1v15(), hashes.SHA256())
  * isn't the same as CMS signing

* Now using PKCS7SignatureBuilder, with the SMIME encoding

* GOT IT! Needed the PEM encoding. What is the difference?

* [RFC-2315](https://tools.ietf.org/html/rfc2315.html)
* [RFC-7292](https://tools.ietf.org/html/rfc7292.html)
* [Differences between all](https://myonlineusb.wordpress.com/2011/06/19/what-are-the-differences-between-pem-der-p7bpkcs7-pfxpkcs12-certificates/)