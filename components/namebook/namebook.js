(function () {

    var newNameInput = document.getElementById("newNameInput");
    var addButton = document.getElementsByTagName("button")[0];
    var nameList = document.getElementById("nameList");

    //New Name List Item
    var createNewName = function (nameString) {

        //Parent Element listItem
        var listItem = document.createElement("li");
        //Children Element to listItem
        var label = document.createElement("label");
        var editInput = document.createElement("input");
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");

        label.className="labelColor";
        editInput.type = "text";
        editButton.innerText = "Edit";
        editButton.className = "editName";
        deleteButton.innerText = "Delete";
        deleteButton.className = "deleteName";

        label.innerText = nameString;

        // append element to listItem
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    // Add a new name
    var addName = function () {

        //Create a new list item with the text from #newName:
        var listItem = createNewName(newNameInput.value);
        //Append listItem to nameList
        nameList.appendChild(listItem);
        bindNameEvents(listItem);

        newNameInput.value = "";
    }

    var labelColor = function(){
        var listItem = this.parentNode;
        
        var label = listItem.querySelector("label");
        
        if(label.style.backgroundColor === "green"){
            label.style.backgroundColor = "purple";
        } else {
            label.style.backgroundColor = "green";
        }
    }

    // Edit an existing name
    var editName = function () {

        var listItem = this.parentNode;

        var editInput = listItem.querySelector("input")
        var label = listItem.querySelector("label");

        var containsClass = listItem.classList.contains("editMode");
        //if the class of the parent is .editMode 
        if (containsClass) {
            //switch from .editMode 
            //Make label text become the input's value
            label.innerText = editInput.value;
        } else {
            //Switch to .editMode
            //input value becomes the label's text
            editInput.value = label.innerText;
        }

        // Toggle .editMode on the parent
        listItem.classList.toggle("editMode");

    }


    // Delete an existing name
    var deleteName = function () {

        var listItem = this.parentNode;
        var ul = listItem.parentNode;

        //Remove the parent list item from the ul
        ul.removeChild(listItem);
    }

    var bindNameEvents = function (nameListItem) {

        var editLabelColor = nameListItem.querySelector("label.labelColor");

        //select nameListItem's children
        var editButton = nameListItem.querySelector("button.editName");
        var deleteButton = nameListItem.querySelector("button.deleteName");

        //bind editName function to edit button
        editLabelColor.onclick = labelColor;

        //bind editName function to edit button
        editButton.onclick = editName;

        //bind deleteName function to delete button
        deleteButton.onclick = deleteName;

    }

    // Set the click handler to the addName function
    addButton.addEventListener("click", addName);


    // Cycle over the nameList ul list items
    for (var i = 0; i < nameList.children.length; i++) {
        // bind events to list item's children (nameCompleted)
        bindNameEvents(nameList.children[i]);
    }

})();