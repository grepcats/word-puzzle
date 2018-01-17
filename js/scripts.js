$(document).ready(function() {

  var input = prompt("Enter Something");
  var chars = input.split("");
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < chars.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (chars[i] === vowels[j]) {
        chars[i] = '-';
      }
    }
    chars[i]
  }

  var output = chars.join("");
  alert(output);

});
