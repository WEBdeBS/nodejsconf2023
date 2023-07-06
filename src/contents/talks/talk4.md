---
weight: 4
title: The tale of avoiding a time-based DDOS attack in Node.js
topics: Security
level: intermediate
author_name: Paolo Insogna
author_info: Node.js core and Staff DX Engineer
author_bio: Matteo is the Co-Founder and CTO of <a target="_blank" href='https://platformatic.dev'>Platformatic.dev</a> with the goal to remove all friction from backend development. He is also a prolific Open Source author in the JavaScript ecosystem and modules he maintain are downloaded more than 17 billion times a year. Previously he was Chief Software Architect at NearForm, the best professional services company in the JavaScript ecosystem. In 2014, he defended his Ph.D. thesis titled "Application Platforms for the Internet of Things". Matteo is a member of the Node.js Technical Steering Committee focusing on streams, diagnostics and http. He is also the author of the fast logger Pino and of the Fastify web framework. Matteo is an renowed international speaker after more than 60 conferences, including OpenJS World, Node.js Interactive, NodeConf.eu, NodeSummit, JSConf.Asia, WebRebels, and JsDay just to name a few. <br>He is also co-author of the book "Node.js Cookbook, Third Edition" edited by Packt. In the summer he loves sailing the Sirocco.
author_image_url: ./assets/speakers/insogna.png
author_links: 
  - name: twitter
    icon: twitter
    url: https://twitter.com/p_insogna
  - name: github
    icon: github
    url: https://github.com/ShogunPanda
  # - name: mastodon
  #   icon: globe
  #   url: https://fosstodon.org/@ShogunPanda
  - name: linkedin
    icon: linkedin
    url: https://linkedin.com/in/pinsogna
---

Web applications are commonly vulnerable to several Distributed Denial of Service attacks, sometimes in unexpected ways. An example is the SlowLoris attack, an exploit that leads to service interruption by simply sending the data to the server as slowest as possible.

In this talk I will tell the tale of how it took almost 13 years for Node to be completely protected by SlowLoris attack. I will also show that sometimes prioritizing performance can lead to incorrect fixes that can result in a false sense of protection.