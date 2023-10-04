import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {
    const [donations, setDonations]= useState([]);
    const [noData, setNoData] = useState(false);
    const [showAll, setShowAll] = useState(false)
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems){
            setDonations(donationItems)
        }else{
            setNoData('no data found')
        }
        
    },[])

    return (
        <div>
            {
                noData? <p className=" text-3xl h-[70vh] flex items-center justify-center">{noData}</p> 
                : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-5 py-10">
                        {
                            showAll ? donations?.map(card =>( <DonationCard key={card.id} card={card}></DonationCard>))
                            : 
                            donations?.slice(0,4).map(card =>( <DonationCard key={card.id} card={card}></DonationCard>))
                        }
                    </div>
                    {
                        donations && donations.length > 4 && <button onClick={()=>setShowAll(!showAll)} className="block mx-auto py-2 px-4 bg-green-400 rounded-md my-5">
                        {showAll ? "Show Less" : "Show All"}</button>
                    }
                </div>
            }
        </div>
    );
};

export default Donation;