function Hero() {
         return (
           <section className="bg-blue-500 text-white py-20 text-center">
             <div className="container mx-auto">
               <h2 className="text-4xl font-bold mb-4">Welcome to Hashvels</h2>
               <p className="text-lg mb-6">Your trusted partner for innovative tech services.</p>
               <a
                 href="#services"
                 className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
               >
                 Explore Services
               </a>
             </div>
           </section>
         );
       }

       export default Hero;