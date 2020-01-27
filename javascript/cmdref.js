$(document).ready(function() {
  var all_table = createTable('all');
  var general_table = createTable('general');
  var library_table = createTable('library');
  var special_table = createTable('special');
  var format_table = createTable('format');
  var misc_table = createTable('misc');
  var system_table = createTable('system');

 // Handle user click events.  A click will make ajax call passing the highlighted program name
 // the man page (if found) will be displayed in a modal
 $('#all tbody').on('click', 'tr', function () {
  var data = all_table.row( this ).data();
  exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else {
     $('#mancontent').html('<pre>' + stdout + '</pre>');
     $('#man_modal').modal('toggle');
    }
  });
});
 
 $('#general tbody').on('click', 'tr', function () {
    var data = general_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('#library tbody').on('click', 'tr', function () {
    var data = library_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('#special tbody').on('click', 'tr', function () {
    var data = special_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('#format tbody').on('click', 'tr', function () {
    var data = format_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('#misc tbody').on('click', 'tr', function () {
    var data = misc_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('#system tbody').on('click', 'tr', function () {
    var data = system_table.row( this ).data();
    exec('man ' + data["NAME"] + ' | col -b', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      } else {
       $('#mancontent').html('<pre>' + stdout + '</pre>');
       $('#man_modal').modal('toggle');
      }
    });
  });

  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    // e.target // newly activated tab
    // e.relatedTarget // previous active tab
    console.log(e.target);
    if (e.target.id =='pills-general-tab') {
      console.log(general_table);
      console.log($(general_table));
      // general_table.responsive.recalc();
    }
  });
  // $('#pills-general-tab').trigger('click');
  // $('#pills-all-tab').trigger('click');

});

var createTable = function(tableName) {
  var table = $('#' + tableName).DataTable( {
    "search": {
      "regex": true
    },
    "ajax": { 
      url: "data/man_" + tableName + ".json",
      dataSrc: ""
    },
    "columns": [
      { "data": "NAME","width": "20%" },
      { "data": "DESCRIPTION" }
    ]
 });
 return table;
}


