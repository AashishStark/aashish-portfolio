# Aashish — Portfolio Content Package

Positioning: **Software Engineer → AI/ML Engineer.** Theme: *"Understanding how things work."*
70% technical credibility, 30% personal identity. Every `[PLACEHOLDER: ...]` is something only you can fill in — leave it in the site as a TODO comment or send it to me later and I'll drop it in.

---

## 1. Hero / Tagline

> **Aashish**
> Software Engineer building toward AI/ML Engineering.
>
> I work at the intersection of backend engineering and intelligent systems — currently deepening my grasp of machine learning, deep learning, Transformers, and applied GenAI, on top of ~3.5 years building production automation software.

Buttons: `View Projects` · `Resume "D:\Placement\Resumes & Docs\Portfolio\Aashish S A Resume.pdf"` · `GitHub "https://github.com/AashishStark"`

---

## 2. About

> I'm a software engineer with about 3.5 years of experience, currently at **AppViewX** as an PKI/Certificate Lifecycle Management Engineer, where I build enterprise integrations (ServiceNow, F5, BlueCat) and customer-facing automation on top of a Certificate Lifecycle Management platform — day-to-day work in Java, Spring Boot, and Kubernetes.
>
> My interest in AI goes back to college, where I co-authored two research papers applying ML to real-world problems — plant disease recognition and vehicle pollution detection. That early exposure has turned into a deliberate transition: I'm now working through a structured self-study path covering classical ML, deep learning, Transformers, and GenAI/RAG systems, with the goal of moving into GenAI/ML engineering roles.
>
> My angle isn't "I want to be an AI researcher" — it's that I already know how to ship reliable backend systems, and I'm adding ML/AI depth on top of that foundation so I can build systems that are both technically sound and production-ready.

Graduated: Mepco Schlenk Engineering College, B.E. Information Technology, 2020–2024, CGPA 8.3.

---

## 3. Skills

**Currently working with (professional)**
- Java, Spring Boot, Spring Security
- Kubernetes, Docker
- REST APIs, enterprise integrations (ServiceNow, F5, BlueCat)
- PostgreSQL, Redis
- Git, Linux, CI/CD
- Python, Bash, Shell

**Learning / building toward (AI-ML)**
- NumPy, Pandas
- PyTorch
- Classical ML (scikit-learn)
- Deep learning fundamentals (neural nets, backprop, optimization)
- Transformers, attention mechanisms
- LLMs, RAG, GenAI application patterns

Keep these as two visually separate tiers ("Working with" vs. "Exploring") — recruiters read that distinction as honesty, not weakness.

---

## 4. Projects

Order these by how "AI-forward" they are, since that's the direction you're pointing your career.

### Project A — RAG / Document Intelligence System
Documents → chunking → embeddings → vector DB → retrieval → LLM → cited answer. Explicitly avoid calling it "chat with PDF" — the write-up should explain *why* the chunking/retrieval design works, not just that it does.
`https://github.com/AashishStark/rag-notes-qa`
`Live on: https://rag-notes-qa-production-65e2.up.railway.app`
`Handwritten images (JPG/PNG)
        ↓
OCR / transcription (Gemini vision)
        ↓
Chunking (300–500 words, ~50-word overlap)
        ↓
Embeddings (sentence-transformers, all-MiniLM-L6-v2)
        ↓
Vector store (ChromaDB, persistent volume)
        ↓
Retrieval (top-k similarity search)
        ↓
Answer generation (Gemini, context-grounded)
        ↓
FastAPI (/query, /health, /metrics) → Dockerized → deployed on Railway`


### Project B — A text classifier that sorts news headlines/descriptions into 4 topics (World, Sports, Business, Sci/Tech) using the AG News dataset. Built with nn.EmbeddingBag + nn.Linear — a lightweight, fully-from-scratch pipeline (custom tokenizer, custom vocab, no torchtext) that ties directly into embeddings, the core building block behind larger NLP/GenAI systems.
`https://github.com/AashishStark/ag-news-text-classifier`
`https://colab.research.google.com/github/AashishStark/ag-news-text-classifier/blob/main/text_classifier_agnews.ipynb`

