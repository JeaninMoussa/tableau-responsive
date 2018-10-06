document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.table-responsive').forEach(function (table) {
        let labels = Array.from(table.querySelectorAll('th')).map(function(th){
            return th.innerText;
        })
        table.querySelectorAll('td').forEach(function (td, i) {
            td.setAttribute('data-label', labels[i % labels.length])
        })
  })

      // Pour chaque tableau table
        // Pour chaque th dans mon tableau
          // je collecte les labels
        // Pour chaque td dans le tableau
          // On récupère l'index du td
          // On va mettre le data-label qui correspond
})
