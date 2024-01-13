import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Contact() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const sendMessage = () => {
        try {
            if( name.length <= 0 ){
                toast.error("Name is required!!!");
                return false;
            }

            if( email.length <= 0 ){
                toast.error("Email is required!!!");
                return false;
            }

            if( message.length <= 0 ){
                toast.error("Message is required!!!");
                return false;
            }

            toast.info("UNDER DEVELOPMENT: Please directly mail to sureshchand12a@gmail.com");
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div className="bg-gray-900 py-16" id="contact">
            <div className="container mx-auto">
                <div className="max-w-screen-md mx-auto">
                    <div className="bg-opacity-[3%] bg-dark rounded-md p-11 mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] wow fadeInUp" data-wow-delay=".15s" style={{
                        visibility: "visible",
                        animationDelay: "0.15s"
                    }}>
                        <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3">Need Help?</h2>

                        <p className="text-body-color text-base font-medium mb-12">Feel free to reach out to me for any questions or opportunities or mail me directly on <a href="mailto:sureshchand12a@gmail.com" className="underline text-blue-700" title="Contact Me">sureshchand12a@gmail.com</a></p>

                        <div className="flex flex-wrap mx-[-16px]">
                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-3"> Your Name </label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-3"> Your Email </label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700" />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-3"> Your Message
                                    </label>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Enter your Message" className="w-full border border-transparent bg-[#242B51] rounded-md shadow-one shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-blue-700 resize-none"></textarea>
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <button onClick={sendMessage} type="button" className="w-full text-base font-medium text-white bg-blue-700 py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out">
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
