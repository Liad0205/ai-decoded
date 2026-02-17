export const glossary: Record<string, string> = {
  // Adversarial & Security
  FGSM: "Fast Gradient Sign Method - A single-step adversarial attack that adds noise in the direction of the loss gradient.",
  PGD: "Projected Gradient Descent - An iterative, more powerful adversarial attack that applies FGSM multiple times with projection.",
  "C&W":
    "Carlini & Wagner Attack - An optimization-based attack that finds minimum-norm perturbations, known for its effectiveness against defenses.",

  // Vision Architectures
  VGG: "Visual Geometry Group - A classic CNN architecture known for its depth and simplicity.",
  ViT: "Vision Transformer - An architecture that applies Transformers directly to image patches.",
  ResNet:
    "Residual Network - A deep neural network architecture that solves the vanishing gradient problem using skip connections.",
  DETR: "Detection Transformer - An object detection model that uses a Transformer encoder-decoder to directly predict bounding boxes.",
  DiT: "Diffusion Transformer - A diffusion model architecture that replaces the U-Net backbone with a Transformer.",

  // Core ML Concepts
  ML: "Machine Learning - A field of AI focused on building systems that learn from data.",
  NN: "Neural Network - A computational model inspired by the human brain structure.",
  CNN: "Convolutional Neural Network - A class of deep neural networks, most commonly applied to analyzing visual imagery.",
  RNN: "Recurrent Neural Network - A class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence.",
  MLP: "Multi-Layer Perceptron - A feedforward neural network with one or more hidden layers of fully connected neurons.",
  LSTM: "Long Short-Term Memory - A recurrent neural network architecture designed to learn long-range dependencies in sequential data.",
  SVM: "Support Vector Machine - A supervised learning algorithm that finds the optimal hyperplane to separate classes in feature space.",
  PCA: "Principal Component Analysis - A dimensionality reduction technique that projects data onto its axes of greatest variance.",
  "k-means": "k-means Clustering - An unsupervised algorithm that partitions data into k groups by iteratively assigning points to the nearest cluster centroid.",
  "TF-IDF": "Term Frequency-Inverse Document Frequency - A numerical statistic that reflects how important a word is to a document within a collection.",
  MFCC: "Mel-Frequency Cepstral Coefficients - A compact representation of the short-term power spectrum of audio, widely used in speech recognition.",
  Autoencoder: "Autoencoder - A neural network trained to reconstruct its input through a compressed bottleneck layer, learning compact data representations.",
  SGD: "Stochastic Gradient Descent - An optimization algorithm that updates parameters using gradients computed on random mini-batches of data.",
  GELU: "Gaussian Error Linear Unit - An activation function that smoothly gates inputs based on their value, widely used in Transformers.",
  ANN: "Approximate Nearest Neighbor - A search algorithm that finds near-optimal closest vectors in high-dimensional spaces with sub-linear time complexity.",

  // Language Models & Architectures
  LLM: "Large Language Model - A type of AI model designed to understand and generate human-like text.",
  GPT: "Generative Pre-trained Transformer - A family of autoregressive language models that generate text by predicting the next token.",
  BERT: "Bidirectional Encoder Representations from Transformers - A masked language model that learns bidirectional text representations for understanding tasks.",
  T5: "Text-to-Text Transfer Transformer - A model that frames all NLP tasks as text-to-text problems, enabling a unified training approach.",
  MoE: "Mixture of Experts - An architecture that routes each input to a subset of specialized sub-networks, scaling model capacity without proportional compute cost.",
  GQA: "Grouped Query Attention - An attention variant that shares key-value heads across groups of query heads, balancing quality and inference speed.",
  MQA: "Multi-Query Attention - An attention variant where all query heads share a single set of key-value heads, significantly reducing KV-cache memory.",
  BPE: "Byte Pair Encoding - A subword tokenization algorithm that iteratively merges the most frequent character pairs to build a vocabulary.",

  // Generative Models
  VAE: "Variational Autoencoder - A generative model that learns a compressed latent representation of data.",
  GAN: "Generative Adversarial Network - A framework where a generator and discriminator compete to produce realistic synthetic data.",
  DDPM: "Denoising Diffusion Probabilistic Model - A generative model that learns to reverse a gradual noising process to generate data from pure noise.",
  DDIM: "Denoising Diffusion Implicit Model - A faster sampling method for diffusion models that uses deterministic non-Markovian steps.",
  LDM: "Latent Diffusion Model - A diffusion model that operates in a compressed latent space rather than pixel space, greatly reducing computational cost.",
  CFG: "Classifier-Free Guidance - A technique that steers diffusion model generation toward a conditioning signal without requiring a separate classifier.",
  ELBO: "Evidence Lower Bound - A tractable lower bound on the log-likelihood used to train variational models like VAEs and diffusion models.",

  // Multimodal & Vision-Language
  CLIP: "Contrastive Language-Image Pre-training - A model trained to associate images with text descriptions.",
  SigLIP: "Sigmoid Loss for Language-Image Pre-training - A CLIP variant that replaces softmax contrastive loss with a pairwise sigmoid loss for better scaling.",
  SIFT: "Scale-Invariant Feature Transform - A classical computer vision algorithm that detects and describes distinctive local features in images.",

  // NLP & Alignment
  NLP: "Natural Language Processing - A subfield of AI concerned with the interactions between computers and human language.",
  RLHF: "Reinforcement Learning from Human Feedback - A technique to align LLMs with human intent using preferences.",
  SFT: "Supervised Fine-Tuning - The process of training a pre-trained model on a labeled dataset.",
  PPO: "Proximal Policy Optimization - A reinforcement learning algorithm used to align LLMs.",
  DPO: "Direct Preference Optimization - A method to align LLMs using preference data without a reward model.",

  // Fine-Tuning & Efficiency
  LoRA: "Low-Rank Adaptation - A parameter-efficient fine-tuning technique.",
  QLoRA:
    "Quantized Low-Rank Adaptation - A more memory-efficient version of LoRA.",
  PEFT: "Parameter-Efficient Fine-Tuning - A family of techniques that fine-tune only a small subset of model parameters to reduce memory and compute costs.",

  // Retrieval & Search
  RAG: "Retrieval-Augmented Generation - A technique that enhances LLM responses by retrieving relevant documents from an external knowledge base.",
  HNSW: "Hierarchical Navigable Small World - A graph-based approximate nearest neighbor algorithm that builds a multi-layer proximity graph for fast vector search.",
  IVF: "Inverted File Index - A vector search technique that partitions the space into clusters and searches only the nearest clusters at query time.",

  // Prompting & Agents
  CoT: "Chain of Thought - A prompting technique where the model is encouraged to show its reasoning steps.",
  ReAct:
    "Reasoning + Acting - A paradigm where LLMs alternate between reasoning and taking actions.",
  MCP: "Model Context Protocol - An open standard for connecting LLMs to external tools, data sources, and services.",

  // Quantization & Deployment
  ONNX: "Open Neural Network Exchange - An open standard for machine learning interoperability.",
  AWQ: "Activation-aware Weight Quantization - A quantization method that protects salient weights.",
  GPTQ: "Generative Pre-trained Transformer Quantization - A one-shot weight quantization method for LLMs.",

  // MLOps
  DVC: "Data Version Control - An open-source tool for versioning datasets and ML models alongside code in Git.",
  CLS: "Classification Token - A special token prepended to input sequences whose final hidden state serves as the aggregate representation for classification tasks.",
};
