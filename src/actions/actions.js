const getProducts = dispatch => {
	fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(data => {
			dispatch({
				productsList: data.products,
				type: 'GET_PRODUCTS_SUCCESS',
			})
		})
		.catch(() => {
			dispatch({
				type: 'GET_PRODUCTS_FAILED',
			})
		})
}

const getCategories = dispatch => {
	fetch('https://dummyjson.com/products/categories')
		.then(res => res.json())
		.then(data => {
			dispatch({
				categories: data,
				type: 'GET_CATEGORIES_SUCCESS',
			})
		})
		.catch(() => {
			dispatch({
				type: 'GET_CATEGORIES_FAILED',
			})
		})
}

const updateSelectedCategory = (dispatch, category) => {
	dispatch({
		type: 'UPDATE_SELECTED_CATEGORY',
		category,
	})
}

const updateWishList = (product, dispatch, productsList, wishList) => {
	const newWishList = [...wishList]
	const newProductsList = [...productsList]
	const wishListIndex = newWishList.findIndex(item => item.id === product.id)
	const productListIndex = newProductsList.findIndex(
		item => item.id === product.id
	)

	if (wishListIndex === -1) {
		newWishList.push({ ...product, isWished: true })
		newProductsList[productListIndex] = { ...product, isWished: true }
	} else {
		newWishList.splice(wishListIndex, 1)
		newProductsList[productListIndex] = { ...product, isWished: false }
	}
	dispatch({
		wishList: newWishList,
		productsList: newProductsList,
		type: 'UPDATE_WISHLIST',
	})
}

const updateShoppingCart = (
	product,
	dispatch,
	shoppingCart,
	totalBuyQty,
	totalPrice,
	isRemove
) => {
	const newShoppingCart = [...shoppingCart]
	const cartIndex = newShoppingCart.findIndex(item => item.id === product.id)

	const newProduct = { ...product }
	const newTotalBuyQty = isRemove ? totalBuyQty - 1 : totalBuyQty + 1
	const newTotalPrice = isRemove
		? totalPrice - product.price
		: totalPrice + product.price
	if (cartIndex === -1) {
		newShoppingCart.push({
			...newProduct,
			buyQty: 1,
		})
	} else {
		newShoppingCart[cartIndex] = {
			...newProduct,
			buyQty: isRemove
				? newShoppingCart[cartIndex].buyQty - 1
				: newShoppingCart[cartIndex].buyQty + 1,
		}
		if (newShoppingCart[cartIndex].buyQty === 0) {
			newShoppingCart.splice(cartIndex, 1)
		}
	}

	dispatch({
		shoppingCart: newShoppingCart,
		totalBuyQty: newTotalBuyQty,
		totalPrice: newTotalPrice,
		type: 'UPDATE_SHOPPING_CART',
	})
}

export {
	getProducts,
	getCategories,
	updateSelectedCategory,
	updateWishList,
	updateShoppingCart,
}
