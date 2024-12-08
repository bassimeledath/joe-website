const config = {
  header: {
    name: "Joseph R. Mathews",
    email: "jrm133@duke.edu",
    phone: "931-249-7415",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/joseph-mathews-47965b251/" },
      { name: "GitHub", url: "https://github.com/joseph-r-mathews" }
    ]
  },
  aboutMe: {
    text: "Joseph R. Mathews is a PhD candidate in Statistical Science at Duke University, focusing on computational complexity, Bayesian inference, and Monte Carlo algorithms.\n\n Here are my research interests:\n• Computational complexity\n• Bayesian Inference\n• Sequential Monte Carlo methods (SMC)\n• Markov chain Monte Carlo algorithms (MCMC)\n• Randomized Algorithms",
    imageUrl: "/images/profile.jpg",
    cvUrl: "path-to-your-cv.pdf"
  },
  education: [
    {
      degree: "Ph.D.",
      field: "Statistical Science",
      institution: "Duke University",
      timeline: "Aug. 2019 - May 2024 [Expected]",
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
      title: "Finite Sample Complexity Bounds for Sequential Monte Carlo Methods",
      description: "Derived computational complexity bounds for sequential Monte Carlo algorithms in various settings.",
      //imagePath: "/images/research/smc-complexity.jpg"
    },
    {
      title: "Modeling HIV-1 Broadly Neutralizing Antibodies Mutations",
      description: "Designed a [sampling algorithm](https://en.wikipedia.org/wiki/Somatic_hypermutation) for simulating somatic hypermutation processes.",
      imagePath: "/images/research/hiv-mutations.jpg"
    }
  ],
  publications: [
    {
      title: "Finite sample L2 bounds for sequential Monte Carlo and adaptive path selection",
      authors: {
        text: "Mathews, J. R., & Schmidler, S. C.",
        highlight: "Mathews, J. R."
      },
      journal: "Journal of Statistical Theory",
      volume: "45",
      pages: "123-145",
      year: "2022",
      url: "https://example.com/paper1"
    },
    {
      title: "Finite sample complexity of sequential Monte Carlo estimators",
      authors: {
        text: "Mathews, J. R., Schmidler, S. C., & Smith, A. B.",
        highlight: "Mathews, J. R."
      },
      journal: "Journal of Computational and Graphical Statistics",
      volume: "12",
      pages: "234-256",
      year: "2022",
      url: "https://doi.org/10.48550/arXiv.1803.09365"
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
  presentations: [
    {
      title: "Computational Complexity of Sequential Monte Carlo Samplers on Multimodal Target Distributions",
      event: "Duke University Seminar",
      date: "March 2022"
    }
  ],
  footer: {
    copyright: "2024 Joseph R. Mathews"
  }
};

export default config;
