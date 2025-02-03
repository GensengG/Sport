import "../App.jsx";
import { useState } from "react";
import { SportRender } from "./SportRender.jsx";

export const SportForm = () => {

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
