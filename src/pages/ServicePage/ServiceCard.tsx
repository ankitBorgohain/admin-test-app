
export interface IService {
    _id: string;
    service: string;
    
    description: string;
    price: number;
    provider: string;
}

interface ServiceCardProps {
    service: IService;
    className?:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className  }) => {
    return (
        <div className= {`service-card flex flex-col border justify-between h-[400px] lg:w-96 w-80 ${className}`} >
            <div className="bg-blue-500 h-full text-5xl font-extrabold text-center">

            LOGO
            </div>
            
            <div className=" border-t-4 ">
            <h3>Service: {service.service}</h3>
            <p>Description: {service.description}</p>
            <p><strong>Price:</strong> ${service.price}</p>
            <p><strong>Provider:</strong> {service.provider}</p>
            </div>
        </div>
    );
};

export default ServiceCard;