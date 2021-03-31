Welcome to sphinxcontrib-repl-selectability's documentation!
============================================================

Sphinx extension that decorates each REPL (interactive, console, ...) code
snippet with checkboxes to select whether the prompts and/or outputs are
selectable, so that readers can e.g. only copy the input lines and ignore the
rest.


Demo
----

>>> print("Hello world")
Hello world
>>> please complain about syntax thank you
  File "<stdin>", line 1
    please complain about syntax thank you
           ^
SyntaxError: invalid syntax
>>> print("Hello", doesnt_exist=3)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'doesnt_exist' is an invalid keyword argument for print()


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
   theming


Indices and tables
------------------

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
