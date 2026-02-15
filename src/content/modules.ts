// Module and lesson metadata

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'Foundations of Modern ML',
    slug: 'foundations',
    description: 'Fast-paced refresher: neural networks, optimization, and representation learning.',
    icon: 'Brain',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'The Modern ML Landscape',
        slug: 'ml-landscape',
        description: 'Taxonomy of ML, the paradigm shift to foundation models, and key benchmarks.'
      },
      {
        id: 'lesson-1-2',
        title: 'Neural Network Internals: Beyond the Basics',
        slug: 'neural-networks',
        description: 'Deep dive into backpropagation, activations, loss functions, and modern optimization.'
      },
      {
        id: 'lesson-1-3',
        title: 'The Representation Learning Revolution',
        slug: 'representation-learning',
        description: 'From hand-crafted features to learned embeddings and transfer learning.'
      }
    ]
  },
  {
    id: 'module-2',
    number: 2,
    title: 'The Transformer Architecture',
    slug: 'transformers',
    description: 'Attention from scratch, encoder/decoder variants, and scaling laws.',
    icon: 'Zap',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Attention Is All You Need: From Scratch',
        slug: 'attention-mechanism',
        description: 'Self-attention, Q/K/V matrices, multi-head attention with full mathematical derivations.'
      },
      {
        id: 'lesson-2-2',
        title: 'The Full Transformer Block',
        slug: 'transformer-block',
        description: 'Layer norm, feed-forward networks, residual connections, and positional encoding.'
      },
      {
        id: 'lesson-2-3',
        title: 'Encoder-only, Decoder-only, and Encoder-Decoder',
        slug: 'transformer-variants',
        description: 'BERT, GPT, T5 architectures, causal masking, and the KV-cache.'
      },
      {
        id: 'lesson-2-4',
        title: 'Scaling Laws and Emergent Abilities',
        slug: 'scaling-laws',
        description: 'Chinchilla laws, power law relationships, emergent abilities, and Mixture of Experts.'
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Training Large Language Models',
    slug: 'training-llms',
    description: 'From random weights to useful: pretraining, SFT, RLHF, and evaluation.',
    icon: 'Dumbbell',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Pretraining: Data, Objectives, and Infrastructure',
        slug: 'pretraining',
        description: 'Training data, next-token prediction, distributed training, and mixed precision.'
      },
      {
        id: 'lesson-3-2',
        title: 'Supervised Fine-Tuning (SFT)',
        slug: 'supervised-fine-tuning',
        description: 'From base model to instruction-following, dataset construction, and catastrophic forgetting.'
      },
      {
        id: 'lesson-3-3',
        title: 'RLHF and Reward Modeling',
        slug: 'rlhf',
        description: 'Alignment via human feedback, reward models, PPO, DPO, and reward hacking.'
      },
      {
        id: 'lesson-3-4',
        title: 'Evaluation: How Do We Know If a Model Is Good?',
        slug: 'evaluation',
        description: 'Benchmarks, perplexity, contamination, and LLM-as-judge evaluation.'
      }
    ]
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Parameter-Efficient Fine-Tuning',
    slug: 'peft',
    description: 'Full performance at a fraction of the compute: LoRA, QLoRA, and adapters.',
    icon: 'Target',
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Why Full Fine-Tuning Is Often Impractical',
        slug: 'full-fine-tuning-challenges',
        description: 'Memory requirements, optimizer states, and the taxonomy of PEFT methods.'
      },
      {
        id: 'lesson-4-2',
        title: 'LoRA: Low-Rank Adaptation',
        slug: 'lora',
        description: 'The low-rank hypothesis, mathematical derivation, and practical implementation.'
      },
      {
        id: 'lesson-4-3',
        title: 'QLoRA and Quantization-Aware Fine-Tuning',
        slug: 'qlora',
        description: 'Quantization primer, NF4, double quantization, and fine-tuning on consumer hardware.'
      },
      {
        id: 'lesson-4-4',
        title: 'Practical Fine-Tuning Guide',
        slug: 'practical-fine-tuning',
        description: 'Dataset preparation, hyperparameters, common pitfalls, and evaluation.'
      }
    ]
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Embeddings and Semantic Search',
    slug: 'embeddings',
    description: 'Contrastive learning, vector databases, and approximate nearest neighbor search.',
    icon: 'Search',
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Embedding Models Deep Dive',
        slug: 'embedding-models',
        description: 'Contrastive learning, training techniques, and key embedding model architectures.'
      },
      {
        id: 'lesson-5-2',
        title: 'Vector Databases and Approximate Nearest Neighbor Search',
        slug: 'vector-databases',
        description: 'ANN algorithms, HNSW, vector database landscape, and hybrid search.'
      }
    ]
  },
  {
    id: 'module-6',
    number: 6,
    title: 'RAG: Retrieval-Augmented Generation',
    slug: 'rag',
    description: 'Grounding LLMs in your data: chunking, retrieval, reranking, and evaluation.',
    icon: 'BookOpen',
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'RAG Architecture and Why It Matters',
        slug: 'rag-architecture',
        description: 'The RAG pipeline, naive vs advanced patterns, and when to use RAG.'
      },
      {
        id: 'lesson-6-2',
        title: 'Chunking, Retrieval, and Reranking',
        slug: 'chunking-retrieval',
        description: 'Chunking strategies, hybrid retrieval, and cross-encoder reranking.'
      },
      {
        id: 'lesson-6-3',
        title: 'Advanced RAG Patterns',
        slug: 'advanced-rag',
        description: 'Query transformation, self-RAG, graph RAG, agentic RAG, and evaluation.'
      }
    ]
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Prompt Engineering Patterns',
    slug: 'prompting',
    description: 'Systematic prompting for production: CoT, ReAct, structured output, and cost optimization.',
    icon: 'MessageSquare',
    lessons: [
      {
        id: 'lesson-7-1',
        title: 'Foundations of Effective Prompting',
        slug: 'prompting-foundations',
        description: 'How LLMs process prompts, few-shot learning, and sampling parameters.'
      },
      {
        id: 'lesson-7-2',
        title: 'Advanced Prompting Techniques',
        slug: 'advanced-prompting',
        description: 'Chain-of-Thought, self-consistency, Tree of Thoughts, ReAct, and structured output.'
      },
      {
        id: 'lesson-7-3',
        title: 'Prompt Engineering for Production',
        slug: 'production-prompting',
        description: 'Testing, defensive prompting, versioning, cost optimization, and meta-prompting.'
      }
    ]
  },
  {
    id: 'module-8',
    number: 8,
    title: 'LLM Agents and Tool Use',
    slug: 'agents',
    description: 'Perception-reasoning-action loops, function calling, and multi-agent coordination.',
    icon: 'Bot',
    lessons: [
      {
        id: 'lesson-8-1',
        title: 'Agent Architecture Fundamentals',
        slug: 'agent-architecture',
        description: 'The perception-reasoning-action loop, memory systems, and planning.'
      },
      {
        id: 'lesson-8-2',
        title: 'Tool Use and Function Calling',
        slug: 'tool-use',
        description: 'How function calling works, tool design, orchestration, and MCP.'
      },
      {
        id: 'lesson-8-3',
        title: 'Agent Frameworks and Patterns',
        slug: 'agent-frameworks',
        description: 'Framework landscape, multi-agent systems, human-in-the-loop, and evaluation.'
      }
    ]
  },
  {
    id: 'module-9',
    number: 9,
    title: 'Diffusion Models',
    slug: 'diffusion',
    description: 'How AI generates images: from diffusion theory to modern architectures.',
    icon: 'Palette',
    lessons: [
      {
        id: 'lesson-9-1',
        title: 'The Theory of Diffusion',
        slug: 'diffusion-theory',
        description: 'Forward and reverse processes, ELBO derivation, and DDPM to DDIM.'
      },
      {
        id: 'lesson-9-2',
        title: 'Latent Diffusion and Stable Diffusion Architecture',
        slug: 'stable-diffusion',
        description: 'Latent space diffusion, U-Net, text conditioning, and classifier-free guidance.'
      },
      {
        id: 'lesson-9-3',
        title: 'Modern Image Generation',
        slug: 'modern-image-generation',
        description: 'Diffusion Transformers, ControlNet, IP-Adapter, and LoRA for diffusion.'
      }
    ]
  },
  {
    id: 'module-10',
    number: 10,
    title: 'AI Security: Offensive and Defensive',
    slug: 'security',
    description: 'Adversarial attacks, prompt injection, guardrails, and red teaming.',
    icon: 'Shield',
    lessons: [
      {
        id: 'lesson-10-1',
        title: 'Adversarial Attacks on ML Models',
        slug: 'adversarial-attacks',
        description: 'Evasion attacks, threat models, transferability, and physical-world examples.'
      },
      {
        id: 'lesson-10-2',
        title: 'Prompt Injection and LLM Vulnerabilities',
        slug: 'prompt-injection',
        description: 'Direct and indirect injection, jailbreaking, data extraction, and supply chain attacks.'
      },
      {
        id: 'lesson-10-3',
        title: 'Defensive Techniques',
        slug: 'defensive-techniques',
        description: 'Adversarial training, guardrails, prompt hardening, red teaming, and monitoring.'
      }
    ]
  },
  {
    id: 'module-11',
    number: 11,
    title: 'Inference Optimization & Deployment',
    slug: 'inference',
    description: 'Quantization, continuous batching, PagedAttention, and speculative decoding.',
    icon: 'Rocket',
    lessons: [
      {
        id: 'lesson-11-1',
        title: 'Quantization for Inference',
        slug: 'quantization',
        description: 'GPTQ, AWQ, GGUF quantization methods, precision formats, and quality-speed tradeoffs.'
      },
      {
        id: 'lesson-11-2',
        title: 'Model Serving and Batching',
        slug: 'model-serving',
        description: 'vLLM, TensorRT-LLM, continuous batching, PagedAttention, and KV-cache management.'
      },
      {
        id: 'lesson-11-3',
        title: 'Speculative Decoding and Distillation',
        slug: 'speculative-decoding',
        description: 'Draft-then-verify generation, knowledge distillation, and model optimization pipelines.'
      }
    ]
  },
  {
    id: 'module-12',
    number: 12,
    title: 'Computer Vision & Multimodal AI',
    slug: 'vision',
    description: 'CNNs, Vision Transformers, CLIP, and vision-language models.',
    icon: 'Eye',
    lessons: [
      {
        id: 'lesson-12-1',
        title: 'CNN Architectures and Vision Transformers',
        slug: 'cnn-vit',
        description: 'CNN evolution from AlexNet to EfficientNet, Vision Transformer architecture, and hybrid approaches.'
      },
      {
        id: 'lesson-12-2',
        title: 'CLIP and Contrastive Vision-Language Learning',
        slug: 'clip',
        description: 'Dual-encoder architecture, contrastive pretraining, zero-shot classification, and SigLIP.'
      },
      {
        id: 'lesson-12-3',
        title: 'Multimodal Models',
        slug: 'multimodal-models',
        description: 'Vision-language models, visual instruction tuning, multimodal embeddings, and video understanding.'
      }
    ]
  },
  {
    id: 'module-13',
    number: 13,
    title: 'MLOps & Production ML',
    slug: 'mlops',
    description: 'Monitoring, drift detection, ML pipelines, feature stores, and cost optimization.',
    icon: 'Factory',
    lessons: [
      {
        id: 'lesson-13-1',
        title: 'The ML Production Lifecycle',
        slug: 'ml-lifecycle',
        description: 'Model monitoring, data drift detection, A/B testing, experiment tracking, and deployment strategies.'
      },
      {
        id: 'lesson-13-2',
        title: 'CI/CD for ML and Infrastructure',
        slug: 'ml-cicd',
        description: 'ML pipelines, feature stores, data versioning, container orchestration, and cost management.'
      }
    ]
  }
];

