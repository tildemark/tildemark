export interface ToolItem {
  name: string;
  desc: string;
  categories: string[];
  url?: string;
  iconSlug?: string; // for simpleicons
  iconType?: string; // for custom/lucide
  subgroup?: string;
}

export const toolboxCategories = [
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'devops', label: 'DevOps' },
  { id: 'testing', label: 'Testing' },
  { id: 'hardware', label: 'Hardware & IoT' },
  { id: 'design', label: 'Design & Docs' },
  { id: 'projectmgmt', label: 'Project Mgmt' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'tools', label: 'Tools' },
  { id: 'all', label: 'All' },
] as const;

export const toolboxData: ToolItem[] = [
  // Core Languages
  { name: 'C/C++', desc: 'Low-level power.', categories: ['languages'], url: 'https://isocpp.org/', iconSlug: 'cplusplus', subgroup: 'Core languages' },
  { name: 'Assembly', desc: 'Talking to silicon.', categories: ['languages'], iconType: 'microchip' },
  { name: 'Rust', desc: 'Memory-safe systems language.', categories: ['languages', 'backend'], url: 'https://www.rust-lang.org/', iconSlug: 'rust' },
  { name: 'Go', desc: 'Fast, concurrent backend services.', categories: ['languages', 'backend'], url: 'https://go.dev/', iconSlug: 'go' },

  // Runtime / Backend
  { name: 'Python', desc: 'Swiss Army knife.', categories: ['languages', 'backend'], url: 'https://www.python.org/', iconSlug: 'python', subgroup: 'Runtime / Backend' },
  { name: 'Java', desc: 'Enterprise workhorse.', categories: ['languages'], url: 'https://www.oracle.com/java/', iconSlug: 'openjdk' },
  { name: 'Kotlin', desc: 'Modern language for Android and JVM.', categories: ['languages', 'backend'], url: 'https://kotlinlang.org/', iconSlug: 'kotlin' },
  { name: 'Dart', desc: 'Client-optimized language for fast apps.', categories: ['languages'], url: 'https://dart.dev/', iconSlug: 'dart' },
  { name: 'PHP', desc: 'Web veteran.', categories: ['languages', 'backend'], url: 'https://www.php.net/', iconSlug: 'php' },
  { name: 'Ruby', desc: 'Elegant scripting.', categories: ['languages', 'backend'], url: 'https://www.ruby-lang.org/', iconSlug: 'ruby' },
  { name: 'Perl', desc: 'Text processing wizard.', categories: ['languages'], url: 'https://www.perl.org/', iconType: 'terminal' },
  { name: 'Regex', desc: 'Pattern matching and text extraction.', categories: ['languages', 'tools', 'backend'], url: 'https://regex101.com/', iconType: 'code' },

  // Web Core
  { name: 'JavaScript', desc: 'Everywhere language.', categories: ['languages', 'frontend', 'backend'], url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconSlug: 'javascript', subgroup: 'Web Core' },
  { name: 'TypeScript', desc: 'JavaScript with types.', categories: ['languages', 'frontend'], url: 'https://www.typescriptlang.org/', iconSlug: 'typescript' },
  { name: 'HTML', desc: 'Web skeleton.', categories: ['languages', 'frontend'], url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconSlug: 'html5' },
  { name: 'CSS', desc: 'Web makeup.', categories: ['languages', 'frontend'], url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', iconType: 'css' },

  // UI & App Frameworks
  { name: 'React.js', desc: 'Component magic.', categories: ['languages', 'frontend'], url: 'https://react.dev/', iconSlug: 'react', subgroup: 'UI & app frameworks' },
  { name: 'Next.js', desc: 'React on steroids.', categories: ['languages', 'frontend'], url: 'https://nextjs.org/', iconSlug: 'nextdotjs' },
  { name: 'Tiptap', desc: 'Modern rich-text editor.', categories: ['frontend', 'design'], url: 'https://tiptap.dev/', iconType: 'edit' },
  { name: 'Fabric.js', desc: 'Powerful HTML5 canvas library.', categories: ['frontend', 'design'], url: 'https://fabricjs.com/', iconType: 'vector' },
  { name: 'TanStack', desc: 'Powerful async and data tools.', categories: ['frontend'], url: 'https://tanstack.com/', iconType: 'layers' },
  { name: 'shadcn/ui', desc: 'Composable UI primitives.', categories: ['frontend', 'design'], url: 'https://ui.shadcn.com/', iconType: 'palette' },
  { name: 'Leaflet', desc: 'Interactive maps.', categories: ['languages', 'frontend'], url: 'https://leafletjs.com/', iconSlug: 'leaflet' },
  { name: 'Tauri', desc: 'Rust-powered desktop apps.', categories: ['frontend'], url: 'https://tauri.app/', iconSlug: 'tauri' },
  { name: 'Flutter', desc: 'Multi-platform UI toolkit.', categories: ['frontend'], url: 'https://flutter.dev/', iconSlug: 'flutter' },
  { name: 'Figma', desc: 'Design collaboration.', categories: ['frontend', 'design'], url: 'https://www.figma.com/', iconSlug: 'figma' },

  // Backend & Platforms
  { name: 'CodeIgniter', desc: 'PHP framework.', categories: ['backend'], url: 'https://codeigniter.com/', iconSlug: 'codeigniter', subgroup: 'Backend & APIs' },
  { name: 'Node.js', desc: 'JavaScript runtime.', categories: ['backend'], url: 'https://nodejs.org/', iconSlug: 'nodedotjs' },
  { name: 'Express.js', desc: 'Minimal Node framework.', categories: ['backend'], url: 'https://expressjs.com/', iconSlug: 'express' },
  { name: 'BullMQ', desc: 'Redis-based message queue for Node.js.', categories: ['backend', 'tools'], url: 'https://bullmq.io/', iconType: 'stream' },
  { name: 'GCash', desc: 'Philippine mobile payments.', categories: ['backend'], url: 'https://www.gcash.com/', iconType: 'wallet' },
  { name: 'PayMongo', desc: 'Online payments for PH startups.', categories: ['backend'], url: 'https://www.paymongo.com/', iconType: 'card' },
  { name: 'WordPress', desc: 'CMS & blogging platform.', categories: ['backend'], url: 'https://wordpress.org/', iconSlug: 'wordpress' },
  { name: 'Joomla', desc: 'Open-source CMS.', categories: ['backend'], url: 'https://www.joomla.org/', iconSlug: 'joomla' },
  { name: 'Drupal', desc: 'Enterprise CMS.', categories: ['backend'], url: 'https://www.drupal.org/', iconSlug: 'drupal' },
  { name: 'Shopify', desc: 'E-commerce platform.', categories: ['backend'], url: 'https://www.shopify.com/', iconSlug: 'shopify' },
  { name: 'Ghost', desc: 'Modern publishing platform.', categories: ['backend'], url: 'https://ghost.org/', iconSlug: 'ghost' },
  { name: 'Prisma', desc: 'Next-gen ORM.', categories: ['backend', 'database'], url: 'https://www.prisma.io/', iconSlug: 'prisma' },
  { name: 'Drizzle ORM', desc: 'Type-safe ORM for JS/TS.', categories: ['backend', 'database'], url: 'https://drizzle.team/', iconSlug: 'drizzle' },
  { name: 'Zod', desc: 'Type-safe schema validation.', categories: ['backend'], url: 'https://zod.dev/', iconType: 'shield' },
  { name: 'JWT', desc: 'Token-based auth.', categories: ['backend'], url: 'https://jwt.io/', iconType: 'key' },
  { name: 'Crypto', desc: 'Web crypto primitives.', categories: ['backend', 'frontend'], url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto', iconType: 'lock' },

  // Database & Storage
  { name: 'MySQL', desc: 'Relational classic.', categories: ['database'], url: 'https://www.mysql.com/', iconSlug: 'mysql', subgroup: 'Data & Storage' },
  { name: 'MariaDB', desc: 'MySQL fork.', categories: ['database'], url: 'https://mariadb.org/', iconSlug: 'mariadb' },
  { name: 'PostgreSQL', desc: 'Advanced SQL.', categories: ['database'], url: 'https://www.postgresql.org/', iconSlug: 'postgresql' },
  { name: 'SQLite', desc: 'Lightweight serverless SQL database.', categories: ['database', 'tools'], url: 'https://www.sqlite.org/', iconSlug: 'sqlite' },
  { name: 'Supabase', desc: 'Open-source Firebase alternative.', categories: ['database', 'backend'], url: 'https://supabase.com/', iconSlug: 'supabase' },
  { name: 'Firebase', desc: "Google's BaaS.", categories: ['database'], url: 'https://firebase.google.com/', iconSlug: 'firebase' },
  { name: 'Valkey', desc: 'High-performance key-value store.', categories: ['database'], url: 'https://valkey.io/', iconType: 'database' },
  { name: 'SeaweedFS', desc: 'Distributed object storage.', categories: ['database', 'backend'], url: 'https://github.com/seaweedfs/seaweedfs', iconType: 'folder' },
  { name: 'Redis', desc: 'In-memory cache.', categories: ['database'], url: 'https://redis.io/', iconSlug: 'redis' },
  { name: 'MongoDB', desc: 'NoSQL document DB.', categories: ['database'], url: 'https://www.mongodb.com/', iconSlug: 'mongodb' },
  { name: 'SurrealDB', desc: 'Multi-model database.', categories: ['database'], url: 'https://surrealdb.com/', iconSlug: 'surrealdb' },
  { name: 'Neo4j', desc: 'Graph database management.', categories: ['database'], url: 'https://neo4j.com/', iconSlug: 'neo4j' },

  // DevOps & Cloud
  { name: 'Kubernetes', desc: 'Container orchestration.', categories: ['devops'], url: 'https://kubernetes.io/', iconSlug: 'kubernetes', subgroup: 'Containers & Delivery' },
  { name: 'Docker', desc: '"It works on my machine" - The Service.', categories: ['devops'], url: 'https://www.docker.com/', iconSlug: 'docker' },
  { name: 'Dokploy', desc: 'Self-hosted PaaS alternative to Coolify.', categories: ['devops', 'tools'], url: 'https://dokploy.com/', iconType: 'rocket' },
  { name: 'Traefik', desc: 'Cloud-native application proxy & load balancer.', categories: ['devops', 'tools'], url: 'https://traefik.io/', iconType: 'network' },
  { name: 'Nginx Proxy Manager', desc: 'Expose web services easily with free SSL.', categories: ['devops', 'tools'], url: 'https://nginxproxymanager.com/', iconSlug: 'nginx' },
  { name: 'AWS', desc: 'Cloud infrastructure.', categories: ['devops'], url: 'https://aws.amazon.com/', iconType: 'cloud', subgroup: 'Cloud Providers' },
  { name: 'OCI (Oracle)', desc: 'Hosting on the Always Free tier.', categories: ['devops'], url: 'https://www.oracle.com/cloud/', iconType: 'cloud' },
  { name: 'Alibaba Cloud', desc: 'Asia cloud provider.', categories: ['devops'], url: 'https://www.alibabacloud.com/', iconSlug: 'alibabacloud' },
  { name: 'Google Cloud', desc: 'GCP infrastructure.', categories: ['devops'], url: 'https://cloud.google.com/', iconSlug: 'googlecloud' },
  { name: 'cPanel & WHM', desc: 'Hosting control panel.', categories: ['devops'], url: 'https://cpanel.net/', iconSlug: 'cpanel' },
  { name: 'Cloudflare', desc: 'CDN & Security.', categories: ['devops'], url: 'https://www.cloudflare.com/', iconSlug: 'cloudflare', subgroup: 'Network & Security' },
  { name: 'ngrok', desc: 'Secure tunneling to localhost.', categories: ['devops', 'tools'], url: 'https://ngrok.com/', iconSlug: 'ngrok' },
  { name: 'GitHub Actions', desc: 'CI/CD automation.', categories: ['devops'], url: 'https://github.com/features/actions', iconSlug: 'githubactions', subgroup: 'CI/CD & Git' },
  { name: 'Snyk', desc: 'Developer-first security scanning.', categories: ['devops', 'tools'], url: 'https://snyk.io/', iconSlug: 'snyk' },
  { name: 'GitHub', desc: 'Git hosting & CI/CD.', categories: ['devops'], url: 'https://github.com/', iconSlug: 'github' },
  { name: 'Gitea', desc: 'Self-hosted Git.', categories: ['devops'], url: 'https://about.gitea.com/', iconSlug: 'gitea' },
  { name: 'Bitbucket', desc: 'Atlassian Git hosting.', categories: ['devops'], url: 'https://bitbucket.org/', iconSlug: 'bitbucket' },
  { name: 'Jekyll', desc: 'Static site generator.', categories: ['devops'], url: 'https://jekyllrb.com/', iconSlug: 'jekyll', subgroup: 'Static Sites' },

  // Hardware & IoT
  { name: 'ESP32', desc: 'WiFi & Bluetooth microcontroller.', categories: ['hardware'], url: 'https://www.espressif.com/', iconSlug: 'espressif', subgroup: 'Hardware & IoT' },
  { name: 'Arduino', desc: "Maker's friend.", categories: ['hardware'], url: 'https://www.arduino.cc/', iconSlug: 'arduino' },
  { name: 'Raspberry Pi', desc: 'Credit card computer.', categories: ['hardware'], url: 'https://www.raspberrypi.com/', iconSlug: 'raspberrypi' },
  { name: 'Windows', desc: 'Desktop OS.', categories: ['hardware'], url: 'https://www.microsoft.com/windows', iconType: 'windows' },
  { name: 'Linux', desc: 'Open source OS.', categories: ['hardware'], url: 'https://www.linux.org/', iconSlug: 'linux' },
  { name: 'Unix', desc: 'Server foundation.', categories: ['hardware'], iconType: 'server' },
  { name: 'Android', desc: 'Mobile OS.', categories: ['hardware'], url: 'https://www.android.com/', iconSlug: 'android' },

  // Design & Docs
  { name: 'Mermaid.js', desc: 'Flowcharts via Markdown.', categories: ['design'], url: 'https://mermaid.live/', iconSlug: 'mermaid', subgroup: 'Design & Documentation' },
  { name: 'PlantUML', desc: 'Architecture as code.', categories: ['design'], url: 'https://plantuml.com/', iconType: 'sitemap' },
  { name: 'UML', desc: 'System modeling.', categories: ['design'], iconType: 'diagram' },
  { name: 'Visio', desc: 'Microsoft diagramming.', categories: ['design', 'tools'], url: 'https://www.microsoft.com/en-us/microsoft-365/visio/', iconType: 'draw' },
  { name: 'Miro', desc: 'Collaborative whiteboard.', categories: ['design', 'tools'], url: 'https://miro.com/', iconSlug: 'miro' },
  { name: 'Notion', desc: 'Brain cache.', categories: ['design', 'tools'], url: 'https://www.notion.so/', iconSlug: 'notion' },
  { name: 'Docusaurus', desc: 'Documentation sites.', categories: ['design'], url: 'https://docusaurus.io/', iconSlug: 'docusaurus' },
  { name: 'Swagger', desc: 'API documentation.', categories: ['design'], url: 'https://swagger.io/', iconSlug: 'swagger' },
  { name: 'Markdown', desc: 'Lightweight markup.', categories: ['languages', 'design'], url: 'https://www.markdownguide.org/', iconSlug: 'markdown' },

  // Project Mgmt
  { name: 'Jira', desc: 'Agile project tracking.', categories: ['projectmgmt'], url: 'https://www.atlassian.com/software/jira', iconSlug: 'jira', subgroup: 'Project Management' },
  { name: 'Trello', desc: 'Kanban boards.', categories: ['projectmgmt'], url: 'https://trello.com/', iconSlug: 'trello' },
  { name: 'MS Project', desc: 'Enterprise PM tool.', categories: ['projectmgmt'], url: 'https://www.microsoft.com/en-us/microsoft-365/project/', iconType: 'tasks' },

  // Testing & Automation
  { name: 'Vitest', desc: 'Fast Vite-native test runner.', categories: ['testing', 'tools', 'devops'], url: 'https://vitest.dev/', iconSlug: 'vitest', subgroup: 'Testing & Automation' },
  { name: 'Playwright', desc: 'Cross-browser E2E automation.', categories: ['testing', 'tools', 'devops'], url: 'https://playwright.dev/', iconType: 'playwright' },
  { name: 'Cypress', desc: 'Developer-friendly browser testing.', categories: ['testing', 'tools', 'devops'], url: 'https://www.cypress.io/', iconSlug: 'cypress' },

  // Utilities & Development
  { name: 'VS Code', desc: 'Still trying to figure out how to exit Vim.', categories: ['tools'], url: 'https://code.visualstudio.com/', iconType: 'code', subgroup: 'Development & Editors' },
  { name: 'Antigravity IDE', desc: 'A playful, experimental coding environment.', categories: ['tools'], iconType: 'sparkles' },
  { name: 'Cursor', desc: 'AI-first code editor.', categories: ['tools', 'ai'], url: 'https://cursor.com/', iconType: 'terminal' },
  { name: 'Vite', desc: 'Next-gen frontend tooling.', categories: ['tools'], url: 'https://vite.dev/', iconSlug: 'vite' },
  { name: 'Immich', desc: 'Self-hosted photos.', categories: ['tools'], url: 'https://immich.app/', iconSlug: 'immich', subgroup: 'Self-Hosted & Services' },
  { name: 'AdGuard Home', desc: 'Network-wide ad & tracker blocking.', categories: ['tools'], url: 'https://adguard.com/', iconSlug: 'adguard' },
  { name: 'Eclipse Mosquitto', desc: 'Lightweight MQTT broker.', categories: ['tools'], url: 'https://mosquitto.org/', iconType: 'broadcast' },
  { name: 'MinIO', desc: 'High-performance object storage.', categories: ['tools'], url: 'https://min.io/', iconSlug: 'minio' },
  { name: 'PDF24', desc: "Ugly UI, but it's free and works.", categories: ['tools'], url: 'https://tools.pdf24.org', iconType: 'pdf', subgroup: 'Productivity & Media' },
  { name: 'Lightroom', desc: 'Color grading reality.', categories: ['tools'], url: 'https://www.adobe.com/products/photoshop-lightroom.html', iconType: 'sliders' },
  { name: 'MS Office', desc: 'Productivity suite.', categories: ['tools'], url: 'https://www.microsoft.com/en-us/microsoft-365', iconType: 'file' },
  { name: 'cwebp', desc: 'WebP converter.', categories: ['tools'], url: 'https://developers.google.com/speed/webp', iconType: 'image' },
  { name: 'Google Antigravity', desc: 'Playful gravity-defying Google trick.', categories: ['tools'], url: 'https://elgoog.im/gravity/', iconType: 'meteor' },

  // AI & Agents
  { name: 'Claude', desc: "Anthropic's conversational & coding model.", categories: ['ai'], url: 'https://claude.ai/', iconSlug: 'claude', subgroup: 'AI & Large Language Models' },
  { name: 'Gemini', desc: "Google's multimodal coding companion.", categories: ['ai'], url: 'https://gemini.google.com/', iconSlug: 'googlegemini' },
  { name: 'Gemma', desc: "Google's lightweight open model family.", categories: ['ai'], url: 'https://ai.google.dev/gemma', iconType: 'brain' },
  { name: 'Kilo Code', desc: 'Developer assistant and autocomplete.', categories: ['ai'], url: 'https://www.kilocode.com/', iconType: 'keyboard' },
  { name: 'Roo Code', desc: 'Autonomous agentic coding assistant for VS Code.', categories: ['ai'], url: 'https://github.com/roocodetool/roocode', iconType: 'robot' },
  { name: 'Qodo', desc: 'AI-driven testing, review, and code integrity.', categories: ['ai'], url: 'https://www.qodo.ai/', iconType: 'check' },
  { name: 'GitHub Copilot', desc: 'The classic AI-powered code pair programmer.', categories: ['ai'], url: 'https://github.com/features/copilot', iconSlug: 'githubcopilot' },
  { name: 'ChatGPT', desc: "OpenAI's general-purpose assistant & models.", categories: ['ai'], url: 'https://chatgpt.com/', iconType: 'openai' },
  { name: 'Ollama', desc: 'Run open-source LLMs locally on your hardware.', categories: ['ai', 'tools'], url: 'https://ollama.com/', iconSlug: 'ollama' },
  { name: 'OpenRouter', desc: 'Unified API gateway for querying leading LLMs.', categories: ['ai'], url: 'https://openrouter.ai/', iconType: 'network' },
  { name: 'DeepSeek', desc: 'Advanced, high-performance reasoning & coding models.', categories: ['ai'], url: 'https://www.deepseek.com/', iconSlug: 'deepseek' },
];
