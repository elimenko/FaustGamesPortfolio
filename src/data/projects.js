export const projects = [
  {
    id: 'sinistrum',
    tier: 'primary',
    name: 'Sinistrum',
    genre: 'Asymmetric Multiplayer Horror',
    perspective: 'First Person',
    timeSpent: '800+',
    description:
      'Play as a crew navigating various sci-fi scenarios — while some of you become possessed by a demonic entity and secretly plot against the team. Trust no one, survive everything.',
    technologies: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
      'GAS',
      'PCG',
      'EOS & Steam Integration',
    ],
    techDetails:
      'C++ handles core logic and complex networked flows. Blueprints drive GAS configuration, materials, animation blueprints, and UI logic.',
    highlights: [
      'True First Person with visible body',
      'Network-replicated spaceship movement',
      'Replicated custom gravity system',
      'Replicated power grid system',
      'Dynamic goals system (team & personal)',
      'Inventory Framework via GAS',
      'Modular equipment system',
      'AI behaviour trees with navigation',
      'Hit-scan & projectile weapons via GAS',
      'Melee combat system via GAS',
      'MetaHumans with customization',
      'Dynamic day-night cycle & weather',
    ],
    frameworks: [
      'Gameplay Framework',
      'Gameplay Ability System (GAS)',
      'PCG (Procedural Content Generation)',
      'Inventory Framework Plugin',
      'EOS / Steam Online Subsystem',
    ],
    media: [
      { type: 'image', src: '/media/sinistrum/screenshot1.png', alt: 'Ritual site' },
      { type: 'image', src: '/media/sinistrum/screenshot2.png', alt: 'Inventory' },
      { type: 'image', src: '/media/sinistrum/screenshot3.png', alt: 'Possession' },
      // { type: 'video', src: '/media/sinistrum/trailer.mp4', poster: '/media/sinistrum/poster.jpg' },
    ],
  },
  {
    id: 'jumpquest',
    tier: 'secondary',
    name: 'JumpQuest',
    genre: 'Multiplayer Physics-Based Jump Puzzle',
    perspective: 'First Person',
    timeSpent: '100+',
    description:
      'Play as various fantasy characters, solving jump puzzles to reach your goals using a range of unique abilities — and the unpredictable physics of other players.',
    technologies: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
    ],
    techDetails:
      'C++ handles core logic and complex networked flows. Blueprints are used primarily for animations.',
    highlights: [
      'Physics-based interactions between players — grabbing, kicking, pushing',
      'Custom implementation of grabbable rope physics with network replication',
      'Replicated dynamic climbing system',
    ],
    frameworks: [],
    media: [
      { type: 'video', src: '/media/jump-quest/JumpQuestRopeOverview.mp4', alt: 'JumpQuest — Rope Physics Overview' },
    ],
  },
  {
    id: 'sincleaners',
    tier: 'secondary',
    name: 'SinCleaners',
    genre: 'Multiplayer Survival / Base Building',
    perspective: 'First Person',
    timeSpent: '100+',
    description:
      'Play as medieval monks in a dark fantasy setting — tend to your parishioners by day and fight unholy forces by night. Build, pray, survive.',
    technologies: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
    ],
    techDetails:
      'C++ handles core logic and complex networked flows. Blueprints are used primarily for animations.',
    highlights: [
      'AI logic for pathfinding and obstacle destruction',
      'Custom day/night cycle system',
      'Landscape generation using heightmaps',
    ],
    frameworks: [],
    media: [],
  },
]

