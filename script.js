// function displayDiff() {
//   var before = document.getElementById("before").value;
//   var after = document.getElementById("after").value;
//   var diff = diffWords(before, after);
//   var output = "";
//   for (var i = 0; i < diff.length; i++) {
//     if (diff[i].added) {
//       output += "*" + DOMPurify.sanitize(diff[i].value) + "* ";
//     } else if (diff[i].removed) {
//       output += "~~" + DOMPurify.sanitize(diff[i].value) + "~~ ";
//     } else {
//       output += DOMPurify.sanitize(diff[i].value);
//     }
//   }
//   var md = window.markdownit();
//   document.getElementById("output").innerHTML = md.render(output);
// }

  // function copyToClipboard() {
  //   const outputElement = document.getElementById("output");
  //   const range = document.createRange();
  //   range.selectNode(outputElement);
  //   window.getSelection().removeAllRanges();
  //   window.getSelection().addRange(range);
  //   document.execCommand("copy");
  //   window.getSelection().removeAllRanges();
  // }

function displayDiff() {
  var before = document.getElementById("before").value;
  var after = document.getElementById("after").value;
  // const diff = Diff.diffWords(before, after);
  const diff = Diff.diffWordsWithSpace(before, after);

  let html = '<span>';
  for (let i = 0; i < diff.length; i++) {
    if (diff[i].added) {
      html += '<i>' + diff[i].value + '</i><span> </span>';
    } else if (diff[i].removed) {
      html += '<s>' + diff[i].value + '</s><span> </span>';
    } else {
      html += '' + diff[i].value + '';
    }
  }
  html += '</span>';
  document.getElementById("output").innerHTML = html;
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