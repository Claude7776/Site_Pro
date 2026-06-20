export const expertiseDomains = [
  {
    id: 'sysadmin',
    icon: '🖥️',
    title: 'Administration Systèmes & Serveurs',
    items: [
      'Déploiement et administration de serveurs Linux Ubuntu',
      'Configuration : Samba, FTP, Cockpit, Pi-hole, ClamAV, Nginx',
      'Gestion des mises à jour et maintenance continue',
      'Surveillance des performances : Glances, Atop, logs système',
    ],
    tags: ['Linux Ubuntu', 'Samba', 'Nginx', 'Pi-hole', 'ClamAV', 'Cockpit'],
  },
  {
    id: 'network',
    icon: '🌐',
    title: 'Réseaux & Infrastructure',
    items: [
      'Configuration de réseaux d\'entreprise (DNS, DHCP, Pare-feu)',
      'Déploiement pfSense, Nginx Reverse Proxy',
      'Pi-hole sur réseau local — blocage publicités & trackers',
      'Audit adressages réseau et surveillance des équipements',
    ],
    tags: ['DNS', 'DHCP', 'pfSense', 'Reverse Proxy', 'Pi-hole', 'VLAN'],
  },
  {
    id: 'security',
    icon: '🔐',
    title: 'Cybersécurité',
    items: [
      'Sécurisation d\'infrastructures réseau et serveurs',
      'Analyse de logs, surveillance et réponse aux incidents',
      'Laboratoires pratiques : TryHackMe, Hack The Box',
      'Simulation SOC — Détection et analyse d\'incidents',
    ],
    tags: ['pfSense', 'IDS/IPS', 'SOC', 'TryHackMe', 'HackTheBox', 'Fail2Ban'],
  },
  {
    id: 'devops',
    icon: '⚙️',
    title: 'DevOps & Cloud',
    items: [
      'Déploiement d\'applications sur VPS (Linux, Nginx)',
      'Containerisation avec Docker & Docker Compose',
      'Mise en place de pipelines CI/CD',
      'Gestion de domaines : Vercel, Hostinger, Let\'s Encrypt',
    ],
    tags: ['Docker', 'CI/CD', 'VPS', 'Nginx', 'Vercel', 'Hostinger'],
  },
  {
    id: 'automation',
    icon: '🔄',
    title: 'Automatisation',
    items: [
      'Création de workflows automatisés avec n8n',
      'Intégration d\'APIs REST, Webhooks & connecteurs métier',
      'Automatisation de notifications, devis et paiements',
    ],
    tags: ['n8n', 'Webhooks', 'REST API', 'Stripe', 'YouSign', 'Mailjet'],
  },
  {
    id: 'dev',
    icon: '💻',
    title: 'Développement Web & Applications',
    items: [
      'CRM complets : auth, messagerie temps réel, dashboard',
      'Paiement Stripe, gestion des rôles, thèmes Dark/Light',
      'Stack : React, Node.js, Python, Flask, HTML/CSS',
    ],
    tags: ['React', 'Node.js', 'Python', 'Flask', 'JavaScript', 'HTML/CSS'],
  },
  {
    id: 'callcenter',
    icon: '📞',
    title: 'Infrastructure Call Center',
    items: [
      'Déploiement de laboratoire Vicibox',
      'Appels entrants/sortants et Predictive Dialing',
      'Enregistrement des appels, sauvegarde et restauration',
      'Monitoring et optimisation des performances',
    ],
    tags: ['Vicibox', 'Asterisk', 'VoIP', 'Predictive Dialing'],
  },
  {
    id: 'support',
    icon: '🛠️',
    title: 'Support & Maintenance IT',
    items: [
      'Assistance à distance et sur site (Windows & Linux)',
      'Résolution d\'incidents et maintenance logicielle',
      'Outils : IP Scanner, Radmin, Process Explorer, SFC',
      'Réparation de pilotes et gestion des anomalies système',
    ],
    tags: ['Radmin', 'IP Scanner', 'Windows', 'Linux', 'SFC'],
  },
  {
    id: 'architecture',
    icon: '🧠',
    title: 'Architecture Logicielle',
    items: [
      'Conception d\'architectures documentées (Frontend / Backend / Infra / Sécu)',
      'Stratégies de tests : Jest, Vitest',
      'Documentation technique complète des projets livrés',
    ],
    tags: ['Jest', 'Vitest', 'UML', 'MERISE', 'Documentation'],
  },
  {
    id: 'iam',
    icon: '🏢',
    title: 'Gestion des Identités & IAM',
    items: [
      'Administration Active Directory et LDAP',
      'Gestion centralisée des utilisateurs et permissions (RBAC)',
      'Intégration services Linux avec annuaires d\'entreprise',
      'Environnements hybrides Windows / Linux',
    ],
    tags: ['Active Directory', 'LDAP', 'RBAC', 'Samba', 'DNS', 'DHCP'],
  },
]

export const visionItems = [
  { icon: '🔐', label: 'Sécurisés' },
  { icon: '⚙️', label: 'Automatisés' },
  { icon: '☁️', label: 'Cloud-ready' },
  { icon: '📈', label: 'Évolutifs' },
  { icon: '🛰️', label: 'Pensés pour durer' },
]
