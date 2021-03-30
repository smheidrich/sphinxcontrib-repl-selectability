Welcome to sphinxcontrib-repl-selectability's documentation!
============================================================

Sphinx extension that decorates each REPL (interactive, console, ...) code
snippet with checkboxes to select whether the prompts and/or outputs are
selectable, so that readers can e.g. only copy the input lines and ignore the
rest.


Demo
----

>>> from frozenexpr import returns_freezing, unfreeze
>>>
>>> @returns_freezing()
... class Rectangle:
...   def __init__(self, a, b, name):
...     self.a = a
...     self.b = b
...     self.name = name
...
...   @property
...   def area(self):
...     return self.a*self.b
>>>
>>> r1 = Rectangle(1, 2, "r1")
>>> r2 = Rectangle(3, 4, "r2")
>>>
>>> expr = r2.area / r1.area + 1
>>> print(expr)
(r2.area / r1.area + 1)
>>> unfreeze(expr)
7.0


Installation
------------

Via pip
~~~~~~~

To install the latest version directly from the repository:

.. code:: bash

  pip install git+https://github.com/smheidrich/sphinxcontrib-repl-selectability.git

Source code
~~~~~~~~~~~

The source repository can be found
`on GitHub <https://github.com/smheidrich/sphinxcontrib-repl-selectability>`_.


Usage
-----

Simply specify it as an extension in your Sphinx docs' ``conf.py`` file:

.. code:: python

  extensions = [
    ...
    'sphinxcontrib.repl_selectability',
  ]

It will automatically add the selectability options checkboxes to any `doctest`
snippets (application to regular RST codeblocks involving REPLs hasn't been
implemented yet, cf. `this issue
<https://github.com/smheidrich/sphinxcontrib-repl-selectability/issues/1>`_.


Table of contents
-----------------

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   examples


Indices and tables
------------------

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
