import type { ProjectItem } from "../types/project"

export const projects: ProjectItem[] = [
  {
    name: "Multi-Tenant Microservices Platform",
    subtitle: "Full-stack multi-tenant system with API gateway and event-driven architecture",
    modules: [
      {
        name: "Portal",
        description: "User-facing web application",
        href: "https://fintrack.chenlis.com/portal",
      },
      {
        name: "Admin",
        description: "Admin dashboard for system management",
        href: "https://fintrack.chenlis.com/admin",
      },
      {
        name: "Swagger",
        description: "REST API documentation",
        href: "https://fintrack.chenlis.com/api/swagger",
      },
    ],
    links: [
      {
        label: "Preview",
        href: "https://fintrack.chenlis.com",
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
    subtitle: "ASP.NET Core project with Clean Architecture",
    modules: [
      {
        name: "Portal",
        description: "User-facing web application built with Vue",
      },
      {
        name: "API",
        description: "REST API with layered architecture",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/liananddandan/To-Do-List",
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
    modules: [
      {
        name: "Backend API",
        description: "ASP.NET Core service implementing retrieval, context expansion, and chat pipeline",
      },
      {
        name: "Rerank Service",
        description: "FastAPI service using cross-encoder models to rerank retrieved results",
      },
      {
        name: "LLM Integration",
        description: "Local LLM (Ollama) for response generation with citation support",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/liananddandan/RAG_Platform",
      },
    ],
  },
]