define(
  [
    "./modules/card_searcher.js.coffee",
    "./modules/card_node.js.coffee"
  ],
  (
    CardSearcher,
    CardNode
  ) ->
    searcher = new CardSearcher()
    cardContainer = document.getElementById("cards-container")

    window.searchCards = (query) ->
      return [] unless query.length > 2

      cardContainer.innerHTML = ""

      searcher.search(query).forEach((cardInfo) ->
        cardNode = new CardNode(cardInfo)
        cardContainer.appendChild(cardNode.build())
      )
)