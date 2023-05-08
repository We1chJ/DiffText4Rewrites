function displayDiff() {
    var before = document.getElementById("before").value;
    var after = document.getElementById("after").value;
    var diff = Diff.diffWords(before, after);
    var output = "";
    for (var i = 0; i < diff.length; i++) {
      if (diff[i].added) {
        output += "*_" + DOMPurify.sanitize(diff[i].value) + "_*";
      } else if (diff[i].removed) {
        output += "~~" + DOMPurify.sanitize(diff[i].value) + "~~";
      } else {
        output += DOMPurify.sanitize(diff[i].value);
      }
    }
    document.getElementById("output").value = output;
  }
  