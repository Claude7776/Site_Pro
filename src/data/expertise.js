export const expertiseDomains = [
  {
    id: 'security',
    icon: 'lock',
    title: 'Cybersécurité & Sécurité Infrastructure',
    items: [
      'Durcissement (hardening) d\'infrastructures réseau et serveurs',
      'Analyse de logs, surveillance SIEM et réponse aux incidents',
      'Segmentation réseau, IDS/IPS et politiques de moindre privilège',
      'Laboratoires offensifs/défensifs : TryHackMe, Hack The Box',
      'Simulation SOC — détection, triage et analyse d\'incidents',
    ],
    tags: ['pfSense', 'IDS/IPS', 'SOC', 'SIEM', 'TryHackMe', 'HackTheBox', 'Fail2Ban'],
  },
  {
    id: 'network',
    icon: 'globe',
    title: 'Réseaux & Infrastructure',
    items: [
      'Configuration de réseaux d\'entreprise (DNS, DHCP, Pare-feu)',
      'Déploiement pfSense, Nginx Reverse Proxy',
      'Segmentation VLAN et durcissement des accès équipements',
      'Pi-hole sur réseau local — blocage publicités & trackers',
      'Audit adressages réseau et surveillance des équipements',
    ],
    tags: ['DNS', 'DHCP', 'pfSense', 'Reverse Proxy', 'Pi-hole', 'VLAN'],
  },
  {
    id: 'iam',
    icon: 'building',
    title: 'Gestion des Identités & IAM',
    items: [
      'Administration Active Directory et LDAP',
      'Gestion centralisée des utilisateurs et permissions (RBAC)',
      'Intégration services Linux avec annuaires d\'entreprise',
      'Environnements hybrides Windows / Linux',
    ],
    tags: ['Active Directory', 'LDAP', 'RBAC', 'Samba', 'DNS', 'DHCP'],
  },
  {
    id: 'sysadmin',
    icon: 'monitor',
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
    id: 'devops',
    icon: 'gear',
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
    icon: 'sync',
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
    icon: 'laptop',
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
    icon: 'phone',
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
    icon: 'wrench',
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
    icon: 'brain',
    title: 'Architecture Logicielle',
    items: [
      'Conception d\'architectures documentées (Frontend / Backend / Infra / Sécu)',
      'Stratégies de tests : Jest, Vitest',
      'Documentation technique complète des projets livrés',
    ],
    tags: ['Jest', 'Vitest', 'UML', 'MERISE', 'Documentation'],
  },
]

export const visionItems = [
  { icon: 'lock', label: 'Sécurisés' },
  { icon: 'gear', label: 'Automatisés' },
  { icon: 'cloud', label: 'Cloud-ready' },
  { icon: 'chartUp', label: 'Évolutifs' },
  { icon: 'satellite', label: 'Pensés pour durer' },
]
