import "../App.jsx";
import { useState } from "react";
import { SportRender } from "./SportRender.jsx";

export const SportForm = () => {

    // const start = [
    //     {"date": "distance"}, 
    //     {"date": "distance"}
    // ]    

    const [sportList, setSportList] = useState([]);
    let sportListObj = [];
    let sportListArr = [];
    let result = [];

    let date = "";
    let distance = "";

    const handleSubmit = (e) => {
        e.preventDefault();
        date = e.target.date.value;
        distance = e.target.distance.value;
        
        setSportList((sportList) => ({
            ...sportList, 
            [date]: distance,
        }));
        // sportListObj = c;

        // sportListArr = Array.from(sportList);
        // console.log(sportListArr);
        // console.log(sportListArr);

        // let sportListKey = Object.keys(sportList);
        // let sportListValue = Object.values(sportList);
        // const mix = (sportListKey, sportListValue) => {
            
        // }
        // console.log(sportListKey, sportListValue);
        // sportListArr.forEach((key) => {
        //     sportListA.push(
        //         {[key]: value}
        //     )
        // });

        // result = sportList.map((key) => {
        //     <div key={item} className="">
        //       <div className="list_date">{key}</div> 
        //       <div className="list__distance">{key[0].key}</div> 
        //       <div className="list_edit">{key[0].value}</div> 
        //     </div>
        // })

        console.log(sportList);
    };




    return (
        <form className="sport__form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="input__container">
                <label htmlFor="date" className="label__form">Дата (ДД.ММ.ГГ)</label>
                <input type="text" id="date" className="input__form"/>
            </div>
            <div className="input__container">
                <label htmlFor="distance" className="label__form">Пройдено км</label>
                <input type="text" id="distance" className="input__form"/>
            </div>
            <button type="submit" className="btn__submit">ОК</button>

            <div className="sport__list">
                <SportRender initialObj = {sportList}/>
            </div>
        </form>
    );
}