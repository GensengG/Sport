import "../App.jsx";
import { useState } from "react";

export const SportForm = () => {
    let [sportList, setSportList] = useState([]);

    let date = "";
    let distance = "";
    let sportListArr = [];
    let index = 0;
    let newLine = {};

    function handleSubmit(e) {
        e.preventDefault();
        sportListArr = sportList;
        index++;

        date = String(e.target.date.value);
        distance = Number(e.target.distance.value);

        newLine = {
            id: 0 + index,
            date: date,
            distance: distance
        };

        let testDate = newLine.date;
        let count = 0;
        let i = 0;
        sportList.forEach(element => {
            if (element.date === testDate) {
                count++;
                i = sportList.indexOf(element);
            }
        });

        if (count > 0) {
            sportList[i].distance += newLine.distance;
            setSportList(prevState => [...prevState = sportList]);
        } else {
            setSportList(prevState => [...prevState, newLine]);
        }
        
    }

    const handleDelete = (e) => {
        e.preventDefault();
        let element = e.target;
        let elementDelete = element.parentElement.id;
        sportList.splice(elementDelete, 1);
        setSportList(prevState => [...prevState = sportList]);
    }
        
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
                {sportList.map(item => (
                    <div key={sportList.indexOf(item)} id = {sportList.indexOf(item)} className="list__line">
                        <div className="list_date">{item.date}</div>
                        <div className="list__distance">{item.distance}</div>
                        <button className="list__edit" onClick={handleDelete}>✘</button>
                    </div>
                ))}
            </div>
        </form>
    );
}
