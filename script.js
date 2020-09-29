$(document).ready(function () {

    //arrays
    var friends = ['Frodo', 'The 13th Doctor', 'Pickle Rick', 'Louise Belcher', 'Paul Rudd'];
    var locations = ['an alternate universe', 'the litter box', 'a for loop', 'the tardis', 'a time vortex', 'the shire', 'Central Perk', 'a gas station bathroom', 'the Wonder Wharf', 'a tiny clown car'];
    var weapons = ['used bandaid', 'banana', 'cherry coke', 'fragile masculinity', 'burger of the day', 'original 1970s Batman figurine', 'thrift store sunlgasses', 'toenail clippings', 'apple martini', 'impending sense of doom', 'sugar plums', 'vegan cheese', 'highlights magazine', 'tic-tac-toe code', 'quarantine', 'label maker', 'kittens', 'snakes on a plane', 'for loop', 'broken lightbulb'];

    for (var i = 1; i < 101; i++) {
        //create h3's
        var $h3 = $('<h3>Accusation Number ' + i + '</h3>');
        $($h3).appendTo('div');
        $($h3).click(makeAlert(i));
    };
    function makeAlert(i) {
        //randomize arrays
        var friendsBlah = friends[Math.floor(Math.random() * friends.length)];
        var locationsBlah = locations[Math.floor(Math.random() * locations.length)];
        var weaponsBlah = weapons[Math.floor(Math.random() * weapons.length)];
        function accusationAlert() {
            alert('Accusation' + i + ": I accuse " + friendsBlah + " with the " + weaponsBlah + " in " + locationsBlah + "!");
        };
        return accusationAlert;
    };


    //end of body
});