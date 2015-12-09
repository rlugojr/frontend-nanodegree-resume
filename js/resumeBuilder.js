/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Ray Lugo, Jr.");

/* var formattedName = HTMLheaderName.replace("%data%","Wyle E. Coyote");
 var formattedRole = HTMLheaderRole.replace("%data%","Supra Genius");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var bio={
	"name":"Wyle E. Coyote",
	"role": "Super Genius",
	"biopic": "images/wecoyote.gif",
	"welcomeMessage": "Acme Corporation makes the best products!",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "HowlingFromHunger@gmail.com",
        "github": "BirdSmasher",
        "twitter": "@HungryCoyote",
        "location": "Teec Nos Pos, Arizona"
    },
    "skills":[
    	"Genius IQ",
    	"Expert Hunter",
    	"Master Trap Designer"
    ],
    "display":""
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedcontactMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedcontactEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedcontactGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedcontactTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedcontactLocation = HTMLlocation.replace("%data%",bio.contacts.location);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);

for(item in bio.skills){
    formattedSkills = HTMLskills.replace("%data%",bio.skills[item])
    $("#skills").append(formattedSkills);
}

$("#topContacts").append(formattedcontactMobile);
$("#topContacts").append(formattedcontactEmail);
$("#topContacts").append(formattedcontactGithub);
$("#topContacts").append(formattedcontactTwitter);
$("#topContacts").append(formattedcontactLocation);



var education = {
    "schools": [
        {
            "name": "Monument Valley Univeristy",
            "location": "Bluff, Utah",
            "degree": "Doctorate ",
            "majors": ["Mechanical Engineering","Electrical Engineering","Cartoon Physics"],
            "date": "1935 - 1942",
            "url": "www.mvu.com"
        },
        {
            "name": "Monument Valley High School",
            "location": "Durango, Colorado",
            "degree": "Diploma",
            "majors": ["Mathematics","Literature","History"],
            "date": "1930 - 1935",
            "url": "www.mvhs.com"
        },
        {
            "name": "Monument Valley Elementary",
            "location": "Kayenta, Arizona",
            "degree": "Graduated",
            "majors": ["Chasing birds", "Chasing Mice", "First Aid"],
            "date": "1924 - 1930",
            "url": "www.mves.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Coping with Depression",
            "school": "Monument Valley Online",
            "date": "1947",
            "url": "www.mvo.com"
        },
        {
            "title": "Roadrunners: Sure Fire Traps",
            "school": "Monument Valley Online",
            "date": "1946",
            "url": "www.mvo.com"
        },
        {
            "title": "How to Prepare Roadrunner",
            "school": "Monument Valley Online",
            "date": "1945",
            "url": "www.mvo.com"
        }
    ],
    "display":""
}

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    for (major in education.schools[school].majors){
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);
    }
}

$(".education-entry:last").append(HTMLonlineClasses);
for (course in education.onlineCourses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
    $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
}


var work = {
    "jobs": [
        {
            "employer": "RoadKill, Inc.",
            "title": "CEO and Trap Evangilist",
            "location":"Monument Valley",
            "dates": "1948 - Present",
            "description": "Sole Owner, Operator and Chief Architect of RoadKill, Inc., a company devoted to the research, design and implementation of the ultimate Rube Goldberg-esque Roadrunner traps guaranteed to catch the most elusive Roadrunner I have located to date.  Quality products, intricately designed, each one hand-made to ensure successful capture of prey!"
        },
        {
            "employer": "Acme Corp.",
            "title": "Lead Trap Architect",
            "location":"Durango, Colorado",
            "dates": "1945 - 1948",
            "description": "Research, design and implementation of hundreds of models of Roadrunner traps that have been used successfully by Coyotes across the country and internationally. Received the Trap Builder of the Year award for 3 consecutive years."
        },
        {
            "employer": "Acme Corp.",
            "title": "Product Tester",
            "location":"Durango, Colorado",
            "dates": "1940 - 1945",
            "description": "Responsible for Quality Assurance of various models of Acme products through methodic and rigorous testing methods. Was promoted to Lead QA tester after desiging and implementing automated testing frameworks to ensure uniform and repetitive tests were performed.  Automated tests decreased the number of work related injuries exponentially and I was promoted as a result of my innovation in the testing community."
        }
    ],
    "display":""
}

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}


for (item in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[item].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[item].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[item].description);
	$(".work-entry:last").append(formattedDescription);
}

var projects = {
    "projects": [
        {
            "title": "Batman Outfit",
            "dates": "1948",
            "description": "My award winning design was the very first wingsuit ever used.  Swoop down on prey like an eagle!",
            "images": ["images/batman/batman_outfit_1.png","images/batman/batman_outfit_2.png","images/batman/batman_outfit_3.png"]
        },
        {
            "title": "Rocket Sled",
            "dates": "1947",
            "description": "Reach speeds of over 400MPH with a Rocket Sled.  No Roadrunner can outrun this before they run out of road!",
            "images": ["images/sled/sled_1.png","images/sled/sled_2.png","images/sled/sled_3.png"]
        },
        {
            "title": "Jet Powered Roller Skates",
            "dates": "1946",
            "description": "It looked better on paper.  Good in theory but truly painful when applied to real life.",
            "images": ["images/skates/skates_1.png","images/skates/skates_2.png","images/skates/skates_3.png"]
        }
    ],
    "display":""
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[2] = name[2].toUpperCase();
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase();

    return name[0] + " " + name[1] + " " + name[2];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);