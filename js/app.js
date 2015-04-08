var textToSpeech = {
  textField: null,
  convertButton: null,
  resetButton: null,
  audioResultDisplay: null,

  url: "http://api.voicerss.org/",
  params: {
    key: "08bbc81644394c6ea4fac406abc5556e",
    src: "",
    hl: "en-us",
  },

  init: function() {
    textToSpeech.textField = $("#textToConvert"); //defines what textField represents
    textToSpeech.convertButton = $("#convertButton"); //defines what convertButton represents
    textToSpeech.audioResultDisplay = $("#audioSrc"); //defines what audioResultDisplay represents
    textToSpeech.initEvent(); 
  },

  //function that describes what should happen on click of the convertButton
  initEvent: function() {
    textToSpeech.convertButton.click(textToSpeech.validate);
  },

  //checks the input string to see if there was text typed(validation process)
  validate: function(e) {
    e.preventDefault();

    var convertText = textToSpeech.textField.val();
    if(convertText !== "") {
      textToSpeech.params.src = convertText;
      textToSpeech.convert();
    }
    else {
      alert("Please type in text that you want to convert");
    }
  },

  //function that describes the convertion from text to audio
  convert: function() {
    var audioBook = '<audio controls autoplay>';
    audioBook += '<source src =' + textToSpeech.url + '?key=' + textToSpeech.params.key + '&src=' + encodeURIComponent(textToSpeech.params.src) +'&hl=' + textToSpeech.params.hl + '>';
    audioBook += "Please type in text that you want to convert";
    audioBook += '</audio>';
    textToSpeech.audioResultDisplay.html(audioBook);
  }
}
$(document).ready(textToSpeech.init);
