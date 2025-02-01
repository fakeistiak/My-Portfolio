const Skill=({ skill })=> {
    return (
      <div
        className="rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
        data-aos="fade-up"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4">
          {skill.component ? (
            skill.component
          ) : (
            <img className="w-full h-full object-contain" src={skill.src || "/placeholder.svg"} alt={skill.name} />
          )}
        </div>
        <span className="text-white text-sm sm:text-base font-medium text-center">{skill.name}</span>
      </div>
    )
  }
  
  export default Skill;
  
  