function hasPrompts(highlightElem) {
  return highlightElem.getElementsByClassName('gp').length > 0;
}

window.onload = function() {
  var highlightElems = document.getElementsByClassName('highlight');
  for (highlightElem of highlightElems) {
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

    /* closure bs, important for ev handler below */
    let highlightElemParent = highlightElem.parentNode;

    highlightElemParent.insertBefore(codeSettingsNode,
      highlightElemParent.firstChild);

    selectOutputsNode.firstChild.addEventListener("change", (ev) => {
      for (subelem of highlightElemParent.getElementsByClassName('go')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

    selectPromptsNode.firstChild.addEventListener("change", (ev) => {
      for (subelem of highlightElemParent.getElementsByClassName('gp')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

  }
}
