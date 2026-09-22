// ============================================================================
// AASHISH - PORTFOLIO CONTENT DATA STORE
// Single Source of Truth for all copy, projects, devlogs, and placeholders.
//
// HOW TO EDIT:
// 1. Update any copy or links directly in this file.
// 2. Look for any item marked `isPlaceholder: true` to update placeholders:
//    - LinkedIn URL (in contact)
//    - Research Paper 2 citation/link
//    - Planned project repositories
// 3. To update your resume, drop your 'Aashish S A Resume.pdf' into the /public folder.
// ============================================================================

export interface PlaceholderInfo {
  isPlaceholder?: boolean;
  placeholderLabel?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI/ML" | "Backend & Distributed Systems" | "Automation";
  status: "Live" | "In Progress" | "Planned";
  githubUrl?: string;
  demoUrl?: string;
  colabUrl?: string;
  tags: string[];
  description: string;
  whyItWorks: string;
  architectureDetails?: {
    type: "pipeline" | "tree" | "modules";
    steps?: { step: string; title: string; desc: string; icon?: string }[];
    treeStructure?: string;
    highlights?: string[];
  };
  placeholderNotes?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
}

export interface DevlogEntry {
  id: string;
  title: string;
  date: string;
  topic: string;
  summary: string;
  content: string;
  badge: string;
}

export interface JourneyMilestone {
  stage: string;
  title: string;
  timeframe?: string;
  skills: string[];
  description: string;
  themeConnection: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  topics: string[];
  whatILearned: string;
  link?: string;
  linkText?: string;
  isPlaceholder?: boolean;
}

export interface BeyondCodeItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: "book" | "motorcycle" | "compass";
  items?: string[];
  content: string;
  themeFraming: string;
}

