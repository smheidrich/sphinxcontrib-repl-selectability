Theming
=======

The extension comes with a CSS template containing theme configuration
variables for the used colors, so if all you want to do is change these, you
can override these using the ``repl_selectability_theme_options`` Sphinx config
option.

Within the above dict, you can set:

- **codesettings_bg**
- **codesettings_button_hover_bg**
- **codesettings_button_text**

More to follow later...

If these aren't set, the extension will try to fall back to a predefined config
for the default colors of your currently loaded theme (identified only by name,
hence might be ambiguous). So if you've changed its default colors, the
extension theme will probably look bad and you should set its colors explicitly
as stated above.
If it complains that it didn't find a config for your theme, feel free to send
a pull request with what you think looks good.

Finally, if it can't find predefined options for the current theme, it will
fall back to hardcoded defaults (just some grey stuff for now).
