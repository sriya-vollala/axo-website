import rachel from '../../assets/rachel.jpg';

function RachelD() {
    return(
        <>
        <div className='card2'>
            <img src={rachel} alt="VP PR and Marketing"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Public Relations and Marketing</p>
            <p className="phil-info">Rachel Domingo</p>
        </div>
        </>
       
    )
    
}

export default RachelD;