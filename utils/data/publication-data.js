export const publications = [
  {
    id: "pub-10",
    title: "IndicGuard: A Multilingual Safety Guardrail Model for Indic Language LLM Alignment",
    image: "/publications/fine_tune.png",
    shortDescription:
      "Introduces IndicGuard, a multilingual safety dataset and guardrail model for Indic languages, enabling culturally-aware LLM alignment through adversarial data generation, code-mixed augmentation, and multilingual fine-tuning.",
    longDescription: `
IndicGuard presents a comprehensive framework for building culturally-aware safety guardrails for Large Language Models across Indic languages.

The work addresses the lack of multilingual safety resources by introducing a high-quality benchmark dataset and guard models that capture region-specific cultural norms, code-mixed communication, and adversarial prompting.

Key Contributions:
• Creation of the IndicGuard multilingual safety dataset
• Translation and reconstruction pipeline for multiple Indic languages
• Culture-aware augmentation using LLMs
• Human-in-the-loop validation for high-quality annotations
• Support for adversarial prompts, jailbreak attacks, and code-mixed inputs
• Fine-tuning multilingual safety guard models for content moderation

The proposed models are evaluated on standard safety benchmarks along with culturally grounded Indic datasets, demonstrating improved robustness and multilingual safety alignment. IndicGuard provides an open foundation for developing safer and more inclusive LLMs for Indian languages and multilingual applications.
`,
    date: "Arxiv Preprint,2026",
    pdfLink: "",
    paperLink: "https://arxiv.org/abs/2606.22841",
    codeLink: "https://huggingface.co/l3cube-pune/IndicGuard",
    datasetLink: "https://huggingface.co/datasets/l3cube-pune/IndicGuard",
  },
  {
    id: "pub-1",
    title: "XAI for Financial Risk Modeling",
    image: "/publications/publication1.png",
    shortDescription:
      "A Quantum Inspired Causal XAI framework enhances Counterparty Credit Risk prediction by combining quantum embeddings, causal learning, and concept-level explainability for accurate and interpretable insights.",
    longDescription: `
Counterparty Credit Risk (CCR) in networked financial systems requires solutions that balance predictive accuracy with interpretability. Standard machine learning models, though effective in prediction, often lack transparency and fail to capture causal relationships.

We propose a Quantum Inspired Causal Explainable AI (XAI) framework integrating:
• Random Fourier-based quantum embeddings  
• Causal graph learning  
• Concept-level explainability via TCAV  

A Random Forest classifier, trained on a SMOTE-resampled subset of the Home Credit Default Risk dataset, is evaluated under simulated macroeconomic stress conditions.

The approach reveals interpretable risk transmission channels, preserves predictive robustness, and addresses key shortcomings of prior XAI methods. This provides regulators and institutions with causally grounded, actionable insights for improved CCR assessment.
`,
    date: "ICCTRDA- Nov 2025, Springer",
    pdfLink: "/publication_pdf/xai_paper.pdf",
    paperLink: "",
    codeLink: "https://github.com/PARTH-BRAMHECHA/quantum-causal-xai",
    datasetLink: "",
    certificateLink: "/publication_certificate/Parth_Xai.pdf",
  },
  {
    id: "pub-2",
    title: "Driver Fatigue Detection",
    image: "/publications/publication4.png",
    shortDescription:
      "A hybrid decision-making system using deep learning and geometric features for more reliable fatigue detection.",
    longDescription: `
This work presents a real-time hybrid driver fatigue detection system designed for deployment on resource-constrained edge devices such as the Raspberry Pi. The system combines the strengths of lightweight CNN-based eye state classification with geometric facial landmark analysis for yawn detection, enabling reliable and efficient multi-modal fatigue assessment.

The pipeline integrates facial landmark extraction, CNN-driven feature learning, geometric metrics (EAR, MAR, and head orientation), and a fusion-based decision engine to significantly reduce false positives while maintaining high sensitivity in real-world conditions.

Training was performed using large-scale eye and yawn datasets (~500k images) with extensive preprocessing and augmentation to ensure robustness across diverse lighting and environmental scenarios. The models were optimized for edge inference, achieving 60 FPS on Raspberry Pi 4B with less than 80% system utilization.

Performance:
• Eye state detection accuracy: 98.34%  
• Yawn detection accuracy: 96.84%  
• Hybrid model: Improved stability and reduced false alarms compared to single-modality methods  

The resulting system demonstrates strong applicability for Intelligent Transportation Systems (ITS) and Advanced Driver Assistance Systems (ADAS), delivering dependable fatigue monitoring suitable for real-time driver safety applications.
`,
    date: "ICAIN-Nov 2025, Springer",
    pdfLink: "/publication_pdf/Driver_fatigue.pdf",
    paperLink: "",
    codeLink: "https://github.com/parthmanekar25/Driver_Fatigue_Detection_Analysis",
    datasetLink: "",
    certificateLink: "/publication_certificate/Parth_driver_fatigue_certificate.pdf",
  },
  {
    id: "pub-8",
    title: "BharatGather: A Culturally-Informed Benchmark Dataset",
    image: "/publications/bharatgather.jpeg",
    shortDescription:
      "Introduces BharatGather, a large-scale benchmark dataset for misinformation detection in Indian public events, curated from fact-checking platforms, YouTube transcripts, and LLM-generated adversarial samples.",
    longDescription: `
This work introduces BharatGather, a culturally-informed benchmark dataset designed for misinformation detection during Indian public events such as religious festivals, political rallies, and cultural gatherings.

Key contributions include:
• Curated dataset containing 14,646 records
• Multi-source collection from AltNews, BoomLive, Factly, The Quint, NewsMeter, and YouTube
• Event-aware metadata for culturally grounded misinformation research
• LLM-based adversarial augmentation using Qwen3-32B
• Standardized schema for benchmarking fake news detection systems

The dataset provides strong baselines using BERT models and establishes an open benchmark for multilingual and culturally-aware misinformation research in the Indian context.
`,
    date: "Arxiv Preprint,2026",
    pdfLink: "/publication_pdf/Fake_news_dataset.pdf",
    paperLink: "https://arxiv.org/abs/2609.02895",
    codeLink: "",
    datasetLink: "https://huggingface.co/datasets/l3cube-pune/BharatGather",
  },
  {
    id: "pub-9",
    title: "Fake News Detection in Indic Context using RAG and Contrastive Learning",
    image: "/publications/rag based.png",
    shortDescription:
      "Proposes complementary Retrieval-Augmented Generation (RAG) and Contrastive Learning (CLFD) architectures for evidence-grounded fake news detection in low-resource Indic settings.",
    longDescription: `
This paper presents two complementary architectures for fake news detection tailored to low-resource Indic languages.

Architecture 1: Retrieval-Augmented Generation (RAG)
• Evidence-grounded fact verification
• ChromaDB vector database
• Structured Claim-Fact-Evidence extraction
• Explainable predictions with source attribution

Architecture 2: Contrastive Learning for Fake News Detection (CLFD)
• Dual-encoder architecture using RoBERTa and BERT
• Cross-attention bridge for semantic and stylistic reasoning
• Curriculum learning with progressively difficult adversarial samples
• Triplet loss combined with classification loss

Key Contributions:
• Novel CLFD architecture for misinformation detection
• Retrieval-grounded explainable AI pipeline
• Adversarial LLM-based data augmentation
• Designed specifically for multilingual Indic misinformation

Together, the proposed approaches provide accurate, interpretable, and robust fake news detection for culturally diverse and low-resource environments.
`,
    date: "Accepted: PACLIC, 2026",
    pdfLink: "/publication_pdf/Fake_news_model.pdf",
    paperLink: "",
    codeLink: "",
    datasetLink: "https://huggingface.co/datasets/l3cube-pune/BharatGather",
  },
  {
    id: "pub-3",
    title: "Review on Federated Learning",
    image: "/publications/publication6.png",
    shortDescription:
      "A review of Federated Learning, focusing on privacy-preserving distributed model training and challenges such as heterogeneity and security.",
    longDescription: `
    Federated Learning (FL) is a decentralized machine learning paradigm that enables collaborative model training without transferring raw data, making it a foundational approach for privacy-preserving AI.  
    This review provides a structured and comprehensive overview of FL, covering its core architecture, communication workflows, and the challenges posed by non-IID data and device heterogeneity.

    The survey examines key research areas including privacy and security threats, optimization techniques for large-scale deployments, personalization methods for diverse client distributions, and robustness against adversarial attacks.  
    It further highlights emerging directions such as federated multimodal learning, federated fine-tuning of large language models, cross-silo and cross-device FL, and integrations with edge computing, blockchain, and quantum technologies.

    This review covers: 
    • Core architecture of FL 
    • Data distribution and device heterogeneity 
    • Privacy and security threats 
    • Optimization challenges 
    • Research trends and future directions
    
    With growing adoption across healthcare, finance, IoT, and autonomous systems, FL continues to evolve into a scalable, secure, and future-ready framework for distributed intelligence.
  `,
    date: "ICEI-Jan 2026,IEEE",
    pdfLink: "/publication_pdf/federated_paper.pdf",
    paperLink: "",
    codeLink: "",
    datasetLink: "",
    certificateLink: "/publication_certificate/federarted_certificate.pdf",
  },
  {
    id: "pub-4",
    title: "Data Processing & Mining for Customer Segmentation",
    image: "/publications/publication5.png",
    shortDescription:
      "Explores how data preprocessing, transformation, and mining combined with the RFM model improve customer segmentation.",
    longDescription: `
    This work presents a structured data processing and mining framework built around the RFM (Recency, Frequency, Monetary) model to achieve high-quality customer segmentation. The approach integrates end-to-end preprocessing—including data cleaning, standardization, transformation, and missing-value handling—with analytical scoring techniques to generate reliable customer profiles.

    Using transactional data, RFM metrics are computed and converted into ranked scores, enabling objective customer evaluation. These scores are further leveraged for pattern discovery using data mining techniques, revealing natural customer clusters and behavior-based segments such as Champions, Loyal Customers, Potential Loyalists, and At-Risk groups.
   
    The study highlights how combining classical analytics with disciplined preprocessing significantly improves segmentation accuracy, enhances marketing decision-making, and supports customer-centric business strategies. The methodology demonstrates a practical and scalable workflow suitable for real-world CRM and business intelligence applications.
    `,
    date: "Jun 2025,INDJCST",
    pdfLink: "",
    paperLink: "https://www.indjcst.com/archives/paper-details?paperid=185&papertitle=data-processing-and-mining-for-customer-segmentation",
    codeLink: "https://github.com/PARTH-BRAMHECHA/customer-segmentation",
    datasetLink: "",
    certificateLink: "/publication_certificate/customer segmentation.pdf",
  },
  {
    id: "pub-5",
    title: "Fake News Detection in the Age of LLMs",
    image: "/publications/publication7.png",
    shortDescription:
      "A comprehensive survey covering classical, deep learning, graph-based, and LLM-driven fake news detection methods, highlighting challenges, datasets, trends, and future research directions.",
    longDescription: `
This paper presents an exhaustive review of misinformation and fake news detection methods across machine learning, deep learning, graph neural networks, multimodal models, and large language models (LLMs).

Key areas explored:
• Classical ML models such as SVM, Naive Bayes, Decision Trees  
• Deep learning architectures including CNNs, RNNs, hybrid and dual-stream networks  
• Graph-based models capturing relational structure in social networks  
• Multilingual & low-resource fake news detection using LLMs  
• Rumor detection, propagation modeling, and early detection  
• User-centric factors influencing misinformation spread  

Major challenges identified:
• Lack of novelty and redundancy in literature  
• Scalability issues in real-time high-volume environments  
• Dataset limitations (language bias, outdated corpora)  
• Semantic challenges such as detecting satire and AI-generated text  
• Early detection with limited propagation signals  
• Cross-domain generalization and adversarial robustness  
• Ethical concerns regarding fairness, bias, and censorship  

Future directives emphasize multilingual corpora, efficient architectures, context-aware models, adversarial robustness, multimodal intelligence, and responsible governance.

This survey highlights the need for interpretable, scalable, and culturally adaptable misinformation detection systems.
`,
    date: "Dec 2025",
    pdfLink: "/publication_pdf/Fake_news_review.pdf",
    paperLink: "",
    codeLink: "",
    datasetLink: "",
    certificateLink: "/publication_certificate/fake_news_review_certificate.pdf",
  },
  {
    id: "pub-7",
    title: "Credit Card Fraud Detection",
    image: "/publications/publication3.png",
    shortDescription:
      "A comparative study on credit card fraud detection using ML models including XGBoost, Logistic Regression, Decision Tree, and Random Forest, with detailed performance evaluation.",
    longDescription: `
This paper performs a complete comparative study of fraud detection models on highly imbalanced credit card transaction data.

Algorithms evaluated:
• XGBoost  
• Logistic Regression  
• Decision Tree  
• Random Forest  

Key highlights:
• Detailed preprocessing pipeline  
• Evaluation using precision, recall, AUC, F1-score  
• Discussion on imbalance-handling techniques  
• Performance comparison across real-world scenarios  

This study demonstrates how ensemble models outperform classical approaches for high-risk fraud detection environments.
`,
    date: "Feb 2025,PIJET",
    pdfLink: "",
    paperLink: "https://www.pijet.org/papers/volume-2%20issue-1/Final%20Revised%20Paper_Pijet-14_Done.pdf",
    codeLink: "https://github.com/PARTH-BRAMHECHA/credit-card-fraud-detection",
    datasetLink: "",
  },
];
