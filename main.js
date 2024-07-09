document.addEventListener('DOMContentLoaded', function() {
    const shoppingForm = document.getElementById('shopping-form');
    const shoppingList = document.getElementById('shopping-list');
    const clearBtn = document.getElementById('clear-btn');

    shoppingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const newItem = document.getElementById('item').value.trim();
        if (newItem !== '') {
            addItemToList(newItem);
            shoppingForm.reset();
        }
    });

    clearBtn.addEventListener('click', function() {
        shoppingList.innerHTML = ''; // Clear the list
    });

    function addItemToList(item) {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });
        shoppingList.appendChild(li);
    }
});
