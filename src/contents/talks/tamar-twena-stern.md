---
weight: 8
type: talk
timeslot: 10:15 - 10:55 
title: Architectural changes in V8 and how they will improve your server performances
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


In the newest versions of V8, there are architectural changes that make V8 extremely fast. When V8 parses code, part of it is interpreted and part of it compiles. V8 memory management has improved a lot and now presents sophisticated algorithms, as well as many interesting optimizations. In this talk, Tamar will get into the internals of V8 in the new versions, from the code interpreters and compilers to the memory management: What was changed? Which layers were added? How does it make Node.js applications much faster and in which cases/patterns? 

The talk will include demos of patterns in the code that you can optimize to get better performance for your application.
