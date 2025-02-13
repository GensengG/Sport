import "../App.jsx";
import { useState } from "react";

export const SportForm = () => {
    const [sportList, setSportList] = useState([]);

    let date = "";
    let distance = "";
    let sportListArr = [];
    let index = 0;
    let newLine = {};

    function test(newLine){
        let testDate = newLine.date;
        let count = 0;
        let i = 0;
        sportListArr.forEach(element => {
            if(element.date === testDate){
                count++;
                i = element.id - 1;
            } 
        });

        if(count > 0){
            sportListArr[i].distance += newLine.distance;
        } else {
            sportListArr.push(newLine);
        }
        return sportListArr;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sportListArr = sportList;
        index ++;

        date = Number(e.target.date.value);
        distance = Number(e.target.distance.value);

        newLine = {
            id: index,
            date: date,
            distance: distance
        }       

        test (newLine);
        sportList = sportListArr;
        setSportList([
            sportListArr
        ]); 
    };

    const handleDelete = (e) => {
        e.preventDefault();
        let element = e.target;
        let elementDelete = element.parentElement;
        let elementDeleteId = elementDelete.id - 1;
        sportListArr.splice(elementDeleteId, 1);
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
                {sportList.map((item) => (
                    <div key={item.id} id={item.id} className="list__line">
                        <div className="list_date">{item.date}</div> 
                        <div className="list__distance">{item.distance}</div> 
                        <button className="list__edit" onClick={handleDelete}>✘</button>
                    </div>
                ))}
            </div>
        </form>
    );
}
