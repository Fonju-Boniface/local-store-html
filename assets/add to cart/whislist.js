// Get all the "Add to Cart" buttons
const addTowhislistButtons = document.querySelectorAll(".add-to-whislist");

// Get the wishlist container
const wishlistContainer = document.querySelector(".my-whislist-container");

// Get the wishlist length element
const wishlistLengthElement = document.querySelector(".wishlistlength");

// Retrieve the wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Update the wishlist display
updateWishlist();

// Add event listeners to the "Add to Cart" buttons
addTowhislistButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get the product information
    const productName = document.querySelectorAll(".productTitle")[index].textContent;
    const productPrice = document.querySelectorAll(".productPrice")[index].textContent;
    const productImage = document.querySelectorAll(".productImg")[index].src;

    // Create a new wishlist item
    const wishlistItem = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    // Check if the item already exists in the wishlist
    const existingItem = wishlist.find((item) => item.name === wishlistItem.name);
    if (existingItem) {
      alert("This item is already in your wishlist.");
      return;
    }

    // Add the item to the wishlist
    wishlist.push(wishlistItem);

    // Save the wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Update the wishlist display
    updateWishlist();
  });
});
// item
function updateWishlist() {
  // Clear the wishlist container
  wishlistContainer.innerHTML = "";

  // Loop through the wishlist and add each item to the container
  wishlist.forEach((item, index) => {
    const wishlistItem = document.createElement("div");
    wishlistItem.classList.add("ten");

    wishlistItem.innerHTML = `
      <img src="${item.image}" class="image" alt="" />
      <h2 class="name">${item.name}</h2>
      <p class="price">${item.price}</p>
      
      <button class="remove-item">Remove from Wishlist</button>
    `;

    // Add event listener to the remove button
    const removeButton = wishlistItem.querySelector(".remove-item");
    removeButton.addEventListener("click", () => {
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlist();
    });

    wishlistContainer.appendChild(wishlistItem);
  });

  // Update the wishlist length
  wishlistLengthElement.textContent = `Wishlist (${wishlist.length})`;
}






