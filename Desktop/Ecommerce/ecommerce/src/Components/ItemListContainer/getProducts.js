const products = [
    { id: 1, name: "Gigabyte B660M Gaming X", category: "Motherboard", brand: "Gigabyte", price: '100usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/08/1-72.jpg" },
    { id: 2, name: "AMD Ryzen 5 5600g", category: "Processor", brand: "AMD", price: '200usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/02/5600G.jpg" },
    { id: 3, name: "Geforce RTX 4070 TI 12GB Gaming Verto", category: "GraphicsCard", brand: "Nvidia", price: '300usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/1-83.jpg" },
    { id: 4, name: "Corsair Vengeance(2x8GB) DDR4 3200mhz", category: "RAM", brand: "Corsair", price: '400usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2021/10/7-8.jpg" },
    { id: 5, name: "Toughpower GF1 ARGB 850W Gold", category: "Power Supply", brand: "Corsair", price: '500usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/08/1-69.jpg" },
    { id: 6, name: "Wd Black SN850X NVME SSD 1TB", category: "Storage", brand: "WD", price: '600usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/0-9.jpg" },
    { id: 7, name: "Intel Core I9 13900K 5.8 GHZ", category: "Processor", brand: "Intel", price: '700usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/1-23.jpg" },
    { id: 8, name: "Chasis Thermaltake The Tower 500", category: "Case", brand: "Thermaltake", price: '800usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/4-8.jpg" },
    { id: 9, name: "ROG Strix Z790-F Gaming Wifi", category: "Motherboard", brand: "ROG", price: '900usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/1-91.jpg" },
    { id: 10, name: "Gigabyte Z590 Vision G", category: "Motherboard", brand: "Gigabyte", price: '1000usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2021/07/1.jpg" },
    { id: 11, name: "AMD Ryzen 5 7600X", category: "Processor", brand: "AMD", price: '1100usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/09/1-38.jpg" },
    { id: 12, name: "Geforce RTX 4080 Ventus 3X 16GB ", category: "GraphicsCard", brand: "Nvidia", price: '1200usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/0-45.jpg" },
    { id: 13, name: "Thermaltake Toughram (2x8GB) DDR4 4400mhz", category: "RAM", brand: "Thermaltake", price: '300usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/09/5-15.jpg" },
    { id: 14, name: "Coolermaster MWE Gold 850W V2", category: "Power Supply", brand: "CoolerMaster", price: '1400usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2021/05/1-14.jpg" },
    { id: 15, name: "Force Series Gen.4 PCIE MP600 2TB M.2", category: "Storage", brand: "Corsair", price: '1500usd', stock: 20, pictureUrl: "https://clonesyperifericos.com/wp-content/uploads/2022/09/1-28.jpg" },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000);
    });
};