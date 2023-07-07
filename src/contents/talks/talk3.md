---
weight: 3
title: "CRUD is an anti-pattern, or: How I learned to love event-sourcing"
topics: Architecture, backend, frontend, event-driven, distributed systems
level: intermediate
author_name: Golo	Roden
author_info: Founder and CTO, the native web GmbH
author_bio: Golo Roden is the founder and CTO of the native web GmbH. He advises companies on the design, architecture and development of distributed web and cloud applications and APIs, based on event-sourcing, CQRS and Domain-Driven Design (DDD). In the past 20 years, I''ve given more than 500 conference talks and wrote more than 1.000 articles for various IT magazines. I run a YouTube channel with currently > 23.000 subscribers on IT topics.
author_image_url: ./assets/speakers/roden.png
author_links: 
  - name: twitter
    icon: twitter
    url: https://twitter.com/goloroden
  - name: github
    icon: github
    url: https://github.com/thenativeweb

---
Try telling a fairy tale using only the four verbs Create, Read, Update, and Delete. The result will - guaranteed! - rather scare than fascinate.

But if CRUD is completely unsuitable even for simple stories like fairy tales, why do we try to tell far more complex (business) stories with these four verbs every day? Why do we limit ourselves? Why don't we rely much more on a technical, semantically rich and diverse language? Quite simply: Because in the end we have to do CRUD again, certainly in the database. At least that's what we believe.

But what if there was an alternative? What if you could develop applications in such a way that they not only adequately reflect the underlying domain but also tell a much more expressive and comprehensible story, from UI to persistence? In short: If you could simply write better software? And guess what, you can: with event-sourcing. In this talk, you'll learn how.
