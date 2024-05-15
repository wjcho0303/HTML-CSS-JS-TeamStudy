window.onload = function () {
  var select = document.querySelector(".language-picker");
  var options = [
    { text: "한국어", value: "korean" },
    { text: "English", value: "english" },
  ];

  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt.text;
    el.value = opt.value;
    select.appendChild(el);
  }
};
