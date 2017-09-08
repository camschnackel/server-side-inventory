$(document).ready(onReady);

function onReady(){
    console.log('ready!');
    $('#addInventory').on('click', addInventory);
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
                $('#inventory').append('<p>' + serverResp[i]);
            }
            
        }
    });
    
};

// appen