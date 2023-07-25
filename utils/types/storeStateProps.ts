export interface HomePageProps {
    heroImg: {
        altText: string
        src: string
    }
    heroBanner: string
}

export interface ProductProps {
    id: string
    inStock: boolean | null
    title: string
    price: number | null
    size: { sizeSymbol: string; size: string; quantity: number | null }[]
    color: string
    img: {
        src: string
        altText: string
    }
    imgList: {
        src: string
        altText: string
    }[]
}
