export const CategoryStore = {
    categories: null
}

export function loadCategoryData(data) {
    CategoryStore.categories = data.content;
}