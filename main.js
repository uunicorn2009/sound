function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Vtj2s7ASN/model.json",modelReady);
 }
 function modelReady(){
     classifier.classify(gotResults);
 }
 function gotResults(error,results){
     console.log("Got result");
 }
 function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Vtj2s7ASN/model.json",modelReady);
 }
 function modelReady(){
     classifier.classify(gotResults);
 }
 function gotResults(error,results){
     if (error) {
         console.error(error);
         
     } else {
         console.log(results);
         randmNumberR=Math.floor(Math.random()*255)+1;
         randmNumberG=Math.floor(Math.random()*255)+1;
         randmNumberB=Math.floor(Math.random()*255)+1;
         document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
         document.getElementById("result_accuracy").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%"; 
         document.getElementById("result_label").style.color="rgb("+randmNumberR +","+randmNumberG+","+randmNumberB+")";
         document.getElementById("result_accuracy").style.color="rgb("+randmNumberR +","+randmNumberG+","+randmNumberB+")";
     img=document.getElementById("alien1");
     img1=document.getElementById("alien2");
     img2=document.getElementById("alien3");
     img3=document.getElementById("alien4");
     if(results[0].label=="Roar"){
         img.src="download(3).jepg"
       
     }
     else if(results[0].label=="Bark"){

         img.src="download(1).jpeg"
       
     }
     else if(results[0].label=="Meowing"){

         img.src="download.jpeg"
       
 
 
     }
     else{
         img.src="humanear.jpg"
      
     }
 
     }
 }