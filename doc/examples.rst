More examples
=============

This page lists some more examples that double as tests that the extension
works in all sorts of situations.

Doctest block
-------------

Nothing new here except some errors (different CSS class in pygments):

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


No prompt
---------

Just to make sure it doesn't add checkboxes where none are needed:

.. code:: python

  print("Hello world")
