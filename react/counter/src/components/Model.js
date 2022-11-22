import "../css/Model.css";

const Model =(props) => {

    let cName = () => {
        cName="model ";
        props.counter>10 ? cName+="high" : props.counter<-5 ?cName+="very-low"  : props.counter <0 ? cName+="low" : cName+="stable"
        return cName
    }
    return(
        <div className={cName()}>
                   

        {props.counter>15 ? <h1>wow fly lower</h1> : props.counter<-5 ? <h1>You're getting too wet</h1> :props.counter <0 ? <h1>Climb</h1> : <h1>fly like a bird</h1>}
        </div>
    )
}

export default Model;