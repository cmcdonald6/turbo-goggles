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
    "pic": "https://ssb.wiki.gallery/images/0/05/RoyFTiltSSBU.gif",
    "title": "Certified Classic, Swim Club President",
    "github": ["nutenjoyer", " https://github.com/nutenjoyer"],
    "background": "Senior IT Major, HCI/US Concentration",
    "interests": "Esports, Bass Guitar, Lifting",
    "currently listening/watching": "Around the Fur, The Boys"
};

