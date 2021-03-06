More examples
=============

This page lists some more examples that double as tests that the extension
works in all sorts of situations. Click on "Page source" to see how these
differ in detail.

Doctest block
-------------

Same snippet as the one on the home page, just to have everything in one place:

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


Code block
----------

Sphinx RST code block instead of doctest block:

.. code:: python

  >>> print("Hello world")
  Hello world
  >>> please raise an error thank you
    File "<stdin>", line 1
      please raise an error thank you
             ^
  SyntaxError: invalid syntax
  >>> print("Hello", doesnt_exist=3)
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  TypeError: 'doesnt_exist' is an invalid keyword argument for print()


Languages other than Python
---------------------------

.. code:: console

  $ echo 'Hello world'
  Hello world
  $ echo 'a multiline '\
  > 'string'
  a multiline string


No prompt
---------

Just to make sure it doesn't add checkboxes where none are needed:

.. code:: python

  print("Hello world")
