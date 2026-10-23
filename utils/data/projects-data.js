export const projects = [
  {
    id: "project-a",
    category: "applied",
    title: "Yield Vision",
    image: "/project/yv.png",
    shortDescription:
      "YieldVision is an AI-powered agriculture platform that helps farmers predict crop yields, monitor crop health, and access precision farming insights using satellite data and machine learning.",
    longDescription:
      "YieldVision leverages machine learning, satellite imagery, and modern web technology to help farmers and stakeholders make smarter agricultural decisions. The platform offers accurate crop yield predictions, real-time crop health monitoring, crop recommendation insights, weather forecasts, and access to government schemes. Built by Team TechHarvesters, it combines React, Node.js, Express, Python, FastAPI, Streamlit, MongoDB, and Google Drive integration to deliver an intelligent and user-friendly precision farming experience. It also supports multilingual access in English and Hindi and includes secure authentication, downloadable reports, and interactive dashboards.",
    tools: ["React", "Node.js", "Express", "Python", "FastAPI", "Streamlit", "MongoDB", "Socket.IO", "Google Drive API"],
    Sponsor:"Rotten Grapes Pvt. Ltd.",
    sponsorshipCertificate: "/Project Sponsorship/Yield Vission sponsorship.pdf",
    github: "https://github.com/ShreyashIngle/YieldVision",
    demoVideo: "https://www.youtube.com/watch?v=_ZcWCp_xLI4",
    blogLink: "https://medium.com/@parth.bramhecha007/intelligent-farming-with-ai-making-smarter-predictions-through-satellite-images-b891a78a837f",
  },
  {
    id: "project-b",
    category: "applied",
    title: "Prep Genius",
    image: "/project/prepgenius.jpg",
    shortDescription:
      "PrepGenius is an AI-powered career preparation platform that helps users improve resumes, boost ATS compatibility, and practice interviews with smart, personalized tools.",
    longDescription:
      "PrepGenius is a comprehensive career preparation platform designed to support students, recent graduates, and professionals in their job search journey. It offers AI-driven resume analysis, ATS scoring, technical MCQ generation, interview bot practice, and YouTube-based learning resources to help users strengthen their skills and improve their chances of landing the right opportunities. Built with modern technologies such as FastAPI, Node.js, MongoDB, and Google Gemini AI, PrepGenius delivers a smart, personalized, and efficient experience for career growth.",
    tools: ["FastAPI", "Node.js", "Express", "MongoDB", "Google Gemini AI", "JWT", "PyPDF2", "Pydantic"],
    Sponsor:"",
    sponsorshipCertificate: "/Project Sponsorship/Prepgenius_sponsorship.pdf",
    github: "https://github.com/SmitDeshmukh16/PrepGenius",
    demoVideo: "https://www.youtube.com/watch?v=Y-q9jTLiRuo",
  },
{
    id: "project-c",
    category: "applied",
    title: "Diabetic Retinopathy Detection",
    image: "/project/DR.jpeg",
    shortDescription:
      "A deep learning-powered system for early diabetic retinopathy screening that classifies retinal fundus images to support faster and more scalable eye-care screening.",
    longDescription:
      "This project focuses on revolutionizing diabetic retinopathy screening through deep learning. It compares multiple architectures, including a custom CNN, ResNet50 with attention, Vision Transformer, and DenseNet121, to detect diabetic retinopathy from retinal fundus images. The model pipeline includes image preprocessing, augmentation, class imbalance handling using SMOTE, and training with weighted cross-entropy. DenseNet121 achieved strong performance with 91% validation accuracy and a kappa score of 0.7902, showing the potential of AI to assist clinicians in early diagnosis and reduce preventable vision loss. The work emphasizes explainability, robust medical imaging workflows, and future deployment for scalable screening in underserved communities.",
    tools: ["Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NumPy", "Pandas", "Matplotlib", "SMOTE", "DenseNet121"],
    Sponsor:"Vardhaman Eye Hosptipal",
    sponsorshipCertificate: "/Project Sponsorship/DRdetector_ Sponsorship.pdf",
    github: "https://github.com/PARTH-BRAMHECHA/diabetic-retinopathy",
    demoVideo: "",
    deployedLink: "https://dr-detector.vercel.app/",
    blogLink: "https://medium.com/@parth.bramhecha007/revolutionizing-diabetic-retinopathy-screening-how-deep-learning-is-saving-sight-one-retina-at-a-212b6a2f3587",
  },
  {
    id: "project-e",
    title: "Multi-Intent AI Travel Assistant",
    image: "/project/AI-Travel-assist.png",
    shortDescription:
      "An agentic travel assistant for Singapore public transport that uses LangGraph, LLM intent extraction, and real-time transport context to answer travel-related queries.",
    longDescription:
      "This project implements an agentic workflow using LangGraph to answer user queries about Singapore's public transport. The assistant is context-aware and considers real-time weather, traffic incidents, peak-hour logic, and disruptions before generating a response. It uses a state-based graph architecture where an LLM extracts intent and entities, deterministic Python functions handle the transport API calls and time logic, and a final node synthesizes the data into a natural language answer. The design emphasizes modularity, easy debugging, and future expansion for production deployment through FastAPI, Redis caching, and async processing.",
    tools: ["Python", "LangGraph", "Groq", "FastAPI", "Redis", "LTA DataMall", "Data.gov.sg", "OpenAI-style LLM"],
    Sponsor:"",
    github: "https://github.com/PARTH-BRAMHECHA/SG_travel_assistant",
    demoVideo: "",
    deployedLink: "https://sgtravel-assistant.vercel.app/",
  },
 {
    id: "project-d",
    category: "applied",
    title: "OCR-ID-Card-Reader",
    image: "/project/ocr.jpg",
    shortDescription:
      "A Flask-based document scanner web app that extracts Aadhaar and PAN card details from uploaded images using OCR.Space and regex-based parsing.",
    longDescription:
      "This project is a lightweight Flask web application designed to extract structured information from Aadhaar and PAN card images using OCR.Space API. Users can upload JPG, JPEG, or PNG files, and the app validates the format before sending the image for OCR processing. It then applies regex and string-matching logic to extract details such as name, Aadhaar number, PAN number, father's name, and date of birth. The interface is simple and user-friendly, and the app provides clear error messages for unsupported formats or invalid documents. It is built with Flask, Requests, python-dotenv, and Werkzeug, making it a practical solution for fast document digitization and verification.",
    tools: ["Flask", "Python", "OCR.Space API", "Requests", "python-dotenv", "Werkzeug"],
    Sponsor:"",
    github: "https://github.com/PARTH-BRAMHECHA/ocr-id-card-parser",
    demoVideo: "",
  },
];
