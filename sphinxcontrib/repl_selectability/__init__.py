import importlib.resources
import os.path
from sphinx.util.fileutil import copy_asset

# how to add JS+CSS from:
# https://github.com/sphinx-doc/sphinx/issues/1379#issuecomment-809006086
# TODO: open sphinx ticket about documenting copy_asset somewhere

# resource path from https://stackoverflow.com/a/58941536/2748899 , although it
# seems that there is some controversy as to what is the "future-proof" method

def inject_js_css_paths(app):
  app.add_js_file("repl-selectability.js")
  app.add_css_file("repl-selectability.css")

def copy_asset_files(app, exc):
  asset_files = [...]
  if exc is None: # build succeeded
    for path in asset_files:
      with importlib.resources.path(__name__, "repl-selectability.js") as p:
        # XXX: open sphinx ticket regarding copy_asset being able to take
        # pathlib.Path so I don't have to convert it to str here
        copy_asset(str(p), os.path.join(app.outdir, '_static'))
      with importlib.resources.path(__name__, "repl-selectability.css") as p:
        copy_asset(str(p), os.path.join(app.outdir, '_static'))

def setup(app):
  app.connect('builder-inited', inject_js_css_paths)
  app.connect('build-finished', copy_asset_files)
