$(document).ready(function() {
    $('#post-task').on('click', clickPostTask);
//    $('#post-animal').on('click', clickPostAnimal);
//    $('.container').on('click', '#combine', clickCombine);

});
var i = 0;
function clickPostTask() {
    event.preventDefault();
    var values = {};

    $.each($('#task-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    console.log(values);
    //console.log(taskArray);

    $('#task-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/tasklist',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            clickPost();
            console.log(data);
        }
    });
}

function clickPostUpdate() {
    event.preventDefault();
    var values = {};

    $.each($('#task-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);
    //console.log(taskArray);

    $('#post-task').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/tasklist',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            //function
        }
    });
}

//function clickPostAnimal() {
//    event.preventDefault();
//    var values = {};
//
//    $.each($('#animal-form').serializeArray(), function(i, field) {
//        values[field.name] = field.value;
//    });
//
//    $('#post-animal').find('input[type=text]').val('');
//
//    $.ajax({
//        type: 'POST',
//        url: '/animal',
//        data: values,
//        beforeSend: function() {
//            //console.log('before!');
//        },
//        success: function(data) {
//            //console.log('From Server: ', data);
//            //console.log(data);
//            $('#ajax-animals').children().remove();
//            data.forEach(function(person, i){
//
//                $('#ajax-animals').append('<div class="animal">' + data[i].spiritAnimal + '</div>');
//                $('#animal-form').find('input[type=text]').val('');
//            });
//        }
//    });
//}
//
function clickPost() {
    event.preventDefault();

    $.ajax({
        type: 'GET',
        url: '/tasklist',

        //beforeSend: function() {
        // console.log('before!');
        //},
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
            //data
            $('#task-holder').children().remove();
           for (i = 0 , i < data.length, i++) {
                $('#task-holder').append('<div class="task-list">' + data[i].tasklist + '</div>');
            })
        },
    })
}