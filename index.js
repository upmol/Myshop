// picture1.src =
//   "https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

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

const renderGoodsItem = ({
  title = "Product",
  price = "300$",
  img = "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
}) => {
  return `<div class="goods-item"><img src = "${img}"><h3>${title}</h3><p>${price}</p><button>ДОБАВИТЬ</button></div>`;
};

const renderGoodsList = () => {
  let goodsList = goods
    .map((item) => {
      return renderGoodsItem(item);
    })
    .join(" ");
  document.querySelector(".goods-list").innerHTML = goodsList;
};

onload = () => {
  renderGoodsList(goods);
};
