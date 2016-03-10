var $selectedCondition = $('#selectedCondition');

// Condition section
var $macularSection = $('#macularSection');

$macularSection.on('click', function(){
  $selectedCondition.text('Macular Degeneration, AMD');
})

var $alzheimerSection = $('#alzheimerSection');

$alzheimerSection.on('click', function() {
  $selectedCondition.text('Alzheimer Disease');
})

var $coronarySection = $('#coronarySection');

$coronarySection.on('click', function() {
  $selectedCondition.text('Coronary Artery Disease');
})

var $submitButton = $('#submitButton');

// Submit button for the form event listener
$submitButton.on('click', function() {
 if($selectedCondition.text() === 'Macular Degeneration, AMD') {
   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/assessment/diseases/ageRelatedMacularDegeneration",
     method: "POST",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
     data: JSON.stringify({
       "gender": gender.value,
       "yearOfBirth": birthYear.value,
       "ethnicity": eth.value,
       "systolicBloodPressure(mmHg)": bloodPressureInput.value,
       "weight(lbs)": weightInput.value,
       "height(in)": heightInput.value
     }),
   }
   $.ajax(settings).done(function(response) {
     var data = JSON.parse(response);
     $('#riskWell').append(data.diseases[0].risk65Level);
   });
 } else if($selectedCondition.text() === 'Alzheimer Disease') {
   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/assessment/diseases/alzheimersDisease",
     method: "POST",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
     data: JSON.stringify({
       "gender": gender.value,
       "yearOfBirth": birthYear.value,
       "ethnicity": eth.value,
       "systolicBloodPressure(mmHg)": bloodPressureInput.value,
       "weight(lbs)": weightInput.value,
       "height(in)": heightInput.value
     }),
   }
   $.ajax(settings).done(function (response) {
     var data = JSON.parse(response);
     $('#riskWell').append(data.diseases[0].risk65Level);
   });
 } else {
   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/assessment/diseases/coronaryArteryDisease",
     method: "POST",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
     data: JSON.stringify({
      "gender": gender.value,
      "yearOfBirth": birthYear.value,
      "ethnicity": eth.value,
      "systolicBloodPressure(mmHg)": bloodPressureInput.value,
      "weight(lbs)": weightInput.value,
      "height(in)": heightInput.value
    }),
   }
   $.ajax(settings).done(function (response) {
     var data = JSON.parse(response);
     $('#riskWell').append(data.diseases[0].risk65Level);
   });
 }
})
