import classes from "./RatedCoffees.module.css";
import CoffeeItem from "../Coffees/CoffeeItem/CoffeeItem";

const DUMMY_COFFEES = [
  {
    id: "1",
    name: "피어커피",
    country: "브라질",
    location: "바히아",
    kind: "Mundo Novo",
    flower: 5,
    balance: 3,
    body: 1,
    bitter: 2,
    acidty: 1,
    flavorNote: ["chocolate", "lemon"],
    note: "맛있었음",
    img: "img/coffee1.jpg",
    date: "2022/06/10",
  },
  {
    id: "2",
    name: "Linckia Roasterty",
    country: "에티오피아",
    location: "시다모",
    kind: "Mundo Novo",
    flower: 5,
    balance: 3,
    body: 1,
    bitter: 2,
    acidty: 1,
    flavorNote: ["chocolate", "lemon"],
    note: "음 이게 제일 좋지",
    img: "img/coffee2.jpg",
    date: "2022/06/11",
  },
  {
    id: "3",
    name: "피어커피",
    country: "브라질",
    location: "바히아",
    kind: "Mundo Novo",
    flower: 5,
    balance: 3,
    body: 1,
    bitter: 2,
    acidty: 1,
    flavorNote: ["chocolate", "lemon"],
    note: "맛있었음",
    img: "img/coffee1.jpg",
    date: "2022/06/10",
  },
  {
    id: "4",
    name: "Linckia Roasterty",
    country: "에티오피아",
    location: "시다모",
    kind: "Mundo Novo",
    flower: 5,
    balance: 3,
    body: 1,
    bitter: 2,
    acidty: 1,
    flavorNote: ["chocolate", "lemon"],
    note: "음 이게 제일 좋지",
    img: "img/coffee2.jpg",
    date: "2022/06/11",
  },
  {
    id: "5",
    name: "Linckia Roasterty",
    country: "에티오피아",
    location: "시다모",
    kind: "Mundo Novo",
    flower: 5,
    balance: 3,
    body: 1,
    bitter: 2,
    acidty: 1,
    flavorNote: ["chocolate", "lemon"],
    note: "음 이게 제일 좋지",
    img: "img/coffee2.jpg",
    date: "2022/06/11",
  },
];

const RatedCoffes = () => {
  const coffeeList = DUMMY_COFFEES.map((coffee) => (
    <CoffeeItem
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      country={coffee.country}
      location={coffee.location}
      kind={coffee.kind}
      flower={coffee.flower}
      balance={coffee.balance}
      body={coffee.body}
      bitter={coffee.bitter}
      acidty={coffee.acidty}
      flavorNote={coffee.flavorNote}
      note={coffee.note}
      img={coffee.img}
      date={coffee.date}
    />
  ));
  return (
    <section className={classes.coffees}>
      <ul>{coffeeList}</ul>
    </section>
  );
};

export default RatedCoffes;
