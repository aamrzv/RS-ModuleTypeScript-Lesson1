interface TotalPriceOptions {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
}

const totalPrice = ({
  price,
  discount = 0,
  isInstallment,
  months = 12,
}: TotalPriceOptions): number => {
   // Применяем скидку к цене
    const discountedPrice = price * (1 - discount / 100);

    // Если требуется рассрочка, делим итоговую цену на количество месяцев
    if (isInstallment) {
        return discountedPrice / months;
    }

    // Если рассрочка не требуется, возвращаем итоговую цену
    return discountedPrice;
};

const total = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }); // 6250
console.log(total);