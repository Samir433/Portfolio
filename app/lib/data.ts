import { Github, Linkedin, Code, Database, Brain, Cloud, Terminal, Monitor, MessageSquare, Video, FileText, Car } from "lucide-react";

export const DATA = {
  name: "Samir Atpadkar",
  role: "Data Scientist | Generative AI Engineer",
  tagline: "Building scalable AI solutions, LLM pipelines, and production-grade data systems.",
  summary: "Data Scientist and Generative AI Engineer with a strong foundation in building production-ready applications using LLMs, NLP, and Deep Learning. Experienced in deploying scalable solutions on Azure and optimizing ML pipelines. Passionate about solving complex problems through code, with a track record in competitive programming and hackathons.",
  email: "samir.atpadkar@gmail.com", // Placeholder inferred or standard
  social: {
    github: "https://github.com/Samir433",
    linkedin: "https://www.linkedin.com/in/samir-atpadkar-199233235/",
    kaggle: "https://www.kaggle.com/samiratpadkar",
    leetcode: "https://leetcode.com/u/Samir04/",
    codechef: "https://www.codechef.com/users/samir433",
  },
  skills: [
    {
      category: "Programming",
      items: ["Python", "Java", "SQL"],
      icon: Terminal,
    },
    {
      category: "Machine Learning & AI",
      items: ["Machine Learning", "Deep Learning", "NLP", "CNN", "RNN", "BERT", "GPT", "LLMs"],
      icon: Brain,
    },
    {
      category: "Generative AI",
      items: ["OpenAI API", "LangChain", "LangGraph", "Transformers"],
      icon: MessageSquare,
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure (AI-102)", "APIs", "Deployment", "Scalability"],
      icon: Cloud,
    },
    {
      category: "Data & Visualization",
      items: ["Pandas", "Power BI", "Tableau"],
      icon: Monitor,
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
      icon: Database,
    },
  ],
  experience: [
    {
      company: "Rudder Analytics",
      role: "Associate Analyst (AI Engineer)",
      period: "Jan 2025 – Present",
      description: "Designing Agentic AI systems using LangChain & LangGraph. Contributed to Fulfil SQL Agent with critique nodes and performed Demand Planning using SARIMAX on GCP data. Previously trained on advanced analytics and AI methodologies.",
    },
    {
      company: "Outlier AI",
      role: "LLM Trainer & Senior Reviewer",
      period: "Jan 2025 – Jul 2025",
      description: "Evaluated and enhanced LLM performance across Python, SQL, and ML/DL, ensuring technical accuracy and ethical AI standards.",
    },
    {
        company: "Ind. Meteorological Dept.",
        role: "Project Intern",
        period: "Aug 2024 – Jun 2025",
        description: "Analyzed 30 years of radiation data. Selected Prophet model for accurate time series forecasting after experimenting with LSTM and SVM.",
    },
    {
      company: "TechEnhance",
      role: "AI/ML Intern",
      period: "Oct 2024 – Nov 2024",
      description: "Built a RAG application using OpenAI & AstraDB, deployed via Azure App Service.",
    }
  ],
  projects: [
    {
      title: "Hiring Assistant Chatbot",
      description: "AI-powered interview preparation chatbot using Llama-3.3-70B. Generates custom questions based on candidate experience (0-3+ years) and tech stack. Captures answers and provides review summaries.",
      tech: ["Llama-3.3-70B", "Azure", "NLP", "Python"],
      github: "https://github.com/Samir433/Hiring_Assistant_Bot",
      icon: MessageSquare,
      impact: "Streamlined interview prep with scalable, experience-based logic."
    },
    {
      title: "WhatsApp Chat Analysis",
      description: "Analytical tool for visualizing WhatsApp chat data. Provides insights on individual and group message frequency, activity patterns, and engagement.",
      tech: ["Python", "Pandas", "Data Visualization"],
      github: "https://github.com/Samir433/whatsapp-chat-analysis",
      icon: MessageSquare,
      impact: "Empowered users to derive actionable insights from personal data."
    },
    {
      title: "YouTube RAG Chatbot",
      description: "Retrieval-Augmented Generation system allowing users to chat with YouTube video content. Efficient context retrieval for accurate answers.",
      tech: ["RAG", "LLM", "Vector DB"],
      github: "https://github.com/Samir433/YouTubeRAGChatbot",
      icon: Video,
      impact: "Enhanced information accessibility from video content."
    },
    {
      title: "PDF Chatbot",
      description: "Conversational AI for querying PDF documents using OpenAI API. Supports real-time Q&A over uploaded documents.",
      tech: ["OpenAI API", "React", "Python"],
      github: "https://github.com/Samir433/PDF_QA_USING_OPENAI_API",
      icon: FileText,
      impact: "Improved document analysis efficiency."
    },
    {
      title: "Car Price Prediction",
      description: "Machine Learning regression system to predict car prices based on features. Includes comprehensive feature engineering and model evaluation.",
      tech: ["Machine Learning", "Regression", "Scikit-learn"],
      github: "https://github.com/Samir433/Car_Price_Prediction",
      icon: Car,
      impact: "Accurate price estimation model for market analysis."
    },
  ],
  achievements: [
    "Smart India Hackathon – 3rd Position",
    "400+ LeetCode problems solved",
    "Azure AI & Fundamentals certified",
    "Production-level Azure deployments",
  ]
};
