const config = {
  header: {
    name: "Joseph R. Mathews",
    email: "jrm133@duke.edu",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/joseph-mathews-47965b251/" },
      { name: "GitHub", url: "https://github.com/joseph-r-mathews" }
    ]
  },
  aboutMe: {
    text: "I'm a PhD candidate in Statistical Science at Duke University, focusing on computational complexity, Bayesian inference, Monte Carlo algorithms, and computational vaccine design problems.\n\n Here are my research interests:\n• Computational complexity\n• Bayesian Inference\n• Sequential Monte Carlo methods (SMC)\n• Markov chain Monte Carlo algorithms (MCMC)\n• Randomized Algorithms",
    imageUrl: "/images/profile.jpg",
    cvUrl: "/cv/cv.pdf"
  },
  education: [
    {
      degree: "Ph.D.",
      field: "Statistical Science",
      institution: "Duke University",
      timeline: "Aug. 2019 - May 2025 [Expected]",
      advisor: "Scott C. Schmidler",
      dissertation: "Computational Complexity of Sequential Monte Carlo Algorithms"
    },
    {
      degree: "B.S.",
      field: "Mathematics",
      institution: "Austin Peay State University",
      timeline: "Aug. 2014 - May 2019"
    }
  ],
  researchExperience: [
    {
      title: "Sequential Monte Carlo Algorithms",
      description: "I am interested in Sequential Monte Carlo (SMC) algorithms and their theoretical foundations. My previous work includes deriving finite sample complexity bounds for SMC methods in [general settings](https://projecteuclid.org/journals/annals-of-statistics/volume-51/issue-3/Finite-sample-complexity-of-sequential-Monte-Carlo-estimators/10.1214/23-AOS2295.short) and for sampling from [multimodal probability distributions](https://projecteuclid.org/journals/annals-of-applied-probability/volume-34/issue-1B/Finite-sample-complexity-of-sequential-Monte-Carlo-estimators-on-multimodal/10.1214/23-AAP1989.short).",
      imagePath: "/images/research/Final.png"
    }
  /*   , */
 /*    {
      title: "Modeling HIV-1 Broadly Neutralizing Antibodies Mutations",
      description: "Under Construction!",
      imagePath: "/images/research/SOSIP_pyblue_hifi.png"
    } */
  ],
  publications: [
    {
      title: "Finite sample complexity of sequential Monte Carlo estimators on multimodal target distributions",
      authors: {
        text: "Mathews, J., & Schmidler, S. C.",
        highlight: "Mathews, J."
      },
      journal: "Annals of Applied Probability",
      volume: "34(1B)",
      pages: "1199-1223",
      year: "2024",
      url: "https://doi.org/10.1214/23-AAP1989"
    },
    {
      title: "Finite sample complexity of sequential Monte Carlo estimators",
      authors: {
        text: "Marion, J., Mathews, J., & Schmidler, S. C.",
        highlight: "Mathews, J."
      },
      journal: "Annals of Statistics",
      volume: "51(3)",
      pages: "1357-1375",
      year: "2023",
      url: "https://doi.org/10.1214/23-AOS2295"
    }
  ],
  teachingExperience: [
    {
      role: "Teacher's Assistant",
      course: "Bayesian Methods and Modern Statistics (Graduate)",
      timeline: "Aug. 2022 - Dec. 2022",
      institution: "Duke University",
      details: ["Led lab sections", "Helped with R and Stan programming", "Graded reports"]
    }
  ],
  // presentations: [
  //   {
  //     title: "Computational Complexity of Sequential Monte Carlo Samplers on Multimodal Target Distributions",
  //     event: "Duke University Seminar",
  //     date: "September 2024"
  //   }
  // ],
  footer: {
    copyright: "2024 Joseph R. Mathews"
  }
};

export default config;
