$(document).ready(function() {
    $('#task-form').on('click', clickPostTask);
//    $('#post-animal').on('click', clickPostAnimal);
//    $('.container').on('click', '#combine', clickCombine);

});

var clickPostTask = function() {
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
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
            $('#ajax-tasks').children().remove();
            data.forEach(function(person, i){

                $('#ajax-tasks').append('<div class="task-list">' + data[i].name + '</div>');
                $('#task-form').find('input[type=text]').val('');
            });
        }
    });
}

function clickPostTask() {
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
            $('#ajax-tasks').children().remove();
            data.forEach(function(person, i){

                $('#ajax-tasks').append('<div class="task-list">' + data[i].name + '</div>');
                $('#task-form').find('input[type=text]').val('');
            });
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
//function clickCombine() {
//    event.preventDefault();
//
//    $.ajax({
//        type: 'GET',
//        url: '/combine',
//
//        //beforeSend: function() {
//        //    //console.log('before!');
//        //},
//        success: function(data) {
//            console.log('From Server: ', data);
//            //console.log(data);
//            //data
//            $('#ajax-pairs').children().remove();
//            $('#ajax-pairs').append('<div class="pair">' + data + '</div>');
//        }
//    });
//}