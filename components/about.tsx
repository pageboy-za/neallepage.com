import ImageTextBlock from "./structural/imageTextBlock"
import SectionHead from "./structural/sectionHead"
import RoundButton from "./structural/roundButton";

import ocadoWarehouse from "../public/Ocado_warehouse_bots.jpg";
import canaryWharf from "../public/canary-wharf.jpg";
import mobilePhone from "../public/phoneDark.jpg";
import dubaiNight from "../public/dubaiNight.jpg";
import phoneGold from "../public/phoneGold.jpg"

export default function about () {
    return (
        <>
        <section className=" bg-gold-200 w-full rounded-lg border-8 border-white shadow-sm" id="about">
            <div>
                <SectionHead>About</SectionHead>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ImageTextBlock imgSrc={dubaiNight}
                    altText ="Night time shot of the World Trade Center in Manama Bahrain"
                    title="Revolutionizing Financial Inclusion and Payment Methods in the MENA Region" 
                    priority="true">
                    Tarabut Gateway is developing open banking payment products for the Middle East and North Africa region. Our goal is to improve financial inclusion and transform payments across the region. We are committed to using open data and innovative payment solutions to create a more inclusive and convenient financial system.
                </ImageTextBlock>
                <ImageTextBlock imgSrc={ocadoWarehouse}
                    altText ="Grocery picking robots on a grid"
                    title="Transforming the Online Shopping Experience with the Ocado Smart Platform" 
                    priority="false">
                    Ocado is a global technology leader in online grocery, with a mission to deliver the best user experience and retailer economics through advanced technology. As a team member, I have had the opportunity to shape the future of online shopping and push boundaries by building advanced tools. Our company has grown from an online grocer to a leader in innovative platforms for grocery retail.
                </ImageTextBlock>
                <ImageTextBlock imgSrc={canaryWharf}
                    altText ="Carnary Wharf at night with the Citi Group building clearly visible"
                    title="Agile Process"
                    priority="false">
                    Process is essential. But not for its own sake. Rather it's for providing delivery of value to all stakeholders at the right time. In some industries, like financial services, this means delivering value and making sure no one goes to jail for a regulatory breach.
                </ImageTextBlock>
                <ImageTextBlock imgSrc={phoneGold}
                    altText ="A smart phone with a black background and application icons clearly visible"
                    title="APIs, Digital and Payments"
                    priority="false">
                    Digital is so much more than having an app. The real trick is using digital enhancement to deliver value by redefining processes and operations rather than just doing the old process on a phone.
                </ImageTextBlock>
            </div>
            <RoundButton href="/#skills" />
        </section>
        </>
    )}
        
