
function newItem() {

let list = $('#list');
let li = $('<li></li>');
let inputValue = $('input').val();

li.append(inputValue);

    //1. Adding a new item to the list of items:

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li);
    };

    //2. Crossing out an item from the list of items:

    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    //3. Deleting with "X":

    let crossOutButton = $('<crossOutButton>X</crossOutButton>');

    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
        li.addClass("delete")
    }

    // 4. Reordering the items:
    $('#list').sortable();
};

