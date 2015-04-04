var textToSpeech= {
  textField: null,
  convertButton: null,
  audioResultDisplay: null,

  url: "http://api.voicerss.org/",
  params: {
    key: "08bbc81644394c6ea4fac406abc5556e",
    src: "",
    hl: "en-us",
  },

  init: function() {
    textToSpeech.textField = $("#textToConvert");
    textToSpeech.convertButton = $("#convertButton");
    textToSpeech.audioResultDisplay = $("#audioSrc");
    textToSpeech.initEvent();
  },
  initEvent: function() {
    textToSpeech.convertButton.click(textToSpeech.validate);
  },
  validate: function(e) {
    e.preventDefault();
    var convertText = textToSpeech.textField.val();
    if(convertText !== "") {
      textToSpeech.params.src = convertText;
      textToSpeech.convert();
    }
    else {
      alert("Yor browser does not support this");
    }
  },

  convert: function() {
    var audioBook = '<audio controls autoplay>';
    audioBook += '<source src =' + textToSpeech.url + '?key=' + textToSpeech.params.key + '&src=' + encodeURIComponent(textToSpeech.params.src) +'&hl=' + textToSpeech.params.hl + '>';
    audioBook += "Your browser does not support this";
    audioBook += '</audio>';
    textToSpeech.audioResultDisplay.html(audioBook);
  }
}
$(document).ready(textToSpeech.init);
//});