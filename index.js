const goods = [
  {
    title: "Shirt",
    price: "150$",
    img:
      "https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Socks",
    price: "50$",
    img:
      "https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Jacket",
    price: "350$",
    img:
      "https://images.pexels.com/photos/3770674/pexels-photo-3770674.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    title: "Shoes",
    price: "250$",
    img:
      "https://images.pexels.com/photos/4277507/pexels-photo-4277507.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {},
  {},
  {},
  {},
];

class GoodsItem {
  constructor({
    title = "Product",
    price = "300$",
    img = "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  }) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="goods-item"><img src = "${this.img}"><h3>${this.title}</h3><p>${this.price}</p><button>ДОБАВИТЬ</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = goods;
  }
  getSum() {
    return this.goods.reduce((acc, { price }) => acc + price, 0);
  }
  render() {
    const _goods = [...this.goods];
    const _goodsItems = _goods.map((item) => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector(".goods-list").innerHTML = _goodsItems.join("");
  }
}

class Basket {
  setVision() {}
  render() {}
}
class BasketItem {
  setCount() {}
  deleteItem() {}
  render() {}
}

onload = () => {
  const goodsList = new GoodsList();
  goodsList.render();
};
