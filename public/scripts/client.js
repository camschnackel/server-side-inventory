function onReady(){
    console.log('ready!');
    $('#addInventory').on('click', addInventory);
    $('#inventory').on('click', '.deleteMe', deleteInventory);
    getInventory();
};

// event listener
function addInventory() {
    // var to hold value from form
    var itemToAdd = $('#item').val();
    console.log('addInventory', itemToAdd);

    // var to hold data we want to send to the server
    var objectToSend = {item: itemToAdd}

    // build post request, post creates on server, get reads
    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: objectToSend, // data holds value
        success: function (serverResp) {
            console.log(serverResp);
            getInventory();
        }
    });
};

// ajax functions
function getInventory() {
    console.log('in inventory');

    //makes get request
    $.ajax({
        type: 'GET',
        url: '/inventory',
        success: function (serverResp) {
            $('#inventory').empty();
            // logs when response is made
            console.log('inventory resp ->', serverResp);
            for (var i = 0; i < serverResp.length; i++) {
                console.log(serverResp[i]);
                // $('#inventory').append('<p>' + serverResp[i].item);

                // include data id
                var $itemDiv = $('<div>', {text: serverResp[i].item}).data('id', serverResp[i].id);

                // include a button with class delete me
                var $delBtn = $('<input>', {value: 'Delete', type: 'button', class: 'deleteMe'});


                $itemDiv.append($delBtn);
                $('#inventory').append($itemDiv);
            }
            
        }
    });
    
};

function deleteInventory() {
    var thisId = $(this).parent().data('id');
    console.log(thisId);

    $.ajax({
        method: 'DELETE',
        url: '/inventory/' + thisId,
        success: function (resp) {
            console.log('server resp ->', resp);
        }
    });
};

$(document).ready(onReady);