# Idea list

* Implement dropdowns for projects?
* Writing actual blog posts
  * One about my photo editing process for BARC (and currently)
  * use the presentation for 640
  * The Industrial Robotics talk into a post?
  * Why I changed careers
* Add Analytics:
  * Try [Plasuible](https://github.com/plausible/analytics/) instead of Google Analytics
    * Working on Jekyll with [this plugin](https://awesomeopensource.com/project/hendrikschneider/jekyll-analytics)
  * Or [Gauges](https://get.gaug.es/)? Cheaper for 100k, but I might not ever even reach that.


* Figure out the aria-required-child-element error:
  * https://web.dev/aria-required-children/?utm_source=lighthouse&utm_medium=devtools
  * Happening in blogs where there are footnotes
  * I'm not the only one dealing with it in Jekyll, but the issue seems to be in Kramdown: https://github.com/jekyll/jekyll/issues/8625
    * the linked Kramdown one I think is wrong and won't fix it: need to check: https://github.com/gettalong/kramdown/pull/693
  * But is the check even correct?
    * lighthouse uses aXe library: https://github.com/GoogleChrome/lighthouse/blob/bfa5351639f81ea8a034bed6fb752864ff71f580/lighthouse-core/audits/accessibility/axe-audit.js
      * settings used by lighthouse when running aXe
    * axe-core mentions that by default, ARIA roles 'doc-endnotes' should be marked as "Needs Review" rather than a violation if the element has no owned children.
    * the actual code that runs the check in aXe core
  * https://www.w3.org/WAI/standards-guidelines/act/rules/aria-required-owned-element-bc4a75/#background claims that actually `doc-endnotes` has issues with their use of role inheritance and all have no required owned elements