/* see STANDARD_TYPES definition in
 * https://github.com/pygments/pygments/blob/master/pygments/token.py
 * for CSS classes used by pygments
 */

function hasPrompts(highlightElem) {
  return highlightElem.getElementsByClassName('gp').length > 0;
}

/* wrapping text node stuff based on:
 * https://coryrylan.com/blog/wrapping-dom-text-nodes-with-javascript
 */

function getAllTextNodes(element) {
  return Array.from(element.childNodes).filter(
    node => (node.nodeType == Node.TEXT_NODE && node.textContent.length >= 1));
}

function wrapFreeTextInSpans(element) {
  /* this is too complicated to understand so if it breaks just write it again
   * from scratch; what it does is it splits up text nodes into smaller text
   * nodes (using JS native node.splitText) such that newlines always appear at
   * the end of a node; this is important for how things will be divided into
   * "prompt lines" and "non-prompt lines" in the output selectability code
   * below */
  getAllTextNodes(element).forEach(node => {
    while (true) {
      var match = node.textContent.match(/\r\n|\r|\n/);
      if (match != null) {
        var nodeAfter = node.splitText(match.index+match.length);
      }
      const span = document.createElement('span');
      node.after(span);
      span.appendChild(node);
      if (match == null) {
        break;
      } else {
        node = nodeAfter;
      }
    }
  });
}

window.onload = function() {
  var highlightElems = document.getElementsByClassName('highlight');
  for (let highlightElem of highlightElems) {
    if (!hasPrompts(highlightElem)) {
      continue;
    }
    wrapFreeTextInSpans(highlightElem.firstChild);
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
      var inPromptLine = false;
      for (subelem of highlightElem.firstChild.children) {
        if (subelem.classList.contains("gp")
        && subelem.innerHTML.search("\n") == -1) {
          inPromptLine = true;
        }
        if (!inPromptLine) {
          subelem.style.userSelect = c ? 'auto' : 'none';
        }
        if (subelem.innerHTML.search("\n") != -1) {
          inPromptLine = false;
        }
      }
    });

    selectPromptsNode.firstChild.addEventListener("change", (ev) => {
      var c = ev.target.checked;
      for (subelem of highlightElem.getElementsByClassName('gp')) {
        subelem.style.userSelect = c ? 'auto' : 'none';
      }
    });

  }
}
