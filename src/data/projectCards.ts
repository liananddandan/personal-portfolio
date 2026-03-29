import type { ProjectCard } from "../types/projectCard"

export const projectCards: ProjectCard[] = [
    {
        name: "Multi-Tenant Retail Operations Platform",
        subtitle: "Full-stack system for orders, products, and tenant-based business operations",
        summary:
            "Designed and built a multi-tenant retail platform with tenant-specific ordering, product management, and operational workflows.",
        highlights: [
            "Implemented multi-tenant architecture with tenant isolation and role-based access control",
            "Built API Gateway using YARP for routing and authentication",
            "Enabled asynchronous communication using RabbitMQ and CAP",
            "Developed order management and product catalog workflows",
            "Built React frontend with tenant-specific portals and admin dashboard",
            "Containerized and deployed services using Docker, Nginx, and VPS",
        ],
        actions: [
            {
                label: "Live App",
                href: "https://fintrack.chenlis.com",
                primary: true,
            },
            {
                label: "GitHub",
                href: "https://github.com/liananddandan/FinTrack-Microservices",
            },
            {
                label: "Blog",
                href: "https://dev.to/alexleeeeeeeeee",
            },
        ],
    },
    {
        name: "ToDoList API",
        subtitle: "ASP.NET Core project following Clean Architecture",
        summary:
            "Built a full-stack application, covering API design, authentication, and frontend integration.",
        highlights: [
            "Structured the project using Clean Architecture",
            "Implemented JWT-based authentication",
            "RESTful API design",
            "Unit & integration testing with a TDD approach",
        ],
        actions: [
            {
                label: "View Source",
                href: "https://github.com/liananddandan/To-Do-List",
                primary: true,
            },
            {
                label: "Blog",
                href: "https://dev.to/alexleeeeeeeeee",
            },
        ],
    },
    {
        name: "Transcript-Based RAG Assistant",
        subtitle: "RAG-based assistant with .NET backend and Python rerank service",
        summary:
            "Built a RAG-based assistant combining a .NET backend with a Python service for cross-encoder reranking, enabling context-aware responses over structured data.",
        highlights: [
            "Semantic search with pgvector and context expansion",
            "Cross-encoder reranking with FastAPI and Sentence-Transformers",
            "Local LLM integration (Ollama) with citation-based responses",
        ],
        actions: [
            {
                label: "View Source",
                href: "https://github.com/liananddandan/RAG_Platform",
                primary: true,
            },
        ],
    },
    {
        name: "EF Core In-Memory Provider",
        subtitle: "Built a custom EF Core in-memory provider, reimplementing the query and execution pipeline",
        summary:
            "Built a custom EF Core provider from scratch, implementing query translation, execution, and integration with EF Core tracking.",
        highlights: [
            "Implemented custom query translation pipeline",
            "Integrated with EF Core tracking and identity resolution",
        ],
        actions: [
            {
                label: "View Source",
                href: "https://github.com/liananddandan/InMemoryProviderForEFCore",
                primary: true,
            },
        ],
    },
]