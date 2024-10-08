import menuData from '../api/menu.json'

export function useCarouselData() {
    const carouselData = menuData.menu.pizzas
    return {
        carouselData
    }
}