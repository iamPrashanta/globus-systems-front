import { Eyebrow } from "@/components/sections";
export function PageIntro({label,title,accent,description}:{label:string;title:string;accent:string;description:string}) { return <section className="page-intro"><div className="container-wide"><Eyebrow>{label}</Eyebrow><h1>{title} <span>{accent}</span></h1><p>{description}</p></div></section>; }
