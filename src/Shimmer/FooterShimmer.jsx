

const FooterShimmer = () => {
    return (
        <>
            <div className='flex justify-between p-5 bg-blue-gray-100'>
                    <div className='grid grid-cols-1 w-1/5  '>
                        <div mt-1>
                            <div className='bg-kaddu-123  h-4 w-2/3 m-2'></div>
                            <div className='bg-kaddu-123  h-4 w-2/3 m-2'></div>
                        </div>
                    </div>

                <div className='grid grid-cols-2 w-1/2 pl-10 '>
                    <div className="m-3">
                        <div className='bg-kaddu-123  h-4 w-2/3 m-1'></div>
                        <div className='bg-kaddu-123  h-4 w-2/5 m-1 '></div>
                    </div>
                    <div className="m-3">
                        <div className='bg-kaddu-123  h-4 w-2/3 m-1'></div>
                        <div className='bg-kaddu-123  h-4 w-2/5 m-1 '></div>
                    </div>
                    <div className="m-3">
                        <div className='bg-kaddu-123  h-4 w-2/3 m-1'></div>
                        <div className='bg-kaddu-123  h-4 w-2/5 m-1 '></div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default FooterShimmer;