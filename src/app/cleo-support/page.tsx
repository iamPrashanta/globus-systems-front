import { ServiceResources } from "@/components/service-resources";
import { ServicePage } from "@/components/service-page";
import { serviceContent } from "@/data/services";
export const metadata={title:"Cleo Support & Services"};
export default function Page(){return <ServicePage content={serviceContent.cleo}><ServiceResources service="cleo"/></ServicePage>}
