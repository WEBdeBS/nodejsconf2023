---
weight: 8
title: A Journey into Node.js Internals 
topics: Internals
level: intermediate
author_name: Tamar Twena-Stern 
author_info: System Architect at XM Cyber
author_bio: Tamar Twena-Stern is a software manager and architect. In the past, she managed large development teams, and was a CTO of a start up of my own. She has a decade of software engineering experience in various technologies like Server side, big data, mobile, web technologies, and security. She is currently focusing on Node.js, and have a deep knowledge of Node.js server architecture and Node.js performance optimisations.
author_image_url: ./assets/speakers/tamar.png
author_links: 
  - name: twitter
    icon: twitter
    url: https://twitter.com/SternTwena
  # - name: github
  #   icon: github
  #   url: https://github.com/kamilogorek
  # - name: mastodon
  #   icon: globe
  #   url: https://fosstodon.org/@ShogunPanda
  # - name: instagram
  #   icon: instagram
  #   url: https://www.instagram.com/ruheni_alex
  - name: linkedin
    icon: linkedin
    url: https://www.linkedin.com/in/tamarstern/
---


Node.js is a very popular server-side framework that is slowly becoming the main platform for developing server-side applications. A lot of phrases are mentioned when developers talk about Node.js, such as ‘Single process with event loop’, ‘Non blocking IO’ , ‘generational garbage collector’, and more. But what do those phrases mean? Is Node.js really single threaded? How do the event loop and other internal mechanisms of the platform really work?

In this talk, I will give an overview on some of the platform internals. We will do a deep dive into the event loop, how it works, what its different phases are, and how it enables non-blocking IO. And, of course, we will answer the repeating question – is the event loop single threaded? We will also talk about the JIT compiler and the v8 engine. The session will end with a look at the garbage collector mechanism, the different algorithms that exists in each garbage collector phase, and how we can monitor our software to start detecting memory leaks.