# mots-frequents
Liste des 1500 mots les plus fréquents de la langue français


## Source 

* [éduscol] : une liste rassemblant près de 1500 mots, les plus fréquents de la langue française, a été constituée par le lexicologue Étienne Brunet
  
## Références
    
* [csv parser] par adaltas

## Fichiers JSON

* Le fichier frequence.json est un tableau de mots, trié par fréquence, chaque mot est représenté sous cette forme :
 
 
    {
        type: [String]
        label: [String]
        frequency: [Number]
    }
    
* En plus on trouve des fichiers contenant la liste des articles et la liste des pronoms personnels sous cette forme :
      

    {
        type: [String]
        label: [String]
    }
      


[éduscol]: http://eduscol.education.fr/cid50486/liste-de-frequence-lexicale.html
[csv parser]: http://csv.adaltas.com/parse/
