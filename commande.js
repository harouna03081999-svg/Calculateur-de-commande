const nom = "Awa";
const produit = "Ordinateur";
const prix_unitaire = 250000;
const quantite_produit = 2;
const montant_total_produit = prix_unitaire*quantite_produit;
const montant_TVA = (montant_total_produit*18)/100;
const montant_total_ttc = montant_total_produit + montant_TVA;
const frais_livraison = 5000;
const montant_final_ttc = montant_total_ttc + frais_livraison;
const prix_moyen_produit = prix_unitaire + (prix_unitaire*18)/100;
console.log("===== RECU DE COMMANDE =====");
console.log("Client : " ,nom );
console.log("Produit : " ,produit );
console.log("Prix unitaire : " ,prix_unitaire, "FCFA" );
console.log("Quantité : " ,quantite_produit );
console.log();
console.log("Montant des produits : " ,montant_total_produit, "FCFA" );
console.log("TVA (18%) : " ,montant_TVA, "FCFA" );
console.log("Montant TTC : " ,montant_total_ttc, "FCFA" );
console.log("Livraison : " ,frais_livraison, "FCFA" );
console.log("TOTAL A PAYER : " ,montant_final_ttc, "FCFA" );
console.log();
console.log("Prix moyen TTC par produit : " ,prix_moyen_produit, "FCFA" );
console.log("type du nom : ", typeof nom);
console.log("type du prix : ", typeof prix_unitaire);
console.log("type de la quantité : ", typeof quantite_produit);
console.log();


















