import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDonationDetails from "../CardDonationDetails/CardDonationDetails";


const CardDetails = () => {
    const [cardDetail, setCardDetails] = useState()
    const {id} = useParams();
    const cardDetails = useLoaderData();
    
    useEffect(()=>{
        const findCard = cardDetails?.find(cardDetail => cardDetail.id == id);
        setCardDetails(findCard)
        
    },[cardDetails, id])


    return (
        
<div className="flex justify-center h-screen items-center">
    <CardDonationDetails cardDetail={cardDetail}></CardDonationDetails>
</div>

    );
};

export default CardDetails;