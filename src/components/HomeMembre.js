import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './MemberNav'
import logo1 from "../images/P18_0435-removebg-preview.png"
import logo2 from "../images/download (12).jpeg"
import car2 from "../images/car 2.jpeg"
import car5 from "../images/car 5.jpeg"
import rolls from "../images/rolls-royce_boat_tail_59.jpg"
import idk from "../images/download (13).jpeg"
import idk2 from "../images/cars15.jpeg"
import idk3 from "../images/cars3.jpeg"
import Footer from './Footer';
import "./home.css";
export default function HomeMembre() {
    const all=[
        {id: 1, pic:car2, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},
        {id: 2, pic:idk, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},        
        {id: 3, pic:car5, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},
        {id: 4, pic:idk2, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},
        {id: 5, pic:idk3, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},
        {id: 6, pic:car2, title:"Ferrari 812 Superfast", price: "500 dh", dec:"Petrol . Mileage: 18031"},

    ];
    const chunked=[];
    for(let i=0; i< all.length;i+=3){
      chunked.push(all.slice(i,i+3));
    }
    const [isToggled, setIsToggled] = useState(false);

    const toggleButton = () => {
      setIsToggled((prev) => !prev);
    };
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 3;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setStartIndex((prevIndex) =>
          (prevIndex + itemsToShow) % all.length
        );
      }, 3000); // Slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    // Wrap-around support for slicing
    const visibleItems =
      startIndex + itemsToShow <= all.length
        ? all.slice(startIndex, startIndex + itemsToShow)
        : [...all.slice(startIndex), ...all.slice(0, (startIndex + itemsToShow) % all.length)];
    const taglines = [
        "FEELING THE RUSH",
        "UNLEASH THE POWER",
        "DRIVE THE LEGEND"
      ];
      
      const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        }, 1500); // Change tagline every 3 seconds
        return () => clearInterval(interval);
      }, []);
    
      const currentTagline = taglines[currentTaglineIndex];
      const [Language, setLanguage]= useState("en");
      const translations={
        en:{
          lim: "PUSHING THE LIMITS",
          taglines :["FEELING THE RUSH","UNLEASH THE POWER","DRIVE THE LEGEND"],
          pick : " Age",
          ret : " Permis",
          pickd : "Pick Up Date",
          retd : "Return Date",
          browse : "Browse Exclusive Cars For",
          browse2 : " Every Occasion",
          p1 : "We offer top-tier cars and personalized services to ensure you drive the best. Discover a new standard of excellence today.",
          btn1 : "show all 15 modules",
          abts : "Would you like to know more About Us ?",
          abts2 : "Amine Car is a car rental agency in Morocco since 1986, specializing in car rentals for personal and professional use. The quality of our service, the friendliness of our agents, and the good condition of our vehicles are the strengths that set us apart.",
          abts3 :"Experience ",
          abts4 :"years",
          market : "Check out ",
          market1 : "our marketplace",
          market2 : "Find your drive through our easy service",
          market3 : "No credit card needed",
          market4 : "Super fast check-In",
          market5 : "No extra costs on arrivals",
          market6 : "Tap the Rent icon in the Cabx app and complete your reservation. You can choose to pay in advance to save money.",
        },
        fr :{
          lim: "PUSHING THE LIMITS",
          taglines :["FEELING THE RUSH","UNLEASH THE POWER","DRIVE THE LEGEND"],
          pick : "Votre Age",
          ret : "votre Permis",
          pickd : "Date de prise en charge",
          retd : "Date de retour",
          browse : "Découvrez des voitures exclusives pour",
          browse2 : " chaque occasion",
          p1 : "Nous proposons des voitures haut de gamme et des services personnalisés pour vous garantir la meilleure expérience de conduite. Découvrez un nouveau standard d'excellence dès aujourd'hui.",
          btn1 : "afficher les 15 modèles",
          abts : "Souhaitez-vous en savoir plus sur nous ?",
          abts2 : "Amine Car est une agence de location de voitures au Maroc depuis 1986, spécialisée dans la location de véhicules pour particuliers et professionnels. La qualité de notre service, l'amabilité de nos agents et le bon état de nos véhicules sont les atouts qui nous distinguent.",
          abts3 :"Expérience",
          abts4 : "années d'",
          market : "Découvrez ",
          market1 : "notre marché",
          market2 : "Trouvez votre véhicule grâce à notre service simple",
          market3 : "Aucune carte de crédit requise",
          market4 : "Enregistrement ultra-rapide",
          market5 : "Aucun frais supplémentaire à l'arrivée",
          market6 : "Appuyez sur l'icône Louer dans l'application Cabx et complétez votre réservation. Vous pouvez choisir de payer à l'avance pour économiser.",
        }

      };
      const text= translations[Language];

      const history = useNavigate();
      
            const [age, setAge] = useState('');
          const [license, setLicense] = useState('');
          const [pickupDate, setPickupDate] = useState('');
          const [returnDate, setReturnDate] = useState('');
      
          const handleSearch = () => {
              // Redirect to the search results page with query parameters
              history(`/cars2?age=${age}&license=${license}&pickupDate=${pickupDate}&returnDate=${returnDate}`);
          };

  return (
    <div className='body225'>
      <Navbar/>
      <div className="idk">
       {/* <div className="idk2">
          <h1>PUSHING THE LIMITS <br /> FEELING THE RUSH</h1>
       </div> */}
       <div className="idk2">
         <div className="hero-text">
            <h1 className="main-title">{text.lim}</h1>
            <h3 className="rotating-tagline" >{text.taglines[currentTaglineIndex]}</h3>
         </div>
       </div>
        <div className="ima">
            <img src={logo1} alt="" />
        </div>
        
        <div class="divm">
        <div>
                <h5>{text.pick}</h5>
                <input className='input55' type="text" placeholder="Enter Your age..." value={age} 
                onChange={(e) => setAge(e.target.value)}   required/>
            </div>
            <div>
                <h5>{text.ret}</h5>
                <input className='input55' type="text" placeholder="Enter Your permis..." value={license} 
                onChange={(e) => setLicense(e.target.value)}  required/>
            </div>
            <div>
                <h5>{text.pickd}</h5>
                <input className='input55' type="datetime-local"  value={pickupDate} 
                onChange={(e) => setPickupDate(e.target.value)} required />
            </div>
            <div>
                <h5>{text.retd}</h5>
                <input className='input55' type="datetime-local" value={returnDate} 
                onChange={(e) => setReturnDate(e.target.value)}   required/>
            </div>
            <div class="container">
               <button onClick={handleSearch} style={{color: "white", backgroundColor: "rgb(221, 29, 29)", width:"90px", marginTop:"30px"}}>Search Car</button>
            </div>
           </div>
      </div>
      <div>
        <div className='divf'>
            <h1>{text.browse} <br /> {text.browse2}</h1>
            <div className="txt1">
        <p >{text.p1}</p>
         </div>
           
        </div>
     </div>

      <div className="car-slider" style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
       {visibleItems.map((car) => (
        <div key={car.id} className="car-card" style={{ minWidth: "250px", padding: "10px", background: "#fff", borderRadius: "12px" }}>
          <img src={car.pic} alt={car.title} style={{ width: "100%", borderRadius: "8px" }} />
          <h2>{car.title}</h2>
          <p>{car.price}</p>
          <p>{car.dec}</p>
        </div>
      ))}
     
    </div>
    <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
       <Link to="/cars2">
       <button onClick={toggleButton} style={{ color: isToggled ? 'black' : 'white',backgroundColor: isToggled ? 'white' : 'black',padding: '10px 20px',border: '0.2px solid grey',borderRadius: '5px',cursor: 'pointer',}}>
    {text.btn1}
    </button>
       </Link>
    </div>
   
 {/*      <div class="market">
        <h1>Check out <br /> our marketplace</h1>
        <p>Find your drive through our easy service </p>
    </div>
    <div class="cards">
        <div class="first">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z"/></svg></i>
            <h4>No credit card needed</h4>
            <p>Tap the Rent icon in the Cabx app and complete your reservation. You can choose to pay in advance to save money.</p>
        </div>
        <div class="second">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m520-384 56-56-96-96v-184h-80v216l120 120ZM368-249q16-48 56.5-79.5T518-360h152q24-34 37-74.5t13-85.5q0-117-81.5-198.5T440-800q-117 0-198.5 81.5T160-520q0 98 58.5 172.5T368-249ZM520-40q-58 0-102-36.5T363-168q-122-26-202.5-124T80-520q0-150 105-255t255-105q150 0 255 105t105 255q0 43-9.5 83.5T763-360q66 0 111.5 47T920-200q0 66-47 113T760-40H520Zm-80-485Zm200 325Zm-120 80h240q33 0 56.5-23.5T840-200q0-33-23.5-56.5T760-280H520q-33 0-56.5 23.5T440-200q0 33 23.5 56.5T520-120Zm0-40q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160Zm120 0q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160Zm120 0q-17 0-28.5-11.5T720-200q0-17 11.5-28.5T760-240q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160Z"/></svg></i>
            <h4>Super fast check-In</h4>
            <p>Tap the Rent icon in the Cabx app and complete your reservation. You can choose to pay in advance to save money.</p>
        </div>
        <div class="third">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M260-361v-40H160v-80h200v-80H200q-17 0-28.5-11.5T160-601v-160q0-17 11.5-28.5T200-801h60v-40h80v40h100v80H240v80h160q17 0 28.5 11.5T440-601v160q0 17-11.5 28.5T400-401h-60v40h-80Zm298 240L388-291l56-56 114 114 226-226 56 56-282 282Z"/></svg></i>
            <h4>No extra costs on arrival</h4>
            <p>Tap the Rent icon in the Cabx app and complete your reservation. You can choose to pay in advance to save money.</p>
        </div>
    </div> */}
    
    <div  style={{  display: "flex",flexWrap: "wrap",justifyContent: "center",alignItems: "flex-start",  padding: "60px 20px",  gap: "5%",   color: "black", paddingTop:"60px"}}>
       <div style={{ maxWidth: "500px", flex: "1" }}>
        <h1 style={{ color: "maroon" }}>{text.abts}</h1>
        <p style={{ marginTop: "20px", lineHeight: "1.6" }}> {text.abts2}</p>
        <p style={{ marginTop: "60px", fontWeight: "bold" }}>AMINE KADIRI - CEO Founder</p>
   </div>

    <div style={{display: "flex", gap:"20px",justifyContent:"center", flexWrap:"wrap"}}>
        <div >
            <img src={logo2} alt="" style={{width:"280px", borderRadius: "20px"}}/>
        </div>
        <div style={{ height: "auto", width: "300px", display:"block"}} >
            <div style={{backgroundColor:"rgba(47, 47, 47, 0.84)"  ,width: "330px" ,borderRadius: "20px"}}>                    
                <h1 style={{textAlign: "center", marginTop: "7px", color:"white", paddingBottom:"10px"}}> <span className='str'>+39 {text.abts4}</span> <br/> <span className="exp">{text.abts3}</span></h1> 
            </div>
                <img src={rolls} alt="" style={{width:"330px", borderRadius: "20px", }} className='no' />
    
            </div>
        </div>
        
</div>

      <div class="market">
        <h1>{text.market} <br /> {text.market1}</h1>
        <p>{text.market2}</p>
    </div>
    <div class="cards">
        <div class="first">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z"/></svg></i>
            <h4>{text.market3}</h4>
            <p>{text.market6}</p>
        </div>
        <div class="second">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m520-384 56-56-96-96v-184h-80v216l120 120ZM368-249q16-48 56.5-79.5T518-360h152q24-34 37-74.5t13-85.5q0-117-81.5-198.5T440-800q-117 0-198.5 81.5T160-520q0 98 58.5 172.5T368-249ZM520-40q-58 0-102-36.5T363-168q-122-26-202.5-124T80-520q0-150 105-255t255-105q150 0 255 105t105 255q0 43-9.5 83.5T763-360q66 0 111.5 47T920-200q0 66-47 113T760-40H520Zm-80-485Zm200 325Zm-120 80h240q33 0 56.5-23.5T840-200q0-33-23.5-56.5T760-280H520q-33 0-56.5 23.5T440-200q0 33 23.5 56.5T520-120Zm0-40q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160Zm120 0q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160Zm120 0q-17 0-28.5-11.5T720-200q0-17 11.5-28.5T760-240q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160Z"/></svg></i>
            <h4>{text.market4}</h4>
            <p>{text.market6}</p>
        </div>
        <div class="third">
            <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M260-361v-40H160v-80h200v-80H200q-17 0-28.5-11.5T160-601v-160q0-17 11.5-28.5T200-801h60v-40h80v40h100v80H240v80h160q17 0 28.5 11.5T440-601v160q0 17-11.5 28.5T400-401h-60v40h-80Zm298 240L388-291l56-56 114 114 226-226 56 56-282 282Z"/></svg></i>
            <h4>{text.market5}</h4>
            <p>{text.market6}</p>
        </div>
    </div>
     <Footer Language={Language} setLanguage={setLanguage}/>
    </div>
  )
}
