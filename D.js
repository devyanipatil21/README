function countWords() {
    var text = document.getElementById('input-text').value;
    var words = text.toLowerCase().match(/\b\w+\b/g);
    var wordCount = {};
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    var sortedWords = [];
    for (var word in wordCount) {
      sortedWords.push([word, wordCount[word]]);
    }
  
    sortedWords.sort(function(a, b) {
      return b[1] - a[1];
    });
  
    var wordCountElement = document.getElementById('word-count');
    wordCountElement.innerHTML = '';
  
    for (var i = 0; i < sortedWords.length; i++) {
      var word = sortedWords[i][0];
      var count = sortedWords[i][1];
      var wordElement = document.createElement('p');
      wordElement.innerHTML = word + ': ' + count;
      wordCountElement.appendChild(wordElement);
    }
  }