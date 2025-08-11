import natalie from '../../assets/natalie.jpg';

function NatalieK() {
    return(
        <>
        <div className='card2'>
            <img src={natalie} alt="VP DEI"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Diversity, Equity, and Inclusion</p>
            <p className="phil-info">Natalie Khoshaba</p>
        </div>
        
        </>
       
    )
    
}

export default NatalieK;