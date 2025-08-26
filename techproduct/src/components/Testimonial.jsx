import React from 'react'

const Testimonial = () => {
  const testimonials = [
    {
      name: "EVAN WHITE",
      img: "/assets/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
      name: "EVAN WHITE",
      img: "/assets/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
      name: "EVAN WHITE",
      img: "/assets/profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    }
  ]

  return (
    <div className="w-[90%] max-w-7xl mx-auto text-center text-white py-16">
      {/* Section Heading */}
      <h2 className="text-sm font-semibold tracking-widest text-gray-300">TESTIMONIALS</h2>
      <h1 className="text-3xl sm:text-4xl md:text-[3vw] font-bold leading-tight mt-2 mb-12">
        Read What Others <br /> Have To Say
      </h1>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <div key={i} className="bg-[#302A63]/60 rounded-xl p-8 flex flex-col items-center text-center shadow-lg">
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover border-4 border-[#1E1A47] -mt-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
