export function filterGoods(
  goodsList,
  query,
  selectedUserId,
  selectedCategories,
) {
  let goods = [...goodsList];

  if (query) {
    goods = goods.filter(good => good.name.toLowerCase().includes(query));
  }

  if (selectedUserId) {
    goods = goods.filter(good => good.category.owner.id === selectedUserId);
  }

  if (selectedCategories.length > 0) {
    goods = goods.filter(good => selectedCategories.includes(good.category.id));
  }

  return goods;
}

export function sortGoods(goodsList, field, reversed) {
  const goods = [...goodsList];

  if (field) {
    goods.sort((good1, good2) => {
      switch (field) {
        case 'id':
          return good1.id - good2.id;
        case 'product':
          return good1.name.localeCompare(good2.name);
        case 'category': {
          const cat1 = good1.category?.title || '';
          const cat2 = good2.category?.title || '';
          // return good1.category?.title?.localeCompare(good2.category?.title || '') doesnt work correctly

          return cat1.localeCompare(cat2);
        }

        case 'user': {
          const usr1 = good1.user?.name || '';
          const usr2 = good2.user?.name || '';

          return usr1.localeCompare(usr2);
        }

        default:
          return 0;
      }
    });
  }

  if (reversed) {
    goods.reverse();
  }

  return goods;
}

export function prepareGoods(
  productList,
  query,
  selectedUserId,
  selectedCategories,
  field,
  reversed,
) {
  const filteredGoods = filterGoods(
    productList,
    query,
    selectedUserId,
    selectedCategories,
  );

  const sortedGoods = sortGoods(filteredGoods, field, reversed);

  return sortedGoods;
}
