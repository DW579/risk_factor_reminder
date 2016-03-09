// Condition section
macularSection.addEventListener('click', function(){
  selectedCondition.innerHTML = 'Macular Degeneration, AMD';
})

alzheimerSection.addEventListener('click', function() {
  selectedCondition.innerHTML = 'Alzheimer Disease';
})

coronarySection.addEventListener('click', function() {
  selectedCondition.innerHTML = 'Coronary Artery Disease';
})

// Submit button event listener
submitButton.addEventListener('click', function() {
  var finishedForm = {
    yearOfBirth: birthYear.value,
    gender: gender.value,
    ethnicity: eth.value,
    'weight(lbs)': weightInput.value,
    'height(in)': heightInput.value,
  };
  console.log(finishedForm);
  var stringFinishedForm = (JSON.stringify(finishedForm));
  console.log(stringFinishedForm);

 if(selectedCondition.innerHTML === 'Macular Degeneration, AMD') {
   var settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://api.basehealth.com/Genophen/api/v1/assessment/diseases/ageRelatedMacularDegeneration",
     "method": "POST",
     "headers": {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     "processData": false,
    //  "data": "{  \"gender\": \"hello\", \"yearOfBirth\": \"goodbye\", \"ethnicity\": \"please\"\n}"
     data: JSON.stringify({  "gender": gender.value, "yearOfBirth": birthYear.value, "ethnicity": eth.value}),
   }

   $.ajax(settings).done(function (response) {
     alert(response);
   });
  //  $.ajax({
  //    url: 'https://api.basehealth.com/Genophen/api/v1/assessment/diseases/alzheimersDisease',
  //    headers: {
  //      "user_key" : "ded92f1e09ae6a59c97207b6bb0194d2"
  //    },
  //    contentType: 'application/json',
  //    data: {
  //       gender : "male",
  //       yearOfBirth : "1965"
  //     },
  //    dataType: "JSON",
  //    method: 'POST',
  //    success: function(data) {
  //      alert(JSON.stringify(data));
  //    },
  //    error: function (data) {
  //      console.log('error: ', data);
  //    }
  //  })
 } else if(selectedCondition.innerHTML === 'Alzheimer Disease') {
  console.log(JSON.stringify(finishedForm));
 } else {
   console.log('you are on a role');
 }
})


// var finishedForm = {
//   yearOfBirth: birthYear.value,
//   gender: gender.value,
//   ethnicity: eth.value,
//   'weight(lbs)': weightInput.value,
//   'height(in)': heightInput.value,
// };
//
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.basehealth.com/Genophen/api/v1/assessment/diseases/alzheimersDisease",
//   "method": "POST",
//   "headers": {
//     "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
//     "content-type": "application/json",
//     "cache-control": "no-cache"
//   },
//   "processData": false,
//  //  "data": "{  \"gender\": \"gender.value\", \"yearOfBirth\": \"birthYear.value\", \"ethnicity\": \"eth.value\"\n}"
//  finishedForm,
// }
