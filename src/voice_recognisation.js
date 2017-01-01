if (!('webkitSpeechRecognition' in window)) {
  alert("No voice recognization");
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() { console.log("Started"); }
  recognition.onresult = function(event) {console.log(event.results);
	 var interim_transcript = '';
	var final_transcript = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
	console.log(final_transcript);
	if(final_transcript === "click"){
		takePicture();
	}
	else{
		console.log("Wrong choice");
	}

  // recognition.start();
	 } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
}
  recognition.onerror = function(event) { console.log(event);}
  recognition.onend = function() { console.log("Ended"); }
}

recognition.start();
