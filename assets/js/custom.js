//****************** YOUR CUSTOMIZED JAVASCRIPT **********************//

// SAY global URL variables

var SAYSite = 'http://www.say.company/';
$('.SAYSite').attr('href', SAYSite);
var baseUrl = 'http://sayapp.company';
var apiEndPointUrl = '/api/v2';
var SAYApiUrl = baseUrl + apiEndPointUrl;
// console.log("SAY API url: " + SAYApiUrl);


// calculate age from birth date

function getAge(DOB){
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())){
        age = age - 1;
    }
    return age;
}


// get the file url and return the tag to show it on html

function getImgFile(fileUrl){
    var show_file = '<a target="_blank" href="' + baseUrl + fileUrl +'"><img class="tableImg" src="' + baseUrl + fileUrl +'" /></a>';
    return show_file;
}

function getVoiceFile(fileUrl){
    var show_file = '<audio src="' + baseUrl + fileUrl +'" controls></audio>';
    return show_file;
}

function getFile(fileUrl){
    var show_file = '<a target="_blank" href="' + baseUrl + fileUrl +'">Click here to see the file</a>';
    return show_file;
}

