export const FavouritesStore = {
    favourites: null,
    data: null,
    page: 0
}

export function loadFavouritesData(data) {
    FavouritesStore.favourites = data.content
    FavouritesStore.data = data
}