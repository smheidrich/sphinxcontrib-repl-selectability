from collections import ChainMap
from configparser import ConfigParser
import importlib.resources
import os.path
from sphinx.util.fileutil import copy_asset, copy_asset_file

# how to add JS+CSS from:
# https://github.com/sphinx-doc/sphinx/issues/1379#issuecomment-809006086
# TODO: open sphinx ticket about documenting copy_asset somewhere
# UPDATE: nvm actually, it's documented in the theming docs:
# https://www.sphinx-doc.org/en/master/development/theming.html#add-your-own-
#   static-files-to-the-build-assets

# resource path from https://stackoverflow.com/a/58941536/2748899 , although it
# seems that there is some controversy as to what is the "future-proof" method

def inject_js_css_paths(app):
  app.add_js_file("repl-selectability.js")
  app.add_css_file("repl-selectability.css")

def render_and_copy_asset_files(app, exc=None):
  if exc is None: # succeeded so far
    theme_config = get_theme_extension_conf(app)
    with importlib.resources.path(__name__, "repl-selectability.js") as p:
      # XXX: open sphinx ticket regarding copy_asset being able to take
      # pathlib.Path so I don't have to convert it to str here
      copy_asset(str(p), os.path.join(app.outdir, '_static'))
    with importlib.resources.path(__name__, "repl-selectability.css_t") as p:
      copy_asset(str(p), os.path.join(app.outdir, '_static'),
        context=theme_config)

DEFAULT_THEME_CONF=dict(
  options=dict(
    codesettings_bg='#ddd',
    codesettings_button_hover_bg='#ccc',
    codesettings_button_text='inherit',
  )
)

def get_theme_extension_conf(app):
  cp = ConfigParser()
  # 1. ultimate fallback defaults
  cp.read_dict(DEFAULT_THEME_CONF)
  # 2. theme config shipped with this extension (for some "popular" themes)
  theme_name = app.config["html_theme"]
  if theme_name is None:
    theme_name = "alabaster"
  try:
    with importlib.resources.path(__name__+".theme_extensions",
    f"{theme_name}.conf") as p:
      cp.read(p)
  except FileNotFoundError:
    # TODO log as INFO or sth, not that important after all
    print(f"{__name__}: no extended theme config shipped for theme "
      f"'{theme_name}', using defaults")
  # 3. given by user as repl_selectability_theme_options in Sphinx config
  sphinx_config_theme_opts = app.config["repl_selectability_theme_options"] \
    or {}
  d = ChainMap(sphinx_config_theme_opts, cp["options"])
  # prefix theme_ in line with "regular" themes
  return { f"theme_{k}": v for k, v in d.items() }

def on_builder_inited(app):
  inject_js_css_paths(app)
  render_and_copy_asset_files(app)

def setup(app):
  app.add_config_value("repl_selectability_theme_options", None, "html")
  app.connect('builder-inited', on_builder_inited)
