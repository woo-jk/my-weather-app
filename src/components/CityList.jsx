import "./CityList.css";

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div className="cityList">
      <h1>CityList</h1>

      <ul className="cityul">
        {cities.map((item, index) => {
          return <li className="cityli" key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
