import "./style.scss"
import { useSelector } from "react-redux";
import target from "../../assets/target.png"
const Plan = () => {
  const store = useSelector(link => link);
  const links = store.link.links
  const title = store.link.title
  console.log(store)

  return (

    <>
      <div id="body" className="plan">
        <div className="title">
          <h2>{title}</h2>
          <img src={target} alt="" />
        </div>
        <div className="boxes">
          {links.map((element, index) => (
            <a href={element} key={index}>Training {index + 1}</a>
          ))}
        </div>
      </div>
    </>


  )
}

export default Plan