/* see STANDARD_TYPES definition in
 * https://github.com/pygments/pygments/blob/master/pygments/token.py
 * for CSS classes used by pygments
 */

function hasPrompts(highlightElem) {
  return highlightElem.getElementsByClassName('gp').length > 0;
}

window.onload = function() {
  var highlightElems = document.getElementsByClassName('highlight');
  for (let highlightElem of highlightElems) {
    if (!hasPrompts(highlightElem)) {
      continue;
    }
    var codeSettingsNode = document.createElement("div");
    codeSettingsNode.classList.add('codesettings');
    codeSettingsNode.innerHTML = '<form></form>';
    var selectOutputsNode = document.createElement("label");
    selectOutputsNode.innerHTML = '<input type="checkbox" checked><span>select outputs</span>';
    codeSettingsNode.firstChild.appendChild(selectOutputsNode);
    var selectPromptsNode = document.createElement("label");
    selectPromptsNode.innerHTML = '<input type="checkbox"><span>select prompts</span>';
    codeSettingsNode.firstChild.appendChild(selectPromptsNode);

    highlightElem.parentNode.insertBefore(codeSettingsNode, highlightElem);

    selectOutputsNode.firstChild.addEventListener("change", (ev) => {
      var c = ev.target.checked;
      /* Considering what we want is "all elements between certain other
       * elements", there might be a way to simplify this usign CSS:
       * https://stackoverflow.com/a/42575222/2748899
       * But I'm not a webdev so will have to research a bit more.
       */
      var inOutputBlock = false;
      for (subelem of highlightElem.firstChild.children) {
        if (["go", "gr", "ge"].some((x) => subelem.classList.contains(x))) {
          inOutputBlock = true;
          console.log(subelem);
        } else if (subelem.classList.contains("gp")) {
          inOutputBlock = false;
        }
        if (inOutputBlock) {
          subelem.style.userSelect = c ? 'auto' : 'none';
        }
      }
    });

    selectPromptsNode.firstChild.addEventListener("change", (ev) => {
      for (subelem of highlightElem.getElementsByClassName('gp')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

  }
}
