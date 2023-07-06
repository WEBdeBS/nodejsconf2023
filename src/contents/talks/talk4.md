---
weight: 4
title: The tale of avoiding a time-based DDOS attack in Node.js
topics: Security
level: intermediate
author_name: Paolo Insogna
author_info: Node.js core and Staff DX Engineer
author_bio: Node.js Core Member, Staff Developer Experience Engineer at NearForm, Co-founder and Principal Architect at OramaSearch, Polyglot Developer. RPG and LARP addicted and nerd on lot more. Surrounded by lovely chubby cats.
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