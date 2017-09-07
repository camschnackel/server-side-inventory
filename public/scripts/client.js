$(document).ready(onReady);

function onReady(){
    console.log('jQuery works!');
    getInventory();
};

// ajax functions
function getInventory() {
    console.log('in inventory');

    //makes get request
    $.ajax({
        method: 'GET',
        url: '/inventory',
        success: function (serverResp) {
            // logs when response is made
            console.log('inventory resp ->', serverResp);
            for (var i = 0; i < serverResp.length; i++) {
                $('#inventory').append('<p>' + serverResp[i]);
            }
            
        }
    });
    
};

// appen