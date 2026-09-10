import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Database, Brain, Code, BarChart3, Server, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Diagnostic territorial de la protection de l'enfance",
      period: "2026",
      company: "Projet Data public — données DREES",
      description: "J'ai réalisé une analyse territoriale complète des mesures d'aide sociale à l'enfance (ASE) en France. Le projet transforme des données publiques complexes en résultats directement lisibles : disparités géographiques, évolution entre 2015 et 2024, liens entre placement et actions éducatives, puis segmentation des territoires par K-means. L'analyse couvre 103 territoires et 18 régions, avec des contrôles de qualité, des indicateurs statistiques et une restitution cartographique pensée pour l'aide à la décision.",
      achievements: ["103 territoires analysés", "99 territoires en hausse entre 2015 et 2024", "18 régions comparées", "Typologie territoriale par K-means", "Notebook, données préparées et résultats reproductibles"],
      impact: ["Repérage immédiat des disparités territoriales", "Visualisations accessibles aux décideurs", "Analyse reproductible à partir de données publiques"],
      tags: ["Python", "Pandas", "GeoPandas", "Scikit-learn", "K-means", "Matplotlib", "Data Visualisation"],
      githubUrl: "https://github.com/Boubanda/diagnostic-territorial-protection-enfance",
      images: [
        { src: "/projects/ase/carte-regionale.png", alt: "Carte des taux de mesures ASE par région" },
        { src: "/projects/ase/evolution-territoires.png", alt: "Distribution de l'évolution des mesures ASE entre 2015 et 2024" },
        { src: "/projects/ase/placement-actions.png", alt: "Comparaison entre placements et actions éducatives" },
        { src: "/projects/ase/profils-territoriaux.png", alt: "Profils territoriaux issus du clustering K-means" }
      ],
      highlight: true
    },
    {
      title: "Analyse de Sentiment - Avis Clients Bancaires",
      period: "2025",
      company: "Projet Personnel",
      description: "J'ai développé une solution end-to-end d'analyse automatique des avis clients pour le secteur bancaire, en utilisant des techniques avancées de NLP et Machine Learning. Le système traite automatiquement plus de 3700 avis clients, les classe par sentiment (positif, négatif, neutre) avec 85% de précision, et génère des tableaux de bord KPIs en temps réel. L'application propose trois modes d'analyse complémentaires : traitement individuel pour analyse détaillée, traitement par lot avec export CSV pour intégration dans d'autres outils, et un dashboard statistiques pour pilotage stratégique. Cette solution est directement applicable aux applications Boursorama et L'Appli SG, touchant potentiellement 31 millions de clients, permettant de prioriser automatiquement les avis nécessitant une action rapide et d'identifier les tendances de satisfaction en temps réel.",
      achievements: ["85% de précision classification sentiments", "3700+ avis traités automatiquement", "73,7% satisfaction détectée", "Interface temps réel avec KPIs", "3 modes : individuel, batch CSV, dashboard"],
      impact: ["Priorisation automatique avis négatifs", "Tendances satisfaction temps réel", "Application directe 31M clients SG/BNP"],
      tags: ["NLP", "Scikit-learn", "Random Forest", "Streamlit", "FastAPI", "Docker", "Plotly"],
      highlight: true
    },
    {
      title: "FraudGuard AI - Détection Fraude Temps Réel",
      period: "2025",
      company: "Projet Personnel",
      description: "J'ai conçu une plateforme complète de détection de fraude bancaire en temps réel avec une architecture robuste garantissant conformité RGPD, PSD2 et ACPR. Le système analyse chaque transaction en moins de 100ms grâce à une API REST haute performance, utilise des modèles de Machine Learning atteignant 93,5% de précision sur données réelles avec seulement 4% de faux positifs, limitant ainsi les blocages injustifiés de clients. La solution intègre une interface de supervision temps réel pour les analystes, un système d'IA explicable justifiant chaque décision pour conformité RGPD, et génère des rapports d'audit automatisés. Avec un ROI estimé à +354% et des économies projetées de 3,47 millions d'euros par an, cette plateforme stratégique renforce la confiance des clients tout en réduisant drastiquement les pertes financières liées à la fraude.",
      achievements: ["93,5% précision données réelles", "Faux positifs < 4%", "ROI +354%", "Économies 3,47M€/an", "API < 100ms"],
      impact: ["Dashboard exécutif KPIs", "Conformité PSD2, ACPR, RGPD", "Projection impact temps réel"],
      compliance: ["RGPD : IA explicable", "PSD2 : Paiements européens", "ACPR : Contrôle prudentiel"],
      tags: ["FastAPI", "Scikit-learn", "Streamlit", "ML", "RGPD", "Fraud Detection"],
      highlight: true
    },
    {
      title: "Extraction OCR - SDNC/DGFiP",
      period: "2025",
      company: "Service Documentation Nationale Cadastre",
      description: "J'ai développé une application MOA complète de numérisation et extraction intelligente de données pour la Direction Générale des Finances Publiques, spécifiquement adaptée aux besoins du SDNC, BNIC et SAPF. Le système gère des documents jusqu'à 200 Mo dans tous formats (PDF, PNG, JPG, TIFF), extrait automatiquement 6 champs clés (références, noms, dates, montants, SIRET, emails) via OCR Tesseract optimisé pour le français administratif, et propose une interface de validation manuelle intuitive pour les agents non techniques. L'application permet l'export interopérable en CSV/JSON pour intégration directe dans Power BI et Dataiku, traite des millions de documents annuels, et s'inscrit dans la modernisation des chaînes de numérisation nationales pour le cadastre et la fiscalité avec une solution légère, adaptable et reproductible.",
      achievements: ["OCR multi-format jusqu'à 200 Mo", "6 champs clés auto-extraits", "Interface agents non techniques", "Export CSV/JSON Power BI"],
      impact: ["Modernisation chaînes nationales", "Millions documents annuels", "Interface simplifiée métier"],
      moa: ["Approche MOA SDNC/DGFiP", "UX agents cadastre", "Adaptable SAPF, BNIC, SDNC"],
      tags: ["MOA", "OCR", "Tesseract", "Streamlit", "DGFiP", "SDNC", "Cadastre"],
      highlight: true
    },
    {
      title: "Dashboard Parcours Patients - GIP SESAN",
      period: "2025",
      company: "Candidature Alternance GIP SESAN",
      description: "J'ai créé un dashboard R Shiny interactif complet pour l'analyse des parcours patients dans le cadre de la transformation numérique de la santé francilienne. Le système intègre des données réalistes de 2500 patients, 150 professionnels et environ 12000 consultations sur 20 mois, avec modélisation de l'impact COVID et de la saisonnalité. L'application propose une carte géographique interactive Leaflet des 15 établissements franciliens, une analyse avancée de réseau social des professionnels avec métriques de centralité et clustering de Louvain, des visualisations Plotly pour les KPIs métier, et un modèle prédictif estimant 81% d'adoption de la téléconsultation fin 2025. Conforme aux normes SNDS, CIM-10, RGPD et HL7 FHIR, cette solution opérationnelle permet le pilotage Santelien en temps réel, l'optimisation des parcours de soins et fournit des KPI actionnables pour la direction du GIP SESAN.",
      achievements: ["2500 patients, 150 pros, 12000 consultations", "Carte 15 établissements", "Réseau social centralité", "Prédiction 81% adoption 2025"],
      impact: ["Pilotage Santelien temps réel", "Optimisation parcours", "KPI direction GIP SESAN"],
      health: ["Conformité SNDS, CIM-10, RGPD, HL7 FHIR", "Impact COVID modélisé", "15 spécialités médicales"],
      tags: ["R", "Shiny", "Plotly", "Leaflet", "Healthcare", "Network Analysis"],
      highlight: true
    },
    {
      title: "IA Matching Recrutement - Seed Tech",
      period: "01/2025 - 04/2025",
      company: "SEED / Aivancity Cachan",
      description: "J'ai développé une solution innovante de matching IA pour optimiser le recrutement dans le secteur tech en automatisant l'extraction et la correspondance des compétences. En utilisant des modèles de NLP avancés (DeepSeek avec 95% de précision et Mistral à 89%), couplés à un algorithme XGBoost atteignant 87% de matching pertinent, le système a permis de réduire de 60% le temps de tri des candidatures. Le projet, mené en méthodologie agile, intègre un prototype interactif avec interface ajustable permettant aux recruteurs d'affiner les critères de matching en temps réel, renforçant ainsi mes compétences en NLP, machine learning et gestion de projet.",
      achievements: ["DeepSeek 95%, Mistral 89%", "XGBoost 87% matching", "Réduction 60% temps tri", "Interface ajustable"],
      tags: ["NLP", "XGBoost", "DeepSeek", "Mistral"]
    },
    {
      title: "Prédiction Qualité du Vin",
      period: "04/2025 - 05/2025",
      company: "Projet Personnel - Paris",
      description: "J'ai réalisé un projet complet de machine learning pour prédire la qualité des vins rouges et blancs à partir de 6497 échantillons du UCI Repository. Après un prétraitement approfondi incluant normalisation et analyse exploratoire, j'ai comparé rigoureusement trois modèles de régression : régression linéaire (R²≈0.28), SVR (R²≈0.48) et Random Forest (R²≈0.60). Le modèle Random Forest, sélectionné comme le plus performant avec une MAE de 0.45, a été validé sur un split 80/20 garantissant la robustesse des prédictions et permettant une estimation fiable de la qualité du vin basée sur ses propriétés physico-chimiques.",
      achievements: ["Random Forest R²=0.60 MAE=0.45", "SVR R²≈0.48", "6497 échantillons UCI", "Split 80/20 validation"],
      tags: ["Random Forest", "SVR", "Scikit-learn", "Data Analysis"]
    },
    {
      title: "Analyse Sentiment avec BERT",
      period: "03/2025",
      company: "Aivancity Cachan",
      description: "J'ai développé plusieurs projets NLP utilisant BERT pour l'analyse de sentiment avec 85% de précision, en implémentant des modèles Deep Learning avancés via TensorFlow et PyTorch pour le traitement du langage naturel. Ces projets m'ont permis de maîtriser les frameworks d'IA générative incluant LLMs, YOLOv pour la computer vision, ainsi que les architectures GANs et VAE. J'ai également travaillé sur des approches Data-Centric AI, renforçant ma capacité à concevoir et déployer des solutions d'intelligence artificielle générative innovantes et performantes.",
      achievements: ["85% précision BERT", "Deep Learning TF/PyTorch", "Frameworks IA générative", "Computer Vision"],
      tags: ["BERT", "NLP", "Deep Learning", "TensorFlow", "PyTorch"]
    },
    {
      title: "Extraction Données Montres Connectées",
      period: "01/2024 - 03/2024",
      company: "Uiz.care / Aivancity Cachan",
      description: "J'ai conçu un système complet d'extraction de données de santé depuis des montres connectées (Google Fit, Fitbit) utilisant l'authentification OAuth 2.0 pour sécuriser l'accès aux APIs. Le script développé sur Android Studio et Jupyter Notebook a permis de collecter et traiter plus de 15000 données de santé (fréquence cardiaque, nombre de pas, calories brûlées) sur deux semaines de tests intensifs. En utilisant les bibliothèques Pandas et NumPy pour le traitement et l'analyse, ce projet démontre ma capacité à intégrer des sources de données externes complexes et à construire des pipelines de données robustes pour l'analyse de données de santé.",
      achievements: ["15000+ données santé", "OAuth 2.0", "Pandas/NumPy", "Android Studio + Jupyter"],
      tags: ["OAuth 2.0", "API", "Pandas", "NumPy", "Android Studio"]
    },
    {
      title: "Analyse Données Apicoles",
      period: "06/2023 - 08/2023",
      company: "ENSL & Aivancity Cachan",
      description: "J'ai développé un système d'analyse et de détection d'anomalies impactant la santé des abeilles en traitant plus de 10000 enregistrements avec des techniques de machine learning avancées. En utilisant des modèles atteignant 85% de précision pour la détection de maladies végétales, j'ai ensuite conçu un réseau de neurones convolutifs (CNN) qui a amélioré la performance de classification de 15%, renforçant significativement la fiabilité du système de détection. Ce projet illustre ma capacité à travailler sur des problématiques environnementales complexes en appliquant des techniques d'IA pour résoudre des enjeux concrets de biodiversité.",
      achievements: ["10000+ enregistrements", "85% précision maladies", "CNN +15% classification", "Système fiable"],
      tags: ["CNN", "Machine Learning", "Computer Vision"]
    },
    {
      title: "Automatisation Extraction Données - Fairmat",
      period: "09/2024 - 12/2024",
      company: "Fairmat Cachan - Clinique IA Aivancity",
      description: "J'ai développé une solution complète d'automatisation pour l'extraction et l'analyse de données dans le cadre du recyclage innovant de la fibre de carbone chez Fairmat, startup française spécialisée dans l'économie circulaire. En utilisant Selenium pour le web scraping sur Amazon, j'ai collecté 14,631 enregistrements initiaux que j'ai transformés en une base exploitable de 6,572 produits après un pipeline rigoureux de nettoyage (suppression de 45% de doublons), traitement et enrichissement. Le système intègre une catégorisation automatique par détection de mots-clés atteignant 96% de précision, permettant d'identifier des opportunités commerciales dans des secteurs stratégiques comme les outils de bricolage (33,2% des produits). Les résultats, visualisés via des dashboards interactifs Tableau et Power BI, ont permis à Fairmat d'optimiser ses processus internes et d'identifier de nouveaux débouchés pour les matériaux recyclés, avec une analyse détaillée de plus de 12,000 données structurées couvrant prix, catégories, marques et caractéristiques techniques.",
      achievements: ["14,631 enregistrements collectés via Selenium", "Pipeline ETL complet : 6,572 produits finaux", "45% doublons supprimés, 96% mots-clés détectés", "Catégorisation automatique 9 catégories", "Dashboards Tableau/Power BI interactifs", "Analyse 33% outils bricolage, prix moyen 78€"],
      impact: ["Identification opportunités commerciales secteurs stratégiques", "Optimisation processus internes Fairmat", "Base exploitable pour modèles prédictifs et recommandations"],
      tags: ["Selenium", "Web Scraping", "Python", "Pandas", "SQL", "MongoDB", "Tableau", "Power BI", "ETL"]
    }
  ];

  const skillCategories = {
    "Langages": ["Python", "R", "SQL", "Spark", "JavaScript", "HTML", "CSS", "Shell/Bash"],
    "IA & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "BERT", "GPT", "Transformers"],
    "IA Générative": ["LangChain", "Hugging Face", "GANs", "VAE", "Fine-tuning LLM", "Prompt Engineering"],
    "Data Engineering": ["Airflow", "Databricks", "Snowflake", "Kafka", "PySpark", "Hadoop", "Docker", "Kubernetes"],
    "Bases de Données": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"],
    "Cloud & MLOps": ["Azure", "AWS", "GCP", "MLflow", "Kubeflow", "CI/CD", "SageMaker"],
    "Visualisation": ["Tableau", "Power BI", "Plotly", "Streamlit", "Shiny", "Matplotlib", "Seaborn"],
    "Computer Vision": ["YOLOv5/v8", "OpenCV", "ResNet", "Object Detection", "Image Segmentation", "OCR"],
    "NLP": ["BERT", "GPT", "spaCy", "NLTK", "Sentiment Analysis", "NER", "Text Classification"],
    "Web & APIs": ["FastAPI", "Flask", "Django", "REST API", "Selenium", "BeautifulSoup", "Scrapy"]
  };

  const softSkills = [
    "Travail d'équipe", "Communication", "Esprit analytique", "Autonomie", "Adaptabilité",
    "Orientation business", "Résolution problèmes", "Gestion temps", "Créativité", "Leadership"
  ];

  const certifications = [
    "Machine Learning & Neural Networks",
    "Python & SQL for Data Science & AI",
    "Big Data Foundations",
    "Mathematics for Data Science",
    "Introduction to Data Engineering"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Levi Junior BOUBANDA
            </h1>
            <div className="flex gap-6">
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-all ${
                    activeSection === section 
                      ? 'text-blue-400 font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section === 'about' ? 'À propos' : 
                   section === 'projects' ? 'Projets' :
                   section === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-52 h-52 rounded-full border-4 border-blue-500/40 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 shadow-2xl">
                <img 
                  src="/photo.jpeg"
                  alt="Levi Junior BOUBANDA"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/208x208/1e293b/3b82f6?text=LJB";
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-4 font-medium">
                Recherche Alternance - Septembre 2025
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Data Scientist, Analyst &
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  IA Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Aivancity School Paris-Villejuif Bac+4 | Data Engineering, Analytics & Intelligence Artificielle
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="mailto:leviboubanda07@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                  <Mail size={20} />
                  Contact
                </a>
                <a href="https://github.com/Boubanda" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href="/CV_Levi_data_analyst.pdf" 
                  download="CV_Levi_data_analyst.pdf"
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-green-500/50 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Télécharger CV
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-6 rounded-xl backdrop-blur-sm">
                <Database className="text-blue-400 mb-2" size={28} />
                <h3 className="font-bold mb-1">Data Engineering</h3>
                <p className="text-gray-400 text-xs">ETL, SQL, MongoDB</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-6 rounded-xl backdrop-blur-sm">
                <Brain className="text-purple-400 mb-2" size={28} />
                <h3 className="font-bold mb-1">Machine Learning</h3>
                <p className="text-gray-400 text-xs">Deep Learning, NLP</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 p-6 rounded-xl backdrop-blur-sm">
                <BarChart3 className="text-green-400 mb-2" size={28} />
                <h3 className="font-bold mb-1">Data Analysis</h3>
                <p className="text-gray-400 text-xs">Power BI, Tableau</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 p-6 rounded-xl backdrop-blur-sm">
                <TrendingUp className="text-orange-400 mb-2" size={28} />
                <h3 className="font-bold mb-1">MLOps</h3>
                <p className="text-gray-400 text-xs">Docker, Azure, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeSection === 'about' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              À propos <span className="text-blue-400">de moi</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Formation</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-white">Programme Grande École IA & Data (Bac+5)</h4>
                    <p className="text-gray-400 text-sm">Aivancity School of Technology, Villejuif</p>
                    <p className="text-gray-500 text-sm mb-2">2023 - 2027</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Intelligence Artificielle : ML, Deep Learning</li>
                      <li>• Computer Vision, NLP, LLM</li>
                      <li>• Data Engineering & MLOps</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="font-bold text-white">Classe Préparatoire Math/Physique (Bac+2)</h4>
                    <p className="text-gray-400 text-sm">École Supérieure Privée d'Ingénieur, Monastir</p>
                    <p className="text-gray-500 text-sm">2020 - 2022</p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="font-bold text-white">Baccalauréat Technologique</h4>
                    <p className="text-gray-400 text-sm">Lycée technique Omar Bongo, Libreville</p>
                    <p className="text-gray-500 text-sm">2019 - 2020</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Profil</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Passionné par la puissance transformative de l'IA et de la data, je mets mon expertise technique 
                  au service de projets où l'innovation algorithmique répond à des enjeux business concrets. 
                  Actuellement étudiant en Bac+4 à Aivancity School Paris-Villejuif (Programme Grande École en IA & Data), 
                  je me spécialise en Data Engineering et Intelligence Artificielle et recherche une alternance en 
                  Data Scientist ou Data Analyst. À travers l'optimisation des flux de données et l'industrialisation 
                  des pipelines, je souhaite contribuer à des projets stratégiques. Fort de solides compétences en 
                  Python, SQL, MongoDB, Airflow et en structuration de bases de données, je suis rigoureux, orienté 
                  solution, et prêt à m'intégrer au sein d'une équipe agile et dynamique.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Langues</h4>
                    <div className="flex justify-between text-sm">
                      <span>Français</span>
                      <span className="text-gray-400">Langue Maternelle</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Anglais</span>
                      <span className="text-gray-400">Intermédiaire (B2)</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="font-bold text-white mb-3">Centres d'Intérêt</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎹</span>
                        <div>
                          <p className="font-medium">Piano</p>
                          <p className="text-xs text-gray-400">Depuis 2019</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎸</span>
                        <div>
                          <p className="font-medium">Guitare</p>
                          <p className="text-xs text-gray-400">Depuis 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                    <BarChart3 size={18} />
                    Analyse & Visualisation
                  </h4>
                  <p className="text-sm text-gray-300">
                    Visualisations innovantes avec Tableau, Power BI. Maîtrise statistiques et probabilités.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                    <Database size={18} />
                    Data Engineering
                  </h4>
                  <p className="text-sm text-gray-300">
                    Extraction données complexes. Web Scraping, APIs, SQL/NoSQL. Pipelines ETL robustes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                    <Brain size={18} />
                    Intelligence Artificielle
                  </h4>
                  <p className="text-sm text-gray-300">
                    Modèles ML/DL avec TensorFlow, PyTorch. NLP, Computer Vision, IA Générative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Projets <span className="text-blue-400">Réalisés</span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              11 projets end-to-end démontrant expertise technique et vision business
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className={`bg-slate-900/50 border rounded-xl p-6 transition-all hover:shadow-xl backdrop-blur-sm ${
                  project.highlight 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20 md:col-span-2' 
                    : 'border-slate-800 hover:border-blue-500/30'
                }`}>
                  {project.highlight && (
                    <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/40 rounded-full text-xs text-blue-300 mb-3 font-medium">
                      Projet Phare
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{project.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3 italic">{project.company}</p>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  {project.images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                      {project.images.map((image, i) => (
                        <a
                          key={image.src}
                          href={image.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group overflow-hidden rounded-lg border border-slate-700 bg-white"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <span className="sr-only">Ouvrir la visualisation : {image.alt}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  
                  {project.impact && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-lg">
                      <h4 className="text-xs font-bold text-green-400 mb-2 flex items-center gap-1">
                        <TrendingUp size={14} />
                        Impact Business
                      </h4>
                      <ul className="space-y-1">
                        {project.impact.map((imp, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 text-sm">✓</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.compliance && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
                      <h4 className="text-xs font-bold text-purple-400 mb-2">Conformité</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.compliance.map((comp, i) => (
                          <span key={i} className="text-xs text-gray-300 bg-purple-500/10 px-2 py-1 rounded">{comp}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.moa && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-lg">
                      <h4 className="text-xs font-bold text-indigo-400 mb-2">Approche MOA</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.moa.map((m, i) => (
                          <span key={i} className="text-xs text-gray-300 bg-indigo-500/10 px-2 py-1 rounded">{m}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.health && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-lg">
                      <h4 className="text-xs font-bold text-pink-400 mb-2">Expertise E-santé</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.health.map((h, i) => (
                          <span key={i} className="text-xs text-gray-300 bg-pink-500/10 px-2 py-1 rounded">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className="space-y-1 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 text-sm">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.githubUrl || "https://github.com/Boubanda"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <Github size={16} />
                    Voir sur GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'skills' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Compétences <span className="text-blue-400">Techniques</span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Arsenal complet de technologies pour Data Science, IA et Data Engineering
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-sm text-gray-400">Compétences</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-2">5</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                <div className="text-sm text-gray-400">Clouds</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {Object.entries(skillCategories).map(([category, items], index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                  <h3 className="text-base font-bold mb-3 text-blue-400 border-b border-slate-700 pb-2">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-xs transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="bg-slate-900/50 p-3 rounded-lg text-center text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Me <span className="text-blue-400">Contacter</span>
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:leviboubanda07@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        leviboubanda07@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Téléphone</p>
                      <a href="tel:+33753618425" className="text-white hover:text-blue-400 transition-colors">
                        +33 (0)7 53 61 84 25
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Localisation</p>
                      <p className="text-white">Île-de-France, France</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/lévi-junior016" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        lévi-junior016
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <a href="https://github.com/Boubanda" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        Boubanda
                      </a>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                    <p className="text-sm text-blue-300 font-medium">
                      Disponible pour une alternance à partir de septembre 2025
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      3 semaines en entreprise / 1 semaine en cours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-800 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="font-medium">Levi Junior BOUBANDA - Data Scientist, Analyst & IA Engineer</p>
          <p className="text-sm mt-2">Aivancity School of Technology | Programme Grande École en IA & Data</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
