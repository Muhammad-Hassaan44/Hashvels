function Services() {
         const services = [
           { title: "Web Development", description: "Build modern, responsive websites tailored to your needs." },
           { title: "Mobile Apps", description: "Develop cross-platform apps for iOS and Android." },
           { title: "Cloud Solutions", description: "Leverage secure, scalable cloud infrastructure." },
         ];

         return (
           <section id="services" className="py-16 bg-white">
             <div className="container mx-auto text-center">
               <h2 className="text-3xl font-bold mb-8">Our Services</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {services.map((service, index) => (
                   <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                     <p className="text-gray-600">{service.description}</p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
         );
       }

       export default Services;