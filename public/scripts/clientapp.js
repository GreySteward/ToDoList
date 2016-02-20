$(document).ready(function() {
    $('#post-name').on('click', clickPostName);
    $('#post-animal').on('click', clickPostAnimal);
    $('.container').on('click', '#combine', clickCombine);

});

function clickPostName() {
    event.preventDefault();
    var values = {};

    $.each($('#name-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);
    //console.log(nameArray);

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/name',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            $('#ajax-names').children().remove();
            data.forEach(function(person, i){

                $('#ajax-names').append('<div class="name">' + data[i].name + '</div>');
                $('#name-form').find('input[type=text]').val('');
            });
        }
    });
}

function clickPostAnimal() {
    event.preventDefault();
    var values = {};

    $.each($('#animal-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-animal').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/animal',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            //console.log(data);
            $('#ajax-animals').children().remove();
            data.forEach(function(person, i){

                $('#ajax-animals').append('<div class="animal">' + data[i].spiritAnimal + '</div>');
                $('#animal-form').find('input[type=text]').val('');
            });
        }
    });
}

function clickCombine() {
    event.preventDefault();

    $.ajax({
        type: 'GET',
        url: '/combine',

        //beforeSend: function() {
        //    //console.log('before!');
        //},
        success: function(data) {
            console.log('From Server: ', data);
            //console.log(data);
            //data
            $('#ajax-pairs').children().remove();
            $('#ajax-pairs').append('<div class="pair">' + data + '</div>');
        }
    });
}