import angela from '../../assets/angela.jpg';

function AngelaO() {
    return(
        <>
        <div className='card2'>
            <img src={angela} alt="VP Recruitment"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Recruitment</p>
            <p className="phil-info">Angela Ontiveros</p>
        </div>
        </>
       
    )
    
}

export default AngelaO;