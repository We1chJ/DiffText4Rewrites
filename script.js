function displayDiff() {
    var before = document.getElementById("before").value;
    var after = document.getElementById("after").value;
    var diff = Diff.diffWords(before, after);
    var output = "";
    for (var i = 0; i < diff.length; i++) {
      if (diff[i].added) {
        output += " *" + DOMPurify.sanitize(diff[i].value) + "*";
      } else if (diff[i].removed) {
        output += "~~" + DOMPurify.sanitize(diff[i].value) + "~~";
      } else {
        output += DOMPurify.sanitize(diff[i].value);
      }
    }
    var md = window.markdownit();
    document.getElementById("output").innerHTML = md.render(output);
    // document.getElementById("output").value = output;
    
  }
  
  function copyToClipboard() {
    const outputElement = document.getElementById("output");
    const range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }