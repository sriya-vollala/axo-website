import hannah from '../../assets/hannah.jpg';

function HannahM() {
    return(
        <>
        <div className='card2'>
            <img src={hannah} alt="VP Philo"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',

                }}
            />
            <p className="phil-info bold">Vice President<br></br> Philanthropy</p>
            <p className="phil-info">Hannah Meza</p>
        </div>
        </>
       
    )
    
}

export default HannahM;