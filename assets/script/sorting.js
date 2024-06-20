const itemSortContainer = document.querySelector('.ProductItems');
    const itemSorts = Array.from(itemSortContainer.children);

    function sortItemSorts(column, order) {
      itemSorts.sort((a, b) => {
        const aValue = a.children[column === 'ProductItem' ? 2 : 1].textContent;
        const bValue = b.children[column === 'ProductItem' ? 2 : 1].textContent;

        if (order === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });

      itemSortContainer.innerHTML = '';
      itemSorts.forEach(itemSort => itemSortContainer.appendChild(itemSort));
    }