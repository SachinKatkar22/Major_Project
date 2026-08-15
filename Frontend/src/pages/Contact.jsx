import React from 'react';

const Contact = () => {
  const team = [
    {
      name: "Sachin Katkar",
      role: "Developer & Admin",
      phone: "+91 83296 94272",
      email: "sachinkatkar@example.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWehiFqtbEHfGoYIyQQXp5mB6nlxT33tBnJWe31bUmg&s=10",
      theme: "from-blue-500 to-emerald-500",
      badgeColor: "bg-emerald-100 text-emerald-800",
      hoverColor: "hover:border-emerald-400 hover:shadow-emerald-500/10"
    },
    {
      name: "Youraj Mapari",
      role: "Community Coordinator",
      phone: "+91 87670 33308",
      email: "yourajmapari@example.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k2pVgYAws7Hv3H22tib2ZieSROE39n7B7Xw4UDnxXg&s=10",
      theme: "from-indigo-500 to-purple-500",
      badgeColor: "bg-purple-100 text-purple-800",
      hoverColor: "hover:border-purple-400 hover:shadow-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 pt-28 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Decorative Background Glowing Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-blue-500/20 mb-3">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Connect With Our Team</h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            Have questions about Ekta Mandal Narayanpur? Reach out to us directly anytime.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border-2 border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${member.hoverColor}`}
            >
              {/* Colorful linear ring around the profile image */}
              <div className={`w-28 h-28 rounded-full p-1 bg-linear-to-tr ${member.theme} shadow-lg mb-6`}>
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">{member.name}</h3>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full my-2 ${member.badgeColor}`}>
                {member.role}
              </span>
              
              <div className="w-full space-y-3 mt-4">
                <a 
                  href={`tel:${member.phone}`} 
                  className="flex items-center justify-center space-x-3 w-full py-3.5 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-2xl font-semibold text-gray-700 transition-all shadow-sm"
                >
                  <span className="text-lg">📞</span> <span>{member.phone}</span>
                </a>
                <a 
                  href={`mailto:${member.email}`} 
                  className="flex items-center justify-center space-x-3 w-full py-3.5 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-2xl font-semibold text-gray-700 transition-all shadow-sm"
                >
                  <span className="text-lg">✉️</span> <span>Send Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Office Location Bar with Vibrant linear */}
        <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
              Headquarters
            </span>
            <h4 className="text-2xl font-bold mt-2 mb-1">Visit Our Location</h4>
            <p className="text-gray-300">Narayanpur, Maharashtra, India</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/ck2ddo5DQGai6m3Z6" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Get Directions 📍
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;