**NOTE:** Shortly after I got done writing this I gathered from a comment on
the relevant [Sphinx issue](https://github.com/sphinx-doc/sphinx/pull/6727#issuecomment-541393869)
that this already exists in Python's own docs (``>>>`` symbol in the top right,
[copybutton.js](https://docs.python.org/3/_static/copybutton.js)). The version
in the Python docs looks better and has cleaner code, so this is totally
useless now.


sphinxcontrib-repl-selectability
================================

[![Documentation Status](https://readthedocs.org/projects/sphinxcontrib-repl-selectability/badge/?version=latest)](https://sphinxcontrib-repl-selectability.readthedocs.io/en/latest/?badge=latest)

Sphinx extension that decorates each REPL (interactive, console, ...) code
snippet with checkboxes to select whether the prompts and/or outputs are
selectable, so that readers can e.g. only copy the input lines and ignore the
rest.

![Screencast 2021-03-31 00:04:08](https://user-images.githubusercontent.com/3827982/113063318-67b5ae00-91b5-11eb-89f2-1ad205262a67.gif)

> **Note:** I gave it the "sphinxcontrib" prefix to put it in the category of
"user-contributed Sphinx extensions", but for now it's not affiliated with the
sphinxcontrib GitHub organization in any way. I'll try to get it in there as
soon as it's halfway stable, complete, and clean.

Refer to the
[documentation](https://sphinxcontrib-repl-selectability.readthedocs.io/en/latest/)
for a demo and how to use it.
