var cart = [];

      // Check if there's an existing cart in localStorage
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        updateCart();
      }

      // Get all "Add to Cart" buttons
      var addToCartButtons = document.querySelectorAll(".add-to-cart");

      // Add click event listener to each "Add to Cart" button
      addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          // Get the product name, price, and image from the parent element
          var productName = this.parentElement.querySelector(".productTitle").textContent;
          var productPrice = parseFloat(
            this.parentElement.querySelector(".productPrice").textContent.slice(1)
          );
          var productImage = this.parentElement.querySelector(".productImg").src;

          addToCart(productName, productPrice, productImage);
        });
      });

      function addToCart(name, price, image) {
        // Check if the product is already in the cart
        var existingItem = cart.find(function (item) {
          return item.name === name;
        });
        if (existingItem) {
          
        }

        if (existingItem) {
          existingItem.quantity++;
        } else {
          cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1,
          });
        }

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
      }

      function updateCart() {
        // ... (previous code) ...
        // Clear the cart container
        var cartContainer = document.querySelector(".my-cart-container");
        cartContainer.innerHTML = "";

        // Iterate through the cart and create cart items
        cart.forEach(function (item) {
          var cartItem = document.createElement("div");
          cartItem.classList.add("my-cart");
          // updateCart
          var imgDiv = document.createElement("div");
          var contDiv = document.createElement("div");
          var contTextDiv = document.createElement("div");
          var contContDiv = document.createElement("div");
          var contContBtnsDiv = document.createElement("div");
          var image = document.createElement("img");
          image.src = item.image;
          image.classList.add("image");
          imgDiv.classList.add("img");
          contDiv.classList.add("content");
          contContDiv.classList.add("contentCont");
          contContBtnsDiv.classList.add("contentContBtns");
          contTextDiv.classList.add("contenttext");

          var nameElement = document.createElement("h3");
          nameElement.classList.add("name");
          nameElement.textContent = item.name;

          var priceElement = document.createElement("p");
          priceElement.classList.add("price");
          priceElement.innerHTML = `<b>Price:</b> ${"$" + item.price.toFixed(2)}`;

          var newPriceElement = document.createElement("p");
          newPriceElement.classList.add("newprice");
          newPriceElement.innerHTML =
            `<b>New Price:</b> ${"$" + (item.price * item.quantity).toFixed(2)}`;

          var incrementElement = document.createElement("button");
          incrementElement.classList.add("increment");
          incrementElement.innerHTML = `<i class="fi fi-rr-minus"></i>`;
          incrementElement.addEventListener("click", function () {
            decrementQuantity(item);
          });

          var quantityElement = document.createElement("b");
          quantityElement.classList.add("quantity");
          quantityElement.textContent = item.quantity;

          var decrementElement = document.createElement("button");
          decrementElement.classList.add("decrement");
          decrementElement.innerHTML = `<i class="fi fi-rr-plus"></i>`;
          decrementElement.addEventListener("click", function () {
            incrementQuantity(item);
          });
          
          contDiv.appendChild(contTextDiv);
          contDiv.appendChild(contContDiv);



          imgDiv.appendChild(image);

          contTextDiv.appendChild(nameElement);
          contTextDiv.appendChild(priceElement);



          contContDiv.appendChild(newPriceElement);
          contContDiv.appendChild(contContBtnsDiv);

          contContBtnsDiv.appendChild(incrementElement);
          contContBtnsDiv.appendChild(quantityElement);
          contContBtnsDiv.appendChild(decrementElement);



          cartItem.appendChild(imgDiv);
          cartItem.appendChild(contDiv);



          cartContainer.appendChild(cartItem);
        });

        // Update the cart length
        var cartlength = document.querySelector(".cartlength");
        cartlength.textContent = cart.length ;
        // Calculate the total price
        var totalPrice = 0;
        cart.forEach(function (item) {
          totalPrice += item.price * item.quantity;
        });

        // Update the total price display
        var totalPriceElement = document.querySelector(".total-price");
        totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
      }

      function incrementQuantity(item) {
        item.quantity++;
        updateCart();
        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      function decrementQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
          updateCart();
          // Save the updated cart to localStorage
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          // Remove the item from the cart
          cart = cart.filter(function (cartItem) {
            return cartItem.name !== item.name;
          });
          updateCart();
          // Save the updated cart to localStorage
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }

      // Add "Clear Cart" functionality
      var clearCartButton = document.querySelector(".clear-cart");
      clearCartButton.addEventListener("click", function () {
        // Remove the cart data from localStorage
        localStorage.removeItem("cart");
        // Reset the cart array
        cart = [];
        updateCart();
      });