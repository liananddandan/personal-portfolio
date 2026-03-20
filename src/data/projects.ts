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
    name: "AI Knowledge Copilot",
    subtitle: "RAG-based AI assistant with .NET backend and FastAPI service",
    modules: [
      {
        name: "LLM Gateway",
        description: "ASP.NET Core service for orchestration and tool calling",
      },
      {
        name: "RAG Service",
        description: "FastAPI service for embedding, vector search, and retrieval",
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