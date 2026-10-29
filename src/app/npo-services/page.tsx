import { ServicePage } from "@/components/service-page";
import { serviceContent } from "@/data/services";
export const metadata={title:"Nonprofit Technology Services"};
export default function Page(){return <ServicePage content={serviceContent.npo}/>}
