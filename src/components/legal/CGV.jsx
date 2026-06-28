import LegalLayout from './LegalLayout'

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <p className="legal-updated">Dernière mise à jour : juin 2026</p>

      <p>
        Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services réalisées par <strong>Sky Blue Corporation</strong> (ci-après « le Prestataire ») pour ses clients (ci-après « le Client »).
      </p>

      <h2>1. Identification du prestataire</h2>
      <ul>
        <li><strong>Raison sociale :</strong> Sky Blue Corporation</li>
        <li><strong>Dirigeant :</strong> Claude Médine Gambigha</li>
        <li><strong>Email :</strong> <a href="mailto:codecld@proton.me">codecld@proton.me</a></li>
        <li><strong>Téléphone :</strong> +212 690 565 512</li>
      </ul>

      <h2>2. Champ d'application</h2>
      <p>Ces CGV s'appliquent aux prestations suivantes :</p>
      <ul>
        <li>Développement d'applications web et SaaS</li>
        <li>Administration systèmes, réseaux et infrastructure cloud</li>
        <li>Cybersécurité, audit et hardening</li>
        <li>Automatisation de processus et intégration d'API</li>
        <li>Déploiement DevOps et containerisation</li>
        <li>Consulting en transformation numérique</li>
      </ul>

      <h2>3. Devis et commande</h2>
      <p>
        Toute prestation fait l'objet d'un devis préalable, valable <strong>30 jours</strong> à compter de sa date d'émission. La signature du devis (physique ou électronique via YouSign) vaut acceptation des présentes CGV et déclenche le début de la mission.
      </p>

      <h2>4. Tarifs</h2>
      <p>
        Les prix sont exprimés en euros (€) ou en dirhams marocains (MAD), hors taxes, sauf mention contraire. Ils sont fixés au devis et restent fermes pour la durée de la mission définie. Une révision tarifaire peut être proposée pour toute demande hors périmètre initial.
      </p>

      <h2>5. Modalités de paiement</h2>
      <ul>
        <li><strong>Acompte :</strong> 30 à 50 % à la signature du devis</li>
        <li><strong>Solde :</strong> à la livraison finale ou selon échéancier convenu</li>
        <li><strong>Moyens de paiement acceptés :</strong> virement bancaire, Stripe, paiement mobile</li>
        <li><strong>Délai de paiement :</strong> 30 jours à compter de la date de facturation</li>
      </ul>
      <p>
        Tout retard de paiement entraîne l'application de pénalités de retard au taux légal en vigueur, ainsi que l'arrêt des travaux en cours jusqu'à régularisation.
      </p>

      <h2>6. Délais et livrables</h2>
      <p>
        Les délais de réalisation sont indiqués dans le devis à titre indicatif. Ils sont susceptibles d'évoluer en cas de retard dans la fourniture des éléments nécessaires par le Client, ou en cas de demandes de modifications hors périmètre. Sky Blue Corporation s'engage à informer le Client de tout dépassement prévisible.
      </p>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        À compter du paiement intégral de la prestation, le Client acquiert les droits d'utilisation sur les livrables produits spécifiquement pour lui. Les outils, frameworks, bibliothèques open source et méthodes utilisés par le Prestataire restent sa propriété intellectuelle ou celle de leurs auteurs respectifs.
      </p>

      <h2>8. Confidentialité</h2>
      <p>
        Sky Blue Corporation s'engage à traiter avec la plus stricte confidentialité toutes les informations communiquées par le Client dans le cadre de la mission (données métier, accès, documentation). Cet engagement de confidentialité est réciproque et s'applique pendant la durée de la mission et 3 ans après sa clôture.
      </p>

      <h2>9. Responsabilités</h2>
      <p>
        Sky Blue Corporation est tenu à une <strong>obligation de moyens</strong> dans le cadre de ses missions. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée, et sera limitée au montant hors taxe facturé pour la prestation concernée. Le Prestataire ne saurait être tenu responsable des dommages indirects (perte de données, perte d'exploitation, atteinte à l'image).
      </p>

      <h2>10. Résiliation</h2>
      <p>
        En cas de manquement grave d'une partie à ses obligations, l'autre partie peut résilier le contrat par lettre recommandée avec accusé de réception, après mise en demeure restée sans effet pendant <strong>15 jours</strong>. Les prestations réalisées jusqu'à la date de résiliation sont dues et facturées.
      </p>

      <h2>11. Force majeure</h2>
      <p>
        Sky Blue Corporation ne saurait être tenu responsable de tout manquement à ses obligations contractuelles en cas d'événement de force majeure au sens de la loi applicable (catastrophe naturelle, pandémie, grève, panne de réseau, etc.).
      </p>

      <h2>12. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGV sont soumises au droit marocain. Tout litige relatif à leur interprétation ou exécution sera soumis, à défaut de règlement amiable, aux tribunaux compétents de <strong>Casablanca, Maroc</strong>.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGV : <a href="mailto:codecld@proton.me">codecld@proton.me</a>
      </p>
    </LegalLayout>
  )
}
