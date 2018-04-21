Badges, Please
==============

Given a font file, a list of names, and some additional parameters,
BadgesPlease will generate batches of badges in SVG, containing only
paths and groups, no inlined fonts. Great if you want to manufacture
your badges yourself!

Badges, Please rotates the badges since cutting proccesses yield better
result if you move primarily along with the long sides of letters, and
we assumed movement on the x achsis.

Usage
-----

Run ``npm install`` for dependency installation. Copy the ``badge_data.example.js``
to ``badge_data.js`` and adjust parameters as needed. You need to provide paths
to font files, and we recommend to modify the name list aswell.

If you need to change the badge dimensions, head to ``generate-badge.js``.
If you want to change the rotation or the svg structure, look to ``templates/badge.mustache.svg``.

Generate svgs with ``npm start``. You'll find the files in the ``output/`` directory.
