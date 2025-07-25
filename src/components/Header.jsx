function Header() {
         return (
           <nav className="bg-blue-600 text-white p-4">
             <div className="container mx-auto flex justify-between items-center">
               <h1 className="text-2xl font-bold">Hashvels</h1>
               <ul className="flex space-x-4">
                 <li><a href="#home" className="hover:underline">Home</a></li>
                 <li><a href="#services" className="hover:underline">Services</a></li>
                 <li><a href="#contact" className="hover:underline">Contact</a></li>
               </ul>
             </div>
           </nav>
         );
       }

       export default Header;