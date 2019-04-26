const clients = [
  {
    id: "1",
		alt: "Blizzard Entertainment",
		img: "blizzard.png"
	},
  {
    id: "2",
		alt: "Disney",
		img: "disney.png"
	},
	{
    id: "3",
		alt: "Pixar Animation Studios",
		img: "pixar.png"
	},
	{
    id: "4",
		alt: "Sony Pictures",
		img: "sony.png"
	},
	{
    id: "5",
		alt: "The Simpsons",
		img: "simpsons.png"
	},
	{
    id: "6",
		alt: "South Park",
		img: "southpark.png"
	},
	{
    id: "7",
		alt: "ABC",
		img: "abc.png"
	},
	{
    id: "8",
		alt: "FOX",
		img: "fox.png"
	},
	{
    id: "9",
		alt: "Kia",
		img: "kia.png"
	},
	{
    id: "10",
		alt: "Lexus",
		img: "lexus.png"
	},
	{
    id: "11",
		alt: "Lifetime",
		img: "lifetime.png"
	},
	{
    id: "12",
		alt: "Google",
		img: "google.png"
	},
	{
    id: "13",
		alt: "HBO",
		img: "hbo.png"
	},
	{
    id: "14",
		alt: "Netflix",
		img: "netflix.png"
	},
	{
    id: "15",
		alt: "Esquire Network",
		img: "esquire.png"
	},
	{
    id: "16",
		alt: "A&E",
		img: "ae.png"
	},
	{
    id: "17",
		alt: "Toyota",
		img: "toyota.png"
	},
	{
    id: "18",
		alt: "Honda",
		img: "honda.png"
	},
	{
    id: "19",
		alt: "Starbucks",
		img: "starbucks.png"
	},
	{
    id: "20",
		alt: "Chevy",
		img: "chevy.png"
	},
	{
    id: "21",
		alt: "Gillette",
		img: "gillette.png"
	},
	{
    id: "22",
		alt: "Adobe",
		img: "adobe.png"
	},
	{
    id: "23",
		alt: "PlayStation",
		img: "playstation.png"
	},
	{
    id: "24",
		alt: "Activision",
		img: "activision.png"
	},
	{
    id: "25",
		alt: "Namco",
		img: "namco.png"
	},
	{
    id: "26",
		alt: "Nintendo",
		img: "nintendo.png"
	},
	{
    id: "27",
		alt: "LucasArts",
		img: "lucasarts.png"
	},
	{
    id: "28",
		alt: "Spike TV",
		img: "spike.png"
	},
	{
    id: "29",
		alt: "24 Hour Fitness",
		img: "24h.png"
	},
	{
    id: "30",
		alt: "Ask Jeeves",
		img: "ask.png"
	},
	{
    id: "31",
		alt: "Jamba Juice",
		img: "jamba.png"
	},
	{
    id: "32",
		alt: "PlayStation Portable",
		img: "psp.png"
	},
	{
    id: "33",
		alt: "Nissan",
		img: "nissan.png"
	},
	{
    id: "34",
		alt: "TBWA Chiat Day",
		img: "chiat.png"
	},
	{
    id: "35",
		alt: "Saatchi & Saatchi",
		img: "saatchi.png"
	},
	{
    id: "36",
		alt: "Ignited",
		img: "ignited.png"
	},
	{
    id: "37",
		alt: "72andSUnny",
		img: "72.png"
	},
	{
    id: "38",
		alt: "Juxt",
		img: "juxt.png"
	},
	{
    id: "39",
		alt: "Y&R",
		img: "yr.png"
	},
	{
    id: "40",
		alt: "David & Goliath",
		img: "dg.png"
	},
	{
    id: "41",
		alt: "Grey",
		img: "grey.png"
	}
];

const Client = (props) => {
  return (
    <img src={ "/images/clients/" + props.img } alt={ props.alt } />
  );
};

const Clients = (props) => {
  return (
    <div className="container">
      <div className="grid">
        { props.clients.map( client =>
          <div className="col-sm-2" key={ client.id }>
            <Client
              { ...client }
              key={ client.id }
            />
          </div>
        ) }
      </div>
    </div>
  );
}

const App = (props) => {
  return (
    <Clients clients={ props.clients } />
  );
}

ReactDOM.render(
  <App clients={ clients } />,
  document.getElementById("root")
);
