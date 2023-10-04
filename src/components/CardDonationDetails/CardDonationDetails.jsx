
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CardDonationDetails = ({cardDetail}) => {
    const {id, image, title, description,amount} = cardDetail || {}
    const handleDonate = ()=>{
        const addToDonation = [];
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(!donationItems){
            addToDonation.push(cardDetail);
            localStorage.setItem('donations', JSON.stringify(addToDonation))
            swal("Good job!", "Donate Successfully", "success");
        }else{
            const isExist = donationItems.find(donate=>donate.id == id)
            if(!isExist){
                addToDonation.push(...donationItems, cardDetail);
            localStorage.setItem('donations', JSON.stringify(addToDonation))
            swal("Good job!", "Donate Successfully", "success");
            }else{
                swal("Sorry!", "Already Donated", "error");
            }
        }
    }
    
    
    return (
        <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
            <div>
            <img className="rounded-t-lg w-full relative" src={image} alt="" />
            <div className='relative -top-16 left-5'>
                <Link onClick={handleDonate} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                {amount}
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </Link>
            
            </div>
            </div>
       
        <div className="px-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            
        </div>
            </div>
    );
};

CardDonationDetails.propTypes = {
    cardDetail:PropTypes.object
};

export default CardDonationDetails;