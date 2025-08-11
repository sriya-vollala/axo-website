import katie from '../../assets/katie.jpg';

function KatieZ() {
    return(
        <>
        <div className='card2'>
            <img src={katie} alt="VP Ritual"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Ritual</p>
            <p className="phil-info">Katie Zheng</p>
        </div>
        </>
       
    )
    
}

export default KatieZ;