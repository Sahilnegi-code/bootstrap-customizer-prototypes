2 prototypes to implement a Bootstrap Customizer (a.k.a Color Theme Editor) in XWiki
============

Prototype A
---

The prototype A opens a real web page inside an iframe, and use the LESS browser compiler to update the CSS.

[Live Demo]().

* it uses LESS so it shows the real results
* any wiki page can be seen in the preview frame
* but it is quite slow, and sometime the browser gets frozen

Prototype B
---

This prototype emulates the behaviour of LESS when we change some variables.

[Live Demo]().

* The prototype runs quickly in the browser because there is no LESS compiler involved.
* But the preview box is not a real page and cannot show all use-cases.