### Project C — [Product for Civil Construction](https://github.com/satheesh1501/civsaash-backend), https://github.com/satheesh1501/civsaash-frontend
docs/
├── README.md                    ← This file
├── FRD.md                       ← Functional Requirements Document (full)
├── HLD.md                       ← High Level Design
├── LLD.md                       ← Low Level Design (master reference)
│
├── Sprint 1/                    ← Project Setup (Days 1-2)
│   ├── README.md                ← Sprint overview
│   ├── Day1_Backend_Setup.md    ← Spring Boot scaffold guide
│   ├── Day1_Frontend_Setup.md   ← React + Vite scaffold guide
│   └── Day2_Infrastructure_Setup.md ← Docker, Axios, Zustand
│
├── Sprint 2/                    ← Auth Module (Days 3-7) — To be created
├── Sprint 3/                    ← Employee Management (Days 8-12)
├── Sprint 4/                    ← Project & Milestones (Days 13-17)
├── Sprint 5/                    ← Attendance (Days 18-22)
├── Sprint 6/                    ← Subscription & Settings (Days 23-26)
└── Sprint 7/                    ← Dashboard, Deploy (Days 27-30)

### Project D - [Notion Python](https://github.com/AashishStark/Notion) 


A collection of Python scripts that connect to the Notion API to extract, back up, and update content across different Notion workspaces — Notes, Reminders, Travel Planner, and a shared Document Database.

Each module follows the same pattern:

Get Page.py — reads a Notion page (and its sub-pages/blocks), exports the content to a local JSON file.
Update Page.py — reads the local JSON file and pushes updates back to the Notion page.

.
├── Doc Database for Notion.py       # Shared/central document database utilities
├── notion_automation.py             # Core automation entry point / shared helpers
│
├── photos/                          # Screenshots used in this README
│   ├── architecture-overview.png
│   ├── create-integration.png
│   ├── share-page.png
│   └── get-update-workflow.png
│
├── Notes/
│   ├── Create Search Database.py    # Creates a searchable Notion database for notes
│   ├── Get Page.py                  # Extracts Notes page content → JSON
│   └── Update Page.py               # Pushes JSON updates back to the Notes page
│
├── Reminder/
│   ├── Get Page.py                  # Extracts Reminder page content → JSON
│   ├── Update Page.py               # Pushes JSON updates back to the Reminder page
│   ├── notion_reminder_setup.py     # One-time setup for the reminder system
│   ├── notion_reminder_system_ids.json  # Stored page/database IDs for reminders
│   └── reminder.json                # Exported reminder content
│
└── Travel Planner/
    ├── Get Page.py                  # Extracts Travel Planner page content → JSON
    ├── Update Page.py               # Pushes JSON updates back to the Travel Planner page
    └── travel_planner.json          # Exported travel planner content



---

## 5. AI Lab (learning-in-public section)

A running, dated log — this is what separates "did some tutorials" from "genuinely learns systems." Short entries, not polished essays.

Seed entries you can start with once you're a bit further into the roadmap:
- *How does cross-attention actually work?*
- *Why does GPT use causal masking?*
- *Implementing attention with NumPy*
- *BERT vs. GPT — what's actually different?*
- *What is backpropagation actually computing?*

`[https://github.com/AashishStark/rag-notes-qa/tree/main/Dataset/My%20Studies]` -- Data of Handwrtiien what I learnerd for placements

---

## 6. Technical Journey

Present as a path, not a skill-bar percentage.

**Foundation** — Java, Spring Boot, Kubernetes, distributed systems basics, DSA (Java)
**Machine Learning** — Python/NumPy/Pandas refresh, classical ML, supervised/unsupervised learning
**Deep Learning** — neural networks, backprop, PyTorch
**Modern AI** — attention, Transformers, LLMs, RAG, GenAI application patterns
**Engineering for AI** — deployment, model serving, MLOps basics

---

## 7. Research

> During college, I co-authored two applied ML papers:
> - Plant disease recognition `https://github.com/EKANATHAN-1001/Plant-Disease-with-Inception-v3-Alexnet-CNN` 
> - Vehicle pollution detection `“Real-Time Vehicle Pollution Detection and Tracking using Iterative Deep Learning and YOLO” `


---

## 8. Beyond Code

Theme it around the same idea as the rest of the site — curiosity about how things work.

> **Books** — I read worlds instead of building them. `[ Harry Potter / ASOIAF / Malazan / Wheel of Time ]`
>
> **Motorcycles** — an interest in neo-retro bikes and mechanical design; understanding an engine scratches the same itch as understanding a system.
>
> **Travel** — road trips with family, slower unstructured travel over checklist tourism. `[Jibhi, Munnar]`

---

## 9. Contact / Footer

`[Aashish - 8072543573 , saaashish08@gmail.com]`

---


```
