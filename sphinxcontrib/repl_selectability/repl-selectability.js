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
      for (subelem of highlightElem.getElementsByClassName('go')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
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
