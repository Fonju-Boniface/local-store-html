const filterInput = document.getElementById('filterInput');
    const filteritems = document.querySelectorAll('.filteritem');
    const notFoundMessage = document.getElementById('not-found-message');
    
    filterInput.addEventListener('input', function() {
      const searchTerm = filterInput.value.toLowerCase();
      let foundfilterItem = false;

      filteritems.forEach(function(filteritem) {
        const filteritemText = filteritem.textContent.toLowerCase();
        if (filteritemText.includes(searchTerm)) {
          filteritem.classList.remove('hidden');
          foundfilterItem = true;
        } else {
          filteritem.classList.add('hidden');
        }
      });

      if (foundfilterItem) {
        notFoundMessage.classList.add('hidden');
      } else {
        notFoundMessage.classList.remove('hidden');
      }
    });