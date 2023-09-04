import React from 'react'

const DurationBanner = ({ durationObject, backgroundImage }) => {
    const { description, price, duration, features } = durationObject;
    return (
        <div>
            <div className="mt-10 flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-white rounded-lg border border-gray-100 shadow w-96 relative">
                {/* Background Image with Dark Overlay */}
                <div style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 rounded-lg"></div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className='relative z-10'>
            <h3 className="mb-4 text-2xl font-semibold"></h3>
                <p className="font-light text-white sm:text-lg ">{description}</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">{price}</span>
                    <span className="text-white ">/{duration}</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                            {feature.positive ? <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg> : <svg className="flex-shrink-0 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15.293 5.293a1 1 0 010 1.414L11.414 10l3.879 3.879a1 1 0 01-1.414 1.414L10 11.414l-3.879 3.879a1 1 0 01-1.414-1.414L8.586 10 4.707 6.121a1 1 0 111.414-1.414L10 8.586l3.879-3.879a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            }
                            <span>{feature.desc}</span>
                        </li>
                    ))}
                </ul>
                <div className='flex items-end'>
                <a href="#" className="bg-white text-gray-900 border border-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
  Go the /{duration} Way!
</a>


                </div>
            </div>
            </div>

                
        </div>


    )
}

export default DurationBanner