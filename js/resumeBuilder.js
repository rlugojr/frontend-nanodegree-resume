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
	"pictureURL": "images/wecoyote.gif",
	"welcomeMessage": "Acme Corporation makes the best products!",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "HowlingFromHunger@gmail.com",
        "github": "BirdSmasher",
        "twitter": "HungryCoyote",
        "blog": "LonelyWolf.blogspot.com",
        "location": "Arizona, USA"
    },
    "skills":[
    	"Genius IQ",
    	"Expert Hunter",
    	 "Master Trap Designer"
    ]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedcontactMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedcontactEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedcontactGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedcontactTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedcontactBlog = HTMLblog.replace("%data%",bio.contacts.blog);
var formattedcontactLocation = HTMLlocation.replace("%data%",bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedcontactMobile);
$("#topContacts").append(formattedcontactEmail);
$("#topContacts").append(formattedcontactGithub);
$("#topContacts").append(formattedcontactTwitter);
$("#topContacts").append(formattedcontactBlog);
$("#topContacts").append(formattedcontactLocation);

$("#header").prepend(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);
for(item in bio.skills){
	formattedSkills = HTMLskills.replace("%data%",bio.skills[item])
	$("#skills").append(formattedSkills);
}

var education = {
    "schools": {
        "school": [
            {
                "name": "Monument Valley Vocational",
                "location": "Halchita, Utah",
                "degree": "",
                "majors": [],
                "dates": "1935 - 1940",
                "url": ""
            },
            {
                "name": "Monument Valley High School",
                "location": "Durango, Colorado",
                "degree": "",
                "majors": [],
                "dates": "1930 - 1935",
                "url": ""
            },
            {
                "name": "Monument Valley Elementary",
                "location": "Kayenta, Arizona",
                "degree": "none",
                "majors": ["Chasing birds", "Chasing Mice", "First Aid"],
                "dates": "1924 - 1930",
                "url": ""
            }
        ],
        "onlineCourses": {
            "onlineCourse": [
                {
                    "title": "",
                    "school": "",
                    "dates": "",
                    "url": ""
                },
                {
                    "title": "",
                    "school": "",
                    "dates": "",
                    "url": ""
                },
                {
                    "title": "",
                    "school": "",
                    "dates": "",
                    "url": ""
                }
            ]
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "RoadKill, Inc.",
            "title": "CEO and Trap Evangilist",
            "dates": "1948 - Present",
            "description": "Sole Owner, Operator and Chief Architect of RoadKill, Inc., a company devoted to the research, design and implementation of the ultimate Rube Goldberg-esque Roadrunner traps guaranteed to catch the most elusive Roadrunner I have located to date.  Quality products, intricately designed, each one hand-made to ensure successful capture of prey!"
        },
        {
            "employer": "Acme Corp.",
            "title": "Lead Trap Architect",
            "dates": "1945 - 1948",
            "description": "Research, design and implementation of hundreds of models of Roadrunner traps that have been used successfully by Coyotes across the country and internationally. Received the Trap Builder of the Year award for 3 consecutive years."
        },
        {
            "employer": "Acme Corp.",
            "title": "Product Tester",
            "dates": "1940 - 1945",
            "description": "Responsible for Quality Assurance of various models of Acme products through methodic and rigorous testing methods. Was promoted to Lead QA tester after desiging and implementing automated testing frameworks to ensure uniform and repetitive tests were performed.  Automated tests decreased the number of work related injuries exponentially and I was promoted as a result of my innovation in the testing community."
        }
    ]
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
    "project": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        }
    ]
}

projects.display = function() {
    for (project in projects) {
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

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[2] = name[2].toUpperCase();
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase();

    return name[0] + " " + name[1] + " " + name[2];
}

$("#main").append(internationalizeButton);


//$("mapDiv").append(googleMap);