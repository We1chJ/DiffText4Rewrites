// import marked from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

// function displayDiff() {
//   const before = document.getElementById('before').value;
//   const after = document.getElementById('after').value;
  
//   const diff = JsDiff.diffWordsWithSpace(before, after);
//   const output = document.getElementById('output');
  
//   let html = '';
//   diff.forEach(part => {
//     const tag = part.added ? 'ins' : part.removed ? 'del' : 'span';
//     const text = dompurify.sanitize(part.value);
//     html += `<${tag}>${text}</${tag}>`;
//   });
  
//   output.innerHTML = marked(html);
// }
