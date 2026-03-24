import type { ProjectCard } from "../types/projectCard"

export const projectCards: ProjectCard[] = [
    {
        name: "Multi-Tenant Microservices Platform",
        subtitle: "Full-stack system with API gateway, event-driven communication, and containerized deployment",
        summary:
            "Designed and built a multi-tenant microservices system using ASP.NET Core, with a centralized API gateway and event-driven communication between services.",
        highlights: [
            "Implemented multi-tenant architecture with data isolation and permission boundaries",
            "Built API Gateway using YARP for routing, authentication, and request handling",
            "Enabled asynchronous communication using RabbitMQ",
            "Containerized services with Docker and deployed on VPS using Docker Compose and Nginx",
            "Developed frontend portal and admin panel using React",
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