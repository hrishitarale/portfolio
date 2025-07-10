@import "tailwindcss";

/* Tailwind Utilities */
@tailwind utilities;

@theme {
  --color-border: hsl(var(--border));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));

  --color-card: hsl(var(--card));

  --animate-float: float 6s ease-in-out infinite;
  --animate-fade-in: fade-in 0.7s ease-out forwards;
  --animate-fade-in-delay-1: fade-in 0.7s ease-out 0.2s forwards;
  --animate-fade-in-delay-2: fade-in 0.7s ease-out 0.4s forwards;
  --animate-fade-in-delay-3: fade-in 0.7s ease-out 0.6s forwards;
  --animate-fade-in-delay-4: fade-in 0.7s ease-out 0.8s forwards;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
}

@layer base {
  :root {
    --background: 42 33% 96%;
    --foreground: 250 25% 16%;

    --card: 0 0% 100%;
    --primary: 275 65% 58%;
    --primary-foreground: 42 33% 96%;

    --border: 270 20% 85%;
  }

  .dark {
    --background: 248 22% 10%;
    --foreground: 270 20% 90%;

    --card: 250 18% 15%;
    --primary: 275 80% 70%;
    --primary-foreground: 248 22% 10%;

    --border: 248 15% 25%;
  }

  * {
    @apply border-border;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-background text-foreground transition-colors duration-300;
    font-feature-settings: "rlig" 1, "calt" 1;
    line-height: 1.6;
  }
}

@utility container {
  margin-inline: auto;
  padding-inline: 2rem;

  @media (width >= 640px) { max-width: 640px; }
  @media (width >= 768px) { max-width: 768px; }
  @media (width >= 1024px) { max-width: 1024px; }
  @media (width >= 1280px) { max-width: 1280px; }
  @media (width >= 1400px) { max-width: 1400px; }
}

@utility text-glow {
  @apply relative font-semibold;
  text-shadow: 0 0 6px hsla(275, 65%, 58%, 0.45);
}

@utility card-hover {
  @apply transition-transform duration-300 hover:scale-[1.02] hover:shadow-md;
}

@utility gradient-border {
  @apply relative rounded-md;
  background: linear-gradient(to right, hsl(var(--card)), hsl(var(--card)));
  background-clip: padding-box;
  border: 1px solid transparent;
}

@utility cosmic-button {
  @apply px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium 
         transition-all duration-300 hover:shadow-[0_0_10px_hsla(275,65%,58%,0.45)] hover:scale-105 active:scale-95;
}

#root {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