export const PORTFOLIO_DATA = {
  meta: {
    siteTitle: "Aashish | Software Engineer → AI/ML Engineer",
    siteDescription:
      "Software Engineer building toward AI/ML Engineering. Deepening machine learning, Transformers, and GenAI on top of ~3 years shipping production enterprise backend systems.",
    theme: "Understanding how things work",
    positioning: "Software Engineer → AI/ML Engineer",
    availability: "Available for AI/ML & Backend Engineering roles",
  },

  hero: {
    name: "Aashish",
    role: "Software Engineer → AI/ML Engineer",
    tagline: "Software Engineer building toward AI/ML Engineering.",
    positioningParagraph:
      "I work at the intersection of backend engineering and intelligent systems — currently deepening my grasp of machine learning, deep learning, Transformers, and applied GenAI, on top of ~3 years building production automation software.",
    themeQuote: "Theme: Understanding how things work.",
    credibilityBreakdown: "70% technical credibility · 30% personal identity",
    resumeFileName: "Aashish S A Resume.pdf",
    resumeFilePath: "/Aashish S A Resume.pdf",
    githubUrl: "https://github.com/AashishStark",
    stats: [
      { label: "Production Engineering", value: "~3 Years", detail: "AppViewX PKI & Automation" },
      { label: "Core Foundation", value: "Java / Spring / K8s", detail: "Distributed Enterprise APIs" },
      { label: "Transition Focus", value: "PyTorch & GenAI", detail: "RAG, Transformers, Embeddings" },
      { label: "Academic Research", value: "2 Papers", detail: "Plant Pathology & YOLO Vision" },
    ],
  },

  about: {
    leadParagraph:
      "I'm a software engineer with about 3 years of experience, currently at AppViewX as a PKI/Certificate Lifecycle Management Engineer, where I build enterprise integrations (ServiceNow, F5, BlueCat) and customer-facing automation on top of a Certificate Lifecycle Management platform — day-to-day work in Java, Spring Boot, and Kubernetes.",
    transitionParagraph:
      "My interest in AI goes back to college, where I co-authored two research papers applying ML to real-world problems — plant disease recognition and vehicle pollution detection. That early exposure has turned into a deliberate transition: I'm now working through a structured self-study path covering classical ML, deep learning, Transformers, and GenAI/RAG systems, with the goal of moving into GenAI/ML engineering roles.",
    angleParagraph:
      "My angle isn't 'I want to be an AI researcher' — it's that I already know how to ship reliable backend systems, and I'm adding ML/AI depth on top of that foundation so I can build systems that are both technically sound and production-ready.",
    education: {
      college: "Mepco Schlenk Engineering College",
      degree: "B.E. Information Technology",
      duration: "2020 – 2024",
      cgpa: "8.3",
    },
    work: {
      company: "AppViewX",
      role: "PKI / Certificate Lifecycle Management Engineer",
      tenure: "~3 years experience",
      coreStack: ["Java", "Spring Boot", "Spring Security", "Kubernetes", "Docker", "REST APIs"],
      integrations: ["ServiceNow", "F5 BIG-IP", "BlueCat DNS"],
    },
  },

  skills: {
    explanationNote:
      "Recruiters and hiring engineers read this distinction as honesty, not weakness. I combine hard-won production backend reliability with active, rigorous AI/ML systems depth.",
    currentlyWorkingWith: {
      title: "Currently working with",
      badge: "Professional Production Stack",
      description: "Technologies used daily in enterprise production environments to build high-availability backend services and automation pipelines.",
      categories: [
        {
          name: "Backend Core",
          skills: ["Java", "Spring Boot", "Spring Security", "REST APIs"],
        },
        {
          name: "Infrastructure & Orchestration",
          skills: ["Kubernetes", "Docker", "Linux", "Git", "CI/CD"],
        },
        {
          name: "Enterprise Integrations",
          skills: ["ServiceNow", "F5 BIG-IP", "BlueCat DNS", "PKI / Certificate Automation"],
        },
        {
          name: "Databases & Caching",
          skills: ["PostgreSQL", "Redis"],
        },
        {
          name: "Scripting & Tooling",
          skills: ["Python", "Bash", "Shell"],
        },
      ],
    },
    exploring: {
      title: "Learning / building toward",
      badge: "AI/ML Stack in Progress",
      description: "Structured self-study and hands-on implementations covering mathematics, computational graphs, modern architectures, and applied GenAI.",
      categories: [
        {
          name: "Data & Mathematical Compute",
          skills: ["NumPy", "Pandas", "Linear Algebra Intuition", "Multivariable Calculus"],
        },
        {
          name: "Deep Learning Foundations",
          skills: ["PyTorch", "Neural Nets from Scratch", "Backpropagation DAGs", "Optimizers (Adam, SGD)"],
        },
        {
          name: "Classical ML",
          skills: ["scikit-learn", "Supervised Learning", "Unsupervised Clustering", "Feature Pipelines"],
        },
        {
          name: "Transformers & Attention",
          skills: ["Multi-Head Attention", "Causal Masking", "Self vs. Cross Attention", "nn.EmbeddingBag"],
        },
        {
          name: "Modern Applied GenAI & RAG",
          skills: ["LLM Orchestration", "Vector Stores (ChromaDB)", "Chunking Strategies", "Context-Grounded Retrieval"],
        },
      ],
    },
  },

  projects: [
    {
      id: "rag-document-intelligence",
      title: "RAG / Document Intelligence System",
      tagline: "Handwritten notes to cited answers: OCR → Chunking → Vector DB → Grounded Synthesis",
      category: "AI/ML",
      status: "Live",
      githubUrl: "https://github.com/AashishStark/rag-notes-qa",
      demoUrl: "https://rag-notes-qa-production-65e2.up.railway.app",
      tags: ["Python", "FastAPI", "Gemini Vision", "all-MiniLM-L6-v2", "ChromaDB", "Docker", "Railway"],
      description:
        "A full-lifecycle document intelligence pipeline transforming unstructured handwritten exam and lecture notes into verifiable, cited answers. Explicitly engineered to explore why chunking and retrieval strategies work, rather than treating retrieval as a generic black box.",
      whyItWorks:
        "Rather than naive sliding windows, chunking is tuned to 300–500 tokens with a 50-token semantic overlap to balance dense semantic unit preservation against cross-boundary context loss. Sentence-transformers (all-MiniLM-L6-v2) project text into a 384-dimensional hypersphere, queried via cosine similarity in a persistent ChromaDB volume. The synthesis stage prompts Gemini strictly with retrieved top-k context to suppress hallucinations.",
      architectureDetails: {
        type: "pipeline",
        steps: [
          {
            step: "01",
            title: "Handwritten Ingestion",
            desc: "Raw JPG / PNG scans of handwritten notes and study sheets.",
            icon: "FileImage",
          },
          {
            step: "02",
            title: "Vision Transcription",
            desc: "Gemini Vision API transcribes handwriting with OCR confidence scoring.",
            icon: "Eye",
          },
          {
            step: "03",
            title: "Semantic Chunking",
            desc: "300–500 word chunks with ~50-word overlap to preserve complete paragraphs.",
            icon: "Scissors",
          },
          {
            step: "04",
            title: "Vector Embeddings",
            desc: "sentence-transformers (all-MiniLM-L6-v2) generates dense 384d vectors.",
            icon: "Binary",
          },
          {
            step: "05",
            title: "Vector Store",
            desc: "ChromaDB running on persistent storage with HNSW index for fast nearest-neighbors.",
            icon: "Database",
          },
          {
            step: "06",
            title: "Top-K Retrieval",
            desc: "Cosine similarity search retrieves the top-k most relevant grounded passages.",
            icon: "Search",
          },
          {
            step: "07",
            title: "Grounded Generation",
            desc: "Gemini synthesizes context-bound answers with source citation references.",
            icon: "Cpu",
          },
          {
            step: "08",
            title: "FastAPI & Docker",
            desc: "FastAPI service (/query, /health, /metrics) containerized and deployed on Railway.",
            icon: "Server",
          },
        ],
      },
    },
    {
      id: "ag-news-classifier",
      title: "AG News Text Classifier from Scratch",
      tagline: "Lightweight, zero-torchtext NLP pipeline classifying headlines via nn.EmbeddingBag + nn.Linear",
      category: "AI/ML",
      status: "Live",
      githubUrl: "https://github.com/AashishStark/ag-news-text-classifier",
      colabUrl: "https://colab.research.google.com/github/AashishStark/ag-news-text-classifier/blob/main/text_classifier_agnews.ipynb",
      tags: ["PyTorch", "nn.EmbeddingBag", "NLP from Scratch", "Custom Vocab", "Colab"],
      description:
        "A text classifier sorting news headlines and descriptions into 4 topics (World, Sports, Business, Sci/Tech) using the AG News dataset. Built completely from fundamental PyTorch building blocks without depending on legacy torchtext abstractions.",
      whyItWorks:
        "nn.EmbeddingBag computes the sum or mean of embeddings across variable-length text sequences without instantiating intermediate tensor allocations, making memory usage extremely lean and throughput fast on CPU/GPU. The custom tokenizer builds an explicit vocabulary with special tokens (<unk>, <pad>), illustrating how text indexes map to dense geometric representations before feeding into linear classification layers.",
      architectureDetails: {
        type: "modules",
        highlights: [
          "Custom Regex & whitespace tokenizer with frequency-thresholded vocabulary building.",
          "Custom PyTorch Dataset & collate_fn handling dynamic sequence lengths and offset tensors.",
          "nn.EmbeddingBag layer performing on-the-fly pooled representation lookups.",
          "Trained with CrossEntropyLoss and SGD with StepLR learning rate scheduling.",
          "Direct educational precursor to transformer tokenization and embedding tables.",
        ],
      },
    },
    {
      id: "civsaash-construction",
      title: "Enterprise Product for Civil Construction",
      tagline: "Production-grade ERP platform: FRD/HLD/LLD specs, Spring Boot, React + Vite, Dockerized infra",
      category: "Backend & Distributed Systems",
      status: "In Progress",
      githubUrl: "https://github.com/satheesh1501/civsaash-backend",
      demoUrl: "https://github.com/satheesh1501/civsaash-frontend",
      tags: ["Spring Boot", "React", "Vite", "Docker", "Zustand", "PostgreSQL", "Enterprise Architecture"],
      description:
        "A multi-tenant ERP platform designed for civil construction contractors to track project milestones, labor attendance, material requisitions, and subcontractor billing. Built with formal enterprise architectural rigour.",
      whyItWorks:
        "Structured around clean domain-driven separation with full documentation (Functional Requirements FRD, High Level Design HLD, Low Level Design LLD). Backend Spring Boot services use strict layered architecture (Controllers, Services, Repositories, DTOs) backed by PostgreSQL, with React + Vite frontend state handled via lightweight Zustand stores.",
      architectureDetails: {
        type: "tree",
        treeStructure: `docs/
├── README.md                    ← Architecture overview
├── FRD.md                       ← Functional Requirements Document (full)
├── HLD.md                       ← High Level Design
├── LLD.md                       ← Low Level Design (master reference)
│
├── Sprint 1/                    ← Project Setup (Days 1-2)
│   ├── Day1_Backend_Setup.md    ← Spring Boot scaffold guide
│   ├── Day1_Frontend_Setup.md   ← React + Vite scaffold guide
│   └── Day2_Infrastructure_Setup.md ← Docker, Axios, Zustand
├── Sprint 2/                    ← Auth Module (Days 3-7)
├── Sprint 3/                    ← Employee Management (Days 8-12)
├── Sprint 4/                    ← Project & Milestones (Days 13-17)
├── Sprint 5/                    ← Attendance & Geofencing (Days 18-22)
├── Sprint 6/                    ← Subscription & Settings (Days 23-26)
└── Sprint 7/                    ← Dashboard Analytics & Deployment (Days 27-30)`,
      },
    },
    {
      id: "notion-python-automation",
      title: "Notion Python Automation Suite",
      tagline: "Bidirectional workspace synchronization: Extract, backup, and batch-update Notion pages",
      category: "Automation",
      status: "Live",
      githubUrl: "https://github.com/AashishStark/Notion",
      tags: ["Python", "Notion API", "Automation", "JSON Schema", "CLI"],
      description:
        "A modular suite of Python tools connecting directly to the Notion REST API to extract, serialize, back up, and push updates across multiple Notion workspaces — Notes, Reminders, Travel Planner, and a central Document Database.",
      whyItWorks:
        "Implements a consistent symmetric pattern across sub-modules: 'Get Page.py' traverses Notion's nested block tree and serializes content to structured local JSON, while 'Update Page.py' reads local modifications and orchestrates diffed updates back over the API. Eliminates manual documentation chores and ensures offline version control for personal knowledge bases.",
      architectureDetails: {
        type: "tree",
        treeStructure: `.
├── Doc Database for Notion.py       # Shared central document database utilities
├── notion_automation.py             # Core automation entry point / shared helpers
├── photos/                          # Architecture & UI workflow captures
├── Notes/
│   ├── Create Search Database.py    # Searchable index database for notes
│   ├── Get Page.py                  # Page content extraction → JSON
│   └── Update Page.py               # Push JSON updates back to Notion
├── Reminder/
│   ├── Get Page.py / Update Page.py # Reminder syncing
│   ├── notion_reminder_setup.py     # System ID configuration
│   └── reminder.json                # Exported reminder state
└── Travel Planner/
    ├── Get Page.py / Update Page.py # Travel logistics syncing
    └── travel_planner.json          # Itinerary JSON schema`,
      },
    },
    {
      id: "transformer-from-scratch",
      title: "Decoder-Only Transformer from Scratch",
      tagline: "Mathematical realization: Multi-head self-attention, causal masking & residual streams in PyTorch",
      category: "AI/ML",
      status: "Planned",
      tags: ["PyTorch", "Attention", "Tensors", "CUDA", "Mechanistic Intuition"],
      description:
        "A decoder-only Transformer built from pure tensor mathematics to develop an unshakeable mechanical understanding of attention matrices, rotary positional embeddings (RoPE), LayerNorm variants, and feedforward projection blocks.",
      whyItWorks:
        "Building a transformer from scratch demystifies tensor shapes and dimensional routing ($B \\times T \\times C$). Dissecting why scaled dot-product attention divides by $\\sqrt{d_k}$ and how residual streams act as an additive memory bus directly equips an engineer to debug real-world LLM inference bottlenecks.",
      isPlaceholder: false,
    },
    {
      id: "agentic-rag-eval",
      title: "Production RAG Evaluation & Guardrails",
      tagline: "Quantifying retrieval quality: Ragas metrics, context-recall, TruLens hallucination guards",
      category: "AI/ML",
      status: "Planned",
      tags: ["Ragas", "TruLens", "Evaluation", "FastAPI", "Guardrails"],
      description:
        "A testing and observability framework designed to augment the RAG Notes QA system with automated evaluation loops: measuring context relevance, answer groundedness, and faithfulness across prompt variations.",
      whyItWorks:
        "In production AI, you cannot improve what you do not measure. By comparing golden query-response pairs against cosine similarity cutoffs and semantic faithfulness metrics, this project applies software engineering automated test discipline to non-deterministic LLM systems.",
      isPlaceholder: false,
    },
  ] as ProjectItem[],

  aiLab: {
    sectionHeading: "AI Lab",
    subHeading: "Learning in Public // Engineering Devlog",
    leadNote:
      "A running, reverse-chronological log of technical investigations. This devlog captures the first-principles mechanics behind models and algorithms — what separates 'following tutorials' from truly understanding how things work.",
    datasetCallout: {
      title: "Handwritten Placement & ML Notes Dataset",
      description: "Scanned handwritten studies archive used as the primary test corpora for the RAG Notes QA system.",
      url: "https://github.com/AashishStark/rag-notes-qa/tree/main/Dataset/My%20Studies",
    },
    entries: [
      {
        id: "lab-cross-attention",
        title: "How does cross-attention actually work?",
        date: "Sept 2026",
        topic: "Transformers & Attention",
        badge: "Deep Dive",
        summary: "Queries originate from the decoder sequence; Keys and Values originate from the encoder sequence.",
        content:
          "In standard self-attention, Queries, Keys, and Values all stem from the exact same sequence via learned linear projections. In cross-attention (the foundational bridge in encoder-decoder models like the original Transformer or T5), Queries are projected from the decoder sequence, while Keys and Values are projected from the encoder output. This allows each generated token to selectively pull context from the entire encoded representation without ever recomputing encoder states.",
      },
      {
        id: "lab-causal-masking",
        title: "Why does GPT use causal masking?",
        date: "Aug 2026",
        topic: "Autoregressive Generation",
        badge: "Architecture",
        summary: "Masking future tokens prevents the model from looking ahead during training, enforcing valid autoregression.",
        content:
          "Autoregressive language models predict token t+1 conditioned solely on tokens 1 through t. During parallel training on an entire sequence, self-attention would naturally allow token t to attend to token t+1, destroying the learning signal. Causal masking adds an upper-triangular matrix with values set to -inf prior to softmax. Since softmax(-inf) = 0, attention weights to future tokens vanish completely, ensuring valid directional prediction.",
      },
      {
        id: "lab-numpy-attention",
        title: "Implementing attention with NumPy",
        date: "Aug 2026",
        topic: "Mathematics & Compute",
        badge: "Implementation",
        summary: "Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V executed in 6 lines of pure linear algebra.",
        content:
          "Writing scaled dot-product attention in pure NumPy clarifies the role of dimension scaling. As embedding dimension d_k grows large, the dot product Q @ K.T scales proportionally with d_k. Large input magnitudes push the softmax function into saturating regions where exponential derivatives approach zero. Dividing by sqrt(d_k) preserves unit variance, keeping gradient signals alive during backpropagation.",
      },
      {
        id: "lab-bert-vs-gpt",
        title: "BERT vs. GPT — what's actually different?",
        date: "July 2026",
        topic: "Model Paradigms",
        badge: "Comparative",
        summary: "Bidirectional context extraction vs. unidirectional generative synthesis.",
        content:
          "Beyond architectural variations (encoder stack with full self-attention vs. decoder stack with masked causal attention), their core inductive biases stem from their loss functions. BERT's Masked Language Modeling (MLM) allows bidirectional attention over the entire prompt, making it exceptionally powerful for discriminative tasks like classification and NER. GPT's next-token objective trains a pure causal generation engine, naturally suited for synthesis and autoregressive reasoning.",
      },
      {
        id: "lab-backpropagation",
        title: "What is backpropagation actually computing?",
        date: "June 2026",
        topic: "Foundations",
        badge: "First Principles",
        summary: "Recursive chain rule application across a Directed Acyclic Graph of tensor operations.",
        content:
          "Backpropagation is not an opaque black box; it is the systematic, reverse-mode accumulation of Jacobian-vector products across a computational DAG. For any weight matrix W, the gradient dL/dW represents how a infinitesimal change in that parameter shifts the scalar objective loss. Keeping track of intermediate activation tensors during the forward pass is exactly what consumes memory during training, explaining the memory-versus-batch-size trade-off.",
      },
    ] as DevlogEntry[],
  },

  journey: {
    sectionHeading: "Technical Journey",
    subHeading: "Evolutionary Path // From Distributed Systems to Neural Networks",
    leadNote:
      "A structured timeline showing how engineering discipline in backend production systems laid the bedrock for understanding machine learning from the silicon and computational graph up.",
    stages: [
      {
        stage: "01",
        title: "Foundation: Production Backend & Distributed Systems",
        timeframe: "2020 – 2024",
        skills: ["Java", "Spring Boot", "Kubernetes", "Distributed Systems Basics", "DSA in Java", "REST Architecture"],
        description:
          "~3 years building and maintaining enterprise-scale PKI automation platforms at AppViewX. Focused on low-latency REST APIs, transactional integrity, Dockerized container orchestration, and integrations with ServiceNow, F5, and BlueCat.",
        themeConnection:
          "Understanding how an enterprise system handles thousands of concurrent TLS handshakes and automated certificate rotations without downtime.",
      },
      {
        stage: "02",
        title: "Machine Learning: Classical Algorithms & Data Rigour",
        timeframe: "2024",
        skills: ["Python", "NumPy", "Pandas", "scikit-learn", "Supervised Learning", "Unsupervised Clustering"],
        description:
          "Transitioning from high-level backend abstraction to vectorized numerical computation. Refreshing linear algebra, matrix operations, cost function minimization, and building feature extraction pipelines.",
        themeConnection:
          "Seeing that 'machine learning' is fundamentally continuous optimization over statistical distributions rather than opaque heuristics.",
      },
      {
        stage: "03",
        title: "Deep Learning: First Principles & Computational Graphs",
        timeframe: "2025",
        skills: ["PyTorch", "Neural Nets from Scratch", "Backpropagation DAGs", "Gradient Descent", "Loss Landscapes"],
        description:
          "Implementing multi-layer perceptrons from scratch, manually deriving forward and backward passes, and mastering PyTorch tensor operations, autograd engines, and GPU acceleration.",
        themeConnection:
          "Understanding how the calculus chain rule maps to GPU memory allocation and backward tensor traversals.",
      },
      {
        stage: "04",
        title: "Modern AI: Attention, Transformers & GenAI",
        timeframe: "Present",
        skills: ["Transformers", "Multi-Head Attention", "Causal Masking", "LLMs", "RAG Patterns", "ChromaDB"],
        description:
          "Deconstructing transformer architectures, embedding tables, and vector similarity search. Building and shipping end-to-end RAG systems with grounded context synthesis and zero-torchtext NLP classifiers.",
        themeConnection:
          "Understanding why dense geometric embeddings and query-key dot products capture semantic relationships across human language.",
      },
      {
        stage: "05",
        title: "Engineering for AI: Systems, Serving & MLOps",
        timeframe: "Continuous",
        skills: ["FastAPI Model Serving", "Dockerized Inference", "Latency Optimization", "MLOps", "Evaluation Guardrails"],
        description:
          "Connecting AI model capabilities back to production backend excellence: containerized deployment on Railway, health/metric instrumentation, structured evaluation with Ragas/TruLens, and low-latency API design.",
        themeConnection:
          "Closing the loop: bringing the reliability, monitoring, and fault-tolerance of production backend engineering to AI applications.",
      },
    ] as JourneyMilestone[],
  },

  research: {
    sectionHeading: "Research",
    subHeading: "Applied Machine Learning Publications & Exploration",
    intro:
      "During college, I co-authored two applied machine learning papers tackling real-world domain challenges in agricultural pathology and environmental tracking.",
    papers: [
      {
        id: "paper-plant-disease",
        title: "Plant Disease Recognition with Inception-v3, AlexNet & CNN",
        topics: ["Computer Vision", "Convolutional Neural Networks", "Transfer Learning", "Inception-v3", "AlexNet"],
        whatILearned:
          "Developed deep learning models (Inception-v3, AlexNet, CNN) predicting conditions like Cotton Healthy Leaf, Tomato Late Blight, and Cedar Apple Rust. Integrated with automated disease explanation and Google Search reference pipelines.",
        link: "https://github.com/AashishStark/Plant-Disease-with-Inception-v3-Alexnet-CNN",
        linkText: "View GitHub Repository",
        isPlaceholder: false,
      },
      {
        id: "paper-vehicle-pollution",
        title: "Real-Time Vehicle Pollution Detection and Tracking using Iterative Deep Learning and YOLO",
        topics: ["Real-time Object Detection", "YOLOv5", "Deep Learning Tracking", "Iterative Self-Training", "Gemini Vision"],
        whatILearned:
          "Co-authored a feedback-based iterative deep learning framework detecting polluting vehicles from CCTV/surveillance footage using an 8-model ensemble with majority voting. Built a self-training loop with pseudo-labeling (>90% accuracy, 79.5% zero-shot in synthetic rain/fog) paired with YOLOv5 localization and Gemini AI license-plate extraction logged to Firebase.",
        link: "https://github.com/AashishStark/Vehicle-Pollution-Detection",
        linkText: "View GitHub Repository",
        isPlaceholder: false,
      },
    ] as ResearchPaper[],
  },

  beyondCode: {
    sectionHeading: "Beyond Code",
    subHeading: "Curiosity & Mechanical Systems in the Physical World",
    intro: "The same underlying curiosity that drives my engineering career extends to everything I do outside the editor.",
    items: [
      {
        id: "beyond-books",
        title: "Books",
        subtitle: "I read worlds instead of building them.",
        iconName: "book",
        items: ["Harry Potter", "A Song of Ice and Fire", "Malazan Book of the Fallen", "The Wheel of Time"],
        content:
          "I am drawn to sweeping epic fantasy sagas governed by intricate, internally consistent world mechanics, hard magic systems, and multi-threaded political storylines.",
        themeFraming:
          "Analyzing how an author constructs an immense fictional world with hundreds of characters without violating internal consistency is the storytelling equivalent of understanding complex distributed system architectures.",
      },
      {
        id: "beyond-motorcycles",
        title: "Motorcycles",
        subtitle: "Mechanical design & engine dynamics.",
        iconName: "motorcycle",
        items: ["Neo-Retro Aesthetics", "Four-Stroke Mechanics", "Chassis Dynamics", "Preventive Maintenance"],
        content:
          "A passionate interest in neo-retro motorcycles and physical machine design. Spending time understanding four-stroke combustion cycles, gear ratios, valve clearances, and throttle responsiveness.",
        themeFraming:
          "Understanding an internal combustion engine scratches the exact same itch as understanding a software system: mechanical telemetry, thermodynamics, and knowing precisely what happens when you twist the throttle.",
      },
      {
        id: "beyond-travel",
        title: "Travel",
        subtitle: "Slow, unstructured exploration.",
        iconName: "compass",
        items: ["Jibhi (Himachal Pradesh)", "Munnar (Western Ghats)", "Road Trips with Family"],
        content:
          "Road trips with family across varied terrains — prioritizing slower, unstructured travel over hurried checklist tourism. Exploring the tranquil riverside trails of Jibhi in the Himalayas or the misty tea plantations of Munnar.",
        themeFraming:
          "Stepping back to observe how local communities, mountain geography, and local transport networks quietly sustain themselves.",
      },
    ] as BeyondCodeItem[],
  },

  contact: {
    sectionHeading: "Contact & Footer",
    subHeading: "Let's Build Something Together",
    invitation:
      "Whether you're looking for an engineer to architect resilient backend services, deploy modern AI/RAG systems, or simply want to chat about attention mechanisms and mechanical systems — my inbox is always open.",
    email: "saaashish08@gmail.com",
    phone: "+91 8072543573",
    displayPhone: "+91 80725 43573",
    github: "https://github.com/AashishStark",
    githubUsername: "AashishStark",
    linkedin: "https://www.linkedin.com/in/aashish-s-a-27365621a/",
    linkedinUsername: "aashish-s-a-27365621a",
    linkedinPlaceholder: "",
    isLinkedinPlaceholder: false,
    location: "India",
  },
};
