import './App.css';
import { SportForm } from "./components/SportForm.jsx";

function App() {
  // let products = [
  //   {
  //     name: "Nike Metcon 2",
  //     price: "130",
  //     color: "red",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  //     id: "product 1"
  //   }, {
  //     name: "Nike Metcon 2",
  //     price: "130",
  //     color: "green",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  //     id: "product 2"
  //   }, {
  //     name: "Nike Metcon 2",
  //     price: "130",
  //     color: "blue",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  //     id: "product 3"
  //   }, {
  //     name: "Nike Metcon 2",
  //     price: "130",
  //     color: "black",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  //     id: "product 4"
  //   }, {
  //     name: "Nike free run",
  //     price: "170",
  //     color: "black",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  //     id: "product 5"
  //   }, {
  //     name: "Nike Metcon 3",
  //     price: "150",
  //     color: "green",
  //     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  //     id: "product 6"
  //   }
  // ]

  // let state = {
  //   buttonValue: "Переключаем на список",
  //   products: [
  //     {
  //       name: "Nike Metcon 2",
  //       price: "130",
  //       color: "red",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  //       id: "product 1"
  //     }, {
  //       name: "Nike Metcon 2",
  //       price: "130",
  //       color: "green",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  //       id: "product 2"
  //     }, {
  //       name: "Nike Metcon 2",
  //       price: "130",
  //       color: "blue",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  //       id: "product 3"
  //     }, {
  //       name: "Nike Metcon 2",
  //       price: "130",
  //       color: "black",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  //       id: "product 4"
  //     }, {
  //       name: "Nike free run",
  //       price: "170",
  //       color: "black",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  //       id: "product 5"
  //     }, {
  //       name: "Nike Metcon 3",
  //       price: "150",
  //       color: "green",
  //       img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  //       id: "product 6"
  //     }
  //   ]
  //   // view: <CardsView cards={products}/>,
  // };

  // let state = "Переключаем на список";
  // let btnValue = "Переключаем на список";

  // let [stateSwitch, setStateSwitch] = useState(state);

  // function chooseView(){
  //   if(stateSwitch === "Переключаем на список"){
  //     setStateSwitch(stateSwitch= "Переключаем на карточки");
  //     btnValue = "Переключаем на карточки";
  //     // console.log(stateSwitch);
  //   } else {
  //     setStateSwitch(stateSwitch = "Переключаем на список");
  //     btnValue = "Переключаем на список";
  //   }
  // };

  // return (
  //   <div>
  //     <button className="btn__svg" onClick={chooseView}>  
  //       <IconSwitch stateBtn={stateSwitch}/>
  //     </button> 
  //     <Button btnTextContent={stateSwitch}/>
  //   </div>
  // );

  return (
    <>
        <SportForm/>
    </>
  );

}


export default App;