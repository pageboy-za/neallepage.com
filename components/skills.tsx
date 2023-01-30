import ImageTextBlock from "./structural/imageTextBlock"
import SectionHead from "./structural/sectionHead"
import Button from "./structural/button";
import SkillCard from "./structural/skillCard";
import Modal from "./modal";

export default function Skills () {
    return (
        <>
        <section className="bg-gold-200 w-full h-auto py-4 rounded-lg border-8 border-white shadow-sm" id="skills">
            <div>
                <SectionHead>Skills</SectionHead>
            </div>
            <div className="flex flex-col md:flex-row px-2">
                <SkillCard title="Product" svgIcon="">
                I have been working in product for a while. I have helped bring product thinking to several companies I have worked with, including operations, shifting the business from a project-driven mindset to a proactive value-driven one.
                </SkillCard>
                <SkillCard title="Payments" svgIcon=" ">
                I spent my early years in banking and payments, becoming an EMV and NFC expert along the way. One of my proudest products in this space was some of the Mastercard Digital Enablement System (MDES)™ that powers Mastercard © payments inside Apple Pay and Google Pay.
                </SkillCard>
                <SkillCard title="E-Commerce" svgIcon=" ">
                My time with the Ocado group has taught me about more than the basics of the technology behind e-commerce; I've been learning the business of it too. All in the context of global partnerships with the world's leading grocers, like Coles (Australia) and Kroger (USA).
                </SkillCard>
            </div>
            <div>
                <Button event="Download CV" href="/pdf/2023-01-09_Nealle Page CV.pdf ">Grab a copy  of my CV now</Button>
            </div>
        </section>
        </>
    )}
        
