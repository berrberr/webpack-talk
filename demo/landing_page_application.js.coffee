define(
  [
    "./modules/card_node.js.coffee",
    "./data/cards.collectible.json"
  ],
  (
    CardNode
    cards
  ) ->
    randomCards = cards.sort(() -> 0.5 - Math.random()).slice(0, 5)
    
    randomCards.forEach((cardInfo) ->
      cardNode = new CardNode(cardInfo)
      document.getElementById("cards-container").appendChild(cardNode.build())
    )
)