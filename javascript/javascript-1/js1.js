
   let products = [
       ["Яблоко","Апельсин","Персик"],
       ["Яблоко","Банан"],
       ["Манго","Киви"],
       ["Груша","Персик"]
    ];

   maxItemAssociation(products); 


function maxItemAssociation(products) { 

    let uniqueProductsRecommends = products
	.map((_, idx) => {
		return products.slice(idx, products.length).reduce((result, group) => {
			if (group.some(prod => result.includes(prod)))
				return result.concat(group);
			return result;
		});
	})
	.map(prod => prod.sort())
	.map(r => r.filter((val, idx, arr) => arr.indexOf(val) === idx));

let indexRecommends = uniqueProductsRecommends.reduce(
	(prev, cur, idx, array) => (array[prev].length > cur.length ? prev : idx),
	0
);

console.log(uniqueProductsRecommends[indexRecommends]);

}