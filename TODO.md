# Idea list

* Implement dropdowns for projects?
* Writing actual blog posts
  * One about my photo editing process for BARC (and currently)
  * use the presentation for 640
  * The Industrial Robotics talk into a post?

* Figure out the [aria-required-child-element error](https://web.dev/aria-required-children/):
  * Happening in blogs where there are footnotes
  * I'm not the only one dealing with it in Jekyll, but the issue seems to be in Kramdown: https://github.com/jekyll/jekyll/issues/8625
    * the linked Kramdown one I think is wrong and won't fix it: need to check: https://github.com/gettalong/kramdown/pull/693
  * But is the check even correct?
    * lighthouse uses aXe library: https://github.com/GoogleChrome/lighthouse/blob/bfa5351639f81ea8a034bed6fb752864ff71f580/lighthouse-core/audits/accessibility/axe-audit.js
      * settings used by lighthouse when running aXe
    * axe-core mentions that by default, ARIA roles 'doc-endnotes' should be marked as "Needs Review" rather than a violation if the element has no owned children.
    * the actual code that runs the check in aXe core
  * https://www.w3.org/WAI/standards-guidelines/act/rules/aria-required-owned-element-bc4a75/#background claims that actually `doc-endnotes` has issues with their use of role inheritance and all have no required owned elements
  * might be the right one: https://github.com/gettalong/kramdown/pull/723

* Deep dive on reading speed:
  * Is it really just 200 wpm? Does it vary based on reading level? Display? How much time do images add? Seems like there are deeper problems that no one talks about, and online calculators want to hide the complexity of
  * https://ezinearticles.com/?What-is-the-Average-Reading-Speed-and-the-Best-Rate-of-Reading?&id=2298503
  * https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786?via%3Dihub

* ~Add Analytics~:
  * Tried [Plasuible](https://github.com/plausible/analytics/), worked fine but it doesn't tell me much besides "ooh, numbers go up when post".  Could get
    more info, but would be creepy.
