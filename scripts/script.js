$(document).ready(function() {

    $.each(devProfile, function(key, valueObj) {

        if (key == 'pic') {
            console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
            $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
        } else {
            $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
        }
    });

    $('#month-box li').click(function() {
        $('#console-box').text($(this).text());
        $(this).toggleClass('selected').siblings().removeClass('selected');;
    });


});

const devProfile = {
    "name": ["Cody McDonald"],
    "pic": "https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/f135ee7745477b9242ad4f49b647bf1e9b7d83e5/aHR0cDovL28uYW9sY2RuLmNvbS9oc3Mvc3RvcmFnZS9taWRhcy9jMGZmZGVmYzFmNzlhZjdkNWIzMDU0ZDRmZjc0ZTc0OC8yMDM2MDAyMTIvZ01IVHRJWXJhYkE2ay5naWY=",
    "title": "Certified Classic, Swim Club President",
    "github": ["nutenjoyer", " https://github.com/nutenjoyer"],
    "background": "Senior IT Major, HCI/US Concentration",
    "interests": "Esports, Bass Guitar, Lifting",
    "currently listening/watching": "Around the Fur, The Boys"
};

