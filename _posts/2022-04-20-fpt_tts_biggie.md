---
layout: post
title: "Mystery Internet Bug: Text-to-Speech and The Notorious B.I.G."
description: Solving random bugs on the internet with Browser Dev Tools
tags: software bug-hunt web javascript
date: 2022-04-20 22:00:00 -0500
headerImg: 
  src: /assets/headers/biggie-tts.png
  narrow: /assets/headers/biggie-tts.png
  width: "500px"
  height: "250px"
  class: no-radius
  alt: "A diagram of a 3 step plan. Step 1: text-to-speech (represented by an audio icon). Step 2: ???? Step 3: Biggie Smalls in the shape of an X"
---

<aside>
This post was originally a <a href="https://twitter.com/wowitisbryce/status/1515794042444996610">tweet thread</a>.
I've added more details and background explanations where possible, and rewritten it for the blog format.
</aside>

I love solving random bugs on the internet! 
Recently, I've gotten more comfortable with browser development tools.
Sometimes I'll be on a website and realize, "Hey, I can open this up and see how it works!" 
As a result, I've had a lot of fun finding bugs on random websites and figuring out why they happen. 

This post's target bug is getting the landing page demo of [FPT's text-to-speech service](https://fpt.ai/tts) to play a mashup of Notorious B.I.G's "Juicy" and the xx's "VCR". I'll walk through all of the steps I took, explaining each the best I can. 
You shouldn't need to know Javascript or web technologies to follow along. As long as you know the general ideas of what a web page is (and that Javascript is just the code that handles interactions on a web page) you'll be good.

## How I found the site in the first place

I've been teaching myself Vietnamese for a while now, using some combination of Duolingo, the Foreign Service Institute's [Vietnamese Course](https://www.fsi-language-courses.org/fsi-vietnamese-basic-course/), and [Anki](https://apps.ankiweb.net/) (a digital flash card app).
To make flash cards for vocabulary, I need the Vietnamese word, its English translation, and an audio clip of the Vietnamese pronunciation. Getting the audio clip is the harder part; you have to find a good audio source for the sound, open up an audio editor, and clip out individual words. I started using text-to-speech (TTS) apps to avoid that complicated process. [Sound of Text](https://soundoftext.com/) (and it's paid version, [Hearling](https://hearling.com/)) are useful, but they both use Vietnamese's northern, or Hanoi, dialect. From what I can tell, in Boston most people speak the southern dialect. Looking for an alternative TTS service led me to [FPT.ai](https://fpt.ai/tts), a Vietnamese based software company.

## Reproducing the bug

The front page of FPT's text-to-speech service has a place where you can try it out yourself, and it works fine. If you copy my favorite tongue twister, "Tôi la, 'Lá lạ là lá độc!'" (I yell, "the strange leaf is the poison leaf!") into the text area, and click "Generate Audio", there's a short loading sound, followed by the text-to-speech audio.

However, we came here to get generate the _southern accent_. If you select the "Lan Nhi" accent, and type "dạ" ("yes", one of the words that is pronounced differently between the north and south), the loading sound keeps playing. Then... Biggie starts singing? 

![A web form on the fpt.ai/tts site. The first box is where you enter vietnamese text, the second lets you choose you voice and accent, and the third lets you say how fast to read the text. At the bottom of the image, three dots, the loading icon, are moving, indicating the sound is still loading.](/assets/biggie-tts/form.png)

This keeps on for the entire song. The lines are from [Juicy](https://www.youtube.com/watch?v=_JZom_gVfuw), but the instrumental is different. Another thing to note is that the loading icon keeps repeating, so we can guess it's that the text-to-speech service isn't returning this response.

What specifically hooked me about this weirdness is that FPT's site seems otherwise well developed. It looks pretty sleek, and the rest of the site works for from what I can tell. So finding what seemed like an easter egg on the product's front page was surprising.

## Mystery 1: Why Biggie?

First thing I always do when something unexpected happens on a website is to go to the dev tools! The keyboard shortcut to get there in either Firefox or Chrome is F12 or Control-Shift-J. There's a whole lot going on in browser dev tools, but we're only going to need 3 tabs: 
* Console: shows any logs from the webpage, let's you type Javascript to run
* Debugger (called "Sources" in Chrome): shows you all of the page's Javascript code
* Network: shows all of the network requests from your browser to the web site.

First, click on the "Console tab". We're lucky enough that the most recent console log completely gives away the weirdest part of this mystery.

![A console log line that says: "Loading mixed (insecure) display content “http://kolber.github.io/audiojs/demos/mp3/juicy.mp3” on a secure page"](/assets/biggie-tts/https-warning.png)

This warning tells us that the audio playing is being served over HTTP, not HTTPS. Decomposing the jargon, HTTP (which stands for HyperText Transfer Protocol) is what the web runs on. Any time you visit a page on a website, your browser uses HTTP to ask the website for that specific page, and the website uses HTTP to send the page back to you. 
HTTPS uses asymmetric key encryption to keep those pages secret from any one in the middle who might be listening. 

<aside>
Fun fact: before HTTPS was common, you could easily copy other people's cookies on the same wifi network as you and literally sign in as them on Facebook. There was even a <a href="https://codebutler.github.io/firesheep/">Firefox extension that did it for you</a>.
</aside>

This warning happens because the Javascript code on the page is using plain HTTP to download the song, even though the page's original connection is made using HTTPS.

Back to the main mystery, the console gives us the exact URL of the song: [http://kolber.github.io/audiojs/demos/mp3/juicy.mp3](http://kolber.github.io/audiojs/demos/mp3/juicy.mp3).

<audio controls="controls" src="http://kolber.github.io/audiojs/demos/mp3/juicy.mp3"> </audio>

The root page of that site is just [the landing page](http://kolber.github.io/audiojs/) for [audio.js](https://github.com/kolber/audiojs), a Javascript library that plays audio, either using HTML 5 features or Flash apps, back when they were a thing. If we look around the GitHub for the project, we can find that they replaced `juicy.mp3` with royalty-free Creative Commons licensed tracks [back in 2016](https://github.com/kolber/audiojs/pull/205). And going even further back, we can find that they removed the `juicy.mp3` file from the main project [back in 2010](https://github.com/kolber/audiojs/commit/eb3f2bb63e7a9c986f05f30270930ba0a94ff3b0). However, the mp3 files stayed on the [GitHub pages website](https://github.com/kolber/audiojs/tree/gh-pages), and weren't updated when the main project replaced everything with the Creative Commons tracks. 

If we download the [MP3 itself](https://github.com/kolber/audiojs/blob/gh-pages/demos/mp3/juicy.mp3), we get the MP3's album cover as well: 

![The Album cover of the mystery song. The top left says "...?", the top right says, "wait what", and the bottom says "the notorious xx", with a "Parental Advisory: Explicit Content" sticker in the bottom left. The middle is the mask in the shape of an X over the face of Biggie Smalls](/assets/biggie-tts/notorious-xx-album-cover.jpg)

The [whole album](https://waitwhat.bandcamp.com/album/the-notorious-xx) is a mashup of Biggie and the xx by [waitwhat](http://waitwhatmusic.com/), who does all sorts of indie-rock hip-hop mashups. The instrumental is the [xx's VCR](https://www.youtube.com/watch?v=gI2eO_mNM88). The mash-up is pretty good in my opinion,
but it's probably not the choice I would have made for the demo code of a library.

But we still haven't answered an important question, where is this mashup even being played? It's included as a demo in `audio.js`, but none of the library
code itself is playing it. To answer this, we'd need to be able to search through all of the HTML, Javascript, and CSS code that is downloaded when we visit a webpage. Good thing we can do just that! 

* We can go to the "Debugger" tab ("Sources" in Chrome) of our still-open dev-tools.
* In Firefox, click anywhere in the tab and press Control-Shift-F" to bring up the "find in files" search bar
    * in Chrome, you can go to the "Sources" tab, and right click "Top", then click "Search all files" 
* From there, we can search for "juicy.mp3". 

We can see that the `functions.js` loads the mashup every time someone clicks on button (specifically, any HTML element with the `form-ai-speed`, `form-ai-btn`, or `btn` classes). Mystery solved!

![A view of the Firefox dev tools. We are searching all of the files from fpt.ai for the word "juicy", which shows up in the functions.js file, being called in the audioJs() function. An `.on('click')` event handler is being added to the .form.ai-btn class.](/assets/biggie-tts/debugger.png)

## Mystery 2: Why "dạ"

We aren't quite done yet: why did the input "dạ" trigger the bug, but not anything else? To figure this out, click over to the "Network" tab of the dev tools. 
This tab lets you look at all of the information going between your browser and the website your visiting (or other sites).
When you get to the tab, refresh the page, wait for everything to load, then click the Trash can icon (in Chrome it's the 🚫 icon) to clear up all of the irrelevant requests. Then, copy "dạ" in, and click "Generate Audio". You'll get a few new requests pop up. 

![The network tab of Firefox. There are three network requests, one to `kolber.github.io`, one to `www.google.com`, and one to `demo.fpt.ai`](/assets/biggie-tts/network-firefox.png).

I have an ad blocker on my browser; without it you'll probably see a few more requests going to tracking sites and Facebook. These are the important ones:
* a GET for the `juicy.mp3` that starts playing. From our previous sleuthing that, we know this happens immediately when the button is clicked.
* a POST to `www.google.com`. We can see that the initiator is `recaptcha__en.js`. [reCAPTCHA](https://developers.google.com/recaptcha/) is the "I'm not a robot" checkbox you see on a lot of pages, and in this case is here to make sure that we're not a bot taking advantage of FPT's API without making an account first.
* a POST to `demo.fpt.ai`. This is the one we want to look at! If you click on that line, you'll see some more info about the request, and if you go to the "Response" tab of the request, you'll see that there was an error: "Body must have at least 3 characters". Which explains it: even though "dạ" is a valid word, the API isn't meant to handle individual words, it's built for full sentences and longer paragraphs.

## Conclusions

There's not a clear moral of this story. As cool as it is, maybe don't use unlicensed mashups in your demo projects; it's caused some legal issues with other projects before and [caused them to be copyright-striked](https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/) until they [removed the offending content](https://github.com/animelover1984/youtube-dl/commit/0851123c1909558268e8e237214d9c466cf5198d). 

My take-away is that doing detective work like this is fun. I've started doing it a lot more since getting comfortable with Javascript and web dev in general. [Julia Evans wrote another great post](https://jvns.ca/blog/2022/03/10/how-to-use-undocumented-web-apis/) about doing this sort of thing with web APIs.

If you want to dive more into dev tools, you can go to [Firefox's documentation](https://firefox-dev.tools/), or [Chrome's documentation](https://developer.chrome.com/docs/devtools/).
