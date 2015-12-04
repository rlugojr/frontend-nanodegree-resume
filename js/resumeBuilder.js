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
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "Acme makes the best products!",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "HowlingFromHunger@gmail.com",
        "github": "BirdSmasher",
        "twitter": "HungryCoyote",
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
//TODO: Update Contacts - Loop through contact info.
var formattedcontactMobile = HTMLmobile.replace("%data%",bio.contactMobile);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedcontactMobile);
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
                "name": "",
                "location": "",
                "degree": "",
                "majors": [],
                "dates": "",
                "url": ""
            },
            {
                "name": "",
                "location": "",
                "degree": "",
                "majors": [],
                "dates": "",
                "url": ""
            },
            {
                "name": "",
                "location": "",
                "degree": "",
                "majors": [],
                "dates": "",
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
            "employer": "Acme",
            "title": "Lead Trap Architect",
            "dates": "1945 - 1948",
            "description": "Research, design and implementation of hundreds of models of Roadrunner traps that have been used successfully by Coyotes across the country and internationally. Received the Trap Builder of the Year award for 3 consecutive years."
        },
        {
            "employer": "Acme",
            "title": "Product Tester",
            "dates": "1940 - 1945",
            "description": "Responsible for Quality Assurance of various models of Acme traps through methodic and rigorous testing methods. Was promoted to Lead QA tester after desiging and implementing automated testing frameworks to ensure uniform and repetitive tests were performed.  Automated tests decreased the number of work related injuries exponentially and I was promoted as a result of my innovation in the trap testing community."
        }
    ]
}

for (item in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[item].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%",work.job[item].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.job[item].description);
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

