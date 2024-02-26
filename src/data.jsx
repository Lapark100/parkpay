 import img2 from "./assets/image2.svg"
 import img4 from "./assets/image4.svg"
 import img5 from "./assets/image5.svg"
 export default [
    {
        id:1,
        title:'Buy Airtime & Data',
        description: 'Enjoy the simplicity of recharging your mobile airtime and data with just a few clicks. Saving you time and effort.',
        image: <img src={img4} className="card-img2 card-style1" alt="card"/>,
    },
    {
        id:2,
        title:'Send Money',
        description: 'Need to send money? Our efficient money transfer service lets you send funds quickly and reliably.',
        image: <img src={img5} className="card-img2 card-style2" alt="card"/>,
    },
    {
        id:3,
        title:'Pay Bills',
        description: 'Paying bills is now secure and convenient, with multiple layers of protection ensuring your financial data remains safe.',
       image: <img src={img2} className="card-img2" alt="card"/>,
    }
]