export const courses = [
  {
    id: 'ue5-cpp-developer',
    title: 'Unreal Engine 5 C++ Developer',
    author: 'GameDev.tv × Epic Games',
    platform: 'Udemy',
    overview:
      'A comprehensive, project-based course built in collaboration with Epic Games. Covers C++ from scratch through four complete UE 5.6 games — a platformer, a first-person puzzle, a tank battler, and a third-person shooter.',
    learned: [
      'C++ fundamentals and Object-Oriented Programming in a game context',
      'Unreal Gameplay Framework and when to choose C++ vs Blueprints',
      'Line tracing, Enhanced Input System, delegates, and component architecture',
      'AI behaviour, animation blueprints, particle effects, and HUD/UI',
      'Level lighting and optimisation with Lumen',
    ],
    githubUrl: '',
    certificateUrl: '/certificates/ue5-cpp-developer.pdf',
    tags: ['Unreal Engine 5', 'C++', 'Blueprints', 'AI', 'GAS'],
  },
  {
    id: 'ue4-multiplayer-cpp',
    title: 'Unreal Engine 4 Mastery: Create Multiplayer Games with C++ (Updated to UE5)',
    author: 'Tom Looman (former Epic Games engineer)',
    platform: 'Udemy',
    overview:
      'An Epic Games-approved, hands-on course focused on multiplayer C++ development in UE4. Build a first-person stealth game and a co-op third-person shooter while mastering AI, networking, and the Gameplay Framework.',
    learned: [
      'Multiplayer-ready game architecture and Unreal networking',
      'Multiple AI enemy types and behaviour patterns',
      'Exposing C++ to Blueprint for hybrid workflows',
      'Gameplay mechanics — weapons, power-ups, characters, guards',
      'Unreal Gameplay Framework fundamentals for any genre',
    ],
    githubUrl: '',
    certificateUrl: '/certificates/ue4-multiplayer-cpp.pdf',
    tags: ['Unreal Engine 5', 'C++', 'Multiplayer', 'AI', 'Blueprints'],
  },
  {
    id: 'ue4-multiplayer-master',
    title: 'Unreal C++ Multiplayer Master: Intermediate Game Dev (Updated to UE5)',
    author: 'GameDev.tv × Epic Games',
    platform: 'Udemy',
    overview:
      'An intermediate, Epic Games-collaborated course on building online and LAN multiplayer games. Covers networking theory, state replication, Steam API integration, and UMG-based UI — all in C++.',
    learned: [
      'Multiplayer networking fundamentals — latency, state synchronisation, replication',
      'Steam API integration for online play with friends',
      'UI design with Unreal Motion Graphics (UMG)',
      'LAN and online session management',
      'Server-client architecture and how Unreal replicates state',
    ],
    githubUrl: '',
    certificateUrl: '/certificates/ue4-multiplayer-master.pdf',
    tags: ['Unreal Engine 5', 'C++', 'Multiplayer', 'Networking', 'Steam API'],
  },
  {
    id: 'ue5-inventory-systems',
    title: 'Unreal Engine 5 C++ Inventory Systems',
    author: 'Stephen Ulibarri',
    platform: 'Udemy',
    overview:
      'An intermediate-to-advanced course on building a full spatial inventory system as a standalone UE5 plugin. Covers grid-based inventories, stackable/consumable/equippable items, an Item Fragment architecture for modularity, and full multiplayer support (Listen Server & Dedicated).',
    learned: [
      'Spatial inventory grids with multiple item categories',
      'Item Fragment pattern for modular, scalable item behaviour',
      'Stackable items — splitting, combining, consuming, and dropping',
      'Equipment slots and real in-game equipping (weapons, cloaks, masks)',
      'Multiplayer-ready inventory replication (Listen & Dedicated Server)',
    ],
    githubUrl: '',
    certificateUrl: '/certificates/ue5-inventory-systems.pdf',
    tags: ['Unreal Engine 5', 'C++', 'Inventory', 'Multiplayer', 'GAS'],
  },
  {
    id: 'ue5-gas-crash-course',
    title: 'Unreal Engine 5 Gameplay Ability System (GAS) Crash Course',
    author: 'Stephen Ulibarri',
    platform: 'Udemy',
    overview:
      'A comprehensive deep dive into GAS. Build a combat game with AI enemies from scratch using Paragon assets, covering every core GAS component — Abilities, Attributes, Effects, Cues, Tasks, and Tags — in both C++ and Blueprint.',
    learned: [
      'Gameplay Abilities for combat, hit reacts, AI behaviour, and more',
      'Attribute Sets, Gameplay Effects, and UI-bound attribute changes',
      'Gameplay Cues — montages, camera shakes, Niagara particles',
      'Ability Tasks and custom latent task nodes in C++',
      'Gameplay Tags management, cost/cooldown systems, and Blueprint-to-C++ conversion',
    ],
    githubUrl: '',
    certificateUrl: '/certificates/ue5-gas-crash-course.pdf',
    tags: ['Unreal Engine 5', 'C++', 'GAS', 'AI', 'Blueprints'],
  },
]

// Levels: 1 = Basic, 2 = Proficient, 3 = Advanced, 4 = Expert
export const skills = [
  {
    category: 'Unreal Engine Core',
    items: [
      { name: 'C++ in Unreal Engine', level: 3, note: '800+ hrs in primary project, 5 completed courses' },
      { name: 'Blueprints', level: 3, note: 'Used across all projects; hybrid C++/BP workflows' },
      { name: 'Gameplay Framework', level: 3, note: 'Deep understanding from courses and multi-project experience' },
    ],
  },
  {
    category: 'UE Gameplay Systems',
    items: [
      { name: 'Gameplay Ability System (GAS)', level: 3, note: 'Dedicated course + full migration of combat systems in Sinistrum' },
      { name: 'Multiplayer & Networking', level: 3, note: 'All projects multiplayer-ready; 2 dedicated networking courses; EOS & Steam' },
      { name: 'Inventory & Equipment Systems', level: 3, note: 'Dedicated course + Inventory Framework integration via GAS' },
      { name: 'AI — Behaviour Trees & Navigation', level: 2, note: 'Implemented in Sinistrum & SinCleaners; covered in multiple courses' },
      { name: 'Physics & Interaction Systems', level: 2, note: 'Custom rope physics, climbing, player-to-player interactions' },
    ],
  },
  {
    category: 'UE Tools & Integration',
    items: [
      { name: 'EOS / Steam Online Subsystem', level: 2, note: 'Full integration in Sinistrum + course coverage' },
      { name: 'PCG (Procedural Content Generation)', level: 2, note: 'Used in Sinistrum for procedural level content' },
      { name: 'UMG / UI Design', level: 2, note: 'HUD, inventory UI, menus across projects and courses' },
      { name: 'Animation Blueprints', level: 2, note: 'Character animation logic across all projects' },
      { name: 'Niagara / VFX', level: 1, note: 'Particle effects and gameplay cues via GAS course' },
      { name: 'MetaHumans', level: 1, note: 'Basic character customisation in Sinistrum' },
    ],
  },
  {
    category: 'General Engineering',
    items: [
      { name: 'OOP & Functional Design', level: 4, note: 'Design patterns, functional composition, delegates, and pure functions across systems' },
      { name: 'Problem Solving & Debugging', level: 4, note: 'Core strength from decade of engineering' },
      { name: 'Full-Stack Web Development', level: 4, note: 'React, Vue, Node.js, NestJS and more — 10+ years enterprise experience' },
      { name: 'Version Control (Git)', level: 4, note: 'Used across all projects' },
      { name: 'Software Architecture', level: 2, note: '4+ years of professional architecture experience' },
    ],
  },
]

export const skillLevels = {
  1: 'Basic',
  2: 'Proficient',
  3: 'Advanced',
  4: 'Expert',
}
