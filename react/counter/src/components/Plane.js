import "../css/Plane.css"
const Plane = (props) => {
    const movePlane = () => {
      let plane = document.getElementById('plane')
      plane.style.top = (150 - ((props.height) * 10)) + "px";
    }
    const fly = () => {
      let id = setInterval(() => { clearInterval(id); movePlane() }, 100)
    }
    fly();
    return (
      <img id="plane" src={props.imgSrc} alt="plane in sky" />
    )
  }

  export default Plane;