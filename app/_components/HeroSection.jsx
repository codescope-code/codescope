export default function HeroSection() {
    return(
         <div className="bg-black text-white font-sans"id="#home">
             <section className="px-6 md:px-12 pt-60 pb-20 border-b border-gray-600">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
            <span className="text-primary block text-green-400 text-7xl">Turning Data into Insight,</span>
            <span className="block text-6xl mt-2">And Insight into Impact</span>
            <p className="text-xl mt-3">We use intelligent analysis, data-driven strategy, 
              <span className="block text-xl">and modern digital experiences when dealing with  businesses.</span> </p>
          </h1>

          {/* CTA Links */}
           <div className="mt-28 flex flex-col justify-end sm:flex-row gap-6 text-sm text-green-400">
            <a href="/works" className="flex items-center gap-2 hover:text-green-400 text-xl">
              PROJECTS <span>↗</span>
            </a>
            <a href="/about/#OurTeam" className="flex items-center gap-2 hover:text-primary text-xl">
              OURTEAM <span>↗</span>
            </a>
          </div>
        </section>
      </div>
         
    );
}
