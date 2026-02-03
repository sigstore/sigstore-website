---
title: Home
date: 2021-07-12T15:33:03.264Z
description: Homepage
thumbnail: /img/icon.png
sections:
  - ctaStyle: solidCtaPurple
    showSupportedBy: true
    text: Making sure your software is what it claims to be.
    header: sign. verify. protect.
    showStatsBanner: false
    bgColour: bg-pastel-orange
    ctaButtons: []
    textAlign: left
    textColour: text-gray-dark
    type: textBanner
    showBetaCard: true
  - type: twoColumnBanner
    header: The problem with software supply chain security
    imageAsset: /img/problemwithopensource_update.svg
    text:
      Modern software projects are built upon software libraries and tools from a variety of sources. This leaves your project open to breaches, exploits, and supply chain attacks. The risks can be difficult to spot, and safely software dependencies can require constant identity checks and careful safety protocols for keys and secrets.
    bgColour: bg-purple-dark
    alignment: imageRight
    ctaButtons: []
    ctaStyle: transparentCta
  - type: textBanner
    showSupportedBy: false
    text: Sigstore is a collection of open source tools that can be used individually or in concert to improve your software supply chain security. The Sigstore framework empowers software developers and consumers to securely sign and verify software artifacts. 
    header: What is Sigstore?
    showStatsBanner: false
    bgColour: bg-pastel-blue
    textAlign: center
    textColour: text-purple-dark
  - alignment: textRight
    cardTitle: What makes Sigstore different?
    text:
      Sigstore's goal is to improve supply chain technology for anyone using software dependencies. Sigstore is made for open source maintainers, by open source maintainers, and is applicable to proprietary software as well.
    header: Our vision
    bgColour: bg-pastel-orange
    imageAsset: ''
    textBottom:
      Sigstore is a direct response to today’s supply chain challenges. We are working towards a future where there is a broadly accepted (and achievable) project integrity standard.
    type: twoColumnBannerWithCard
    column1:
      header: Key management and short-lived certificates
      imageAsset: /img/keys.svg
      text: Worried about leaked or lost keys? Sigstore's Cosign can use ephemeral key material and short-lived certificates to sign and verify artifacts.
    column2:
      header: Transparent ledger technology
      imageAsset: /img/ledger.svg
      text: Sigstore's Rekor provides an immutable, tamper-resistant, transparent ledger of signatures and software metadata. Our public Rekor instance makes it easy to find and verify signatures, and detect changes to the source code, the build platform, or the artifact repository. You can also host your own Rekor instance.
    cardText: Sigstore streamlines how you digitally sign and verify components. Our automated tooling makes it   easy to trace your software back to the source. Sigstore is the easiest way to understand your software's chain of custody, and it is a great solution for all open source software producers and users. 
    column3:
      header: Driven by our community
      imageAsset: /img/community.svg
      text: Sigstore is maintained by passionate believers in an open, transparent, and
        accountable future for open source software. Everything we do comes from
        a love of open source software and a desire to help others use it securely. 
  - type: sigstoreDivider
    showSigstoreDivider: true
  - type: carousel
    header: Image Gallery
    carouselCaseItems:
      - stacklok
      - npm
      - bleeping-computer
      - google
      - kpack
      - red-hat
      - wired
  - type: sigstoreDivider
    showSigstoreDivider: true
  - type: newsEvents
    isNewsAndEvents: true
  - ctaStyle: transparentCta
    text: Help build a safer future with us.
    header: ''
    bgColour: bg-purple-dark
    ctaButtons:
      - view-the-project
    textAlign: center
    textColour: text-white
    type: textBanner
    isScreenHeight: false
---

Yes
