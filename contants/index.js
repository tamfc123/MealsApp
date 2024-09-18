export const categories = [
    {
        id: 1,
        title: 'Cơm',
        image: require('../assets/images/com.png')
    },
    {
        id: 2,
        title: 'Bún',
        image: require('../assets/images/bun.png')
    },
    {
        id: 3,
        title: 'Mì',
        image: require('../assets/images/mi.png')
    },
    {
        id: 4,
        title: 'Đồ ăn',
        image: require('../assets/images/doannhanh.png')
    },
]

export const featured = {
    id: 1,
    title: 'Hot',
    description: 'những món hấp dẫn',
    hots:[
        {
            id: 1,
            name: 'hamburger',
            image: require('../assets/images/hamburger.png'),
            price: 15000,
            stars: 4,
            reviews: '3.3k',
            category: 'Đồ ăn',
            description: 'hamburger thơm ngon',
            address: 'số 10 lê thị trung'
        },
        {
            id: 2,
            name: 'hamburger',
            image: require('../assets/images/hamburger.png'),
            price: 15000,
            stars: 4,
            reviews: '3.3k',
            category: 'Đồ ăn',
            description: 'hamburger thơm ngon',
            address: 'số 10 lê thị trung'
        },
        {
            id: 3,
            name: 'hamburger',
            image: require('../assets/images/hamburger.png'),
            price: 15000,
            stars: 4,
            reviews: '3.3k',
            category: 'Đồ ăn',
            description: 'hamburger thơm ngon',
            address: 'số 10 lê thị trung'
        },
        {
            id: 4,
            name: 'hamburger',
            image: require('../assets/images/hamburger.png'),
            price: 15000,
            stars: 4,
            reviews: '3.3k',
            category: 'Đồ ăn',
            description: 'hamburger thơm ngon',
            address: 'số 10 lê thị trung'
        }
    ]
}

export const food = [
    // Món ăn thuộc danh mục "Cơm"
    { id: 1, name: 'Cơm tấm', categoryId: 1, image: require('../assets/images/comtam.png') },
    { id: 2, name: 'Cơm chiên', categoryId: 1, image: require('../assets/images/comchien.png') },
    { id: 3, name: 'Cơm gà', categoryId: 1, image: require('../assets/images/comga.png') },

    // Món ăn thuộc danh mục "Bún"
    { id: 4, name: 'Bún bò Huế', categoryId: 2, image: require('../assets/images/bunbohue.png') },
    { id: 5, name: 'Bún riêu', categoryId: 2, image: require('../assets/images/bunrieu.png') },
    { id: 6, name: 'Bún chả', categoryId: 2, image: require('../assets/images/buncha.png') },

    // Món ăn thuộc danh mục "Mì"
    { id: 7, name: 'Mì xào', categoryId: 3, image: require('../assets/images/mixao.png') },
    { id: 8, name: 'Mì Quảng', categoryId: 3, image: require('../assets/images/miquang.png') },
    { id: 9, name: 'Mì cay', categoryId: 3, image: require('../assets/images/micay.png') },

    // Món ăn thuộc danh mục "Đồ ăn nhanh"
    { id: 10, name: 'Hamburger', categoryId: 4, image: require('../assets/images/hamburger.png') },
    { id: 11, name: 'Pizza', categoryId: 4, image: require('../assets/images/pizza.png') },
    { id: 12, name: 'Khoai tây chiên', categoryId: 4, image: require('../assets/images/khoaitaychien.png') },
]