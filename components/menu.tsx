import MenuButton from "./structural/menuButton";

type Props = {
    showHome: Boolean
  }

export default function Menu ({showHome}: Props ) {
    return (
        <>
        <section id="menu">
            <div className="flex flex-row px-2 mt-4">
                {showHome == true ?
                ( 
                <MenuButton href="/">
                    Home
                </MenuButton>
                )
                :  (<div />)
                }
                
                <MenuButton href="/#about">
                    About
                </MenuButton>
                <MenuButton href="/#skills">
                    Skills
                </MenuButton>
                <MenuButton href="/#contact">
                    Contact
                </MenuButton>
                {/* <MenuButton href="/blog">
                    Blog
                </MenuButton>        */}         
            </div>
        </section>
        </>
    )}