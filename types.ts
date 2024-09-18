// types.ts hoặc navigationTypes.ts
export type RootStackParamList = {
    Categories: undefined;  // Màn hình danh sách các danh mục không nhận tham số
    FoodListScreen: { categoryId: number };  // Màn hình danh sách món ăn nhận tham số categoryId
};
