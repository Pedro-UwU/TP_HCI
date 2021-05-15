export const FavouritesStore = {
    favourites: null
}

export function loadFavourtiesData(data) {
    FavouritesStore.favourites = data.content
}