$(document).ready(function () {

    //arrays

    // var friends;
    // var locations;
    // var weapons;

    for (var i = 1; i < 101; i++) {
        //create h3's
        var $h3 = $('<h3>Accusation Number ' + i + '</h3>');
        $($h3).appendTo('div');
        $($h3).click(function () {
            //arrays
            friends = ['Frodo', 'The 13th Doctor', 'Pickle Rick', 'Louise Belcher', 'Paul Rudd'];
            locations = ['an alternate universe', 'the litter box', 'a for loop', 'the tardis', 'a time vortex', 'the shire', 'Central Perk', 'a gas station bathroom', 'the Wonder Wharf', 'a tiny clown car'];
            weapons = ['used bandaid', 'banana', 'cherry coke', 'fragile masculinity', 'burger of the day', 'original 1970s Batman figurine', 'thrift store sunlgasses', 'toenail clippings', 'apple martini', 'impending sense of doom', 'sugar plums', 'vegan cheese', 'highlights magazine', 'tic-tac-toe code', 'quarantine', 'label maker', 'kittens', 'snakes on a plane', 'for loop', 'broken lightbulb'];
//randomize arrays
            var friends = friends[Math.floor(Math.random() * friends.length)];
            var locations = locations[Math.floor(Math.random() * locations.length)];
            var weapons = weapons[Math.floor(Math.random() * weapons.length)];
            //alert
            alert('Accusation' + i + ": I accuse " + friends + " with the " + weapons + " in " + locations + "!");
        });
    };






    //end of body
});