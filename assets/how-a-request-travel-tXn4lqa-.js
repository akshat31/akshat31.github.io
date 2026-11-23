const e=`---
title: "How a request travel"
description: "Understanding how a request travel when you hit a domain"
slug: "how-a-request-travel"
keywords: ["System Design", "Internet", "Basic networking"]
draft: true
readingTime: 2
---

# How a request travel

What happens behind the scene when you hit akxat.com, a web request is conversation in between two machine exchange of some protocol

Networks route by numeric IP address, not by name. So the browser first asks a DNS resolver: where is akxat.com

Answers are cached for a time-to-live (TTL). For the next few minutes, repeat visits skip this step entirely. Which takes around 20ms

the browser opens a connection to 203.0.113.7 (This is example IP) A TCP handshake agrees to talk; a TLS handshake sets up encryption. Each needs a round trip there and back.

Over the open connection the browser sends GET /list. The server parses it, checks the session and runs your code.

The list don’t live in the web server they live in a database. The server sends a query and waits for the rows to come back.

The server turns rows into JSON and sends it back; downloading it takes another 20 ms. The browser renders the page with JSON 155 ms after you pressed Enter.

Then it notices images and stylesheets in the page and fires off more requests. Reusing the open connection saves them the handshake.

The HTML is only the start. It references images, stylesheets, scripts and fonts — about 40 more files — and the browser fetches them all.

With old HTTP/1.1 each connection carried one request at a time, so browsers opened ~6 connections and queued the rest. HTTP/2 sends them all at once over the single connection we already opened.


`;export{e as default};
