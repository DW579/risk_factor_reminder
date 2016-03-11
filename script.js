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
var $calendarDateSet = $('#calendarDateSet');

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

     $calendarDateSet.text(2016 + '-' + birthMonth.value + '-' + birthDay.value + 'T09:00:00-07:00');

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

     $calendarDateSet.text(2016 + '-' + birthMonth.value + '-' + birthDay.value + 'T09:00:00-07:00');
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

     $calendarDateSet.text(2016 + '-' + birthMonth.value + '-' + birthDay.value + 'T09:00:00-07:00');
   });
 }
})

//******Below is code for calendar api call*********

var $reminderInformation = $('#reminderWell');

var CLIENT_ID = '72020936013-6e7i4ehac00n0rh5bh2321h0nmuu5b3r.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar"];

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    document.getElementById('calendarButton').style.display = 'block';
    loadCalendarApi();
  }
  else {
    authorizeDiv.style.display = 'inline';
    document.getElementById('calendarButton').style.display = 'none';
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

function loadCalendarApi() {
  gapi.client.load('calendar', 'v3');
}

var $calendarButton = $('#calendarButton');
var $selectedCondition = $('#selectedCondition');

$calendarButton.on('click', function() {
  var event = {
    'summary': $selectedCondition.text(),
    'description': $reminderInformation.text(),
    'start': {
      'dateTime': $calendarDateSet.text(),
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': $calendarDateSet.text(),
      'timeZone': 'America/Los_Angeles'
    },
    'recurrence': [
      'RRULE:FREQ=YEARLY'
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    }
  };
  alert('Please visit your Google Calendar for the reminder');

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function(event) {
    console.log('Event created: ' + event.htmlLink);
  });
})
