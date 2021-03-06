import Skeleton from 'react-loading-skeleton';

export const CardLoader = () => {

    return(
        <>
            <div className="row">
                {Array(3).fill(1).map((item, i)=> (
                    <div className="col-md-4" key={i}>
                    <div className="w3-card-4 bg-white infected p-3" style={{height: '180px'}}>
                    <h4> <Skeleton width={70}/></h4>
                    
                    <div className="date">
                    <Skeleton width={100}/>
                    </div>
                    <p>
                       <Skeleton width={200}/>
                    </p>
                </div>
            </div>
                ))}
            </div>
        </>
    )
}


export const ChartLoader = () => {
    
    return (
        <>
            <div className="row mx-1 mt-5">
           <div className="col-md-8 bg-white d-flex mx-auto">
            <div className="mx-5">
            <Skeleton height={300} width={50}/>
            </div>
            <div className="mx-5">
            <Skeleton height={300} width={50}/> 
            </div>
            <div className="mx-5">
            <Skeleton height={300} width={50}/> 
            </div>
            <div className="mx-5 d-none d-lg-block">
            <Skeleton height={300} width={50}/> 
            </div>
           </div>
           <div>
            <Skeleton height={10} /> 
            </div>
        </div>
        </>
    )
}