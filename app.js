var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// bring in pg module
var pg = require('pg');
var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/tasklist';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get data route
app.get('/tasklist', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM tasks ORDER BY id ASC;');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

app.post('/tasklist', function(req, res) {
    console.log(req);
    var addTask = {
        tasks: req.body.tasks,
        taskstatus: req.body.taskstatus,



    };

    pg.connect(connectionString, function(err, client, done) {
        client.query("INSERT INTO tasks (tasklist, taskstatus) VALUES ($1, $2)",
            [addTask.tasks, addTask.taskstatus],
            function (err, result) {
                done();
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
    });

});

app.post('/tasklist/delete', function(req, res) {
    var addTask = {
        tasks: req.body.tasks,
        taskstatus: req.body.taskstatus,



    };

    pg.connect(connectionString, function(err, client, done) {
        client.query("DELETE FROM tasks WHERE(tasklist, taskstatus) VALUES ($1, $2)",
            [addTask.tasks, addTask.taskstatus],
            function (err, result) {
                done();
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
    });

});


app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});