// Helper functions
export function getModule(slug: string): Module | undefined {
  return modules.find(m => m.slug === slug);
}

export function getLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const module = modules.find(m => m.slug === moduleSlug);
  if (!module) return undefined;

  const lesson = module.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) return undefined;

  return { module, lesson };
}

export function getNextLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const current = getLesson(moduleSlug, lessonSlug);
  if (!current) return undefined;

  const currentModuleIndex = modules.findIndex(m => m.slug === moduleSlug);
  const currentLessonIndex = current.module.lessons.findIndex(l => l.slug === lessonSlug);

  // Try next lesson in current module
  if (currentLessonIndex < current.module.lessons.length - 1) {
    return {
      module: current.module,
      lesson: current.module.lessons[currentLessonIndex + 1]
    };
  }

  // Try first lesson of next module
  if (currentModuleIndex < modules.length - 1) {
    const nextModule = modules[currentModuleIndex + 1];
    return {
      module: nextModule,
      lesson: nextModule.lessons[0]
    };
  }

  return undefined;
}

export function getPreviousLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const current = getLesson(moduleSlug, lessonSlug);
  if (!current) return undefined;

  const currentModuleIndex = modules.findIndex(m => m.slug === moduleSlug);
  const currentLessonIndex = current.module.lessons.findIndex(l => l.slug === lessonSlug);

  // Try previous lesson in current module
  if (currentLessonIndex > 0) {
    return {
      module: current.module,
      lesson: current.module.lessons[currentLessonIndex - 1]
    };
  }

  // Try last lesson of previous module
  if (currentModuleIndex > 0) {
    const prevModule = modules[currentModuleIndex - 1];
    return {
      module: prevModule,
      lesson: prevModule.lessons[prevModule.lessons.length - 1]
    };
  }

  return undefined;
}

export function getTotalLessons(): number {
  return modules.reduce((total, module) => total + module.lessons.length, 0);
}
