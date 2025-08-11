import emmy from '../../assets/emmy.jpg';

function EmmyH() {
    return(
        <>
        <div className='card2'>
            <img src={emmy} alt="VP Recruitment Info"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',

                }}
            />
            <p className="phil-info bold">Vice President<br></br> Recruitment Information</p>
            <p className="phil-info">Emmy Hardin-Reynolds</p>
        </div>
         
        </>
       
    )
    
}

export default EmmyH;