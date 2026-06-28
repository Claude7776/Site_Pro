import LegalLayout from './LegalLayout'

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <p className="legal-updated">Dernière mise à jour : juin 2026</p>

      <p>
        Sky Blue Corporation attache une grande importance à la protection de vos données personnelles. La présente politique décrit comment nous collectons, utilisons et protégeons vos informations dans le cadre de l'utilisation du site <strong>skyblue-corp.io</strong>.
      </p>

      <h2>1. Responsable du traitement</h2>
      <ul>
        <li><strong>Responsable :</strong> Claude Médine Gambigha — Sky Blue Corporation</li>
        <li><strong>Email :</strong> <a href="mailto:codecld@proton.me">codecld@proton.me</a></li>
      </ul>

      <h2>2. Données collectées</h2>
      <p>Dans le cadre du formulaire de contact, nous collectons les données suivantes :</p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email professionnelle</li>
        <li>Nom de l'entreprise (facultatif)</li>
        <li>Type de projet et description du besoin</li>
        <li>Référence de suivi de projet (générée automatiquement)</li>
      </ul>
      <p>Aucune donnée bancaire n'est collectée sur ce site.</p>

      <h2>3. Finalités du traitement</h2>
      <p>Les données collectées sont utilisées exclusivement pour :</p>
      <ul>
        <li>Répondre à votre demande de contact ou de devis</li>
        <li>Assurer le suivi de votre projet</li>
        <li>Vous envoyer des informations relatives à nos services (avec votre consentement)</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Le traitement est fondé sur votre consentement explicite (soumission du formulaire) et sur l'exécution de mesures précontractuelles à votre demande.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale contraire ou demande de suppression de votre part.
      </p>

      <h2>6. Destinataires des données</h2>
      <p>Vos données peuvent être transmises aux services suivants dans le cadre de leur traitement :</p>
      <ul>
        <li><strong>Formspree</strong> (formspree.io) — acheminement des emails de contact</li>
        <li><strong>WhatsApp Business</strong> (Meta) — notification optionnelle</li>
      </ul>
      <p>Aucune donnée n'est vendue ni transmise à des tiers à des fins commerciales.</p>

      <h2>7. Vos droits</h2>
      <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
        <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
        <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
        <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
        <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à : <a href="mailto:codecld@proton.me">codecld@proton.me</a>. Nous répondons sous 30 jours.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Ce site n'utilise pas de cookies de tracking ou publicitaires. Seul le stockage local (<em>localStorage</em>) est utilisé pour mémoriser votre préférence de thème (clair/sombre).
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération ou divulgation (HTTPS, chiffrement en transit).
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question relative à cette politique : <a href="mailto:codecld@proton.me">codecld@proton.me</a>
      </p>
    </LegalLayout>
  )
}
