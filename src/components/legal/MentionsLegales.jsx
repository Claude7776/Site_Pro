import LegalLayout from './LegalLayout'

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <p className="legal-updated">Dernière mise à jour : juin 2026</p>

      <h2>1. Éditeur du site</h2>
      <p>Le site <strong>skyblue-corp.io</strong> est édité par :</p>
      <ul>
        <li><strong>Raison sociale :</strong> Sky Blue Corporation</li>
        <li><strong>Dirigeant :</strong> Claude Médine Gambigha</li>
        <li><strong>Email :</strong> <a href="mailto:codecld@proton.me">codecld@proton.me</a></li>
        <li><strong>Téléphone :</strong> +212 690 565 512</li>
        <li><strong>Activité :</strong> Conseil et prestations en systèmes et logiciels informatiques</li>
      </ul>

      <h2>2. Hébergement</h2>
      <ul>
        <li><strong>Hébergeur :</strong> Hostinger International Ltd.</li>
        <li><strong>Site :</strong> <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">hostinger.com</a></li>
        <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
      </ul>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, code source) est la propriété exclusive de Sky Blue Corporation, sauf mention contraire. Toute reproduction, diffusion ou utilisation sans autorisation écrite préalable est strictement interdite.
      </p>

      <h2>4. Liens hypertextes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers. Sky Blue Corporation n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>5. Limitation de responsabilité</h2>
      <p>
        Sky Blue Corporation s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site, mais ne peut garantir l'exhaustivité ou l'absence d'erreur. La responsabilité de Sky Blue Corporation ne saurait être engagée pour tout dommage direct ou indirect lié à l'utilisation du site.
      </p>

      <h2>6. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du site sera soumis à la juridiction compétente de Casablanca, Maroc.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:codecld@proton.me">codecld@proton.me</a>
      </p>
    </LegalLayout>
  )
}
