document.getElementById('orderButton').addEventListener('click', function() {
    const selectedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    
    if (selectedItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }

    // Show loading message
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.classList.remove('hidden');

    // Simulate order processing with a promise
    const orderId = Math.floor(Math.random() * 10000);
    const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(selectedItems);
        }, randomTime * 1000);
    }).then((items) => {
        loadingMessage.classList.add('hidden');

        // Display order details
        const orderDisplay = document.getElementById('orderDisplay');
        const foodImage = document.getElementById('foodImage');
        const orderIdDisplay = document.getElementById('orderId');
        
        // Mapping of food items to their respective image URLs
        const foodImages = {
            'Cheeseburger': 'assets/cheeseburger.png',
            'Whopper': 'assets/wooper.png',
            'French Fries': 'assets/frenchfries.png',
            'Chicken Nuggets': 'assets/nuggets.png',
            'Soft Drink': 'assets/soft_drink.png'
        };

        // Assuming the first item is the main item for the image
        const mainItem = items[0];
        foodImage.src = foodImages[mainItem]; // Use the mapped URL
        foodImage.alt = mainItem;
        orderIdDisplay.innerText = `Order ID: ${orderId}`;
        
        orderDisplay.classList.remove('hidden');
    });
});