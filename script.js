var $selectedCondition = $('#selectedCondition');

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
       "height(in)": heightInput.value,
       "ageQuitSmoking": ageQuitSmoking.value,
       "ageWhenBeganSmoking": ageBeganSmoking.value,
       "hasSmoked100CigarettesInLifetime": lifetimeSmoke.value,
       "isCurrentSmoker": currentSmoker.value,
       "isTakingActionToQuit": stopSmoking.value,
       "numberWeeklyCigarettesWhenLastSmoked": weeklyCigs.value,
       "relationship": familyMember.value,
       "disease": familyMemberCondition.value,
       "ageOfOnset": ageOnset.value
     }),
   }
   $.ajax(settings).done(function(response) {
     var data = JSON.parse(response);
     $('#riskLevel').append(data.diseases[0].risk65Level);
     $('#lifetimeOdds').append(data.diseases[0].lifetimeOdds);
   });

   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/diseases/ageRelatedMacularDegeneration",
     method: "GET",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
   }
   $.ajax(settings).done(function(response) {
     var data = JSON.parse(response);
     $('#statCost').append(data.statistics.cost);
     $('#statIn').append(data.statistics.incidence);
     $('#statPre').append(data.statistics.prevalence);
     $('#moreInfo').append(data.genetics.summary);
     $('#modRisk').append(data.risk_factors.modifiable);
     $('#preventionWell').append(data.risk_prevention[0].actions);
     $('#preventionWell').append(data.risk_prevention[1].actions);
     $('#preventionWell').append(data.risk_prevention[2].actions);
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
       "height(in)": heightInput.value,
       "relationship": familyMember.value,
       "disease": familyMemberCondition.value,
       "ageOfOnset": ageOnset.value,
       "diastolicBloodPressure(mmHg)": diastolicBlood.value
     }),
   }
   $.ajax(settings).done(function (response) {
     var data = JSON.parse(response);
     $('#riskLevel').append(data.diseases[0].risk65Level);
     $('#lifetimeOdds').append(data.diseases[0].lifetimeOdds);
   });
   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/diseases/alzheimersDisease",
     method: "GET",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
   }
   $.ajax(settings).done(function(response) {
     var data = JSON.parse(response);
     $('#statCost').append(data.statistics.cost);
     $('#statIn').append(data.statistics.hospitalizations);
     $('#statIn').append(data.statistics.mortality);
     $('#statPre').append(data.statistics.prevalence);
     $('#moreInfo').append(data.genetics.summary);
     $('#modRisk').append(data.risk_factors.modifiable);
     $('#preventionWell').append(data.risk_prevention[0].actions);
     $('#preventionWell').append(data.risk_prevention[1].actions);
     $('#preventionWell').append(data.risk_prevention[2].actions);
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
      "height(in)": heightInput.value,
      "diastolicBloodPressure(mmHg)": diastolicBlood.value,
      "relationship": familyMember.value,
      "disease": familyMemberCondition.value,
      "ageOfOnset": ageOnset.value,
      "ageQuitSmoking": ageQuitSmoking.value,
      "ageWhenBeganSmoking": ageBeganSmoking.value,
      "hasSmoked100CigarettesInLifetime": lifetimeSmoke.value,
      "isCurrentSmoker": currentSmoker.value,
      "isTakingActionToQuit": stopSmoking.value,
      "numberWeeklyCigarettesWhenLastSmoked": weeklyCigs.value
    }),
   }
   $.ajax(settings).done(function (response) {
     var data = JSON.parse(response);
     $('#riskLevel').append(data.diseases[0].risk65Level);
     $('#lifetimeOdds').append(data.diseases[0].lifetimeOdds);
   });
   var settings = {
     async: true,
     crossDomain: true,
     url: "https://api.basehealth.com/Genophen/api/v1/diseases/coronaryArteryDisease",
     method: "GET",
     headers: {
       "user_key": "ded92f1e09ae6a59c97207b6bb0194d2",
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     processData: false,
   }
   $.ajax(settings).done(function(response) {
     var data = JSON.parse(response);
     $('#statCost').append(data.statistics.cost);
     $('#statIn').append(data.statistics.hospitalizations);
     $('#statIn').append(data.statistics.mortality);
     $('#statPre').append(data.statistics.prevalence);
     $('#moreInfo').append(data.genetics.summary);
     $('#modRisk').append(data.risk_factors.modifiable);
     $('#preventionWell').append(data.risk_prevention[0].actions);
     $('#preventionWell').append(data.risk_prevention[1].actions);
     $('#preventionWell').append(data.risk_prevention[2].actions);
   });
 }
})

//******Below is code for calendar api call*********
var $calendarButton = $('#calendarButton');

$calendarButton.on('click', function() {
var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});



request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});
})
