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
	"role": "Supra Genius",
	"contactMobile": "In the desert",
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "acme makes the best products!",
	"skills":["Genius IQ","Expert Hunter", "Master Trap Designer"]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
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
	$("#header").append(formattedSkills);
}