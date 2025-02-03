import "../App.jsx";

export const SportRender = (sportList) => {

    let {initialObj} = sportList;
    let arr = [];
    let k = Object.keys(initialObj);
    let v = Object.values(initialObj);

    for(let i = 0; i < k.length; i++){
        arr.push(
            <div key={i} className="list__line">
                <div className="list_date">{k[i]}</div> 
                <div className="list__distance">{v[i]}</div> 
                <a href="#" className="list_edit">✘</a>
            </div>
        )
    }

    // for(let i = 0; i < k.length; i++){
    //     arr.push(
    //         {[k[i]]: v[i]}
    //     )
    // };

    return (
        <>
            {arr}
        </>
    );
}