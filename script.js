$(document).ready(function () {

    var friends = ['John', 'Jacob', 'Jingle', 'Heimer', 'Schmidt'];
    var locations = ['parlor', 'kitchen', 'dining room', 'bedroom', 'library', 'garden', 'study', 'den', 'bathroom', 'basement'];
    var weapons = ['used bandaid', 'banana', 'cherry coke', 'fragile masculinity', 'burger of the day', 'original 1970s Batman figurine', 'thrift store sunlgasses', 'toenail clippings', 'apple martini', 'impending sense of doom', 'sugar plums', 'vegan cheese', 'highlights magazine', 'tic-tac-toe code', 'quarantine', 'label maker', 'kittens', 'snakes on a plane', 'for loop', 'broken lightbulb'];

    for (var i = 1; i < 101; i++) {
        $('.accusations').append('<h3 id="number ' + i + '">Accusation Number ' + i + '</h3>');
        $('h3').click(function () {
            console.log('jacuse!');
        })
    };






    //end of body
});