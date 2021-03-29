window.onload = function() {
  var elems = document.getElementsByClassName('doctest');
  for (elem of elems) {
    var codeSettingsNode = document.createElement("div");
    codeSettingsNode.classList.add('codesettings');
    codeSettingsNode.innerHTML = '<form></form>';
    var selectOutputsNode = document.createElement("label");
    selectOutputsNode.innerHTML = '<input type="checkbox" checked><span>select outputs</span>';
    codeSettingsNode.firstChild.appendChild(selectOutputsNode);
    var selectPromptsNode = document.createElement("label");
    selectPromptsNode.innerHTML = '<input type="checkbox"><span>select prompts</span>';
    codeSettingsNode.firstChild.appendChild(selectPromptsNode);
    elem.insertBefore(codeSettingsNode, elem.firstChild);

    let elemClos = elem; /* closure bs, important for ev handler below */
    selectOutputsNode.firstChild.addEventListener("change", (ev) => {
      for (subelem of elemClos.getElementsByClassName('go')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

    selectPromptsNode.firstChild.addEventListener("change", (ev) => {
      for (subelem of elemClos.getElementsByClassName('gp')) {
        var c = ev.target.checked;
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

  }
}
