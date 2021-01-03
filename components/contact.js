const phone = () => {
    return(
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    )
}

const atSign = () => {
    return (
  <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
    )
}

const linkedIn = () => {
    return (
        <path d="M16.97 17.009H14.01c-.022-1.903.051-3.809-.05-5.708.018-1.152-1.25-1.757-2.224-1.332-1.133.473-1.041 1.86-1.04 2.892v4.148H7.737V7.483h2.84v1.301c.43-.601 1.043-1.195 1.804-1.4 1.37-.348 3.125-.111 3.937 1.168.902 1.606.592 3.5.651 5.264v3.193zM4.4 6.18c-1.173.049-2.077-1.299-1.588-2.366.4-1.105 1.99-1.431 2.792-.574.857.777.583 2.343-.486 2.783-.224.104-.47.158-.717.157zM5.88 17.01H2.919V7.483h2.96v9.526zM18.444 0C12.717.006 6.99-.01 1.264.008.404.072-.17.958-.041 1.778c.008 5.637-.016 11.276.012 16.912.082.835.94 1.393 1.744 1.272 5.632-.005 11.266.01 16.898-.008.862-.063 1.44-.949 1.31-1.771-.008-5.638.016-11.277-.012-16.914A1.466 1.466 0 0018.444 0" />
    )
}

const twit = () => {
    return (
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
    )
}

const contactDetails = [
    {
        "contact" : "+44 (0)75 900 29708",
        "link" : "tel:+447590029708",
        "Text" : "Call me",
        "icon" : phone()
    },
    {
        "contact" : "nealle.page@gmail.com",
        "link" : "mailto:nealle.page@gmail.com",
        "Text" : "Email Me",
        "icon" : atSign()

    },
    {
        "contact" : "LinkedIn",
        "link" : "https://www.linkedin.com/in/neallepage/",
        "Text" : "Connect on LinkedIn",
        "icon" : linkedIn()
    },
    {
        "contact" : "@pageboy_za",
        "link" : "https://twitter.com/pageboy_za",
        "Text" : "Tweet @ me",
        "icon" : twit()
    }

]

export default function contact () {
    return (
        <div className="px-4 flex flex-col space-y-4 md:flex-row md:space-x-4">
            {contactDetails.map((contacts, index) => {
                return (
                    <div key={index} className="mt-4 h-24 w-full bg-white dark:bg-gray-700 rounded-xl shadow-xl">
                        <div className="mx-auto mt-2 mb-1 h-6 w-6">
                            <svg className="object-center fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            {contacts.icon}
                            </svg>
                        </div>
                        <div className="bg-gradient-to-r from-blue-700 to-blue-400 mb-2 shadow-lg">
                            <h2 className="font-semibold text-md text-center text-gray-100">{contacts.Text}</h2>
                        </div>
                        <div className="text-center dark:text-gray-200">
                            <a href={contacts.link} >{contacts.contact}</a>
                        </div>
                    </div>
                )

        })}


        </div>
    )
}